import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AccessCodeInput from './AccessCodeInput';
import AccessCodeLoginRequired from './AccessCodeLoginRequired';
import { useAuth } from '../../context/authUserContext';


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;


  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PopUpImage = styled.img`
  width: auto;
  height: auto;
  max-width: 50%;
  max-height: 50vh; 
  align-item: center;

  @media (max-width: 540px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }
`;

const Title = styled.div`
    font-size: 3rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: var(--violet);
    text-align: center;
    
    span {
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 2.3rem;
        margin-bottom: 0rem;
        text-align: center;
       
    }
`;

const SubTitle = styled.div`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: var(--green);
    margin: 1rem;
    span {
        background-color: var(--green); /* Set the background color to green */
        padding: 0.3rem 0.5rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-bottom: 0rem;
        text-align: center;
       
    }
`;

const CodeInput = styled.input`
  /* Add styles for your input here */
  padding: 1rem;
  border: 2px solid var(--green);
  border-radius: 5px;
  font-size: 2.5rem;
  font-family: "Karla", sans-serif;
  color: var(--green);
  margin-top: 2.5rem;
  width: 80%;

  &:focus {
    outline: none; /* Remove the browser's default focus outline */
  }
`;

const PopUpButton = styled.a`
  background-color: var(--green);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;
  margin-top: 20px;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

function ContentAccessCode () {
    const [isLogged, setIsLogged] = useState(false);
    const { authUser, loading } = useAuth();

    useEffect(() => {
      if (authUser){
        setIsLogged(true);
      }
    }, [authUser, loading])



    return (
        <ContentContainer>
          <PopUpImage src="/img/premium-material/subscription_image_2.png" alt="Premium Access" />
          {!isLogged && (<AccessCodeLoginRequired />)}
          {isLogged && (<AccessCodeInput />)}
        </ContentContainer>
    )
}

export default ContentAccessCode;