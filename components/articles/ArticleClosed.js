import React from 'react';
import { Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Image from 'next/image';
import heartIcon from '../../public/img/icons/heart.svg';
import commentsIcon from '../../public/img/icons/comments-solid.svg';
import { useRouter } from 'next/router';
import { articlesCategoriesTitle } from '../../data';

const ArticleClosedStyle = styled.button`
    // background-color: var(--lightGrey);
      background-image: url('/img/articles/article-background.jpg');
      background-position: center;
      border-radius: 1.5rem;
      padding: 2rem;

      color: var(--violet);
      transition: all 0.5s ease;
      margin-top: 12px;
      width: 30rem; /* Set a fixed width for the discussion card */
      min-width: 30rem; /* Set a minimum width for the discussion card */
      height: 150px;
      border: 5px solid transparent;
      margin-bottom: 12px;
      margin-right: 0px; /* Add space between cards */
      -webkit-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
      -moz-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
      box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center; /* Align children horizontally at the center */

      &:hover {
        border: 5px solid var(--green);
      }

      

      @media (max-width: 540px) {
        margin-top: 7px;
        margin-bottom: 7px;

        width: ${props => props.type === 'debatessection' ? '35rem' : '30rem'};
        min-width: auto;
      }
`;



const Category = styled.a`
  background-color: var(--green);
  color: white;
  font-weight: bold;
  padding: 0.5rem 1.5rem;
  border-radius: 5rem;
  font-size: 1.6rem;
  text-align: center;
  margin-right: auto;
  margin-left: auto;
  font-family: "Averia Libre", sans-serif;
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
const Title = styled.div`
  text-align: center;
  color: white;
  margin-top: 1.5rem;
  font-size: 1.6rem;
  font-weight: bold;
  margin-bottom: 0;overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "Averia Libre", sans-serif;
  

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
