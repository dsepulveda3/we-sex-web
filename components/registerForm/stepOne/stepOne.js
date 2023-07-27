import React from 'react';
import GoogleSignInButton from '../../googleSignInButton/googleSignInButton';
import {
    Background,
    LoginContainer,
    Content,
    Title,
    Text,
    BotonArs,
    Input,
    Or,
    LoginLink
} from './stepOneStyles.js';


const StepOne = () => {
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
            <Text>Crea tu cuenta en 1 minuto 🤝</Text>
            <GoogleSignInButton />
            <Or>o</Or>

            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Mail" required />
                <Input type="password" name="password" placeholder="Contrasena" required />
                <Input type="password" name="password" placeholder="Repetir contrasena" required />
                <BotonArs type="submit">Continuar</BotonArs>
            </form>
            <LoginLink href="/login">Ya tengo cuenta</LoginLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default StepOne;