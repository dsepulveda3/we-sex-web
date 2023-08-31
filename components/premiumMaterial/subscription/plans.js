import React, {useState, useRef, useEffect} from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CookieManager from 'browser/CookieManager';
import BotonUniversal from '../botonUniversal';

const Background = styled.div`
    background-image: url("/img/ws-background.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    
    /* min-height: 85vh; */
    /* margin-top: 3rem; */
    position: relative;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;

const Slide = styled(SwiperSlide)`
    
    height: 100%; /* Set the fixed height for each slide */
    background-color: white;
    border-radius: 2rem; /* Adjust the value as per your desired roundness */
    flex: 0 0 calc(100% / 3); /* Set the width for each slide to occupy 1/3 of the screen width */

    @media(min-width: 540px){
    flex: 0 0 calc(100% / 3.65); /* Set the width for each slide to occupy 1/3 of the screen width */
    height: 100%; /* Set the fixed height for each slide */
    }
`;

const Title = styled.h1`
    
    font-size: 4.0rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: white); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 4rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;

const SubTitle = styled.p`
    font-size: 2.0rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    margin-top: .4rem;
    margin-right: 10px;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom: 0.4rem;
        font-size: 2rem;
        margin-top: 0rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;


const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.7rem;
    text-align:center;
    margin-bottom: 0rem;
    padding: .1rem .1rem;
    color: var(--violet);
    /* vertical-align: middle; */
    font-weight: bold;
    

    transition: all 1s ease;

    /* SWIPER */
    border: 2px solid white;
    border-radius: 5rem;
    padding: 2rem;
     
    &:hover {
        background-color: white;
        color: var(--green);
    }
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        margin-bottom: 0rem;
        font-size: 2rem;
    }
    
`;


const DudasContainer = styled.div`
    display: flex;
    flex-direction: column;
`;

const DudasText = styled.p`
    font-size: 1.8rem;
    font-family: "Karla", sans-serif;
    text-align: center;
    margin-top: 3rem;
    font-style: italic;
    
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: white; /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: var(--violet); /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.5rem;
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;

const InsideText = styled.p`
    margin-top: 1rem;
    font-family: "Karla", sans-serif;
    font-size: 1.6rem;
    color: var(--violet);
    display: flex;
    align-items: center; /* Center elements vertically */
`;


const TextDescription = styled.p`
    text-align: left;
    font-weight: bold;
    font-size: 1.6rem;
   
    
`;

const ContainerInsideText = styled.p`
    text-align: left;

`;


const CenteredContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100%;

  @media(min-width: 540px){
    margin-left: 0rem;
}

`;

const FullScreenSwiper = styled(Swiper)`
  width: 140vh; /* Set the height of the Swiper to full viewport height */
  
  
`;

const AppImageChecksito = styled.img`
    width: 10%;
    height: 10%;
    margin-left: 20px;
    margin-top: 0px;
    
    @media(max-width: 540px){
        width: 12%;
        height: 12%;
        margin-right: 0rem;
        margin-left: 0rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageCross = styled.img`
    width: 5%;
    margin-left: 28px;
    margin-top: 5px;
    
    @media(max-width: 540px){
        width: 5%;
        margin-right: 2.4rem;
        margin-left: 28px;
    }
    @media(min-width: 540px){
        margin-right: 2.4rem;
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
        
        display:block;
        min-width: 80%;    
    }
`;

const BotonArs = styled(Boton)`
    color: white;
    background-color: #00AEEF;
    text-align: center;
    margin-top: 2rem;
    margin-left: 2.5rem;
    
    @media(max-width: 540px){
        margin-top: 2rem;
        margin-left: 0.6rem;
    }
    @media(min-width: 540px){
    }
`;

const BotonUsd = styled(Boton)`
    color: white;
    background-color: black;
    text-align: center;
    margin-top: 2rem;
    margin-left: 2.5rem;
    
    @media(max-width: 540px){
        margin-top: 2rem;
        margin-left: 0.6rem;
    }
    @media(min-width: 540px){
        
    }
