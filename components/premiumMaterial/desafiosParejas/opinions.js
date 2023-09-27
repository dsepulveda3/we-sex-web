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
    padding-top: 2rem;
    padding-bottom: 2rem;
    
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


const CustomNextArrow = styled.img`
  // margin-right: 2rem;
  // margin-top: 0.4rem;
  // width; 20px;
  // height: 30px;
  @media (max-width: 540px) {
    display: none;
  }
  margin-right: 2.7rem;
  margin-top: 1.6rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
`;

const CustomPrevArrow = styled.img`
    @media (max-width: 540px) {
    display: none;
    }
    margin-left: 2.7rem;
    margin-top: 1.6rem;
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
    font-size: 2.1rem;
    font-family: "Averia Libre", sans-serif;
    font-weight: bold;
    color: var(--green);
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 2.1rem;
        margin-bottom: 0rem;
        text-align: left;
       
    }
`;

const VioletWrap = styled.div `
    border-radius: 1.5rem;
    // background-color: #ebe4f8;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0.5rem;
`;

const SwiperWrap = styled(Swiper) `
    position: relative;
    padding-right: 0px;

`;

const GuideSquare = styled.div`
    background-color: var(--violet);
    padding: 2rem;
    width: 30rem;
    height: 10rem;
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    // border: 2px solid var(--green);

    display: flex; /* Add display flex for horizontal alignment */
    flex-direction: row; /* Align children vertically */
    align-items: center; /* Center items horizontally */
    justify-content: center; /* Center items vertically */

    @media (max-width: 540px) {
        
    }
`;




const Opinions = ({subtitle1_1, subtitle1_2}) => {
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

    return (
        <section id="hola">
            <Background>
                <Container>
                    <VioletWrap>
                        <TitleContainer>
                            <Title>Qué dicen las personas que probaron desafíos 💑 💏 👩‍❤️‍💋‍👩</Title>
                        </TitleContainer>
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
                                    <GuideSquare>
                                        <h3 style={{ color: "white", fontWeight: "bold" }}>&quot;Increíble la conexión que generamos.&quot;</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare>
                                        <h3 style={{ color: "white", fontWeight: "bold" }}>&quot;Pude conocer más sus zonas erógenas y ella las mías.&quot;</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare>
                                        <h3 style={{ color: "white", fontWeight: "bold" }}>&quot;Vamos 1 mes y ya veo cambios en la sexualidad de la pareja.&quot;</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                                <SwiperSlide>
                                    <GuideSquare>
                                        <h3 style={{ color: "white", fontWeight: "bold" }}>&quot;Tener sexo de formas diferentes todas las semanas es increíble.&quot;</h3>
                                    </GuideSquare>
                                </SwiperSlide>
                            </SwiperWrap>
                            <CustomNextArrow src='/img/icons/next_button_violet.png' className="swiper-button-next" onClick={handleNext} />
                            <CustomPrevArrow src='/img/icons/previous_button_violet.png' className="swiper-button-prev" onClick={handlePrev} />
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
 
export default Opinions;
