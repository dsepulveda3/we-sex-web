import React, { useState } from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import styled from '@emotion/styled';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";
import PopUpPreview from '../popPreview';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Background = styled.div`

    background-color: white;
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
    // padding-bottom:8rem;
    padding-top: 4rem;
    padding-bottom: 8rem;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        
    }
`;

const Content = styled.div`
    /* margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    margin-top: 15%;
    @media(min-width: 540px){
        margin-top: 20%;
    }
`;

const ContentImage = styled.div`
    margin-top:15%;
    margin-left: 10%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

// const Title = styled.h1`
//     font-size: 4.5rem;
//     font-family: "Averia Libre", sans-serif;
//     opacity: 0.85; /* adjust the opacity as needed */
//     span {
//         // color: var(--green);
//         font-weight: bold;
//         font-family: "Averia Libre", sans-serif;
//         text-decoration: underline;
//         text-decoration-color: var(--green);
//         text-underline-offset: 1rem; /* ajusta la separación */
//         text-decoration-thickness: 0.3rem; /* ajusta el grosor */
//     }
    
//     @media(max-width: 540px){
//         font-size: 4rem;
//         padding-top: 4rem;
//         padding-bottom: 1rem;
//     }
// `;

const SubTitle = styled.div`
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-size: 3.2rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    
    @media(max-width: 540px){
        font-size: 3.0rem;
        margin-top: 10rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;

const ClickSwiper = styled.div`
@media (max-width: 540px) {
    display: none;
}
`;


const CustomSwiperSlide = styled(SwiperSlide)`
  flex-shrink: 0;
  width: auto !important;
  margin-left: 3rem;
`;

const CustomNextArrow = styled.img`
  // margin-right: 2rem;
  // margin-top: 0.4rem;
  // width; 20px;
  // height: 30px;
  @media (max-width: 540px) {
    display: none;
  }
  margin-right: 2.7rem;
  margin-top: 3rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
`;

const CustomPrevArrow = styled.img`
    @media (max-width: 540px) {
    display: none;
    }
    margin-left: 2.7rem;
    margin-top: 3rem;
    height: 27px; /* Set the desired height */
    transform: scale(2);
}
`;

const TitleContainer = styled.div`
    display: flex; /* Set display to flex */
    align-items: center; /* Align items vertically in the center */
    justify-content: space-between; /* Arrange items with space between */
    margin-left: 3rem;
    margin-right: 3rem;
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: black;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 2.8rem;
        margin-bottom: 0rem;
        text-align: left;
       
    }
`;

const Subtitle = styled.p`
    font-size: 2.0rem;
    color: black;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 3rem;
    font-family: "Karla", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        font-size: 1.5rem;
        margin-bottom:2rem;
        text-align: left;
        
        margin-right: 3rem;
        margin-left: 3rem;
    }
`;
const VioletWrap = styled.div `
    border-radius: 1.5rem;
    background-color: #ebe4f8;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0.5rem;
`;

const SwiperWrap = styled(Swiper) `
    position: relative;
    padding-right: 0px;

`;

const More = styled.a`
    color: black;
    text-decoration: underline;
    
`;

const GuideSquare = styled.div`
    background-color: white;
    padding: 1rem;
    width: 30rem;
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 10px;

    display: flex; /* Add display flex for horizontal alignment */
    flex-direction: row; /* Align children vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */

    @media (max-width: 540px) {
        
    }
`;


const ContainerContentGuide = styled.div`
    /* No need for this styling */
`;

const AppImageGuia2 = styled.img`
    width: 30%;
    margin-top: 0px; /* Remove margin-left and margin-right */
    margin: 1rem;
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 1rem;
    }
    @media(min-width: 540px){
        /* No need for this styling */
    }
`;

const AppImageGuia3 = styled.img`
    width: 44%;
    margin-top: 0px; /* Remove margin-left and margin-right */
    margin: 1rem;
    
    @media(max-width: 540px){
        width: 55%;
        margin-top: 1rem;
    }
    @media(min-width: 540px){
        /* No need for this styling */
    }
`;

const AppImageGuia4 = styled.img`
    width: 38%;
    margin-top: 0px; /* Remove margin-left and margin-right */
    margin: 1rem;
    
    @media(max-width: 540px){
        width: 48.5%;
        margin-top: 1rem;
    }
    @media(min-width: 540px){
        /* No need for this styling */
    }
