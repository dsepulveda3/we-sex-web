import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import DiscussionClosed from './discussionClosed2';
import Axios from '../../../../config/axios';
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/swiper-bundle.css';
import { Pagination, Navigation } from "swiper";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const Background = styled.div`
    // background-image: url("/img/cta-bg.jpg");
    // background-color: var(--violet);
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
    color: black;
    font-size: 3.5rem;
    font-weight: bold;

    // font-family: "Averia Libre", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        font-size: 4.0rem;
        margin-bottom:2rem;
        
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;

const Subtitle = styled.h1`
    color: black;
    font-size: 2.0rem;
    margin-top: 0.5rem;
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
@media (max-width: 540px) {
    display: none;
}
`;


const CustomSwiperSlide = styled(SwiperSlide)`
  flex-shrink: 0;
  width: auto !important;
  
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

const DiscussionsWithTabs = () => {
  const [selected, setSelected] = useState('last');
  const [discussions, setDiscussions] = useState([]);
  const [swiper, setSwiper] = useState(null);

  useEffect(() => {
    if (selected === 'last') {
      getRecentDiscussions();
    }
  }, [selected]);
  
  // useEffect(() => {
  //   if (selected === 'trending') {
  //     getTrendingDiscussions();
  //   } else if (selected === 'last') {
  //     getRecentDiscussions();
  //   } else {
  //     getRandomDiscussions();
  //   }
  // }, [selected]);

  // async function getTrendingDiscussions() {
  //   await Axios.get('/discussions/trending-public').then((response) => {
  //     setDiscussions(response.data);
  //   });
  // }

  async function getRecentDiscussions() {
    await Axios.get('/discussions/recent-public').then((response) => {
      setDiscussions(response.data);
      console.log("Va info discusiones");
      console.log(response.data);
    });
  }

  // async function getRandomDiscussions() {
  //   await Axios.get('/discussions/random').then((response) => {
  //     setDiscussions(response.data);
  //   });
  // }

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
          <Title>Debates</Title>
          <Subtitle>Escrito por personas para personas.</Subtitle>
          <div>
            
              {discussions.length === 0 ? (
                <Col>No hay comentarios en tendencia</Col>
              ) : (
                discussions.slice(0, 3).map((d) => {
                  return (
                    <CustomSwiperSlide>
                      <DiscussionClosed discussion={d} />
                    </CustomSwiperSlide>
                  );
                })
              )}

          </div>
        </Container>
      </Background>
    </>
  );
};

export default DiscussionsWithTabs;

{/*             <Swiper
                    slidesPerView={"auto"}
                    spaceBetween={20}
                    modules={[Pagination]}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <Text>
                            {emoji1}<br/>{text1_1}<span>{text1Span}</span>{text1_2}
                        </Text>
                        <Text>
                            {emoji2}<br/>{text2_1}<span>{text2Span}</span>{text2_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            {emoji3}<br/>{text3_1}<span>{text3Span}</span>{text3_2}
                        </Text>
                        <Text>
                            {emoji4}<br/>{text4_1}<span>{text4Span}</span>{text4_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            {emoji5}<br/>{text5_1}<span>{text5Span}</span>{text5_2}
                        </Text>
                        <Text>
                            {emoji6}<br/>{text6_1}<span>{text6Span}</span>{text6_2}
                        </Text>
                    </SwiperSlide>
                    <SwiperSlide>
                        <Text>
                            {emoji7}<br/>{text7_1}<span>{text7Span}</span>{text7_2}
                        </Text>
                    </SwiperSlide>
                </Swiper> */}