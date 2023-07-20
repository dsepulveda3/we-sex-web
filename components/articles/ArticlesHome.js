import React, { useEffect, useState } from 'react';
import { Row, Col, Container } from 'reactstrap';
import ArticleClosed from './ArticleClosed';
import Categories from './Categories';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';
import { articlesCategoriesTitle } from '../../data';

const Title = styled.h3`
  color: var(--violet);
  font-weight: bold;
  margin: 1rem 0 0.5rem;
  text-align: center;
  font-size: 5rem;
  @media (max-width: 540px) {
    font-size: 3.5rem;
  }
`;

const Subtitle = styled.p`
  color: var(--violet);
  border: solid var(--green);
  font-weight: bold;
  width: fit-content;
  padding: 0.2rem 1rem;
  border-radius: 2rem;
  text-align: center;
  margin: 0 auto 2rem;
  font-size: 2rem;
  @media (max-width: 540px) {
    font-size: 1.7rem;
  }
`;

const ArticlesHome = () => {
  const [searchString, setSearchString] = useState('');
  const [articlesItems, setArticlesItems] = useState([]);
  const [articlesCategories, setArticlesCategories] = useState([]);

  useEffect(() => {
    getArticlesCategories();
  }, []);
  async function getArticlesCategories() {
    await clienteAxios.get('/articles/categories').then((response) => {
      setArticlesCategories(response.data);
    });
  }

  return (
    <>
      <Container >
        <Title >Artículos</Title>
        <Subtitle>Aprende de los mejores expertos en sexualidad</Subtitle>
        <Row>
          <Col className='mb-4' xl={12} xs={12} sm={12} md={12}>
            <Categories categories={articlesCategories} />
          </Col>
          <Col xl={12}>
            <Row>
              {articlesItems.length > 0
                ? articlesItems.map((art) => (
                    <Col
                      xs={12}
                      md={6}
                      lg={4}
                      xl={3}
                      key={art._id}
                      className='mb-4'
                    >
                      <ArticleClosed article={art} key={art._id} icon={true} />
                    </Col>
                  ))
                : null}
            </Row>
          </Col>
        </Row>
      </Container>
    </>
  );
};

export default ArticlesHome;
