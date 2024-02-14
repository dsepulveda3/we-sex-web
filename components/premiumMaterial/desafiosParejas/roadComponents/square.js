import React from "react";
import styled from "@emotion/styled";

// const SquareComponent = styled.button`
//   background-color: white;
//   border: none;
//   box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
//   border-radius: 5px;
//   height: 50px;
//   transition: transform 0.2s ease-in-out;
  
//   &:hover {
//     transform: scale(1.05);
//     background-color: var(--green);
//     color: white;
//     cursor: pointer; /* Add pointer cursor on hover */
//   }

//   &:active {
//     transform: scale(0.9);
//   }
// `;

const SquareComponent = styled.button`
  background-color: ${({ isSelected }) => (isSelected ? "var(--green)" : "white")};
  color: ${({ isSelected }) => (isSelected ? "white" : "black")};
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 50px;
  transition: transform 0.2s ease-in-out, background-color 0.2s ease-in-out, color 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.05);
    background-color: ${({ isSelected }) => (isSelected ? "var(--green)" : "lightblue")};
    color: ${({ isSelected }) => (isSelected ? "white" : "black")};
    cursor: pointer; /* Add pointer cursor on hover */
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Square = ({ text, style=null, setSelected, isSelected }) => {


    const handleClick = () => {
        setSelected(text);
      };

  return (
    <SquareComponent onClick={handleClick} style={style} isSelected={isSelected} >
      {text}
    </SquareComponent>
  );
};

export default Square;