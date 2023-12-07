import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";

const ContainerNotificarDone = styled.div`
    padding: 1.5rem;
    display: flex;
    justify-content: center;

`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    font-size: 1.4rem;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 14px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;


const OtherChallenge = ({name, type}) => {

    const [textChallenge, setTextChallenge] = useState("Solicitar otro desafío");
    const [textPill, setTextPill] = useState("Solicitar otra pildora");
    
    const handleFeebackClick = () => {
        if (type === "challenge"){
            window.open(`https://wa.me/5491140678698?text=Hola!%20Quiero%20solicitar%20otro%20desafío.%20Este%0Aa)%20Es%20muy%20largo,%20no%20tenemos%20tiempo.%0Ab)%20No%20es%20de%20nuestro%20gusto.%0Ac)%20Otra%20razón.%0A%0ADesafio%20actual:%20${name}`, "_blank");
        } else if (type === "pill") {
            window.open(`https://wa.me/5491140678698?text=Hola!%20Quiero%20solicitar%20otra%20píldora.%20Esta%0Aa)%20Es%20muy%20largo,%20no%20tenemos%20tiempo.%0Ab)%20No%20es%20de%20nuestro%20gusto.%0Ac)%20Otra%20razón.%0A%0APíldora%20actual:%20${name}`, "_blank");
        }
      };

    const textDisplay = () => {
        if (type === "challenge"){
            return textChallenge
        } else if (type === "pill") {
           return textPill
        }
    }


    return(
        <>
         <ContainerNotificarDone>
            <BotonNotificarDone color="green" onClick={handleFeebackClick} >
                {textDisplay()}
            </BotonNotificarDone>
        </ContainerNotificarDone>
        </>
    )
}

export default OtherChallenge;