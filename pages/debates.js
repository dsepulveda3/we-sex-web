import React, { useState, useEffect, useRef } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../components/general/Layout';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'reactstrap';
import HeadInfo from '../components/general/HeadInfo';
import Header from '../components/general/Header';
import Footer from '../components/general/Footer';
import DiscussionClosed from '../components/debates/DiscussionClosed';
import DiscussionsWithTabs from '../components/debates/DiscussionsWithTabs';
import { discussionCategoriesTitle, discussionsCategories } from '../data';
import { useRouter } from 'next/router';
import clienteAxios from '../config/axios';

import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel';

import 'swiper/css';
import 'swiper/css/pagination';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Pagination } from 'swiper';

const CarouselPers = styled(Carousel)`
  .carousel .slide {
    background-color: transparent;
    min-width: fit-content !important;
  }
`;

const CategoryButton = styled.button`
  background-color: transparent;
  border: none;
  transition: all 0.5s ease;
  text-align: center;
  margin-left: auto;
  margin-right: auto;
  width: fit-content;
  min-width: 10rem;
  @media (min-width: 600px) {
    /* width: 6.5rem; */
    /* max-width: 7.5rem; */
    /* width: 6rem; */
  }
  &:hover {
    img {
      transform: rotate(360deg) !important;
    }
  }
  img {
    border-radius: 6rem !important;
    background-color: var(--green);
    padding: 1.5rem !important;
    width: 7rem !important;
    height: 7rem !important;
    transition: all 0.5s ease;
  }
  p {
    color: black;
    overflow-wrap: break-word;
    font-size: 1.6rem;
    text-align: center;
    margin-right: auto;
    margin-left: auto;
    max-width: 10rem;
  }
  @media (max-width: 540px) {
    p {
      max-width: 8rem;
    }
  }
  /* max-width: 150px!important; */
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
    font-family: "Karla", sans-serif;
    color: black;

  }
`;

const Subtitle = styled.p`
    font-size: 2.0rem;
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
        font-size: 1.5rem;
        margin-bottom:0rem;
        text-align: center;
        
        margin-right: 3rem;
        margin-left: 3rem;
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

const DiscussionContainer = styled(Container)`
    padding-left: 0; /* Set left padding to 0 */
    padding-right: 0; /* Set right padding to 0 */
    margin-bottom: 2rem;
`;

const CenteredRow = styled(Row)`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0px;
`;


export default function Debates() {
  const router = useRouter();
  const [selectedCategory, setSelectedCategory] = useState('');
  const [discussionCategories, setDiscussionCategories] = useState([]);
  const [discussions, setDiscussions] = useState([]);
  const [searchString, setSearchString] = useState('');
  const [displayedDiscussions, setDisplayedDiscussions] = useState(8); // Number of discussions to show initially
  const [page, setPage] = useState(1);
  const discussionsPerPage = 8;

  const containerRef = useRef(null);

  const handleLoadMore = () => {
    // Increase the number of displayed discussions by the discussionsPerPage value
    setDisplayedDiscussions(displayedDiscussions + discussionsPerPage);
    setPage(page + 1);

  
    // // Scroll the button into view after a slight delay
    // setTimeout(() => {
    //   containerRef.current.scrollIntoView({ behavior: 'smooth', block: 'end' });
    // }, 100); // Adjust the delay time as needed (e.g., 100ms).
  };

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const categoria = urlParams.get('categoria');
    setSelectedCategory(categoria);
    getDiscussionCategories();
    if (categoria) {
      getDiscussionsWithCategory(categoria);
    } else {
      getDiscussions();
    }
  }, [selectedCategory, page]);

  function clickNewCategory(link) {
    router.push(`?categoria=${link.toLowerCase().replace(/ /g, '-')}`);
    setSelectedCategory(link.toLowerCase().replace(/ /g, '-'));
    resetToInitialState();
  }

  function resetToInitialState() {
    setPage(1);
    setDiscussions([]);
    setDisplayedDiscussions(8);
  }


  async function getDiscussionCategories() {
    await clienteAxios
      .get('/discussions/public-categories')
      .then((response) => {
        setDiscussionCategories(response.data);
      });
  }

  async function getDiscussionsWithCategory(category) {
    await clienteAxios
      .get(`/discussions/public/${category}?page=${page}&limit=${discussionsPerPage}`)
      .then((response) => {
        setDiscussions([...discussions, ...response.data.results]);
      });
  }

  async function getDiscussions() {
    await clienteAxios.get(
      `/search/public-discussions?page=${page}&limit=${discussionsPerPage}`
    ).then((response) => {
      setDiscussions([...discussions, ...response.data.results]);
    });
  }

  return (
    <>
      {/* Head */}
      <Head>
        <title>
          {'Debates | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      {/* Layout */}
      <Layout type={'nothidden'}>
        <div style={{ minHeight: 'calc(100vh - 160px)', paddingBottom: '10rem', overflowY: 'auto' }}>
          {/* Title Container */}
          <TitleContainer className='sec-title'>
            <Container>
              {/* Title */}
              <Title>DEBATES</Title>
              {/* Subtitle */}
              <Subtitle className='sec-subtitle first-uppercase'>
                {selectedCategory
                  ? discussionCategoriesTitle[selectedCategory]
                  : null}
              </Subtitle>
            </Container>
          </TitleContainer>
          <DiscussionContainer>
            {/* Swiper Carousel */}
            <div className='mx-auto text-center mt-5'>
              <Swiper
                slidesPerView={'auto'}
                spaceBetween={3}
                modules={[Pagination]}
                className='mySwiper'
              >
                
                {/* Category Buttons */}
                {discussionCategories.map((category) => (
                  <SwiperSlide key={category.order}>
                    <CategoryButton
                      onClick={() => clickNewCategory(category.name)}
                      key={category.order}
                    >
                      <Image
                        src={`/img/discussions/${
                          discussionsCategories[category.order - 1].img
                        }`}
                        alt={category.name}
                        width='100%'
                        height='100%'
                        className={
                          selectedCategory === category?.name.toLowerCase()
                            ? 'd-selected-category-primary'
                            : null
                        }
                      />
                      <p>{discussionCategoriesTitle[category.name]}</p>
                    </CategoryButton>
                  </SwiperSlide>
                ))}
              </Swiper>
            </div>
            <CenteredRow className='mt-4' style={{justifyContent: "center", flexWrap: "wrap"}}>
            {/* Displayed Discussions */}
            {discussions.slice(0, displayedDiscussions).map((discussion) => (
              <Col xl={3} lg={4} md={6} xs={12} key={discussion._id} style={{ flex: '0 0 280px' }}>
                <DiscussionClosed discussion={discussion} type= 'debatessection' />
              </Col>
            ))}
          </CenteredRow>
          </DiscussionContainer>
          {/* Load More Button */}
          <div style={{ padding: '10px 0', textAlign: 'center' }}>
          <Button onClick={handleLoadMore} ref={containerRef}>Load More</Button>
          
        </div>
        </div>
      </Layout>
    </>
  );
}