import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    background-image: url("/img/ws-background.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 85vh;
    /* margin-top: 3rem; */
    position: relative;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;


const Title = styled.h4`
    font-size: 5rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 4rem;
    }
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    text-align:center;
    margin-bottom: 1.5rem;
    padding: .5rem 1rem;
    /* vertical-align: middle; */

    transition: all 1s ease;
    
    /* &:hover { */
        /* padding:2rem; */
        /* border:1px solid white; */
        /* border-radius: 6rem; */
        /* background-color: white; */
        /* color: var(--violet); */
    /* } */
    span {
        color: var(--green);
        font-weight: bold;
    }
    @media(max-width: 540px){
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`;


const EsParaVosSi5 = () => {
    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                    <Title>En esta guía es <span>para vos</span> si buscas</Title>
                    <Row className="justify-content-between">
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                            🤟<br/>Un <span>paso a paso</span> de cómo tener una experiencia anal placentera.
                            </Text>
                        </Col>
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                                😬<br/>Evitar <span>dolor</span> innecesario.
                            </Text>
                        </Col>
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                                🧼<br/>Tener una <span>buena higiene</span>.
                            </Text>
                        </Col>
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                                📢<br/><span>Diferentes tipos de lubricantes</span> disponibles y cómo usarlos correctamente para evitar el dolor o la incomodidad.
                            </Text>
                        </Col>
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                                🗨️<br/>Información sobre <span>cómo comunicarte con tu pareja</span> sobre tus deseos y límites en relación al sexo anal.
                            </Text>
                        </Col>
                        <Col lg={4} xs={12} sm={12} md={12}>
                            <Text>
                                🥒<br/><span>Diferentes juguetes sexuales</span> y cómo usarlos de forma segura y placentera.
                            </Text>
                        </Col>
                        <Col lg={12} xs={12} sm={12} md={12}>
                            <Text>
                                👀<br/>Reducir <span>riesgos asociados con el sexo anal</span>,<br/> cómo minimizarlos y cómo cuidar tu salud en la práctica.
                            </Text>
                        </Col>
                    </Row>
            </Container>
        </Background>
    );
}
 
export default EsParaVosSi5;