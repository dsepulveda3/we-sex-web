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

const Button = styled.a`
    font-family: "Karla", sans-serif;
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    margin: 1rem auto;
    border: none;
    transition: all .5s ease;
    background-color: var(--green);
    color: white;
    font-size: 2.1rem;
    &:hover {
        background-color: var(--violet);
    }

    margin-bottom: 10rem;

`;

export default function Articulos() {
  const searchString = 0;
  const [selectedCategory, setSelectedCategory] = useState('');
  const [articlesCategories, setArticlesCategories] = useState([]);
  const [articles, setArticles] = useState([]);
  const [displayedArticles, setDisplayedArticles] = useState(8);
  const [page, setPage] = useState(2);

  function resetToInitialState() {
    setPage(2);
    setDisplayedArticles(8);
  }

  useEffect(() => {
    getArticlesCategories();
    resetToInitialState();
    if (selectedCategory !== '') {
      getArticlesByCategoryInitial(selectedCategory, page);
    } else {
      getArticlesInitial(page);
    }
  }, [selectedCategory]);

  async function getArticlesCategories() {
    await clienteAxios.get('/articles/categories').then((response) => {
      setArticlesCategories(response.data);
    });
  }

  async function getArticlesInitial(page) {
    const response1 = await clienteAxios.get(`/articles/all-public?page=${page - 1}`);
    const response2 = await clienteAxios.get(`/articles/all-public?page=${page}`);
    setArticles([...response1.data.results, ...response2.data.results]);
  }

  async function getArticlesByCategoryInitial(category, page) {
    const response1 = await clienteAxios.get(`/articles/public/${category}?page=${page - 1}`);
    const response2 = await clienteAxios.get(`/articles/public/${category}?page=${page}`);
    setArticles([...response1.data.results, ...response2.data.results]);
  }

  async function getArticles(page) {
    const response = await clienteAxios.get(`/articles/all-public?page=${page}`);
    setArticles([...articles, ...response.data.results]);
  }

  async function getArticlesByCategory(category, page) {
    const response = await clienteAxios.get(`/articles/public/${category}?page=${page}`);
    setArticles([...articles, ...response.data.results]);
  }

  async function clickNewCategory(link) {
    setSelectedCategory(link.toLowerCase().replace(/ /g, '-'));
  }

  const handleLoadMore = () => {
    setPage(page + 1);
    setDisplayedArticles(displayedArticles + 4);
  }

  useEffect(() => {
    if (page !== 2){
      if (selectedCategory){
        getArticlesByCategory(selectedCategory, page);
      } else {
        getArticles(page);
      }
    }
  }, [page]);

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
            articles={articles.slice(0, displayedArticles)}
            selectedCategory={selectedCategory}
            search={searchString}
          />
          <div style={{ padding: '10px 0', textAlign: 'center' }}>
            <Button onClick={handleLoadMore} >Ver mas</Button>
          </div>
        </Container>
      </Layout>
    </>
  );
}