`;

const BotonWsp = styled(Boton)`
    color: white;
    background-color: var(--green);
    text-align: center;
    font-size: 2.0rem;
    margin-top: 2rem;
    margin-left: auto;
    margin-right: auto;
    
    
    @media(max-width: 540px){
        margin-top: 2rem;
    
    }
    @media(min-width: 540px){
    }
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const SelectorButton = styled.select`
    border-radius: 4rem;
    padding: 1rem 1rem 1rem 1rem;
    
`;

const InfoSuscription = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const PriceText = styled.div`
    margin-left: 2rem;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--violet); /* Set the background color to green */
    padding: 0.5rem 4rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */

    @media(max-width: 540px){
        margin-left: 0.7rem;
    }
`;

const InfoButton = styled.a`
    font-size: 20px;
    cursor: pointer;
`;

const PopupContainer = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background-color: rgba(0, 0, 0, 0.6);
    display: flex;
    justify-content: center;
    align-items: center;
    z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;


const SlideHeader = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
`;

const SlideTitle = styled.span`
    margin-right: 10px;
`;

const InfoText = styled.div`
    color: black;
    font-size: 1.3rem;
    font-family: "Averia Libre", sans-serif;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
`;


const PlanContainer = styled.div`
    position: relative; /* Ensure proper stacking of elements */
    background-color: white;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    border: 3px solid black;
    height: 450px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    color: black;
    text-align: center; /* Center align the content */
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green);
        padding: 0.3rem 0.5rem;
        color: white;
    }

    /* Default text in the top right corner */
    ::before {
        content: "WeSex";
        position: absolute;
        top: 10px;
        right: 10px;
        font-family: "Averia Libre", sans-serif;
        font-size: 2.0rem;
        color: var(--green);
    }

    /* Default text in the bottom left corner */
    ::after {
        content: "WeSex";
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-family: "Averia Libre", sans-serif;
        font-size: 2.0rem;
        color: var(--green);
    }
`;

const PlanInfo = styled.div`
    color: black;

`;

const Benefits = styled.div`
    font-size: 1.5rem;
    text-align: left;
`;

const Benefit = styled.div`
    display: flex;
    flex-direction: row;
    text-align: left;
`;

const TitlePlan = styled.div`
    font-weight: bold;
    text-align: center;
    margin-bottom: 2rem;

    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.5rem 1rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
`;

const PayButton = styled(Boton)`
    text-align: center;
    color: white;
    background-color: #00AEEF;
    margin: 0rem 2rem;
`;

const Price = styled.div`
    font-family: "Averia Libre", sans-serif;
    background-color: var(--violet); /* Set the background color to green */
    padding: 0.2rem 0.5rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */
    margin: 2rem 5rem;
`;

const ByLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    color:  #00AEEF;
`;

const LogInText = styled.a`

    align-items: center;
    font-weight: bold;
    padding: 2rem;
    text-decoration: underline;

`;


const PopupContent = () => {
    return (
      <>
        <br />
        <InfoText>
          <span>Seguimiento:</span> Soporte y respuestas a todas sus dudas en el proceso. 
        </InfoText>
        <br />
        <InfoText>
          <span>Acceso material premium:</span> Podrás acceder a todo nuestro contenido premium tales como guías y masterclasses sin necesidad de pagar por cada una 😉.
        </InfoText>
        <br />
        <InfoText>
          <span>Cajita WeSexer:</span> El último fin de semana de cada mes les mandaremos una caja sorpresa para que exploren y se diviertan MUCHO😉
        </InfoText>
        <br />
        <InfoText>
          <span>Sesión 1/mes sexologa:</span> Podrás tener una consulta de 30 minutos al mes con una sexologa junto a tu pareja.
        </InfoText>
        <br />
        {/* Add more content as needed */}
      </>
    );
  };



