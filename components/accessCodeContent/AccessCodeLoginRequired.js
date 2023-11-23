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


const Hint = styled.div`
    font-size: 1.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: black;
    margin: 1rem;
    span {
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.5rem;
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

const Boton = styled.a`
    font-family: "Karla", sans-serif;
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    margin: 1rem auto;
    border: none;
    transition: all .5s ease;
    color: white;
    background-color: var(--green);
    font-size: 2.1rem;
    &:hover {
        background-color: var(--violet);
    }
`;

function AccessCodeLoginRequired ({setLostLink}) {

    const handleClick = () => {
        setLostLink(true);
    }

    return (
        <TextContainer>
            <Title>El último paso</Title>
            <SubTitle>En tu correo estan las instrucciones para canjear tu suscripción</SubTitle>
            {/* <PopUpButton href="/login?origin=access-code">Iniciar sesión</PopUpButton> */}
            <Hint>TIP: SI NO LO ENCUENTRAS, INGRESA EN EL BUSCADOR DE TU CORREO contacto@we.sex</Hint>
            <LostLink onClick={handleClick}>¿Perdiste tu código?</LostLink>
            <Boton
                    href="https://wa.me/5491140678698?
                    text=Hola!%20Tengo%20un%20problema%20con%20mi%20código%20de%20suscripción"
                    target="_blank"
                >Contactar por WhatsApp</Boton>
        </TextContainer>
    )
}

export default AccessCodeLoginRequired;