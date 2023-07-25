import React from 'react';
import {
    Background,
    LoginContainer,
    Content,
    Title,
    Text,
    BotonArs,
    Input,
    Or,
    GoogleImage,
    ForgotPasswordLink,
    SignUpLink,
  } from './loginFormStyles';

const LoginForm = () => {
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
            <Text>Hola de nuevo 👋</Text>
            <form onSubmit={handleSubmit}>
                <Input type="email" name="email" placeholder="Email" required />
                <Input type="password" name="password" placeholder="Password" required />
                <BotonArs type="submit">Entrar</BotonArs>
            </form>
            <Or>o</Or>
            <BotonArs  >
                <GoogleImage src="img/auth/google.png" /> 
                Entrar con Google
            </BotonArs>
            <ForgotPasswordLink href="/forgot-password">Recuperar contraseña</ForgotPasswordLink>
            <SignUpLink href="/sign-up">Aún no tienes cuenta</SignUpLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default LoginForm;