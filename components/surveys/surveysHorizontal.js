import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import SurveyClosed from './surveyClosed';
import Axios from '../../config/axios';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Background = styled.div`
    background-color: white;
    // background-image: url("/img/cta-bg.webp");
    // background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 8rem;
    padding-bottom: 2rem;
    /* min-height: 85vh; */
    /* margin-top: 3rem; */
    position: relative;

    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
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
  margin-top: 4rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
`;

const CustomPrevArrow = styled.img`
    @media (max-width: 540px) {
    display: none;
    }
    margin-left: 2.7rem;
    margin-top: 4rem;
    height: 27px; /* Set the desired height */
    transform: scale(2);
}
`;


const Title = styled.div`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: black;
    margin-left: 3rem;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 2.0rem;
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
    background-color: white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0.5rem;
`;


const SwiperWrap = styled(Swiper) `
    position: relative;
    padding-right: 0px;
`;

const LineStyled = styled.div`
    border-bottom: 2px solid grey; /* Add a 1px solid black line at the bottom */
    width: 50%; /* Set the width to 50% of the screen */
    margin: 0 auto; /* Center the component horizontally */
`;

const SurveyWithTabs = () => {
  const [selected, setSelected] = useState('last');
  const [surveys, setSurveys] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (selected === 'last') {
      getSurveys();
    } 
    // else if (selected === 'trending') {
    //   getTrendingDiscussions();
    // } else {
    //   getRandomDiscussions();
    // }
  }, [selected]);
 

  async function getArticles() {
    await Axios.get('/articles/all-public').then((response) => {
      setArticles(response.data.results);
    });
  }

  async function getSurveys() {
    const surveys = [{
      "count": 152,
      "current": 1,
      "next": 2,
      "results": [
          {
              "title": "Estando soltero/a, tendrías un polvito con tu ex?",
              "createdAt": "2022-10-30T03:00:00.000Z",
              "user": "62a0c39f1cf6cd5fd081a682",
              "category": {
                  "_id": "6149ff12bd33944b3264f453",
                  "name": "fantasies",
                  "order": 3
              },
              "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/fantasias.jpg",
              "subtitle": "Relato erótico por la Dra Bárbara García"
          },
          {
              "_id": "635d3610cb774808619fe684",
              "likes": 30,
              "comments": 6,
              "title": "Le das importancia al cuerpo",
              "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/respuesta-sexual-labios (2).jpg",
              "category": {
                  "_id": "5ffd919195fd260210539e79",
                  "name": "human-sexual-response",
                  "order": 6
              },
              "createdAt": "2022-10-28T03:00:00.000Z",
              "user": "606aa3b98fa9ba6f7ff7d173"
          },
          {
              "_id": "63585e72cb774808618d29cf",
              "likes": 26,
              "comments": 1,
              "title": "¿Estarías dispuesto/a a probar un juego de roles en la intimidad?",
              "subtitle": "La salud oral también es parte de nuestra salud sexual",
              "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/anticonceptivos.jpg",
              "category": {
                  "_id": "5ffd919795fd260210539e7b",
                  "name": "contraception",
                  "order": 8
              },
              "createdAt": "2022-10-23T03:00:00.000Z",
              "user": "62a0c39f1cf6cd5fd081a682"
          },
          {
              "_id": "635057d8cb774808616f35b3",
              "likes": 55,
              "comments": 7,
              "title": "¿Te sientes cómodo/a explorando nuevas posiciones sexuales?",
              "createdAt": "2022-10-16T03:00:00.000Z",
              "user": "62a0c39f1cf6cd5fd081a682",
              "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/respuesta-sexual-labios (1).jpg",
              "category": {
                  "_id": "5ffd919195fd260210539e79",
                  "name": "human-sexual-response",
                  "order": 6
              },
              "subtitle": "El mejor momento de la relación sexual"
          },
          {
              "_id": "6347022dcb7748086147075e",
              "likes": 131,
              "comments": 7,
              "createdAt": "2022-10-12T03:00:00.000Z",
              "user": "62a0c39f1cf6cd5fd081a682",
              "category": {
                  "_id": "5ffd919a95fd260210539e7c",
                  "name": "techniques",
                  "order": 1
              },
              "image": "https://wesex-data.s3-sa-east-1.amazonaws.com/articledata/images/tecnicas (1).jpg",
              "title": "¿Has tenido sexo en un lugar público?",
              "subtitle": "¿Cómo guiar a quien nos realiza un cunny?"
          }
      ]
  }]
  setSurveys(surveys[0].results);
  }

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
    <>
      <Background>
        <Container>
            <VioletWrap>
                <Title>LA GENTE SE PREGUNTA ...</Title>
            
          {/* <Title>Articulos</Title>
          <Subtitle>Aprende de los mejores expertos de sexualidad.</Subtitle> */}
          <div>
            <SwiperWrap
              slidesPerView={'auto'}
              spaceBetween={0}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              onSwiper={setSwiper}
              onSlideChange={() => {}}
              
            >
              {surveys.length === 0 ? (
                <Col>No hay comentarios en tendencia</Col>
              ) : (
                surveys.slice(0, 7).map((sur) => {
                  return (
                    <CustomSwiperSlide key={sur._id}>
                       <SurveyClosed survey={sur} key={sur._id} />
                    </CustomSwiperSlide>
                  );
                })
              )}

            </SwiperWrap>
            
            <CustomNextArrow src='../img/icons/next_button_violet.png' className="swiper-button-next" onClick={handleNext} />
            <CustomPrevArrow src='../img/icons/previous_button_violet.png' className="swiper-button-prev" onClick={handlePrev} />
          </div>
          </VioletWrap>
        </Container>
        <LineStyled />
      </Background>
    </>
  );
};

export default SurveyWithTabs;