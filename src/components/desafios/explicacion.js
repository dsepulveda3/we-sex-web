import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';

const Background = styled.div`
    background-color: var(--green);
    @media(max-width: 540px){
        text-align: center;
    }
`;

const Title = styled.p`
    font-size: 5rem;
    font-family: "Averia Libre", sans-serif;
    color: white;
    font-weight: bold;
    text-transform:uppercase;
    margin-bottom: 2rem;
    span {
        color: var(--green);
        font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 6rem;
    }
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    // font-family: "Karla", sans-serif;
    font-size: 2.1rem;
    margin-bottom: 2rem;
    color: white;
    @media(min-width: 540px){
        margin-bottom: 3rem;
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
    color: var(--green);
    background-color: white;
    font-size: 2.1rem;
    &:hover {
        background-color: var(--violet);
    }
`;

const Circle = styled.div`
  width: 2.5rem;
  height: 2.5rem;
  background-color: var(--green); // Replace with your desired green color
  border-radius: 50%;
  color: white;
  font-weight: bold;
  font-size: 1.6rem;
  margin-bottom: 0.5rem;
`;

const ContainerText2 = styled.div`
  display: flex; /* Add Flexbox */
  justify-content: center; /* Center content horizontally */
  align-items: center; /* Center content vertically */
  margin-left: 25rem;
  margin-right: 25rem;
  @media (max-width: 540px) {
    flex-direction: column; /* Stack content in a column on small screens */
    margin-left: 1rem;
    margin-right: 1rem;
  }
`;

const Text2 = styled.p`
    margin-top: 5rem;
    font-family: "Averia Libre", sans-serif;
    // font-family: "Karla", sans-serif;
    font-size: 1.9rem;
    
    color: white;
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
    
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    
`;
const AppImage = styled.img`
    
    width: 20%;
    height: 20%;
    @media(max-width: 540px){
        margin-top: 1rem;
        margin-left: 0rem;
        margin-right: 0rem;
        width: 20%;
        height: 20%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;



const Dudas = () => {
    return (
        <Background>
            <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign:"center"}}>
                {/* <Title>¿Monotonía?</Title>
                <Text>Hay juegos, tips, ideas, pero de ahí a llevarlas a cabo, ¡hay mucho que recorrer! Esto se debe a que cada pareja es un mundo diferente.
                Es por eso que lanzamos este programa vivencial, en donde te vamos a armar un plan personalizado para que en 2 meses la sexualidad con tu pareja sea mejor que nunca.</Text>   */}
                <ContainerText2>
                    <AppImage src="../../img/bomb.png" alt="Bomba" />
                    <Text2>
                        Vamos a combinar los beneficios de estar en pareja, la confianza para comunicar y el amor que se tienen, con la <span>picantez y adrenalina</span> de los primeros días.
                        <br /> <br /> <br /> Vamos a ayudarlos a dejar <span>espacios para ustedes solos</span> y a proponerles desafíos interactivos todas las semanas.
                    </Text2>
                </ContainerText2>
            </Container>
        </Background>
    );
}
 
export default Dudas;