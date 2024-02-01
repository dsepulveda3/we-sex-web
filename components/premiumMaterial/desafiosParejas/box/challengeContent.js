import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import BotonUniversal from '../../botonUniversal';

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
    font-size: 2.5rem;
    color: var(--violet);
    font-family: "Averia Libre", sans-serif;
    // color: white;
    

    span {
      font-family: "Averia Libre", sans-serif;
      background-color: var(--green);
      padding: 0.3rem 0.5rem;
      color: white;
    }
    @media(max-width: 540px){
        margin-bottom: 2rem;
        font-size: 2.4rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1.5rem;
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

const ChallengeContent = () => {
    return (
      <Background id="queVoyAEncontrar">
        <Container style={{ paddingTop: "5rem", paddingBottom: "5rem", textAlign: "center" }}>
          <Title><span>¿Cómo son los desafios que vienen con la caja WeSexer?</span></Title>
          {/* <Text style={{ border: 'none' }}><span>&quot;Es como tener un plan armado por expertos en sexo, para follar mejor que nunca&quot;</span> - Camila, usuaria de WeSex. </Text> */}
          <Row className="justify-content-center">
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>1</Circle> 
                </CenteredContainer>
                <span>Pingpong Sex:</span> 30 preguntas sexuales para conocerse mejor y aumentar el deseo
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>2</Circle> 
                </CenteredContainer>
                <span>Pecho a las balas:</span> Te orientamos a explotar de placer con la balita vibradora y el lubricante.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>3</Circle> 
                </CenteredContainer>
                <span>Intro a BDSM:</span> ¿Dominar o ser dominado? Te invitamos a descubrirlo en este viaje por tus sentidos. 
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>4</Circle> 
                </CenteredContainer>
                <span>Masturbación ideal:</span> Vivir tu paja ideal y que tu pareja sea quien la haga es una experiencia increíble.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>5</Circle> 
                </CenteredContainer>
                <span>Masajes eróticos:</span> Les damos tips para dar y recibir el mejor masaje se sus vidas.
              </Text>
            </Col>
            <Col xl={12} lg={12} md={12} xs={12} sm={12} className="align-items-center">
              <Text>
                {/* 🗣️ */}
                <CenteredContainer>
                <Circle>6</Circle> 
                </CenteredContainer>
                Si alguno de los 5 desafíos no te gustan, nos escribes y nuestro equipo de sexólogas te enviara otro a medida.
              </Text>
            </Col>
          </Row>
          {/* <Boton href="https://wa.me/5491140678698?
          text=Hola!%20Quiero%20más%20info%20sobre%20el%20programa%20para%20innovar%20en%20pareja">Quiero saber más</Boton> */}
          <BotonUniversal link_redireccion='https://wa.me/5491140678698?
          text=Hola!%20Quiero%20más%20info%20sobre%20la%20cajita%20WeSexer%de%20San%20Valentín'
          text="Quiero empezar"
          textColor='white'
          bgColor='var(--green)'
          bgColorHover='var(--violet)'
          />
        </Container>
      </Background>
    );
  }
  
 
export default ChallengeContent;