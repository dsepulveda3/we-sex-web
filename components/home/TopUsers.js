import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
import Link from 'next/link';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const Title = styled.p`
  text-align: center;
  color: var(--violet);
  font-weight: bold;
  font-size: 3rem;
  margin-bottom: 2.5rem;
  @media (max-width: 540px) {
    font-size: 2.5rem;
  }
`;
const User = styled.div`
  /* max-width: 19%; */
  width: fit-content;
  margin-bottom: 1rem;
  /* float: left; */
  text-align: center;
  margin-right: 2rem;
  img {
    border-radius: 15rem;
    width: 8rem !important;
    height: 8rem !important;
    object-fit: cover;
    border: 1px solid black;
    margin-bottom: 0.5rem;
    transition: all 0.5s ease;
  }
  p {
    text-align: center;
    color: var(--violet);
  }
  @media (min-width: 991px) {
    img {
      width: 10rem !important;
      height: 10rem !important;
      margin-right: 1rem;
    }
  }
`;

const TopUsers = () => {
  const [ranking, setRanking] = useState();
  useEffect(() => {
    getRanking();
    // eslint-disable-next-line
  }, []);
  async function getRanking() {
    clienteAxios.get('/ranking/discussions').then((response) => {
      setRanking(response.data);
    });
  }
  return (
    <Container className='py-5 mx-auto'>
      <Title>Ranking de debatidores</Title>
      {/* <Row style={{justifyContent: 'center'}}> */}
      <Swiper
        slidesPerView={'auto'}
        spaceBetween={3}
        modules={[Pagination]}
        className='mySwiper'
      >
        {ranking
          ? ranking.map((item) => (
              <SwiperSlide key={item.rank}>
                <User key={item.rank}>
                  <img
                    src={item.user.avatar}
                    alt={`Foto del usuario @${item.user.user}`}
                  />
                  <Link href={`/perfil/${item.user.user}`}>
                    <p>@{item.user.user}</p>
                  </Link>
                </User>
              </SwiperSlide>
            ))
          : null}
      </Swiper>
      {/* </Row> */}
    </Container>
  );
};

export default TopUsers;
