import React, { useState } from 'react';
import styled from '@emotion/styled';

const StepHeader = styled.div`
  display: flex;
  align-items: center;
  cursor: pointer;
`;

// const StepTitle = styled.h2`
//   flex-grow: 1;
//   margin: 0;
// `;

const Content = styled.div`
  display: ${props => (props.isActive ? 'block' : 'none')};
  margin-top: 10px;
  text-align: center; 
`;

export const StepTitle = styled.h1`
    margin-top: 3rem;
    font-size: 4.5rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center; /* Center align the text */
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }

    @media(max-width: 540px){
        font-size: 5.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.8rem;
    margin-bottom: 0.5rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const CheckoutStep = ({ stepNumber, title, isActive, onClick, children }) => {
    const [isCollapsed, setIsCollapsed] = useState(!isActive);
  
    return (
      <div>
        <StepHeader onClick={() => setIsCollapsed(!isCollapsed)}>
          <Text>{title}</Text>
        </StepHeader>
        <Content isActive={!isCollapsed}>{children}</Content>
      </div>
    );
  };
  
  export default CheckoutStep;