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
    margin-bottom:0;
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
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
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



const Dudas = () => {
    return (
        <Background>
            <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign:"center"}}>
                <Title>QUIERO SABER MÁS</Title>
                <Text>Escribile a Cami, que está lista para ayudarte en nuestro WhatsApp de soporte 😎!</Text>  
                <Boton
                    href="https://wa.me/5491140678698"
                    target="_blank"
                >Contactar por WhatsApp</Boton>
  
            </Container>
        </Background>
    );
}
 
export default Dudas;