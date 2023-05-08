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


const EsParaVosSi3 = () => {
    return (
        <Background id="paravos">
            <Container style={{paddingTop: "5rem", paddingBottom: "5rem"}}>
                <Title>Esta Master es <span>para ti</span> si buscas</Title>

                <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Text>
                            👀<br/><span>Cómo y dónde</span> inicio mis encuentros.
                        </Text>
                        <Text>
                            🗨️<br/><span>Acuerdos sexuales</span>: sexting, lista de deseos, cómo hacer sexy el consentimiento.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            🧼<br/><span>Técnicas de relajación</span> para conectar con el encuentro.
                        </Text>
                        <Text>
                            🍆<br/><span>Prácticas eróticas</span> sexo oral, vaginal y anal.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            💦<br/>Masturbación<span> para sentir más.</span>
                        </Text>
                        <Text>
                            🤟<br/><span>Masajes eróticos</span> personales y compartidos con y sin ropa.
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            👀<br/><span>Respiración</span> orgásmica y no orgásmica.
                        </Text>
                    </SwiperSlide>
                </Swiper>
            </Container>
        </Background>
    );
}
 
export default EsParaVosSi3;