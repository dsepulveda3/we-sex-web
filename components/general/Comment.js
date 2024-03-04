import React from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import { downloadAppAlert } from '../../helpers';

const Background = styled.div`
  padding: 1rem;
`;

const ProfilePic = styled.img`
  border-radius: 100% !important;
  width: 5rem !important;
  height: 5rem !important;
  margin-right: 1rem !important;
`;

const TimeStamp = styled.p`
  text-align: right;
  font-size: 1.4rem !important;
`;

const CommentDiv = styled.div`
  border-bottom: 1px solid #DCDCDC;
  color: black;
  padding: 1.5rem 0.5rem;
  max-width: 60rem;
  text-align: left !important;
  a {
    margin-left: 0.3rem;
    font-weight: bold;
  }
`;

const CommentComent = styled.p`
  /* font-size: 1.1rem; */
  margin-top: 0.5rem;
  @media (max-width: 540px) {
    /* font-size: .85rem!important; */
  }
`;

const Icon = styled(Col)`
  /* font-size: 1rem;  */
  text-align: left;
  button {
    background-color: transparent;
    outline: none;
    border: none;
    /* float: left; */
    width: fit-content;
    max-width: 4rem;
    padding: 0.4rem;
    /* margin-right: .2rem!important; */
  }
  img {
    width: 2rem;
    /* margin-right: .4rem; */
    margin-top: -0.3rem;
    margin-right: 0;
  }
  a {
    cursor: pointer;
  }
  @media (max-width: 540px) {
    a {
      /* font-size: 1rem; */
    }
  }
`;

const Comment = ({ comment }) => {
  return (
    <Background>
    <CommentDiv>
      
      <Row>
        <Col xs={8} style={{ textAlign: 'left' }}>
          <ProfilePic
            src='/img/articles/article-background.jpg'
            alt='Profile picture'
          />
          <Link legacyBehavior href={`/perfil/${comment?.user?.user}`}>
            <a>@{comment?.user?.user}</a>
          </Link>
        </Col>
        <Col xs={4}>
          <TimeStamp>{comment?.createdAt?.slice(0, 10)}</TimeStamp>
          <TimeStamp>{comment?.createdAt?.slice(11, 19)}</TimeStamp>
        </Col>
      </Row>
      {comment?.media && (
        <div style={{ maxHeight: '100px' }}>
          <img
            src={comment?.media.url}
            width='auto'
            height='100%'
            alt='imágen del comentario'
          />
        </div>
      )}
      <CommentComent>{comment?.comment}</CommentComent>
      <Row className='mt-3'>
        <Icon xs={6}>
          <button onClick={() => downloadAppAlert()}>
            <img src='/img/icons/heart-outline.svg' />
          </button>
          {comment?.likes}
        </Icon>
        <Icon
          xs={6}
          style={{
            textAlign: 'right',
            color: 'var(--violet)',
            fontWeight: 'bold',
          }}
        >
          <button onClick={() => downloadAppAlert()}>
            <img src='/img/icons/reply.svg' />
          </button>
          <a onClick={() => downloadAppAlert()}>responder</a>
        </Icon>
      </Row>
      
    </CommentDiv>
    </Background>
  
  );
};

export default Comment;
