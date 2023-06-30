import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import "swiper/css";
import "swiper/css/pagination";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation, Scrollbar, A11y } from "swiper";

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
    font-size: 5rem;
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
    font-size: 2.2rem;
    text-align:center;
    margin-bottom: 1.5rem;
    padding: .5rem 1rem;
    /* vertical-align: middle; */



    transition: all 1s ease;

    /* SWIPER */
    /* border: 2px solid white; */
    /* border-radius: 5rem; */
    padding: 0;
    cursor: move;
     
    /* &:hover {
        background-color: white;
        color: var(--violet);
    } */
    
    span {
        color: var(--green);
        font-weight: bold;
    }
    @media(max-width: 540px){
        margin-bottom: 1rem;
        font-size: 2rem;
    }
`;


const EsParaVosSi4 = () => {
    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title>En esta guía <span>aprendé</span></Title>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Navigation, Pagination, Scrollbar, A11y]}
                    className="mySwiper"
                    // navigation
                    // pagination={{ clickable: true }}
                    scrollbar={{ draggable: true }}

                    // mousewheel={true}
                >
                    <SwiperSlide>
                        <Text>
                            🤟<br/><span>Paso a paso</span> cómo tener una experiencia anal placentera.
                        </Text>

                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            🗨️<br/>Información sobre <span>cómo comunicarte con tu pareja</span> sobre tus deseos y límites en relación al sexo anal.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            🧼<br/>Cómo tener una <span>buena higiene</span>.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            📢<br/>Los <span>diferentes tipos de lubricantes</span> disponibles y cómo usarlos correctamente para evitar el dolor o la incomodidad.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            👀<br/>Los <span>riesgos asociados con el sexo anal</span>,<br/> cómo minimizarlos y cómo cuidar tu salud.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                        🥒<br/><span>Diferentes juguetes sexuales</span> y cómo usarlos de forma segura y placentera.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            🗨️<br/>Información sobre <span>cómo comunicarte con tu pareja</span> sobre tus deseos y límites en relación al sexo anal.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            😬<br/>Cómo evitar <span>dolor</span> innecesario en el sexo anal.
                        </Text>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Background>
    );
}
 
export default EsParaVosSi4;