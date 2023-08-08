import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import styled from '@emotion/styled';
import { Container, Row, Col } from 'reactstrap';
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
  padding-top: 6.8rem;

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
  a {
    /* margin-left: .7rem; */
    /* font-size: 1rem; */
    font-weight: bold;
  }
  @media (max-width: 540px) {
    /* font-size: .8rem; */
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
  color: var(--violet);
  text-align: left;
  font-size: 2rem;
  @media (max-width: 540px) {
    margin-top: 3rem;
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

const ArticleDetail = ({ articleItem }) => {
  const [newArticles, setNewArticles] = useState([]);
  const [comments, setComments] = useState();

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

  return (
    <>
      <Head>
        <title>{`${articleItem?.title} | WeSex`}</title>
        
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout type={'nothidden'}>
        <ContainerAll>
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
              <ArticleTitle className='d-title'>
                <img
                  className='hide-desktop'
                  src='/img/icons/quote.svg'
                  alt='Quote symbol'
                />
                <h1>{articleItem?.title}</h1>
              </ArticleTitle>
              <p>{articleItem?.subtitle}</p>
              <Col>
              {articleItem?.content?.map((item, index) => {
                if (item.type === 'text') {
                  return (
                    <div
                      dangerouslySetInnerHTML={{ __html: item.value }}
                      key={`text-${index}`} // Use a unique key by concatenating "text-" with the index
                    />
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
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/heart-outline.svg' alt='Likes' />
                  {articleItem?.likes}
                </button>
                <button onClick={() => downloadAppAlert()}>
                  <img src='/img/icons/comments.svg' alt='Comments' />
                  {articleItem?.comments}
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
                  <CommentsTitle>Opina la comunidad:</CommentsTitle>
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
              {newArticles.map((article) => (
                <ArticleClosed
                  key={article._id}
                  article={article}
                  onClick={true}
                />
              ))}
            </Col>
          </Row>
        </Container>
        </ContainerAll>
      </Layout>
    </>
  );
};

export default ArticleDetail;
