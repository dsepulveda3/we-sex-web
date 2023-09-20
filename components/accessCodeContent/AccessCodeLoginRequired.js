import React from 'react';
import styled from '@emotion/styled';

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    margin-left: 20px;
    text-align: left;
    padding: 4rem 0 4rem 4rem;
  }
`;

const Title = styled.div`
    font-size: 3rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: var(--violet);
    text-align: center;
    
    span {
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 2.3rem;
        margin-bottom: 0rem;
        text-align: center;
       
    }
`;

const SubTitle = styled.div`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: var(--green);
    margin: 1rem;
    span {
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-bottom: 0rem;
        text-align: center;
       
    }
`;

const PopUpButton = styled.a`
  background-color: var(--green);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;
  margin-top: 20px;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const LostLink = styled.a`
    color: var(--violet);
    margin-top: 3rem;
    text-decoration: underline;
    cursor: pointer;
    font-size: 2rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    :hover {
        color: var(--green);
    }
`;

function AccessCodeLoginRequired ({setLostLink}) {

    const handleClick = () => {
        setLostLink(true);
    }

    return (
        <TextContainer>
            <Title>El ultimo paso</Title>
            <SubTitle>En tu correo estan las instrucciones para canjear tu subscripción</SubTitle>
            <PopUpButton href="/login?origin=redeem-code">Iniciar sesión</PopUpButton>
            <LostLink onClick={handleClick}>¿Perdiste tu código?</LostLink>
        </TextContainer>
    )
}

export default AccessCodeLoginRequired;