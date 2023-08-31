import React, { useState } from 'react';
import styled from '@emotion/styled';

const Container = styled.div`
  position: fixed;
  bottom: 80px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px; /* Adjust the gap between buttons */
  z-index: 1000;
`;

const SingUpButton = styled.a`
  background-color: var(--green);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const CloseButton = styled.button`
  background-color: black;
  border: none;
  color: white;
  cursor: pointer;
  border-radius: 50%;
  padding: 0;
  width: 30px; /* Adjust the diameter as needed */
  height: 30px; /* Equal to the width */
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem; /* Adjust the font size as needed */
`;


const Suscribe = () => {
  const [visible, setVisible] = useState(true);

  const handleClose = () => {
    setVisible(false);
  };

  return (
    <>
      {visible && (
        <Container>
          <SingUpButton href={'premium-material/subscription'}>Suscribirse a WeSex</SingUpButton>
          <CloseButton onClick={handleClose}>X</CloseButton>
        </Container>
      )}
    </>
  );
};

export default Suscribe;