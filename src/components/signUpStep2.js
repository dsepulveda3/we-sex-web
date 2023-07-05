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
    background-size: 100% 100%;
    
    
    min-height: 85vh;
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
    height: 690px;
    //   background-color: lightgray;
    padding: 5rem 5rem 5rem 5rem;

    @media(min-width: 540px){
        border-radius: 20px;
        border: 1px solid white;
    }

    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
    }
`;

const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const Title = styled.h1`
    margin-top: 3rem;
    font-size: 4.5rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center; /* Center align the text */
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }

    @media(max-width: 540px){
        font-size: 5.5rem;
        margin-bottom: 1.5rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.0rem;
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
  padding: 1rem;
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

const LoginLink = styled.a`
  color: white;
  margin-top: 1rem;
  margin-bottom: 6rem;
  text-decoration: underline;
  cursor: pointer;
`;

const SignUpStep2 = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    // Send email and password to the backend for validation
    // You can use an API call or any other method to handle the backend validation
    console.log('Email:', email);
    console.log('Password:', password);
  };

  return (
    <Background>
      <LoginContainer>
        <Content>
            <Title>WeSex</Title>
            <Text>One last step 🤝</Text>
            
            <form onSubmit={handleSubmit}>
                <Input type="text" name="name" placeholder="Nombre" required />
                <Input type="text" name="lastname" placeholder="Apellido" required />
                <Input type="text" name="user" placeholder="@usuario" required />
                <Input type="date" name="date" placeholder="Fecha de nacimiento" required />

                <BotonArs type="submit">Comenzar</BotonArs>
            </form>
            
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default SignUpStep2;