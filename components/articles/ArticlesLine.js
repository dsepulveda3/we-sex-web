import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
import Link from 'next/link';
import ArticleClosed from './ArticleClosed';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';

const ArticlesLine = ({ articles }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={1}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation
      className='mySwiper'
      style={{ padding: '0 2rem' }}
      loop={true}
    >
      {articles.length > 0 ? (
        articles.map((art) => {
          return (
            <SwiperSlide key={art._id}>
              <ArticleClosed article={art} />
            </SwiperSlide>
          );
        })
      ) : (
        <div>No hay articulos disponibles</div>
      )}
    </Swiper>
  );
};

export default ArticlesLine;
