import React from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import Image from 'next/image';
import { downloadAppAlert } from '../../helpers';

const SurveyClosedStyle = styled.button`
  background-color: var(--green);
  border-radius: 1.5rem;
  padding: 1rem;
  color: var(--violet);
  transition: all 0.5s ease;
  margin-top: 12px;
  width: 30rem;
  min-width: 30rem;
  height: 140px;
  border: 5px solid transparent;
  margin-bottom: 0px;
  margin-right: 0px;
  -webkit-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  -moz-box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  box-shadow: -11px 7px 15px -15px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  &:hover {
    border: 5px solid var(--green);
  }
  @media (max-width: 540px) {
    margin-top: 7px;
    margin-bottom: 7px;
    width: ${props => (props.type === 'debatessection' ? '35rem' : '30rem')};
    min-width: auto;
  }
`;

const Title = styled.div`
  text-align: center;
  color: white;
  margin-top: 0rem;
  font-size: 1.6rem;
  font-weight: bold;
  
  overflow: hidden;
  text-overflow: ellipsis;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  font-family: 'Averia Libre', sans-serif;

  margin-bottom: 0.5rem; /* Add some space between Title and OptionsWrap */
  @media (max-width: 540px) {
    margin-top: 1rem;
    font-size: 1.5rem;
  }
`;

const WrapTitle = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
  
`;


const OptionsWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 1.0rem;
  background-color: white;
  width: 18rem;
  height: 6rem;
  
`;

const WrapOptionsWrap = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  
`;

const Option = styled.div`
  flex: 1; /* Add flex: 1 to occupy available space evenly */
  width: 2rem;
  height: 2rem;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  font-family: 'Karla', sans-serif;
  color: black;
  font-size: 1.2rem;
`;

const VerticalLine = styled.div`
  border-left: 1px solid black; /* Set the color and thickness of the line */
  height: 50%; /* Set the height of the line */
`;

const SurveyClosed = ({ survey, icon, onClick = false }) => {
  const router = useRouter();
  return (
    <SurveyClosedStyle
      onClick={() =>
        downloadAppAlert()
        // router.push(onClick ? `${article._id}` : `articleDetail/${article._id}`)
      }
    >
      <WrapTitle>
        <Title>{survey.title}</Title>
      </WrapTitle>
      <WrapOptionsWrap>
        <OptionsWrap>
          <Option>Sí</Option>
          <VerticalLine />
          <Option>No</Option>
        </OptionsWrap>
      </WrapOptionsWrap>
    </SurveyClosedStyle>
  );
};

export default SurveyClosed;


