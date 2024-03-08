
import React, { useEffect, useState, useRef } from 'react';
import styled from "@emotion/styled";
import { Card, CardHeader, Collapse, CardBody } from "reactstrap";
import Notificar from "../universals/notificar";
import ArrowBack from '../universals/arrowBack';
import { useRouter } from 'next/router';
import Feedback from '../universals/feedback';

const Header = styled.div`
    display: flex;
    align-items: center; /* Vertically center the items */
    padding: 0 1rem;
    
`;

const Background = styled.div`
    background-color: var(--green);
    height: 100vh;
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 0rem 25rem 0rem 25rem;
    z-index: 1;
    @media (max-width: 540px) {
        height: 100vh;
        padding: 0rem;
    }
`;

const Border = styled.div`
    background-color: var(--green);
    // border: 3px solid var(--violet); /* Add a white border */
    // margin: 2rem 10rem 2rem 10rem;
    // border-radius: 30px;
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
    
    padding: 4rem;
`;

const Title = styled.div`
    font-family: "Averia Libre", sans-serif;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
`;

const SubTitle= styled.div`
    width: 100%;
    font-family: "Averia Libre", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    background-color: var(--violet);
    padding: 1rem;
`;

const Text = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-align: justify;

    span {
        background-color: var(--violet);
    }
`;



const Dosis21 = () => {

    const [selectedOption, setSelectedOption] = useState('op1');
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);
    const [isOpen, setIsOpen] = useState(false);
    const [isOpen2, setIsOpen2] = useState(false);
    const toggle = () => setIsOpen(!isOpen);
    const toggle2 = () => setIsOpen2(!isOpen2);

    const router = useRouter();

    const [isOriginRoute, setIsOriginRoute] = useState(false);
    const [origin, setOrigin] = useState(null);

    useEffect(() => {
        if (router.isReady){
          if (router.query.origin) {
            setIsOriginRoute(true);
            setOrigin(router.query.origin);
          }
        }
      }, [router.isReady, isOriginRoute]);

    const generarNumeroAleatorio = () => {
        const nuevoNumero = Math.floor(Math.random() * 9) + 1;
        setNumeroAleatorio(nuevoNumero);
    };


    
    return(
        <Background>
            <Border>
            <Header>
                <ArrowBack url={`/premium-material/desafios-para-parejas/road?origin=${origin}`}/>
                <Feedback challengeName={"Visualización conjunta"}/>
            </Header>
            <Logo src='/img/logo_wesex_croped.png' />
            
            {/* <Title>Agradecimientos diarios</Title> */}
            <SubTitle>Visualización conjunta</SubTitle>

            
            <Text style={{padding: "2rem"}}>
            Busquen en spotify una lista de sonidos de la naturaleza que ambxs piensen sean relajantes. 
            Puede ser bosques, pájaros, playas, etc. Les dejamos una sugerencia <a style={{textDecoration:"underline"}} href="https://open.spotify.com/playlist/37i9dQZF1DX2DjEOgyULQF"> https://open.spotify.com/playlist/37i9dQZF1DX2DjEOgyULQF.</a> 
            Siéntense en el piso espalda con espalda y por 10 min cierren los ojos y visualicen que están juntxs en ese lugar en pleno bienestar. 
            Conecten con la respiración, busquen que esta sea profunda y suave. Lleven el foco de atención por un momento al movimiento respiratorio de su compa mediante el balanceo de su espalda. 
            Bajar unos cambios del ritmo cotidiano es lo que vamos a buscar en esta práctica. 
            El simple hecho de hacerla ya va a impactar en eso, el proceso es lo que importa. 

            </Text>
            
            </Border>
            <Notificar message='¡Notificar que completamos la dosis!' url={`https://wa.me/5491140678698?
                    text=Hola!%20Terminamos%20la%20dosis%20cinco`} color="violet" type="dosis"/>
        </Background>
    )
};

export default Dosis21;