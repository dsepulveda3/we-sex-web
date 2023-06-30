import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: var(--violet);
    background-image: url("/img/cta-bg.jpg");
    background-position: center;
    
    
    
    min-height: 100vh;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
    }
`;

const LoginContainer = styled(Container)`

    display: flex;
    align-items: center;
    justify-content: center;
    // border-radius: 20px;
    // border: 1px solid white;
    /* Set width and height if needed */
    width: 550px;
    height: 350px;
    //   background-color: lightgray;
    padding: 5rem 5rem 7rem 5rem;

    @media(min-width: 540px){
        border-radius: 20px;
        border: 1px solid white;
        
    }

    @media(max-width: 540px){
        
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-top: 3rem;
    font-size: 2.8rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center; /* Center align the text */
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }

    @media(max-width: 540px){
        font-size: 2.4rem;
        margin-bottom: 1.5rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 4rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    border: none;
    transition: all .5s ease;
    &:hover {
        background-color: var(--green);
        color: white;
        cursor: pointer;
    }
    @media(max-width: 540px){
        margin: 1rem auto;
        display:block;
        min-width: 80%;    
    }
`;

const BotonArs = styled(Boton)`
  color: var(--violet);
  background-color: white;
  margin-bottom: 2rem;
  
  @media (max-width: 540px) {
  }

  @media (min-width: 540px) {
    width: 100%;
    text-align: center;
  }
`;


const Input = styled.input`
  width: 100%;
  padding: 1rem 6rem 1rem 6rem;
  border-radius: 10px;
  border: 1px solid white;
  margin-bottom: 3rem;
`;

const Or = styled.p`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

const GoogleImage = styled.img`
    width: 6%;
    margin-right: 2rem;
    height: auto;
`;

const ForgotPasswordLink = styled.a`
  color: white;
  margin-top: 1rem;
  text-decoration: underline;
  cursor: pointer;
`;

const SignUpLink = styled.a`
  color: white;
  margin-top: 1rem;
  margin-bottom: 6rem;
  text-decoration: underline;
  cursor: pointer;
`;

const forgotPassword = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Send email and password to the backend for validation
    // You can use an API call or any other method to handle the backend validation
    console.log('Email:', email);
  };

  return (
    <Background>
      <LoginContainer>
        <Content>
            <Title>Recuperar tu contrasena 🔐</Title>
            <Text>Escribe el mail asociado a tu cuenta</Text>
            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Email" required />
                <BotonArs type="submit">Continuar</BotonArs>
            </form>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default forgotPassword;