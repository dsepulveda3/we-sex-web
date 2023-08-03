import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import BotonUniversal from '../botonUniversal';

const Background = styled.div`
    // background-color: var(--violet);
    background-color: #f7f7f7;
    background-image: url("img/ws-background.jpg");
    background-position: center;
    /* background-repeat: no-repeat; */
    background-attachment: fixed;
    min-height: 85vh;
    margin-top: 0rem;
    position: relative;
    padding-right: 30rem;
    padding-left: 30rem;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
        padding-right: 0rem;
        padding-left: 0rem;
    }
`;

const Title = styled.h4`
    font-size: 4.0rem;
    color: var(--violet);
    font-family: "Averia Libre", sans-serif;
    // color: white;
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
    font-family: "Averia Libre", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    color: var(--violet);
    // color: white;
    padding-right: 1rem; 

    @media(max-width: 540px){
        border: 2px solid var(--violet);
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
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        // background-color: var(--violet); /* Set the background color to green */
        
        // padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: var(--green); /* Set the text color to white */
    }
    @media(max-width: 540px){
        /* font-size: 1.6rem; */
    }
    strong {
        font-weight: bold;
        font-size: 2rem;
    }
    @media(min-width: 540px){
        border: 2px solid var(--violet);
        padding: 2rem;
        border-radius: 3rem;
        transition: all 2s ease;
        strong {
            font-size: 2.2rem;
        }
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
        background-color: var(--green);
    }
`;

const CenteredContainer = styled.div`
  display: flex;
  justify-content: center; /* Horizontal centering */
  align-items: center; /* Vertical centering */
  height: 100%; /* Adjust this height to make the circle vertically centered */
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

const ComoFunciona = () => {
    return (
      <Background id="queVoyAEncontrar">
        <Container style={{ paddingTop: "5rem", paddingBottom: "5rem", textAlign: "center" }}>
          <Title>¿Cómo funciona?</Title>
          <Text style={{ border: 'none' }}>Buena pregunta,<br />pero la respuesta es aún mejor 🤤</Text>
          <Row className="justify-content-center">
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>1</Circle> 
                </CenteredContainer>
                Primero les vamos a enviar un <span>breve formulario</span> a cada uno, en donde vamos a aprender más sobre su situación actual.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>2</Circle> 
                </CenteredContainer>
                Ese formulario va a ser analizado por <span>sexólogas expertas</span> de nuestro equipo, quienes <span>armarán el programa vivencial</span> personalizado para ustedes.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>3</Circle> 
                </CenteredContainer>
                <span>Todas las semanas</span>, van a recibir <span>desafíos y actividades</span> para hacer en pareja. Muchas veces son planes copados y divertidos para salir de la rutina, otras, cosas para charlar o actividades para hacer en su tiempo libre.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>4</Circle> 
                </CenteredContainer>
                Cada desafío o actividad será <span>agendada en su propio calendario</span> y les mandaremos recordatorios para realizarlas.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>5</Circle> 
                </CenteredContainer>
                Luego de cada desafío van a poder llenar una encuesta para contarnos cómo fue y el equipo de WeSex irá <span>ajustando el plan según sus necesidades.</span>
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>6</Circle> 
                </CenteredContainer>
                Si lo desean, tendrán una <span>llamada con una sexóloga</span> de nuestro equipo para sacarse las dudas que surjan en los desafíos.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>7</Circle> 
                </CenteredContainer>
                <span>En 1 mes</span> van a estar <span> follando mejor que nunca.</span>
              </Text>
            </Col>
          </Row>
          {/* <Boton href="https://wa.me/5491140678698?
          text=Hola!%20Quiero%20más%20info%20sobre%20el%20programa%20para%20innovar%20en%20pareja">Quiero saber más</Boton> */}
          <BotonUniversal link_redireccion='https://wa.me/5491140678698?
          text=Hola!%20Quiero%20más%20info%20sobre%20el%20programa%20para%20innovar%20en%20pareja'
          text="Quiero saber más"
          textColor='white'
          bgColor='var(--green)'
          bgColorHover='var(--violet)'
          />
        </Container>
      </Background>
    );
  }
  
 
export default ComoFunciona;