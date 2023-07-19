import React from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Discussion = styled.div`
  background-color: var(--lightGrey);
  border-radius: 1.5rem;
  padding: 1rem;
  color: var(--violet);
  transition: all 0.5s ease;
  margin-top: 12px;
  max-width: 40rem;
  /* max-width: 90%; */
  border: 5px solid transparent;
  margin-bottom: 12px;
  -webkit-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  cursor: pointer;

  &:hover {
    /* cursor: pointer; */
    /* transform: scale(1.1); */
    border: 5px solid var(--green);
  }
  @media (max-width: 540px) {
    margin-top: 7px;
    margin-bottom: 7px;
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0 !important;
`;

const Text = styled.p`
  @media (max-width: 540px) {
    /* font-size: 1.8rem; */
    line-height: normal;
    margin: 0.7rem 0;
  }
  margin-bottom: 0.5rem;
`;

const Interaction = styled.p`
  /* font-size: 1rem; */
  margin-bottom: 0;
`;

const DiscussionClosed = ({ discussion, onClick = false }) => {
  const router = useRouter();

  return (
    <Discussion
      onClick={() =>
        router.push(
          onClick ? `${discussion._id}` : `discussionDetail/${discussion._id}`
        )
      }
    >
      <Title>{discussion?.title}</Title>
      <Text>{discussion?.subtitle}</Text>
      <Row>
        <Col xs={12} sm={3}>
          <Row>
            <Col xs={4} className='d-flex align-items-center'>
              <img src='/img/icons/comments.svg' alt='Comments' />
            </Col>
            <Col xs={8} className='d-flex align-items-center'>
              <Interaction>{discussion?.comments}</Interaction>
            </Col>
          </Row>
        </Col>
        <Col xs={12} sm={3}>
          <Row>
            <Col xs={4} className='d-flex align-items-center'>
              <img src='/img/icons/heart-outline.svg' alt='Likes' />
            </Col>
            <Col xs={8} className='d-flex align-items-center'>
              <Interaction>{discussion?.likes}</Interaction>
            </Col>
          </Row>
        </Col>
      </Row>
    </Discussion>
  );
};

export default DiscussionClosed;
