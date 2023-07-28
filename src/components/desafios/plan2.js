import React, {useState} from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import CookieManager from 'browser/CookieManager';

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

    @media(min-width: 540px){
    flex: 0 0 calc(100% / 3); /* Set the width for each slide to occupy 1/3 of the screen width */
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
    margin-left: 15rem;
}

`;

const FullScreenSwiper = styled(Swiper)`
  width: 140vh; /* Set the height of the Swiper to full viewport height */
  
  
`;

const AppImageChecksito = styled.img`
    width: 10%;
    margin-left: 20px;
    margin-top: 0px;
    
    @media(max-width: 540px){
        width: 12%;
        margin-right: 2rem;
        margin-left: 2rem;
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
    margin-left: 5rem;
    
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 2.5rem;
    }
    @media(min-width: 540px){
    }
`;

const BotonUsd = styled(Boton)`
    color: white;
    background-color: black;
    text-align: center;
    margin-top: 2rem;
    margin-left: 5rem;
    
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 2.5rem;
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
    margin-left: 4rem;
    font-family: "Averia Libre", sans-serif;
    background-color: var(--violet); /* Set the background color to green */
    padding: 0.5rem 4rem; /* Add padding to make the background visible */
    color: white; /* Set the text color to white */

    @media(max-width: 540px){
        margin-left: 2rem;
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

const PopupContent = () => {
    return (
      <>
        <InfoText>
          <span>Acceso a guías:</span> Podrás leer todas nuestras guías premium sin necesidad de pagar por cada una 😉
        </InfoText>
        <br />
        <InfoText>
          <span>Cajita WeSexer:</span> El último fin de semana de cada mes les mandaremos una caja sorpresa para que exploren y se diviertan MUCHO😉
        </InfoText>
        {/* Add more content as needed */}
      </>
    );
  };
  


const Plans = () => {

    const [selectedOption, setSelectedOption] = useState('Argentina');
    const [showPopup, setShowPopup] = useState(false);

    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title><span>Precios</span></Title>
                <SlideHeader>
                    <SubTitle>Elige uno de nuestros 3 planes</SubTitle>
                    <InfoButton onClick={() => setShowPopup(true)}>ℹ️</InfoButton>
                </SlideHeader>

                <SelectorButtonContainer>
                    <SelectorButton onChange={(e) => setSelectedOption(e.target.value)}>
                        <option value="Argentina">Argentina</option>
                        <option value="Otro País">Otro País</option>
                    </SelectorButton>
                </SelectorButtonContainer>

                <CenteredContainer>
                <FullScreenSwiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    autoHeight={true} // Set the autoHeight prop to make all slides the same height
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <Slide>
                        <Text>
                            
                            <SlideHeader>
                                <SlideTitle>Básico</SlideTitle>
                                <InfoButton onClick={() => setShowPopup(true)}>ℹ️</InfoButton>
                            </SlideHeader>
                            <ContainerInsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Plan personalizado
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Desafios semanales
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Soporte 24/7
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Acceso a guías
                                </InsideText>
                                <InsideText>
                                    <AppImageCross src="../img/ico/cross.png" className="img-fluid" alt="" />
                                    Cajita WeSexer
                                </InsideText>
                                <InsideText>
                                    <AppImageCross src="../img/ico/cross.png" className="img-fluid" alt="" />
                                    <TextDescription>Sesión 30min/mes con sexologa</TextDescription>
                                </InsideText>
                                <InsideText>
                                    {selectedOption === 'Argentina' && (
                                    <InfoSuscription>
                                        <PriceText>15,600 ARS</PriceText>
                                        <BotonArs href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848997590c01899b67d39f0136">Sucribirme</BotonArs>
                                    </InfoSuscription>)}
                                    {selectedOption === 'Otro País' && (
                                    <InfoSuscription>
                                        <PriceText>30 USD</PriceText>
                                        <BotonUsd href="https://buy.stripe.com/3cs02I5BDaD3gMMbIK">Sucribirme</BotonUsd>
                                    </InfoSuscription>)}
                                </InsideText>
                            </ContainerInsideText>
                        </Text>

                        
                                            
                        

                    </Slide>
                    <Slide>
                        <Text>
                            <SlideHeader>
                                <SlideTitle>Estandar</SlideTitle>
                                <InfoButton onClick={() => setShowPopup(true)}>ℹ️</InfoButton>
                            </SlideHeader>
                            <ContainerInsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Plan personalizado
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Desafios semanales
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Soporte 24/7
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Acceso a guías
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Cajita WeSexer
                                </InsideText>
                                <InsideText>
                                    <AppImageCross src="../img/ico/cross.png" className="img-fluid" alt="" />
                                    <TextDescription>Sesión 30min/mes con sexologa</TextDescription>
                                </InsideText>
                                <InsideText>
                                    {selectedOption === 'Argentina' && (
                                    <InfoSuscription>
                                        <PriceText>20,000 ARS</PriceText>
                                        <BotonArs href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848997590c01899b6adafb0137">Sucribirme</BotonArs>
                                    </InfoSuscription>)}
                                    {selectedOption === 'Otro País' && (
                                    <InfoSuscription>
                                        <PriceText>38 USD</PriceText>
                                        <BotonUsd href="https://buy.stripe.com/6oE3eU0hjeTj688dQT">Sucribirme</BotonUsd>
                                    </InfoSuscription>)}
                                </InsideText>
                            </ContainerInsideText>
                        </Text>
                        
                    </Slide>
                    <Slide>
                        <Text>
                            <SlideHeader>
                                <SlideTitle>Premium</SlideTitle>
                                <InfoButton onClick={() => setShowPopup(true)}>ℹ️</InfoButton>
                            </SlideHeader>
                            
                            <ContainerInsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Plan personalizado
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Desafios semanales
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Soporte 24/7
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Acceso a guías
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    Cajita WeSexer
                                </InsideText>
                                <InsideText>
                                    <AppImageChecksito src="../img/ico/checksito (1).png" className="img-fluid" alt="" />
                                    <TextDescription>Sesión 30min/mes con sexologa</TextDescription>
                                </InsideText>
                                <InsideText>
                                    {selectedOption === 'Argentina' && (
                                    <InfoSuscription>
                                        <PriceText>27,000 ARS</PriceText>
                                        <BotonArs href="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848997590c01899b6be6110138">Sucribirme</BotonArs>
                                    </InfoSuscription>)}
                                    {selectedOption === 'Otro País' && (
                                    <InfoSuscription>
                                        <PriceText>54 USD</PriceText>
                                        <BotonUsd href="https://buy.stripe.com/8wM8zec01fXn7cc5ko">Sucribirme</BotonUsd>
                                    </InfoSuscription>)}
                                </InsideText>
                            </ContainerInsideText>
                        </Text>
                        
                    </Slide>
                    
                </FullScreenSwiper>
                {showPopup && (
                            <PopupContainer>
                            <PopupDialog>
                                <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                                {PopupContent()}
                                
                            </PopupDialog>
                            </PopupContainer>
                        )}
                </CenteredContainer>
            </Container>
        </Background>
    );
}
 
export default Plans;