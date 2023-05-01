import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("img/ws-background.jpg");
    background-position: center;
    /* background-repeat: no-repeat; */
    background-attachment: fixed;
    min-height: 85vh;
    margin-top: 1rem;
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
    color: white;
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
        margin-bottom: 1rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    color: white;
    padding-right: 1rem; 

    @media(max-width: 540px){
        border: 2px solid white;
        padding: 2rem;
        border-radius: 3rem;
        transition: all 2s ease;
        &:hover {
            background-color: white;
            color: var(--violet);
        }
    }


    /* border-bottom: 2px solid var(--violet);
    border-width: 15px; */

    /* 
    @media(max-width: 540px){
        position: relative;
    
        &:before {
            content: "";
            position: absolute;
            left: 35%;
            right: 35%;
            bottom: 0;
            height: 1px;
            width: 30%;  
        }
    } */
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        /* font-size: 1.6rem; */
    }
    strong {
        font-weight: bold;
        font-size: 2rem;
    }
    @media(min-width: 540px){
        strong {
            font-size: 2.2rem;
        }
    }
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    width: fit-content;
    border: none;
    transition: all .5s ease;
    font-size:2.3rem;
`;

const BotonVerde = styled(Boton)`
    margin-top: 1rem!important;
    color: white;
    background-color: var(--green);
    border: 2px solid transparent;
    &:hover {
        background-color: white;
        color: var(--violet);
        border: 2px solid var(--violet);
        cursor: pointer;
    }
`;

const QueVasAEncontrar = () => {
    return (
        <Background id="queVoyAEncontrar">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem", textAlign: "center"}}>
                    <Title>¿Qué vas a encontrar?</Title>
                    <Text style={{border: 'none'}}>Buena pregunta,<br/>pero la respuesta es aún mejor 🤤</Text>
                    <Row className="justify-content-center">
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                                🗣️<br/>
                                <strong>Comunicación:</strong><br/> consejos sobre cómo hablar con tu pareja sobre el sexo anal y cómo conocer los límites y deseos de cada uno.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                                🧘🏼‍♂️<br/>
                                <strong>Técnicas de respiración y meditación guiada:</strong><br/> una técnica para ayudar a la persona que recibe la penetración a relajarse y liberar la tensión en el cuerpo.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                                💆🏼<br/>
                                <strong>Masaje erótico a masaje anal:</strong><br/> una guía detallada sobre cómo dar un masaje erótico que termine en un masaje anal para preparar la zona.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                                🍑<br/>                        
                                <strong>Técnicas de masaje anal:</strong><br/> diferentes técnicas para realizar el masaje anal, como la técnica circular y los movimientos suaves de entrada y salida.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                            <Text>
                                🤤<br/>  
                                <strong>Ritmo y presión:</strong><br/> cómo ajustar el ritmo y la presión para que la práctica sea más placentera.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                                🤩<br/>
                                <strong>Posiciones:</strong><br/> Ilustraciones y explicaciones de las mejores posiciones de sexo anal!
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                            🧸<br/>
                            <strong>Juguetes sexuales:</strong><br/> un listado y recomendación de los mejores accesorios y juguetes para incorporar a la práctica.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                            🍆<br/> 
                            <strong>Punto P:</strong><br/> cómo estimular el punto P en personas con pene y sentirse cómodos con la práctica.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                            🌊<br/>
                            <strong>Lubricación:</strong><br/> la importancia del uso de lubricante para evitar molestias y facilitar la penetración.
                            </Text>
                        </Col>
                        <Col xl={6} lg={6} md={6} xs={12} sm={12} className="align-items-center">
                            <Text>
                            🚿<br/>
                            <strong>Higiene:</strong><br/> consejos y recomendaciones para mantener una buena higiene en la práctica y solo concentrarse en disfrutar.
                            </Text>
                        </Col>
                        <BotonVerde href="#comprar">Quiero la guía</BotonVerde>
                    </Row>
            </Container>
        </Background>
    );
}
 
export default QueVasAEncontrar;