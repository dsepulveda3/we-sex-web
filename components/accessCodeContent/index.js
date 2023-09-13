import React, {useState, useEffect, useRef } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/landing/cta-bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
`;

const PopupDialog = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  display: flex; /* Added to create a flex container */
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  position: relative; /* Added to position the CloseButton */

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 90%;
  }

  @media (min-width: 768px) {
    padding: 4rem 4rem;
  }
`;

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
    color: black;
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

function AccessCodeContent () {
    const [accessCode, setAccessCode] = useState('');

    const handleSubmit = () => {
      console.log('Submit');
      console.log(accessCode);
    }

    return (
        <PopupContainer>
            <PopupDialog>
                <ContentContainer>
                <PopUpImage src="/img/premium-material/subscription_image_2.png" alt="Premium Access" />
                <TextContainer>
                    <Title>El ultimo paso</Title>
                    <SubTitle>Ingresa tu codigo para activar tu <span>subscripción</span> al contenido premium</SubTitle>
                    <CodeInput 
                        type="text" 
                        value={accessCode}
                        onChange={(e) => setAccessCode(e.target.value)} 
                    />
                    <PopUpButton type="submit" onClick={handleSubmit}>Enviar</PopUpButton>
                </TextContainer>
                </ContentContainer>
            </PopupDialog>
        </PopupContainer>   
    )
}

export default AccessCodeContent;