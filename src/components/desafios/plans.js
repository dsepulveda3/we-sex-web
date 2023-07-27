import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import Plan from '@/components/desafios/plan';
import { Swiper, SwiperSlide } from "swiper/react";
// import 'swiper/swiper-bundle.css';

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";


const Background = styled.div`
    // background-image: url("/img/cta-bg.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 2rem;
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

const Title = styled.h1`
    color: var(--violet);
    font-size: 3.5rem;
    font-weight: bold;
    text-align: center;

    // font-family: "Averia Libre", sans-serif;
    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 4.0rem;
        margin-bottom:2rem;
        
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;

const Subtitle = styled.h1`
    color: white;
    text-align: center;
    
    font-size: 2.0rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    font-family: "Averia Libre", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        font-size: 1.5rem;
        margin-bottom:2rem;
        
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;


const ClickSwiper = styled.div`
  display: flex;
  justify-content: center; /* Center the cards horizontally */
  @media (max-width: 540px) {
    /* Add any mobile-specific styles here */
  }
`;

const CustomSwiperSlide = styled(SwiperSlide)`
  flex-shrink: 0;
  width: auto !important;
  display: flex;
  justify-content: center; /* Center the cards horizontally */
`;


const CustomNextArrow = styled.img`
  @media (max-width: 540px) {
    display: none;
  }
  margin-right: 2.7rem;
  margin-top: 0.5rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
`;

const CustomPrevArrow = styled.img`
  @media (max-width: 540px) {
    display: none;
  }
  margin-left: 2.7rem;
  margin-top: 0.5rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
}
`;

const Grid = styled(Row)`
  border: white solid;
  border-radius: 1rem;
  padding: 1.5rem;
`;

const Category = styled(Col)`
  border-top: white solid;
  border-left: white solid;
  border-right: white solid;
  border-top-left-radius: 1.5rem;
  border-top-right-radius: 1.5rem;
  /* margin: 0 0.5rem; */
  transition: all 0.5s ease;
  &:hover {
    cursor: pointer;
    background-color: white;
    color: var(--violet);
  }
  @media (max-width: 540px) {
    margin: 0;
    /* font-size: 1rem; */
    border-top-left-radius: 1.2rem;
    border-top-right-radius: 1.2rem;
  }
`;

const Plans = () => {
  
  const [discussions, setDiscussions] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
      getRecentDiscussions();
  },);

  const getRecentDiscussions = () => {
    const hardcodedDiscussions = [
      {
        _id: '1',
        title: 'Plan para parejas',
        subtitle: '',
        
      },
      {
        _id: '2',
        title: 'Plan para parejas + cajita feliz',
        subtitle: '',
        
      },
      {
        _id: '3',
        title: 'Plan premium',
        subtitle: '',
        
      },
      ,
    ];

    setDiscussions(hardcodedDiscussions);
  };
  
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
          <Title><span>Precios</span></Title>
          <Subtitle>Elige entre nuestros 3 planes</Subtitle>
          <ClickSwiper>
            <Swiper
              direction="horizontal" // Set direction to horizontal
              slidesPerView={1} // Show 1 card at a time
              spaceBetween={20}
              navigation={{ nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' }}
            >
              {discussions.length === 0 ? (
                <Col>No hay planes disponibles</Col>
              ) : (
                discussions.slice(0, 3).map((d) => {
                  return (
                    <SwiperSlide key={d._id}>
                      <CustomSwiperSlide>
                        <Plan discussion={d} />
                      </CustomSwiperSlide>
                    </SwiperSlide>
                  );
                })
              )}
            </Swiper>
            {/* <CustomNextArrow src="/img/ico/next_button_violet.png" className="swiper-button-next" onClick={handleNext} />
            <CustomPrevArrow src="/img/ico/previous_button_violet.png" className="swiper-button-prev" onClick={handlePrev} /> */}
          </ClickSwiper>
        </Container>
      </Background>
    </>
  );
};

export default Plans;