import React, { useState } from 'react';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { regenerate_access_code } from '../../requests/premiumService';

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
    outline: none;
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

const LostLink = styled.a`
    color: var(--violet);
    margin-top: 3rem;
    text-decoration: underline;
    cursor: pointer;
    font-size: 2rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    :hover {
        color: var(--green);
    }
`;

function LostCodeInput ({setLostLink}) {
    const [email, setEmail] = useState('');

    const handleClick = () => {
        setLostLink(false);
    }

    const handleSubmit = () => {
        regenerate_access_code(email)
            .then((response) => {
                if (response.status === 200) {
                    console.log(response);
                    toast.success('Se envio un nuevo código a tu email');
                    setLostLink(false);
                }
            })
            .catch((error) => {
                toast.error('Hubo un error al enviar el código');
            })
    }

    return (
        <TextContainer>
            <Title>El último paso</Title>
            <SubTitle>Ingresa tu email para enviarte un nuevo <span>código</span></SubTitle>
            <CodeInput 
                type="text" 
                value={email}
                onChange={(e) => setEmail(e.target.value)} 
            />
            <PopUpButton type="submit" onClick={handleSubmit}>Enviar</PopUpButton>
            <LostLink onClick={handleClick}>Volver</LostLink>
        </TextContainer>
    )
}

export default LostCodeInput;