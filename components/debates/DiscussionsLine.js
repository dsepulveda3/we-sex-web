import React, { useEffect, useState } from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
import Link from 'next/link';
import { discussions } from '../../data';

import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination } from 'swiper';
import DiscussionClosed from './DiscussionClosed';

const DiscussionsLine = ({ discussions }) => {
  return (
    <Swiper
      slidesPerView={'auto'}
      spaceBetween={3}
      modules={[Pagination, Navigation]}
      pagination={{ clickable: true }}
      navigation={true}
      className='mySwiper'
      style={{ padding: '0 2rem' }}
    >
      {discussions.length > 0 ? (
        discussions.map((discussion) => (
          <SwiperSlide key={discussion._id}>
            <DiscussionClosed discussion={discussion} icon={true} />
          </SwiperSlide>
        ))
      ) : (
        <div>No hay discusiones disponibles</div>
      )}
    </Swiper>
  );
};

export default DiscussionsLine;
