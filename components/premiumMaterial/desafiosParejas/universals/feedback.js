import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const ContainerNotificarDone = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;

`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    font-size: 1.4rem;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;

const PopupContainer2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog2 = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton2 = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InfoText = styled.div`
    color: black;
    font-size: 1.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
`;

const PopupContent2 = ({challengeName, color = "green"}) => {
    console.log(challengeName)
    return (
      <>
        <br />
        <InfoText>
          <a style={{fontSize: "1.5rem", textDecoration: "underline"}} href={`https://wa.me/5491140678698?
                    text=Hola!%20No%20me%20gustó%20el%20desafío%20${challengeName}%20de%20suscripción`}>Si no te gusto este desafio escribenos y te enviaremos otro.</a>
        </InfoText>
        <br/>
        <InfoText>
            <span>¿Necesitas ayuda?</span> Sea cual sea la razón estamos para ayudarte.
            <ContainerNotificarDone>
            <BotonNotificarDone color={color} href={"https://wa.me/5491140678698?text=Hola!%20Necesito%20ayuda%20"} >
                Contactar
            </BotonNotificarDone>
            </ContainerNotificarDone>
        </InfoText>
        
        {/* Add more content as needed */}
      </>
    );
  };

const Feedback = ({challengeName}) => {
    const [showPopup, setShowPopup] = useState(false);

    const handleFeebackClick = () => {
        setShowPopup(true); // Show the warning popup when the warning symbol is clicked
      };

      console.log(challengeName)


    return(
        <>
         <ContainerNotificarDone>
            <BotonNotificarDone color="violet" onClick={handleFeebackClick} >
                ¿Ayuda?
            </BotonNotificarDone>
        </ContainerNotificarDone>
        {showPopup && (
                <PopupContainer2>
                    <PopupDialog2>
                        <CloseButton2 onClick={() => setShowPopup(false)}>✕</CloseButton2>
                        <PopupContent2 challengeName={challengeName}/>
                    </PopupDialog2>
                </PopupContainer2>
            )}
        </>
    )
}

export default Feedback;