import React, { useRef, useEffect } from 'react';
import styled from '@emotion/styled';

const Backdrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5); /* Semi-transparent black */
  z-index: 1000; /* Ensure it's above other content */
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupContainer = styled.div`
  display: flex;
  flex-direction: column; /* Display children in column */
  justify-content: center;
  align-items: center;
  padding: 20px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: row; /* Display children in row */
  align-items: center;
  margin-bottom: 1rem; /* Add some margin between content */
`;

const DoneChallengesMessage = styled.div`
  color: black;
  font-size: 2rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  margin-left: 1rem; /* Add some space between icon and message */
  @media (max-width: 540px){
    font-size: 1.2rem;
  }

  span {
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    padding: 0.1rem 0.5rem; /* Add padding to make the background visible */
    color: var(--violet); /* Set the text color to white */
  }
`;

const Icon = styled.img`
  width: 55px;
`;

const Button = styled.button`
  padding: 8px 16px;
  background: var(--green);
  color: #fff;
  border: none;
  cursor: pointer;
  margin: 0 0.5rem; /* Add some margin between buttons */
`;

const ConfirmationPopup = ({ onCancel, onConfirm }) => {
  const popupRef = useRef(null);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (popupRef.current && !popupRef.current.contains(event.target)) {
        onCancel(); 
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [onCancel]);

  return (
    <Backdrop>
      <PopupContainer ref={popupRef}>
        <ContentContainer>
          <Icon src="/img/challenges/task.svg" alt="Under construction" />
          <DoneChallengesMessage>
            <span>¿Están seguros? Seleccionar una actividad bloquea las demas hasta que este completada</span>
          </DoneChallengesMessage>
        </ContentContainer>
        <div>
          <Button onClick={onCancel}>Cancelar</Button>
          <Button onClick={onConfirm}>Confirmar</Button>
        </div>
      </PopupContainer>
    </Backdrop>
  );
};

export default ConfirmationPopup;
