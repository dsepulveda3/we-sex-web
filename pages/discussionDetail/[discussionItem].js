import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'reactstrap';
import Layout from '../../components/general/Layout';
import Head from 'next/head';
import Image from 'next/image';
import HeadInfo from '../../components/general/HeadInfo';
import Header from '../../components/general/Header';
import Footer from '../../components/general/Footer';
import Categories from '../../components/articles/Categories';
import DiscussionClosed from '../../components/debates/DiscussionClosed';
import Comment from '../../components/general/Comment';
import WriteComment from '../../components/general/WriteComment';
import {
  articles,
  articlesCategories,
  comments,
  discussionCategoriesTitle,
} from '../../data';
import { downloadAppAlert } from '../../helpers';
import clienteAxios from '../../config/axios';

// Generar un enlace por cada slug
export async function getStaticPaths() {
  const slugs = await clienteAxios.get('/discussions/recent-public');
  const paths = slugs.data.map((discussionItem) => ({
    // Aca va un array con los SLUGS
    params: { discussionItem: discussionItem._id },
  }));
  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const { discussionItem } = params;
  const response = await clienteAxios.get(
    `/discussions/public/detail/${discussionItem}`
  );
  return {
    props: {
      discussionItem: response.data,
    },
    revalidate: 60,
    notFound: false,
  };
}

const ArticleTitle = styled.div`
  margin-top: 0.1rem;
  padding: 1rem;
  background-color: var(--violet);
  text-align: center;
  a {
    display: inline-block;
    background-color: var(--green);
    width: fit-content;
    border-radius: 2rem;
    padding: 0.3rem 2rem;
    margin: 0.5rem auto;
    transition: all 0.5s ease;
    margin-left: 0.8rem;
    font-size: 2rem;
  }
  a:hover {
    padding: 0.3rem 2.5rem;
  }
  @media (max-width: 540px) {
    /* padding: .5rem; */
    a {
      margin-left: 0;
    }
  }
`;

const Published = styled.div`
  color: black;
  /* font-size: 1rem; */
  margin-top: 2rem;
  a {
    margin-left: 0.7rem;
    /* font-size: 1rem; */
    font-weight: bold;
  }
  @media (max-width: 540px) {
    /* font-size: .8rem; */
    a {
      /* font-size: .8rem; */
    }
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

const ArticleExample = {
  category: 'Respuesta sexual',
  title: 'Claves para alcanzar erecciones saludables',
  likes: 32,
  comments: 1,
  id: 111,
  subtitle: 'Tips gloriosos',
};

const CommentsTitleP = styled.p`
  font-weight: bold;
  text-transform: uppercase;
  color: var(--violet);
  margin-top: 2rem !important;
`;

const Debate = styled(Col)`
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

const DiscussionTitle = styled.div`
  h1 {
    font-size: 4rem !important;
    text-transform: capitalize;
  }
`;

const DiscussionDetail = ({ discussionItem }) => {
  const [trendingDiscussions, setTrendingDiscussions] = useState([]);
  const [comments, setComments] = useState();

  useEffect(() => {
    getTrendingDiscussions();
    getComments();
  }, [discussionItem]);

  async function getTrendingDiscussions() {
    await clienteAxios.get('/discussions/trending-public').then((response) => {
      setTrendingDiscussions(
        response.data
          .filter((discussion) => discussion._id !== discussionItem._id)
          .splice(0, 4)
      );
    });
  }

  async function getComments() {
    await clienteAxios
      .get(`/comments/public/discussions/${discussionItem._id}`)
      .then((response) => {
        setComments(response.data);
      });
  }

  return (
    <>
      <Head>
        <title>{`${discussionItem?.title} | WeSex`}</title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout type={'nothidden'}>
        <div style={{paddingTop: '6.8rem'}}>
        <ArticleTitle>
          <span className='hide-mobile'>Debate de la categoría</span>
          <Link href={`/debates?categoria=${discussionItem?.category?.name}`}>
            <a>{discussionCategoriesTitle[discussionItem?.category?.name]}</a>
          </Link>
        </ArticleTitle>
        <Container className='py-4'>
          <Row>
            <Debate lg={8}>
              <DiscussionTitle className='d-title'>
                <img
                  className='hide-desktop'
                  src='/img/icons/quote.svg'
                  alt='Quote symbol'
                />
                <h1>{discussionItem?.title}</h1>
              </DiscussionTitle>
              <p>{discussionItem?.subtitle}</p>
              <Published>
                {discussionItem?.anonymus ? (
                  <>Debate creado anónimamente</>
                ) : (
                  <>
                    Publicado por
                    <Link href={`/perfil/${discussionItem?.user.user}`}>
                      <a>@{discussionItem?.user.user}</a>
                    </Link>
                  </>
                )}
              </Published>
              <Links>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/heart-outline.svg' alt='Likes' />
                  {discussionItem?.likes}
                </button>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/comments.svg' alt='Comments' />
                  {discussionItem?.comments}
                </button>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/share.svg' alt='Likes' />
                </button>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/bookmark-outlined.svg' alt='Likes' />
                </button>
              </Links>
              <p className='green-line w-30 ldes-cmob'></p>
              {Number(comments?.count) > 0 ? (
                <>
                  <CommentsTitleP>Opina la comunidad:</CommentsTitleP>
                  {comments?.results?.map((comment) => (
                    <Comment comment={comment} key={comment._id} />
                  ))}
                </>
              ) : (
                <>
                  <CommentsTitleP>
                    Todavía no hay comentarios en este debate, ¡descarga la App
                    para comentar!
                  </CommentsTitleP>
                </>
              )}
              <WriteComment />
            </Debate>

            <Col lg={4}>
              <h5
                className='mb-4'
                style={{ color: 'black', fontWeight: 'bold' }}
              >
                Debates tendencia
              </h5>
              {trendingDiscussions.map((discussion) => (
                <DiscussionClosed
                  key={discussion._id}
                  discussion={discussion}
                  onClick={true}
                />
              ))}
            </Col>
          </Row>
        </Container>
        </div>
      </Layout>
    </>
  );
};

export default DiscussionDetail;
