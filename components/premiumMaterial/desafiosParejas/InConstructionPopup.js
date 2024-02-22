import React from 'react';
import styled from '@emotion/styled';

const PopupContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
  background-color: #fff;
`;

const DoneChallengesMessage = styled.div`
  color: black;
  font-size: 2rem;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  padding-left: 3rem;
  margin-top: 1rem;
  @media (max-width: 540px){
    padding-left: 2rem;
    font-size: 1.2rem;
  }

  span {
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.1rem 0.5rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
}
  
`;

const Icon = styled.img`
  width: 55px;
`;

const InConstructionPopup = () => {
  return (
    <PopupContainer>
      <Icon src="/img/challenges/construction.svg" alt="Under construction" />
      <DoneChallengesMessage>
        <span>ESTAMOS TRABAJANDO EN SUS PRÓXIMOS DESAFÍOS 😊.<br/> 🔥🔥 Disfruten de sus otras areas🔥🔥</span>
      </DoneChallengesMessage>
    </PopupContainer>
  );
};

export default InConstructionPopup;

