import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import Layout from '../components/general/Layout';
import styled from '@emotion/styled';
import Articles from '../components/articles/Articles';
import { Carousel } from 'react-responsive-carousel';
import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';
// import { articles } from '../data';
import clienteAxios from '../config/axios';
import { articlesCategoriesTitle } from '../data';


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

const Subtitle = styled.p`
    font-size: 2.0rem;
    font-weight: bold;
    color: black;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    margin-left: 0rem;
    font-family: "Karla", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-bottom:1rem;
        text-align: left;
        
        margin-right: 3rem;
        margin-left: 3rem;
    }
`;

const TitleContainer = styled.div`
    margin-top: 6.7rem;
    // background-color: var(--green);
    background-color: white;
    @media (max-width: 540px) {
      margin-top: 8rem;
    }

  }
`;

const Title = styled.div`
    font-size: 3.5rem;
    font-weight: bold;
    color: black;
    font-family: "Karla", sans-serif;
  }
`;


const CarouselPers = styled(Carousel)`
  .carousel .slide {
    background-color: transparent;
    min-width: fit-content !important;
  }
`;

export default function Articulos() {
  const searchString = 0;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [articlesCategories, setArticlesCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const router = useRouter();

  useEffect(() => {
    const searchParams = new URLSearchParams(window?.location.search);
    const categoria = searchParams.get('categoria');
    setSelectedCategory(categoria);
    getArticlesCategories();
    if (categoria) {
      getArticlesByCategory(categoria);
    } else {
      getArticles();
    }
  }, [selectedCategory]);

  async function getArticlesCategories() {
    await clienteAxios.get('/articles/categories').then((response) => {
      setArticlesCategories(response.data);
    });
  }

  async function getArticles() {
    await clienteAxios.get('/articles/all-public').then((response) => {
      setArticles(response.data.results);
    });
  }

  async function getArticlesByCategory(category) {
    await clienteAxios.get(`/articles/public/${category}`).then((response) => {
      setArticles(response.data.results);
    });
  }

  function clickNewCategory(link) {
    router.push(
      `/articulos?categoria=${link.toLowerCase().replace(/ /g, '-')}`
    );

    setSelectedCategory(link.toLowerCase().replace(/ /g, '-'));
  }

  return (
    <>
      <Head>
        <title>
          {'Artículos | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout type={'nothidden'}>
        {/* <div className='sec-title'>
          <Container>
            <h1>Artículos</h1>
            <p className='sec-subtitle first-uppercase'>
              {selectedCategory
                ? articlesCategoriesTitle[selectedCategory]
                : null}
            </p>
          </Container>
        </div> */}

        
        
        <Container style={{paddingTop: '2rem', paddingBottom: '5rem'}}>
          <TitleContainer>
          <Title>ARTÍCULOS</Title>
            <p className='sec-subtitle first-uppercase'>
              {selectedCategory
                ? articlesCategoriesTitle[selectedCategory]
                : null}
            </p>
          </TitleContainer>
          
          <div>
            <Subtitle>Categorías</Subtitle>
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
                {articlesCategories.map((cat) => (
                  <SwiperSlide key={cat.order}>
                    <OneCategory
                      onClick={() => {
                        clickNewCategory(cat.name);
                      }}
                      className={
                        cat?.name.toLowerCase() === selectedCategory
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
          <Articles
            articles={articles}
            selectedCategory={selectedCategory}
            search={searchString}
          />
        </Container>
      </Layout>
    </>
  );
}
