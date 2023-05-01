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
    font-size: 7rem;
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

const SubTitle = styled(Title)`
    font-size: 5rem;
    @media(max-width: 540px){
        font-size: 4.5rem;
    }
    margin-top: 0;
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.6rem;
    margin-top:2rem;
    margin-bottom: 2.5rem;
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



const NoLoPienses = () => {
    return (
        <Background>
            <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign:"center"}}>
                <Title>Bueno,</Title>
                <SubTitle>¿todavía lo pensas?</SubTitle>
                <Text>Revolucioná tu vida sexual con los mejores profesionales.<br />
                Aprendé a tener sexo anal y empezá a gozar.</Text>  
                <Boton
                    href="#comprar"
                >Por favor quiero comprarla</Boton>
  
            </Container>
        </Background>
    );
}
 
export default NoLoPienses;