import React from 'react';
import styled from '@emotion/styled';
import { Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';


const CardContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center; /* Center the cards horizontally */
  max-width: 28rem; /* Change to max-width to avoid overflow */
  margin-right: -20px; /* Add negative margin to offset card spacing */

  @media (max-width: 540px) {
    margin-right: 0; /* Reset negative margin for mobile view */
  }
`;

const Discussion = styled.div`
  // background-image: url("/img/cta-bg.jpg");
  background-color: white;
  border: 2px solid var(--violet);
  border-radius: 1.5rem;
  padding: 1.5rem;
  
  transition: all 0.5s ease;
  margin-top: 12px;
  margin-bottom: 12px;
  -webkit-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 400px; /* Set a fixed height for the cards */
  width: 250px;

  &:hover {
    border: 5px solid var(--green);
  }

  @media (max-width: 540px) {
    margin-left: 0px;
    padding: 1rem; /* Adjust padding for better spacing on mobile view */
  }
`;







const Title = styled.p`
  color: var(--violet);
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
  color: white;
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





const Plan = ({ discussion, onClick = false }) => {
  const router = useRouter();

  

  return (
    <CardContainer>
      
    <Discussion>
      <div>
        <Title>{discussion?.title}</Title>
        <Text>{discussion?.subtitle}</Text>
      </div>
    </Discussion>
    </CardContainer>
  );
};

export default Plan;