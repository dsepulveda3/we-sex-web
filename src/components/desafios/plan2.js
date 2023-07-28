import React from 'react';
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
        margin-bottom: 3rem;
    }
`;

const SubTitle = styled.p`
    font-size: 2.0rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 2rem;
    }
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
`;


const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    text-align:center;
    margin-bottom: 1.5rem;
    padding: .5rem 1rem;
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
        margin-bottom: 1rem;
        font-size: 2rem;
    }
    
`;

const InsideText = styled.p`
    margin-top: 1rem;
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    color: var(--violet);
    display: flex;
    align-items: center; /* Center elements vertically */
`;


const TextDescription = styled.p`
    text-align: left;
    font-weight: bold;
   
    
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
        margin: 1rem auto;
        display:block;
        min-width: 80%;    
    }
`;

const BotonArs = styled(Boton)`
    color: white;
    background-color: var(--green);
    text-align: center;
    margin-top: 2rem;
    margin-left: 5rem;
    
    @media(max-width: 540px){
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        
    }
`;





const Plans = () => {
    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title><span>Precios</span></Title>
                <SubTitle>Elige uno de nuestros 3 planes</SubTitle>

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
                            
                            <span>Básico</span>
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
                                    <BotonArs href="/">Sucribirme</BotonArs>
                                </InsideText>
                            </ContainerInsideText>
                        </Text>
                        
                        

                    </Slide>
                    <Slide>
                        <Text>
                            <span>Estandar</span>
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
                                    <BotonArs href="/">Sucribirme</BotonArs>
                                </InsideText>
                            </ContainerInsideText>
                        </Text>
                    </Slide>
                    <Slide>
                        <Text>
                            <span>Premium</span>
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
                                    <BotonArs href="/">Sucribirme</BotonArs>
                                </InsideText>
                            </ContainerInsideText>
                        </Text>
                    </Slide>
                </FullScreenSwiper>
                </CenteredContainer>
            </Container>
        </Background>
    );
}
 
export default Plans;