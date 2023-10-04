import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import styled from '@emotion/styled';
import Dudas from '../dudas';

const Background = styled.div`

    background-color: var(--violet);
    // background-image: url("/img/cta-bg.webp");
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
    text-align: center;
    padding-top: 8rem;
    padding-bottom: 15rem;
    padding-left: 0; /* Remove left padding */
    padding-right: 0; /* Remove right padding */
    overflow-x: hidden; /* Hide horizontal overflow */
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
        padding-top: 0rem;
    }

    @media(mix-width: 540px){
        
    }
`;

const Content = styled.div`
    padding: 2rem;
    display: flex;
    flex-direction: column;
    align-items: center
`;

const ContainerInfo = styled(Container)`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-left: 0;
    padding-right: 0;
    
    @media (max-width: 540px) {
        flex-direction: column;
        padding: 2rem;
      }
`;

const Title = styled.h1`
    font-size: 3.5rem;
    font-family: "Karla", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
    span {
        font-family: "Averia Libre", sans-serif;
        background-color: white; /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: var(--violet); /* Set the text color to white */
        }
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 4rem;
    color: white;
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
    }
    @media(min-width: 540px){
        
    }
`;
const SubTitle = styled.h2`
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-size: 2.7rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
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
        font-size: 2.2rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;

const AppImage = styled.img`
    margin-top: 0rem;
    margin-left: 2rem;
    width: 45%;
    height: 45%;
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 0rem;
        margin-right: 3rem;
        width: 30%;
        height: 30%;
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
    font-size: 2rem;
    
    
    @media(max-width: 540px){
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        
    }
`;


const ContentImage = styled.div`
    margin-right: -20%;
    margin-left: -15%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

const Suscribed = () => {
    return (
      <section id="hola">
        <Background>
          <ContainerInfo>
            <ContentImage>
                    <AppImage src="../../img/rutina_bomba.png" alt="Salir de la rutina." />
            </ContentImage>

            <Content>
                <Title>
                    <span>¡FELICITACIONES!</span> con tu pareja ya están suscritos a WeSex
                </Title>
                <Text>Haz click aquí para comenzar el programa para parejas. <span>Solicita el paso 1 a nuestro equipo.</span></Text>
                <BotonArs href="https://wa.me/5491140678698?text=Hola!%20Estoy%20listo%20para%20recibir%20el%20paso%201%20del%20programa%20">Comenzar</BotonArs>
                {/* <Text>
                    Puedes cancelar tu suscripción cuando lo desees ....
                </Text> */}
            </Content>

          </ContainerInfo>
          <Dudas />
          
        </Background>
      </section>
    );
  };
  
  export default Suscribed;