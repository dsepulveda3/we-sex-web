
import React, { useEffect, useState, useRef } from 'react';
import styled from "@emotion/styled";
import { Card, CardHeader, Collapse, CardBody } from "reactstrap";
import Notificar2 from "./universals/notificar2";
import ArrowBack from './universals/arrowBack';
import { useRouter } from 'next/router';
import Feedback from './universals/feedback';

const Header = styled.div`
    display: flex;
    align-items: center; /* Vertically center the items */
    padding: 0 1rem;
    
`;

const Background = styled.div`
    background-color: var(--green);
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 0rem 25rem 0rem 25rem;
    z-index: 1;
    @media (max-width: 540px) {
        height: 100%;
        padding: 0rem;
    }
`;

const TitleWeSex = styled.div`
  font-size: 3.5rem;
  color: white;
  font-family: "Averia Libre", sans-serif;
  opacity: 1;
  margin-left: 4px;
  margin-top: 0px;
  margin-bottom: 0rem;
  text-align: right;
  
  

  @media(max-width: 540px){
    color: white;
    font-size: 3.5rem;
    margin-bottom:1.5rem;
  }
  @media(max-width: 540px){
    margin-right: 2rem;
  }
`;

// const WeSexText = styled.div`
//   position: absolute; /* Position the text absolutely within the container */
//   color: var(--green); /* Text color */
//   font-size: 24px; /* Font size */
//   font-weight: bold; /* Font weight */
//   pointer-events: none; /* Ensure the text doesn't block interaction with elements below */
//   font-family: "Averia Libre", sans-serif;
//   padding: 8rem;
//   z-index: 0;


//   /* Generate random positions */
//   top: ${Math.random() * 100}%; /* Random percentage for top position */
//   left: ${Math.random() * 100}%; /* Random percentage for left position */

//   /* You can add more styling here as needed */
// `;

const Border = styled.div`
    background-color: var(--green);
    border: 3px solid white; /* Add a white border */
    margin: 2rem 10rem 2rem 10rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    padding: 1rem;
    @media (max-width: 540px) {
        border: 0px solid white; /* Add a white border */
        padding: 0rem;
        margin: 0rem;
        border-radius: 0px;
    
    }
`;

const Logo = styled.img`
    height: 150px;
    
    padding: 1rem;
    filter: invert(100%);
`;


const Title = styled.div`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.5rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
`;

const SubTitle= styled.div`
    // width: 100%;
    // font-family: "Karla", sans-serif;
    // font-size: 1.7rem;
    // font-weight: bold;
    // text-align: center;
    // background-color: var(--violet);
    // padding: 1rem;

    background-image: url("/img/landing/cta-bg.webp");
    height: 9vh;
    font-size: 1.5rem;
    width: 100%;
    font-weight: bold;
    border-radius: 20px; /* Apply border-radius to all corners */
    display: flex;
    flex-direction: column;
    justify-content: center; /* Vertically center content */
    align-items: center;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.4); /* Increased spread and blur for more shadow */
    
`;

const Text = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    font-weight: bold;
    text-align: justify;
    padding-left: 2rem;
    padding-right: 2rem;

    span {
        background-color: var(--violet);
    }
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 1rem;
    margin-bottom: 2rem;
    padding: 1rem;
`;

const SelectorButton = styled.select`
    border-radius: 0rem;
    padding: 1rem 1rem 1rem 1rem;
    
`;

const ContainerInstructions = styled.div`
    text-align: justify
    // justify-content: center;
    font-family: "Karla", sans-serif;
    padding: 2rem;
    font-size: 1.5rem;
    color: black;
    border-radius: 2rem;
    background-color: white;
    width: 80%;
    @media (max-width: 540px) {
        width: 90%;
        text-align: justify
    }
`;

const ContainerImage = styled.div`
    
    border-radius: 2rem;
    background-color: var(--green);
    height: 20%;
    width: 40%;
    margin: 2rem;
    @media (max-width: 540px) {
        height: 20%;
        width: 90%;
    }
    
`;

const PositionImg = styled.img`
    border-radius: 2rem;
`;

const Button = styled.a`
    
    color: var(--green);
    background-color: white;
    padding: 1rem 2.5rem 1rem 2.5rem;
    font-size: 1.5rem;
    border-radius: 30px;

    &:hover {
        color: var(--violet); /* Change the color on hover */
      }
`;


const TitleQuestion = styled.h4`
    font-size: 1.5rem;
    font-family: "Karla", sans-serif;
    text-align: left;
    color: black;
    font-weight: bold;
    margin-top: 10px;
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1rem;
        font-size: 1.5rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;

const AnswerQuestion = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;

const obtenerAccionAleatoria = () => {
    const acciones = [
      " y el que presionó este botón se venda los ojos.",
      "y el que no presionó se venda los ojos.",
      "y sincronicen su respiración.",
      "con mucho contacto visual.",
      "con susurros atrevidos de por medio o “dirty talk”."
    ];
  
    // Genera un índice aleatorio dentro del rango de opciones
    const indiceAleatorio = Math.floor(Math.random() * acciones.length);
  
    // Retorna la acción aleatoria
    return acciones[indiceAleatorio];
  };



const Profile = () => {

    const [selectedOption, setSelectedOption] = useState('op1');
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);

    const router = useRouter();

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    const [member1, setMember1] = useState(null);
    const [member2, setMember2] = useState(null);


    useEffect(() => {
        if (router.isReady){
            
          if (router.query.origin) {
            setIsOriginRoute(true);
            setOrigin(router.query.origin);
          }
        }
      }, [router.isReady, isOriginRoute]);

    const handleClick = () => {
        router.push(`https://wa.me/5491140678698?text=Hola!%20Queremos%20solicitar%20un%20nuevo%20diagnóstico`);
    };
    
    return(
        <Background>
            <Border>
            <Header>
                <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`} color="violet"/>
                <TitleWeSex>WeSex</TitleWeSex>
                <Feedback challengeName={"Penetración"}/>
            </Header>
            {/* <Logo src='/img/challenges/ProfileCouple.png' />
            
            <Title>{origin}</Title> */}
            <SubTitle>DIAGNÓSTICO DE PAREJA</SubTitle>
            <ContainerImage>
                        <PositionImg src='/img/challenges/GraficoParejaExample.png' />
            </ContainerImage>
            <Text>Último diagnóstico realizado el 09/10/2023</Text>
            <SelectorButtonContainer>
                    <Button onClick={handleClick}>Solicitar nuevo diagníostico</Button>
            </SelectorButtonContainer>
            <ContainerInstructions>
                ¿Qué significa cada área?
                <br/>
                <br/>
                <ul>
                    <li>
                        <strong>Área comunicación:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                    <li>
                        <strong>Área de control:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                    <li>
                        <strong>Área sexual:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                    <li>
                        <strong>Área de afecto:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                    <li>
                        <strong>Área de influencia:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                    <li>
                        <strong>Área de satisfacción:</strong> texto texto texto texto texto texto texto texto texto
                    </li>
                </ul>
                </ContainerInstructions>
            <br/>
            <br/>
            </Border>
        </Background>
    )
};

export default Profile;