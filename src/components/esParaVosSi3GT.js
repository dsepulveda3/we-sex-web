import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

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
        font-size: 4rem;
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


const EsParaVosSi3GT = () => {
    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title>Esta guía de Trantra es <span>para ti</span> si buscas</Title>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Text>
                            💗<br/><span>Introducirte al tanta</span> y aplicarlo en tu vida sexual.
                        </Text>
                        <Text>
                            ✨<br/>Tener orgasmos <span>más profundos y duraderos</span>.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            🏋️‍♀️<br/>Practicar <span>tantra con tu pareja</span>.
                        </Text>
                        <Text>
                            🍆<br/>Incrementar las sensaciones de<span> placer en tu vida</span>.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Text>
                            🤝<br/><span>Acuerdos sexuales:</span> te enseñamos a llevar a cabo tus fantasías con tus parejas.
                        </Text> */}
                        <Text>
                            🫦<br/>Técnicas de <span>liberación emocional</span>.
                        </Text>
                        <Text>
                            🤟<br/><span>Técnicas</span> para llevar tus encuentros al siguiente nivel.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        {/* <Text>
                            🤟<br/><span>Técnicas</span> para llevar tus encuentros al siguiente nivel.
                        </Text> */}
                        <Text>
                            🧘<br/>Una <span>meditación guiada</span> vía audio.
                        </Text>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Background>
    );
}
 
export default EsParaVosSi3GT;