`;

const AppImageGuia5 = styled.img`
    width: 30%;
    margin-top: 0px; /* Remove margin-left and margin-right */
    margin: 1rem 5rem 1rem 1rem;
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 1rem;
    }
    @media(min-width: 540px){
        /* No need for this styling */
    }
`;



const Intro = ({subtitle1_1, subtitle1_2}) => {
    const [swiper, setSwiper] = useState(null);
    const [showPopup, setShowPopup] = useState(false);
    const [currentGuide, setCurrentGuide] = useState('')


    const handleNext = () => {
        if (swiper !== null) {
        swiper.slideNext();
        }
    };

    const handlePrev = () => {
        if (swiper !== null) {
        swiper.slidePrev();
        }
    };

    const handleSlideClick1 = () => {
        setCurrentGuide('guia-mt');
        setShowPopup(true);
    };

    const handleSlideClick2 = () => {
        setCurrentGuide('guia-salir-rutina');
        setShowPopup(true);
    };

    const handleSlideClick3 = () => {
        setCurrentGuide('guia-zonas-erogenas');
        setShowPopup(true);
    };

    const handleSlideClick4 = () => {
        setCurrentGuide('guia-tantra');
        setShowPopup(true);
    };

    const handleSlideClick5 = () => {
        setCurrentGuide('guia-anal');
        setShowPopup(true);
    };

    return (
        <section id="hola">
            <Background>
                <Container>
                    <VioletWrap>
                        <TitleContainer>
                            <Title>PREMIUM</Title>
                            <More href="../../premium-material">VER MÁS</More>
                        </TitleContainer>
                        <Subtitle>Aprende de los mejores expertos sobre sexualidad.</Subtitle>
                        <div>
                            <SwiperWrap
                                slidesPerView={'auto'}
                                spaceBetween={1}
                                modules={[Pagination, Navigation]}
                                className="mySwiper"
                                onSwiper={setSwiper}
                                onSlideChange={() => {}}
                            >
                                <SwiperSlide>
                                    <GuideSquare onClick={handleSlideClick1}>
                                        <AppImageGuia2 src="/img/premium-material/Masturbacion_tantrica.png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Masturbación Tantrica - Parte 1</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare onClick={handleSlideClick2}>
                                        <AppImageGuia2 src="/img/premium-material/salir_rutina.png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Salir de la rutina</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare onClick={handleSlideClick3}>
                                        <AppImageGuia2 src="/img/premium-material/2ZonasErogenas (1).png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Zonas Erógenas</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare onClick={handleSlideClick4}>
                                        <AppImageGuia5 src="/img/premium-material/Tantra (1).png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Tantra</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare onClick={handleSlideClick5}>
                                        <AppImageGuia3 src="/img/premium-material/como-nunca-antes-gozado.png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Sexo Anal</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare>
                                        <AppImageGuia4 src="/img/premium-material/question-mark-draw.png" className="img-fluid"/>
                                        <h3 style={{ color: "var(--violet)", fontWeight: "bold" }}>Más</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                {/* ... (more SwiperSlides) */}
                            </SwiperWrap>
                            <CustomNextArrow src='../img/icons/next_button_violet.png' className="swiper-button-next" onClick={handleNext} />
                            <CustomPrevArrow src='../img/icons/previous_button_violet.png' className="swiper-button-prev" onClick={handlePrev} />
                        </div>
                    </VioletWrap>
                </Container>
            </Background>
            {showPopup && (
                <PopUpPreview setShowPopup={setShowPopup} guideShown={currentGuide}/>
            )}
        </section>
    );
}
 
export default Intro;


{/* <section id="hola">
        <Background>
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                               
                                <SubTitle><span>Suscripción WeSex</span></SubTitle>
                   

                                <Text>
                                 Accede a todo el contenido de WeSex
                                </Text>
                                <Botones>
                                    <BotonArs
                                        href="#comprar"
                                    >Ver plan</BotonArs>
                                </Botones>
                            </Content>
                        </Col>
                        <Col>
                            <ContentImage>
                                <AppImage src="../../img/landing/hero-img.png" alt="Salir de la rutina." />
                            </ContentImage>
                        </Col>
                    </Row>
            </Container>
        </Background>
        </section> */}