const Plans = () => {

    const [isLogged, setIsLogged] = useState(false);
    const [selectedOption, setSelectedOption] = useState('Argentina');
    const [showPopup, setShowPopup] = useState(false);

    const NextLink = isLogged
        ? `/premium-material/guides/guia-sexo-anal`// Link for logged in user
        : '/login'; // Link for non-logged in user


    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    
    useEffect(() => {
        if (textRef1.current) {
            const textContent = textRef1.current.textContent;
            const textLength = textContent.length;

            // Calculate the desired width based on text length
            const desiredWidth = textLength / 0.01; // Adjust the multiplier as needed

            // Set the width of the Swiper slide
            textRef1.current.style.width = `${desiredWidth}px`;
            textRef2.current.style.width = `${desiredWidth}px`;
            textRef3.current.style.width = `${desiredWidth}px`;
        }
    }, []);

    return (
        <Background id="comprar">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title><span>Precios</span></Title>
                <SlideHeader>
                    <SubTitle>Accede a nuestro plan full access</SubTitle>
                    <InfoButton onClick={() => setShowPopup(true)}>ℹ️</InfoButton>
                </SlideHeader>

                
                <SelectorButtonContainer>
                    <SelectorButton onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="Argentina">Argentina</option>
                        <option value="Otro País">Otro País</option>
                    </SelectorButton>
                </SelectorButtonContainer>
                <div style={{display: "flex", justifyContent: "center"}}>
                    {isLogged ? null : <LogInText href='/login' >DEBES ESTAR INICIADO SESIÓN PARA SUSCRIBIRTE</LogInText>}
                </div>
                <CenteredContainer>
                    <PlanContainer>
                        <PlanInfo>
                            <TitlePlan>Plan All Access</TitlePlan>
                            <Benefits>
                                <Benefit>
                                    <AppImageChecksito src="/img/icons/checksito (1).png" className="img-fluid" alt="" />
                                    <ul>Acceso a todo el contenido premium</ul>
                                </Benefit>
                                <Benefit>
                                    <AppImageChecksito src="/img/icons/checksito (1).png" className="img-fluid" alt="" />
                                    <ul>Beneficios con marcas asociadas</ul>
                                </Benefit>
                                <Benefit>
                                    <AppImageChecksito src="/img/icons/checksito (1).png" className="img-fluid" alt="" />
                                    <ul>Webinars QA</ul>
                                </Benefit>
                            </Benefits>
                            {selectedOption === 'Argentina' && (
                                <>
                                <Price>8.000 ARS/mes</Price>
                                <PayButton href={NextLink} >SUSCRIBIRSE</PayButton>
                                <ByLabel>Powered by Mercado Pago</ByLabel>
                                </>
                            )}
                            {selectedOption === 'Otro País' && (
                                <>
                                <Price>7 USD/mes</Price>
                                <PayButton href={NextLink} style={{backgroundColor: "black"}}>SUSCRIBIRSE</PayButton>
                                <ByLabel style={{color: "black"}}>Powered by Stripe</ByLabel>
                                </>
                            )}
                        </PlanInfo>
                    </PlanContainer>
                    
                {showPopup && (
                            <PopupContainer>
                            <PopupDialog>
                                <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                                {PopupContent()}
                                
                            </PopupDialog>
                            </PopupContainer>
                        )}
                </CenteredContainer>
                <DudasContainer>
                <DudasText><span>¿Tienes dudas?</span> Escribenos por Whatsapp</DudasText>

                <BotonUniversal link_redireccion='https://wa.me/5491140678698?
                text=Hola!%20Quiero%20más%20info%20sobre%20el%20programa%20para%20innovar%20en%20pareja'
                text="Contactar Whatsapp"
                textColor='white'
                bgColor='var(--green)'
                bgColorHover='var(--violet)'
                />
                </DudasContainer>
                
            </Container>
        </Background>
    );
}
 
export default Plans;