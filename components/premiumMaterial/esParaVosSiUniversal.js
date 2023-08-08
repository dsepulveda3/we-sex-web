import React, { useRef, useEffect } from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

const Background = styled.div`
    background-image: url("/img/premium-material/ws-background.jpg");
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


const Title = styled.h4`
    font-size: 4.0rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 3rem;
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
    /* vertical-align: middle; */

    transition: all 1s ease;

    /* SWIPER */
    border: 2px solid white;
    border-radius: 5rem;
    padding: 2rem;
     
    &:hover {
        background-color: white;
        color: var(--violet);
    }
    
    span {
        color: var(--green);
        font-weight: bold;
    }
    @media(max-width: 540px){
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`;

// {}

const EsParaVosSi3 = ({title1_1, title1Span, title1_2, emoji1, text1_1, text1Span, text1_2,
        emoji2, text2_1, text2Span, text2_2, emoji3, text3_1, text3Span, text3_2, emoji4, text4_1, text4Span, text4_2,
        emoji5, text5_1, text5Span, text5_2, emoji6, text6_1, text6Span, text6_2, emoji7, text7_1, text7Span, text7_2}) => {
    
    const textRef1 = useRef(null);
    const textRef2 = useRef(null);
    const textRef3 = useRef(null);
    const textRef4 = useRef(null);
    const textRef5 = useRef(null);
    const textRef6 = useRef(null);
    const textRef7 = useRef(null);
    
    useEffect(() => {
        if (textRef1.current) {
            const textContent = textRef1.current.textContent;
            const textLength = textContent.length;

            // Calculate the desired width based on text length
            const desiredWidth = textLength / 0.2; // Adjust the multiplier as needed

            // Set the width of the Swiper slide
            textRef1.current.style.width = `${desiredWidth}px`;
            textRef2.current.style.width = `${desiredWidth}px`;
            textRef3.current.style.width = `${desiredWidth}px`;
            textRef4.current.style.width = `${desiredWidth}px`;
            textRef5.current.style.width = `${desiredWidth}px`;
            textRef6.current.style.width = `${desiredWidth}px`;
            textRef7.current.style.width = `${desiredWidth}px`;
        }
    }, []);


    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title>{title1_1}<span>{title1Span}</span>{title1_2}</Title>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Text ref={textRef1}>
                            {emoji1}<br/>{text1_1}<span>{text1Span}</span>{text1_2}
                        </Text>
                        <Text ref={textRef2}>
                            {emoji2}<br/>{text2_1}<span>{text2Span}</span>{text2_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text ref={textRef3}>
                            {emoji3}<br/>{text3_1}<span>{text3Span}</span>{text3_2}
                        </Text>
                        <Text ref={textRef4}>
                            {emoji4}<br/>{text4_1}<span>{text4Span}</span>{text4_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text ref={textRef5}>
                            {emoji5}<br/>{text5_1}<span>{text5Span}</span>{text5_2}
                        </Text>
                        <Text ref={textRef6}>
                            {emoji6}<br/>{text6_1}<span>{text6Span}</span>{text6_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text ref={textRef7}>
                            {emoji7}<br/>{text7_1}<span>{text7Span}</span>{text7_2}
                        </Text>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Background>
    );
}
 
export default EsParaVosSi3;