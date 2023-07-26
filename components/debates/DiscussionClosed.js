import React from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';

const Discussion = styled.div`
  // background-color: var(--lightGrey);
  background-image: url("/img/landing/cta-bg.jpg");
  border-radius: 1.5rem;
  padding: 1.5rem;
  color: var(--violet);
  transition: all 0.5s ease;
  margin-top: 12px;
  width: 30rem;
  height: 200px;
  border: 5px solid transparent;
  margin-bottom: 12px;
  margin-right: 20px; /* Add space between cards */
  -webkit-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  &:hover {
    border: 5px solid var(--green);
  }

  

  @media (max-width: 540px) {
    
    margin-top: 7px;
    margin-bottom: 7px;
    
    width: 100%; /* Adjust width for mobile view */
  }
`;

const Title = styled.p`
  font-weight: bold;
  font-size: 2rem;
  color: white;
  margin-bottom: 0 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "Averia Libre", sans-serif;
  
  @media (max-width: 540px) {
    font-size: 2.2rem;
    text-align: left;
  }
`;

const Text = styled.p`
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  color: white;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  font-family: "Averia Libre", sans-serif;
  
  @media (max-width: 540px) {
    font-size: 1.8rem;
    text-align: left;
  }
`;

const Interaction = styled.p`
  margin-bottom: 0;
  color: white;
`;

const Comments = styled.img`
  padding-left: 1rem;
  padding-right: 1rem;
   /* Set the desired width */
  height: 8px; /* Set the desired height */
  transform: scale(2); /* Set the desired scale factor */
  filter: invert(1);
`;

const Likes = styled.img`
  padding-left: 1rem;
  padding-right: 1rem;
  /* Set the desired width */
  height: 8px; /* Set the desired height */
  transform: scale(2); /* Set the desired scale factor */
  filter: invert(1);
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
      <Row className="align-items-center">
        <Col xs={3} className='d-flex align-items-center'>
          <Likes src='/img/icons/heart-icon.svg' alt='Likes' />
          <Interaction>{discussion?.likes}</Interaction>
        </Col>
        <Col xs={3} className='d-flex align-items-center'>
          <Comments src='/img/icons/debate2-icon-white.svg' alt='Comments' />
          <Interaction>{discussion?.comments}</Interaction>
        </Col>
      </Row>
    </Discussion>
  );
};

export default DiscussionClosed;