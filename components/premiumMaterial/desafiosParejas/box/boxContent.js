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
    font-size: 1.9rem;
    color: white;
    margin-left: 2rem;
    @media(min-width: 540px){
        margin-bottom: 3rem;
        margin-left: 4rem;
    }

    @media(max-width: 540px){
        margin-bottom: 8rem;
        margin-left: 4rem;
    }

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet);
        padding: 0.5rem 1rem;
        color: white;
    }

    ul {
        text-align: left; /* Align list items to the left */
        margin-left: 0; /* Remove default margin */
        padding-left: 0; /* Remove default padding */
        
    }

    li {
        margin-bottom: 1rem; /* Add margin between list items */
    }
`;

const AppImage = styled.img`
    
    width: 20%;
    height: 20%;
    @media(max-width: 540px){
        margin-top: 5rem;
        margin-left: 0rem;
        margin-right: 0rem;
        width: 20%;
        height: 20%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
        margin-top: 5rem;
    }
`;



const BoxContent = () => {
    return (
        <Background>
            <Container style={{paddingTop: "0rem", paddingBottom: "2rem", textAlign:"center"}}>
                <ContainerText2>
                    <AppImage src="/img/frutilla.png" alt="Frutilla" />
                    <Text2>
                    <span>¿Qué contiene la caja WeSexer?</span>
                    <br />
                    <br />
                    <ul>
                        <li>
                            Esposas para jugar a dominar o que te dominen.
                        </li>
                        <li>
                            Balita vibradora para probar estimular distintas partes del cuerpo.
                        </li>
                        <li>
                            Antifaz para sólo entregarte a sentir.
                        </li>
                        <li>
                            Lubricante siempre para más placer.
                        </li>
                        <li>
                            5 desafíos para combinar con los accesorios y desbloquear sus fantasías :fuego:
                        </li>
                    </ul>
                    </Text2>
                </ContainerText2>
            </Container>
        </Background>
    );
}
 
export default BoxContent;