import React from "react";
import styled from "@emotion/styled";

const SquareComponent = styled.button`
  background-color: white;
  border: none;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.5);
  border-radius: 5px;
  height: 50px;
  transition: transform 0.2s ease-in-out; /* Add a transition for smooth scaling */

  &:hover {
    transform: scale(1.1); /* Scale up on hover */
    background-color: var(--green);
    color: white;
  }

  &:active {
    transform: scale(0.9); /* Scale down a bit when clicked */
    
  }
`;

const Square = ({ text }) => {

    return(
        <SquareComponent>
            {text}
        </SquareComponent>
    );
};
export default Square;