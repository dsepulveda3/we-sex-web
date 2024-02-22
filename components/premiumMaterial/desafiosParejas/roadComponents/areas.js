import React, { useState, useRef, useEffect } from "react";
import styled from "@emotion/styled";
import Square from "./square";

const Container = styled.div`
  position: relative;
`;

const ContainerNotificarDone = styled.div`
  padding: 0.8rem;
  display: flex;
  justify-content: center;
  margin-top: 0.5rem;
`;

const BotonNotificarDone = styled.a`
  background-color: ${(props) =>
    props.color === "violet" ? "var(--violet)" : "var(--green)"};
  font-size: 1.2rem;
  color: white;
  border: none;
  border-radius: 20px;
  padding: 5px 14px;
  cursor: pointer;
  font-weight: bold;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1);
`;


const RoundedPopup = styled.div`
  position: absolute;
  width: 90vw; /* Adjust width as needed */
  max-width: 400px; /* Set a maximum width */
  height: ${({ visible }) => (visible ? "auto" : "0")};
  overflow: hidden;
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: ${({ visible }) =>
    visible ? "height 0.6s ease, opacity 0.6s ease" : "none"};
  top: calc(100% + 10px); /* Place the popup below the button */
  background-color: white;
  border-radius: 10px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.3);
  padding: 20px;
  z-index: 1000;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  cursor: pointer;
  font-size: 18px;
`;

const ContainerPopUp = styled.div`
  position: fixed;
  width: 100%;
  height: ${({ visible }) => (visible ? "100vh" : "0")};
  opacity: ${({ visible }) => (visible ? "1" : "0")};
  transition: opacity 0.3s ease;
  top: 0;
  left: 0;
  z-index: 999; /* Place it below the popup */
  pointer-events: ${({ visible }) => (visible ? "auto" : "none")};
`;

const PopupContent = styled.div`
  display: grid;
  gap: 10px;
`;

const Instruction = styled.div`
    font-family: "Karla", sans-serif;
    font-weight: bold;
    font-size: 1.2rem;
    color: black;
    text-align: left;
    padding-bottom: 1.2rem;

    span {
        font-weight: bold;
        font-family: "Karla", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    

`;

const Areas = ({ origin, setSelected, selected, setReleased }) => {
  const [showPopup, setShowPopup] = useState(false);
  const buttonRef = useRef(null);

  const handleClick = () => {
    setShowPopup(true);
  };

  const handleClose = () => {
    setShowPopup(false);
  };

  useEffect(() => {
    function handleClickOutside(event) {
      if (showPopup && buttonRef.current && !buttonRef.current.contains(event.target)) {
        setShowPopup(false);
      }
    }

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [showPopup]);

  return (
    <Container>
      <ContainerNotificarDone>
        <BotonNotificarDone color="green" onClick={handleClick} ref={buttonRef}>
          Seleccionar área a mejorar 
        </BotonNotificarDone>
      </ContainerNotificarDone>

      <RoundedPopup visible={showPopup} ref={buttonRef}>
        <Instruction><span>SELECCIONA EL ÁREA QUE DESEAS MEJORAR</span></Instruction>
        {/* <CloseButton onClick={handleClose}>X</CloseButton> */}
        <PopupContent>
          <Square text="COM" displayText="Comunicación" released={true} setSelected={setSelected} isSelected={selected === "COM"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="CON" displayText="Control" released={false} setSelected={setSelected} isSelected={selected === "CON"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="SEX" displayText="Sexual" released={true} setSelected={setSelected} isSelected={selected === "SEX"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="AFE" displayText="Afecto" released={true} setSelected={setSelected} isSelected={selected === "AFE"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="INF" displayText="Influencia" released={false} setSelected={setSelected} isSelected={selected === "INF"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="SAT" displayText="Satisfacción" released={false} setSelected={setSelected} isSelected={selected === "SAT"} setReleased={setReleased} setClose={handleClose}/>
          <Square text="REC" displayText="Recomendada" released={false} setSelected={setSelected} isSelected={selected === "REC"} setReleased={setReleased} setClose={handleClose}/>
        </PopupContent>
      </RoundedPopup>
      <ContainerPopUp visible={showPopup} />
    </Container>
  );
};

export default Areas;