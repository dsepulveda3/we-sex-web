import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Row, Col, NavLink } from 'reactstrap';
import { useRouter } from 'next/router';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/general/Layout';
import Categories from '../../components/articles/Categories';
import ArticleClosed from '../../components/articles/ArticleClosed';
import Comment from '../../components/general/Comment';
import WriteComment from '../../components/general/WriteComment';
import {
  articles,
  articlesCategories,
  articlesCategoriesTitle,
  comments,
} from '../../data';
import { downloadAppAlert } from '../../helpers';
import { RWebShare } from 'react-web-share';
import clienteAxios from '../../config/axios';

//

// Generar un enlace por cada slug
export async function getStaticPaths() {
  const slugs = await clienteAxios.get('/articles/all-public');
  const paths = slugs.data.results.map((articleItem) => ({
    // Aca va un array con los SLUGS
    params: { articleItem: articleItem._id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { articleItem } = params;
  const response = await clienteAxios.get(
    `/articles/public/detail/${articleItem}`
  );
  return {
    props: {
      articleItem: response.data,
    },
    revalidate: 60,
    notFound: false,
  };
}

const ContainerAll = styled.div`
  padding-top: 8.0rem;
  
  @media (max-width: 540px){
    padding-top: 8.5rem;
    padding-bottom: 8rem;

  }
`;


const ArticleTitle = styled.div`
  margin-top: 0.1rem;
  padding: 1rem;
  background-color: var(--violet);
  text-align: center;
  h1 {
    margin-bottom: 0.5rem;
    color: white;
    text-align: left;
  }
  a {
    background-color: var(--green);
    width: fit-content;
    border-radius: 2rem;
    padding: 0.3rem 1.5rem;
    margin: 0.5rem auto;
    transition: all 0.5s ease;
  }
  a:hover {
    padding: 0.3rem 2rem;
  }
  @media (max-width: 540px) {
    h1 {
      font-size: 3.5rem !important;
      margin-bottom: 0.5rem;
    }
    a {
      font-size: 2rem;
    }
  }
`;

const Published = styled.div`
  display: flex;
  color: black;
  /* font-size: 1rem; */
  margin-top: 2rem;
  margin-left: 1rem;
  
  a {
    /* margin-left: .7rem; */
    /* font-size: 1rem; */
    font-weight: bold;
  }
  @media (max-width: 540px) {
    /* font-size: .8rem; */
    margin-left: 2rem;
    a {
      /* font-size: .8rem; */
    }
  }
  img {
    width: 8rem;
    height: 8rem;
    border-radius: 4rem;
    margin-right: 1rem;
  }
  span {
    font-size: 1.6rem;
  }
`;

const Links = styled.div`
  /* font-size:1rem;  */
  margin-top: 1rem;
  margin-bottom: 1.5rem;

  /* max-width: 30rem; */
  @media (max-width: 540px) {
    /* max-width: 35rem; */
  }

  button {
    background-color: transparent;
    outline: none;
    border: none;
    /* float: left; */
    width: fit-content;
    max-width: 30%;
    margin-right: 0.2rem !important;
    color: black;
  }
  img {
    width: 2rem !important;
    margin-right: 0.8rem !important;
    margin-top: -0.8rem;
  }
`;

const CommentsTitle = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  font-family: "Karla", sans-serif;
  color: black;
  text-align: left;
  font-size: 2rem;
  @media (max-width: 540px) {
    margin-top: 3rem;
    text-align: center;
  }
`;

const Title = styled.h2`
    margin-top: 1rem;
    margin-bottom: 4rem;
    font-size: 2.7rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
    color: white;
    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--violet); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        padding-bottom: 1rem;
        color: white; /* Set the text color to white */
    }
    
    @media(max-width: 540px){
        font-size: 1.8rem;
        padding-top: 0rem;
        padding-bottom: 0rem;
    }
`;

const ArticleText = styled(Col)`
  color: black;
  margin-bottom: 3rem;
  @media (max-width: 540px) {
    /* font-size:.9rem; */
  }
`;

const Articulo = styled(Col)`
  margin-bottom: 3rem;
  color: var(--violet);
  margin-top: 1rem;
  img {
    max-width: 6rem;
    width: 15%;
    margin-right: 1rem;
  }
  p {
    margin-top: 1rem;
  }
  h1 {
    font-weight: bold;
    font-size: 2rem;
    max-width: 70rem;
  }
  @media (min-width: 540px) {
    p {
      max-width: 90%;
    }
  }
  @media (min-width: 991px) {
    .d-title {
      display: flex;
      /* align-items: flex-start; */
      align-items: center;
    }
  }
  @media (max-width: 540px) {
    margin-top: 0;
    img {
      margin: 0 !important;
      width: 25%;
    }
    h1 {
      font-size: 1.7rem;
      font-weight: bold;
    }
    p {
      /* font-size: 1rem; */
    }
  }
`;

const ShareButton = styled(NavLink)`
  background-color: var(--green);
  border-radius: 30px;
  //padding: 10px 20px;
  padding-right: 10px;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  display: flex;
  alignItems: 'center';
  &:hover {
    background-color: var(--green-darken);
    color: white;
  }
`;

const Buttons = styled.div`
  display: flex;
  align-items: center;
  padding: 2rem;
  @media (max-width: 540px){
    justify-content: center;
  }
`;

const ArticleContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center the discussion cards horizontally */
  gap: 1rem; /* Add gap between discussion cards */
  margin-bottom: 0.5rem; /* Add margin at the bottom for spacing */
  @media (max-width: 540px) {
    margin-left: 0rem;
  }
`;


const ArticleCard = styled.div`
  width: 100%;
`;


const ArticleDetail = ({ articleItem }) => {
  const [newArticles, setNewArticles] = useState([]);
  const [comments, setComments] = useState();
  const [windowWidth, setWindowWidth] = useState(0);

  useEffect(() => {
    getNewArticles();
    getComments();
  }, [articleItem]);

  async function getNewArticles() {
    await clienteAxios
      .get(`/articles/public/${articleItem?.category}`)
      .then((response) => {
        setNewArticles(
          response.data.results
            .filter((article) => article._id !== articleItem._id)
            .splice(0, 3)
        );
      });
  }

  async function getComments() {
    await clienteAxios
      .get(`/comments/public/articles/${articleItem._id}`)
      .then((response) => {
        setComments(response.data);
      });
  }

  useEffect(() => {
    setWindowWidth(window.innerWidth);

    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize);
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);


  return (
    <>
      <Head>
        <title>{`${articleItem?.title} | WeSex`}</title>
        
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout type={'nothidden'}>
        <ContainerAll >
        <ArticleTitle>
          <span className='hide-mobile'>Articulo de la categoría </span>
          <Link
            href={`/articulos?categoria=${articleItem?.category.toLowerCase()}`}
          >
            <a>{articlesCategoriesTitle[articleItem?.category]}</a>
          </Link>
        </ArticleTitle>
        <Container className='py-4'>
          <Row>
            <Articulo lg={8}>
              <div className='d-title'>
                <img
                  className='hide-desktop'
                  src='/img/icons/quote.svg'
                  alt='Quote symbol'
                />
                <Title><span>{articleItem?.title}</span></Title>
              </div>
              <p>{articleItem?.subtitle}</p>
              <Col>
              {articleItem?.content?.map((item, index) => {
                if (item.type === 'text') {
                  console.log(item.value);
                  return (
                    <div
                      key={`text-${index}`}
                      style={{ textAlign: 'justify', paddingLeft: '1rem', 
                      margin:
                          windowWidth <= 540 ? '1rem' : '0rem',
                      paddingRight:
                          windowWidth <= 540 ? '0px' : '0rem'  }}
                    >
                      <div
                        dangerouslySetInnerHTML={{
                          __html: item.value
                            .replace(/<p>/g, '<p style="background-color: transparent; margin-right: 0px; color: rgb(0, 0, 0); text-align: justify">')
                            .replace(/<ul>/g, '<ul style="list-style-type: disc; margin-right: 80px; text-align: justify">'),
                        }}
                      />
                    </div>
                  );
                } else if (item.type === 'image') {
                    return (
                      <img
                        src={item.value}
                        key={item.value + index}
                        style={{
                          maxWidth: '50%',
                          width: '100%',
                          height: '100%',
                        }}
                      />
                    );
                  } else if (item.type === 'video') {
                    return (
                      <iframe
                        src={item.value}
                        key={item.value + index}
                        style={{
                          maxWidth: '50%',
                          maxHeight: '100%',
                          width: '100%',
                          height: '100%',
                        }}
                      ></iframe>
                    );
                  } else if (item.type === 'embed') {
                    return (
                      <Links key={item.value}>
                        <a href={item.value}>{item.value}</a>
                      </Links>
                    );
                  }
                })}
              </Col>
              <Published>
                {articleItem?.anonymus ? (
                  <>Debate creado anónimamente</>
                ) : (
                  <>
                    Publicado por
                    <Link href={`/perfil/${articleItem?.user.user}`}>
                      <a>@{articleItem?.user.user}</a>
                    </Link>
                  </>
                )}
              </Published>
              <Links>
              <Buttons>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/heart-outline.svg' alt='Likes' />
                  {articleItem?.likes}
                </button>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/comments.svg' alt='Comments' />
                  {articleItem?.comments}
                </button>
                {/* <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/bookmark-outlined.svg' alt='Likes' />
                </button> */}
                <RWebShare
                  data={{
                    text: `Mira este articulo de WeSex: ${articleItem?.title}`,
                    url: `https://we.sex/articleDetail/${articleItem?._id}`,
                  }}
                >
                  <ShareButton>
                    <img src='/img/icons/share.svg' alt='Share' style={{ marginRight: '0.5rem', marginTop: "0.1rem"}} />
                    <div style={{ fontSize: '1.5rem' }}>Compartir</div>
                  </ShareButton>

                </RWebShare>
                {/* <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/share.svg' alt='Likes' />
                </button> */}
                </Buttons>
              </Links>
              <p className='green-line w-30 ldes-cmob'></p>
              {Number(comments?.count) > 0 ? (
                <>
                  <CommentsTitle>Opina la comunidad</CommentsTitle>
                  {comments?.results?.map((comment, index) => (
                  <Comment comment={comment} key={`comment-${index}`} />
                ))}

                </>
              ) : (
                <>
                  <CommentsTitle>
                    Todavía no hay comentarios en este artículo, ¡descarga la
                    App para comentar!
                  </CommentsTitle>
                </>
              )}
              <WriteComment />
            </Articulo>

            <Col lg={4}>
              <h5
                className='mb-4'
                style={{ color: 'black', fontWeight: 'bold' }}
              >
                Otros articulos de la categoria
              </h5>
              <ArticleContainer>
              {newArticles.map((article) => (
                
                  <ArticleCard key={article._id}>
                    <ArticleClosed
                      key={article._id}
                      article={article}
                      onClick={true}
                    />
                  </ArticleCard>
              ))}
              </ArticleContainer>
            </Col>
          </Row>
        </Container>
        </ContainerAll>
      </Layout>
    </>
  );
};

export default ArticleDetail;
