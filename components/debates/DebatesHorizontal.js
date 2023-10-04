import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import DiscussionClosed from './DiscussionClosed';
import Axios from '../../config/axios';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Background = styled.div`
    // background-image: url("/img/landing/cta-bg.jpg");
    background-color: white;
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    padding-top: 0rem;
    padding-bottom: 0rem;
    margin-bottom: 0rem;
    
    /* min-height: 85vh; */
    /* margin-top: 3rem; */
    position: relative;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:0rem;
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
  
  // width; 20px;
  // height: 30px;
  @media (max-width: 540px) {
    display: none;
  }
  margin-right: 2.7rem;
  margin-top: 2.2rem;
  height: 27px; /* Set the desired height */
  transform: scale(2);
`;

const CustomPrevArrow = styled.img`
@media (max-width: 540px) {
  display: none;
}
margin-left: 2.7rem;
margin-top: 2.2rem;
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

const VioletWrap = styled.div `
    border-radius: 1.5rem;
    background-color: #white;
    padding-top: 2rem;
    padding-bottom: 2rem;
    margin: 0.5rem;
`;

const More = styled.a`
    color: black;
    text-decoration: underline; /* Add underline to the link */
`;


const DiscussionsWithTabs = () => {
  const [selected, setSelected] = useState('last');
  const [discussions, setDiscussions] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (selected === 'last') {
      getRecentDiscussions();
    }
  }, [selected]);
  

  async function getRecentDiscussions() {
    await Axios.get('/discussions/public-randomized').then((response) => {
      setDiscussions(response.data);
      console.log("Va info discusiones");
      console.log(response.data);
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
                <TitleContainer>
                    <Title>DEBATES</Title>
                    <More href="/debates">VER MÁS</More>
                </TitleContainer>
                <Subtitle>Escrito por personas para personas.</Subtitle>
                

            
          <div>
            <Swiper
              slidesPerView={'auto'}
              spaceBetween={0}
              modules={[Pagination, Navigation]}
              className="mySwiper"
              onSwiper={setSwiper}
              onSlideChange={() => {}}
              
            >
              {discussions.length === 0 ? (
                <Col>No hay comentarios en tendencia</Col>
              ) : (
                discussions.slice(0, 7).map((d) => {
                  return (
                    <CustomSwiperSlide key={d._id}>
                      <DiscussionClosed discussion={d} />
                    </CustomSwiperSlide>
                  );
                })
              )}
            </Swiper>
           
                <CustomNextArrow src='../img/icons/next_button_violet.png' className="swiper-button-next" onClick={handleNext} />
                <CustomPrevArrow src='../img/icons/previous_button_violet.png' className="swiper-button-prev" onClick={handlePrev} />
            
          </div>
          </VioletWrap>
        </Container>
        
      </Background>
    </>
  );
};

export default DiscussionsWithTabs;