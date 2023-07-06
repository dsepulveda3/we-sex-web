import React from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import { downloadAppAlert } from '../../../../helpers';

const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  width: 60rem;
  
  // margin-right: -20px; /* Add negative margin to offset card spacing */
  

  @media (max-width: 540px) {
    margin-right: 0; /* Reset negative margin for mobile view */
  }
`;

const DiscussionContainer = styled.div`
  width: 600px;
`;

const Discussion = styled.div`
  // background-color: var(--lightGrey);
  background-color: white;
  border: 1px solid var(--violet);
  border-radius: 1.5rem;
  padding: 1.5rem;
  color: var(--violet);
  transition: all 0.5s ease;
  margin-top: 12px;
  width: 600px;
  height: 180px;
  // border: 5px solid transparent;
  margin-bottom: 12px;
  // margin-right: 20px; /* Add space between cards */
  margin-left: 0px;
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
    margin-right: 0px; /* Reset margin for mobile view */
    width: 100%; /* Adjust width for mobile view */
  }
`;



const Title = styled.p`
  color: black;
  font-weight: bold;
  font-size: 2rem;
  margin-bottom: 0 !important;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  
  @media (max-width: 540px) {
    text-align: left;
  }
`;

const Text = styled.p`
  color: black;
  margin-bottom: 0.5rem;
  margin-top: 1rem;
  font-size: 1.5rem;
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2; /* Number of lines to show */
  -webkit-box-orient: vertical;
  
  @media (max-width: 540px) {
    text-align: left;
  }
`;

const Interaction = styled.p`
  margin-bottom: 0;
  color: black;
`;

const Comments = styled.img`
   /* Set the desired width */
  height: 8px; /* Set the desired height */
  transform: scale(2); /* Set the desired scale factor */
  
`;

const Likes = styled.img`
  /* Set the desired width */
  height: 8px; /* Set the desired height */
  transform: scale(2); /* Set the desired scale factor */
`;





const DiscussionClosed = ({ discussion, onClick = false }) => {
  const router = useRouter();

  const handleClick = () => {
    downloadAppAlert(); // Call the downloadAppAlert function
  };

  return (
    <CardContainer>
      
    <Discussion
      
      onClick={() =>
        router.push(
          onClick ? `${discussion._id}` : `home/discussion/discussionsDetail/${discussion._id}`
        )
      }
    
      // onClick={handleClick}
      // onClick={() =>
      //   router.push(
      //     onClick ? `${discussion._id}` : `discussionDetail/${discussion._id}`
      //   )
      // }
    >
      <div>
        <Title>{discussion?.title}</Title>
        <Text>{discussion?.subtitle}</Text>
      </div>
      <Row> 
        <Col xs={6} sm={3}>
          <Row>
            <Col xs={4} className='d-flex align-items-center'>
              <Comments src='/img/ico/comment.png' alt='Comments' />
            </Col>
            <Col xs={8} className='d-flex align-items-center'>
              <Interaction>{discussion?.comments}</Interaction>
            </Col>
          </Row>
        </Col>
        <Col xs={6} sm={3}>
          <Row>
            <Col xs={4} className='d-flex align-items-center'>
              <Likes src='/img/ico/heart.png' alt='Likes' />
            </Col>
            <Col xs={8} className='d-flex align-items-center'>
              <Interaction>{discussion?.likes}</Interaction>
            </Col>
          </Row>
        </Col>
      </Row>
    </Discussion>
    </CardContainer>
  );
};

export default DiscussionClosed;

