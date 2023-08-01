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
    // background-image: url("/img/cta-bg.jpg");
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
  const [articles, setArticles] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (selected === 'last') {
      getArticles();
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
              {articles.length === 0 ? (
                <Col>No hay comentarios en tendencia</Col>
              ) : (
                articles.slice(0, 7).map((art) => {
                  return (
                    <CustomSwiperSlide key={art._id}>
                       <SurveyClosed article={art} key={art._id} />
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