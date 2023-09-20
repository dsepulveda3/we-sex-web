import React, { useState } from 'react';
import { useRouter } from 'next/router';
import styled from '@emotion/styled';
import { toast } from 'react-toastify';
import { redeem_access_code } from '../../requests/premiumService';

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

const PLAN_ID = process.env.NEXT_PUBLIC_PLAN_ID;

function AccessCodeInput ({setLostLink}) {
    const router = useRouter();
    const [accessCode, setAccessCode] = useState('');

    const handleClick = () => {
        setLostLink(true);
    }

    const handleSubmit = () => {
        redeem_access_code(PLAN_ID, accessCode)
            .then((response) => {
                console.log(response);
                if (response.status === 200) {
                    if (response.data.status === 'used') {
                        toast.error('Codigo ya utilizado');
                        return;
                    } else if (response.data.status === 'invalid') {
                        toast.error('Codigo invalido');
                        return;
                    }
                    toast.success('Codigo canjeado con exito');
                    router.push('/premium-material');
                }
            })
            .catch((error) => {
                console.log(error);
                toast.error('Error al canjear el codigo');
            })
    }

    return (
        <TextContainer>
            <Title>El ultimo paso</Title>
            <SubTitle>Ingresa tu codigo para activar tu <span>subscripción</span> al contenido premium</SubTitle>
            <CodeInput 
                type="text" 
                value={accessCode}
                onChange={(e) => setAccessCode(e.target.value)} 
            />
            <PopUpButton type="submit" onClick={handleSubmit}>Enviar</PopUpButton>
            <LostLink onClick={handleClick}>¿Perdiste tu código?</LostLink>
        </TextContainer>
    )
}

export default AccessCodeInput;