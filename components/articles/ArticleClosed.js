import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Image from 'next/image';
import heartIcon from '../../public/img/icons/heart.svg';
import commentsIcon from '../../public/img/icons/comments-solid.svg';
import { useRouter } from 'next/router';
import { articlesCategoriesTitle } from '../../data';

const ArticleClosedStyle = styled.button`
  text-align: left;
  color: white;
  background-image: url('/img/articles/article-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  padding: 2rem;
  border-radius: 2rem;
  margin-top: 0.1rem;
  margin-bottom: 0.1rem;
  max-width: 30rem;
  width: 100%;
  transition: all 0.5s ease;
  min-height: 15rem !important;
  /* margin-bottom: 3rem; */
  &:hover {
    transform: scale(1.05);
  }
  @media (max-width: 540px) {
    text-align: center;
    min-height: 15rem !important;
    max-width: 100%;

    &:hover {
      transform: scale(1.05);
    }
  }
`;



const Category = styled.a`
  background-color: var(--green);
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  font-size: 1.6rem;
  @media (max-width: 540px) {
    display: block;
    width: fit-content;
    text-align: center;
    padding: 0.3rem 1.3rem !important;
    font-size: 1.8rem;
    margin-right: auto;
    margin-left: auto;
  }
`;
const Title = styled.h3`
  margin-top: 1rem;
  font-size: 2.2rem;
  font-weight: bold;
  margin-bottom: 0;
  @media (max-width: 540px) {
    margin-top: 1rem;
    font-size: 2.1rem;
  }
`;

const Social = styled.div`
  img {
    fill: white;
    max-width: 100%;
  }
`;
const Icon = styled(Image)``;

const ColIcon = styled(Col)`
  @media (max-width: 540px) {
    display: none;
  }
`;

const ArticleClosed = ({ article, icon, onClick = false }) => {
  const router = useRouter();
  return (
    <ArticleClosedStyle
      onClick={() =>
        router.push(onClick ? `${article._id}` : `articleDetail/${article._id}`)
      }
    >
      <Category>{articlesCategoriesTitle[article.category.name]}</Category>
      <Title>{article.title}</Title>
      <Row>
        <Col sm={3} style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
          {/* <Icon src={heartIcon} alt="Me gusta" width={20}  /> */}
          {/* <p className="mb-0 ml-2"> 55</p>             */}
        </Col>
        <Col sm={3} style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
          {/* <Icon src={commentsIcon} alt="Me gusta" width={25}  /> */}
          {/* <p className="mb-0 ml-2" > 55</p>             */}
        </Col>
        <Col sm={2} style={{ display: 'inline-flex', alignItems: 'flex-end' }}>
          {/* TODO: BORRAR */}
        </Col>
        {icon ? (
          <ColIcon sm={4} style={{ justifyContent: 'flex-end' }}>
            <Icon
              src={`/img/articles/${'fantasies.png'}`}
              alt='Icono categoria'
              width='100%'
              height='100%'
            />
          </ColIcon>
        ) : null}
      </Row>
    </ArticleClosedStyle>
  );
};

export default ArticleClosed;
