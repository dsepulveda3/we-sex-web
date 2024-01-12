import React from "react";
import styled from "@emotion/styled";

const SquareComponent = styled.button`
  background-color: white;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 50px;
  transition: transform 0.2s ease-in-out;
  
  &:hover {
    transform: scale(1.1);
    background-color: var(--green);
    color: white;
    cursor: pointer; /* Add pointer cursor on hover */
  }

  &:active {
    transform: scale(0.9);
  }
`;

const Square = ({ text }) => {


    const handleClick = () => {
        console.log("Button clicked!");
      };

  return (
    <SquareComponent onClick={handleClick}>
      {text}
    </SquareComponent>
  );
};

export default Square;