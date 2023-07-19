import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
import { articlesCategoriesTitle } from '../../data';

const OneCategory = styled.button`
  /* float: left!important;  */
  display: block;
  /* width: 95%; */
  /* width: fit-content; */
  margin: 0.5rem !important;
  color: white;
  outline: none;
  border: none;
  font-size: 1.8rem;
  border-radius: 3rem;
  background-color: var(--violet);
  padding: 0.3rem 1.5rem;
  transition: all 0.5s ease;
  &:hover {
    background-color: var(--violet);
    transform: rotate(-5deg);
  }
  @media (max-width: 540px) {
    font-size: 1.6rem;
    padding: 0.3rem 1.3rem;
    margin: 0.2rem;
  }
`;

const RowPers = styled(Row)`
  @media (max-width: 540px) {
    justify-content: center;
  }
`;

const Title = styled.h2`
  margin-bottom: 0.5rem;
  @media (max-width: 540px) {
    margin-bottom: 0.3rem;
  }
`;

const CarouselPers = styled(Carousel)`
  .carousel .slide {
    background-color: transparent;
    min-width: fit-content !important;
  }
`;

const Categories = ({ categories, selectedCategory }) => {
  const router = useRouter();
  const [category, setCategory] = useState(selectedCategory);
  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoria = urlParams.get('categoria');
    setCategory(categoria);
  }, []);

  function clickNewCategory(link) {
    router.push(`/articulos?categoria=${link.toLowerCase()}`);
  }
  return (
    <div>
      <Title>Categorías</Title>
      <RowPers className='mx-auto text-center'>
        <Swiper
          slidesPerView={'auto'}
          // loop={true}
          spaceBetween={3}
          // pagination={{
          //     clickable: true,
          // }}
          modules={[Pagination]}
          className='mySwiper'
        >
          {categories.map((cat) => (
            <SwiperSlide key={cat.order}>
              <OneCategory
                onClick={() => {
                  clickNewCategory(cat.name);
                  setCategory(cat.name.toLowerCase());
                }}
                className={
                  cat?.name?.toLowerCase() === category
                    ? 'a-selected-category'
                    : null
                }
              >
                {articlesCategoriesTitle[cat.name]}
              </OneCategory>
            </SwiperSlide>
          ))}
        </Swiper>
      </RowPers>
    </div>
  );
};

export default Categories;
