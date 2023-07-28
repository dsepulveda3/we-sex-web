import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`

    // background-color: var(--violet);
    // background-image: url("/img/cta-bg.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // min-height: 72vh;
    margin-top: .1rem;
    position: relative;
    padding-bottom:8rem;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;

const Content = styled.div`
    /* margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    margin-top: 15%;
    @media(min-width: 540px){
        margin-top: 20%;
    }
`;

const ContentImage = styled.div`
    margin-top:15%;
    margin-left: 10%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

const Title = styled.h1`
    font-size: 5.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: var(--violet);
    span {
        // color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        text-decoration-thickness: 0.3rem; /* ajusta el grosor */
    }
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }
`;

const SubTitle = styled.h2`
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-size: 2.7rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    
    span {
        // color: var(--green);
        // font-weight: bold;
        // font-family: "Averia Libre", sans-serif;
        // text-decoration: underline;
        // text-decoration-color: var(--green);
        // text-underline-offset: 1rem; /* ajusta la separación */
        // text-decoration-thickness: 0.3rem; /* ajusta el grosor */
        font-weight: bold;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.5rem 1rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
    }
    
    @media(max-width: 540px){
        font-size: 2.5rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;


const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: var(--violet);
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
    }
    @media(min-width: 540px){
        
    }
`;

const AppImage = styled.img`
    margin-top: 5rem;
    margin-left: 2rem;
    width: 65%;
    height: 65%;
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 0rem;
        margin-right: 3rem;
        width: 70%;
        height: 70%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const Botones = styled.div`
    margin-top: 5rem;
    @media(min-width: 540px){
        display: flex;
    }
`;



const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    border: none;
    transition: all .5s ease;
    &:hover {
        background-color: var(--green);
        color: white;
        cursor: pointer;
    }
    @media(max-width: 540px){
        margin: 1rem auto;
        display:block;
        min-width: 80%;    
    }
`;

const BotonArs = styled(Boton)`
    color: white;
    background-color: var(--green);
    text-align: center;
    
    
    @media(max-width: 540px){
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        
    }
`;

const BotonUsd = styled(Boton)`
    color: white;
    border: 3px solid white;
    background-color: transparent;
`;

const Suscribed = () => {
    return (
        <section id="hola">
        <Background>
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                                <Title>Felicitaciones <span>con tu pareja ya están suscritos</span></Title>
                                {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                                <Text>
                                    Puedes cancelar tu suscripción cuando lo desees ....
                                </Text>
                            </Content>
                        </Col>
                        <BotonArs href="/">Volver a WeSex</BotonArs>
                    </Row>
            </Container>
        </Background>
        </section>
    );
}
 
export default Suscribed;