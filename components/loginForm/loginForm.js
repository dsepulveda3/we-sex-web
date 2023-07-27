import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/authUserContext';
import GoogleSignInButton from '../googleSignInButton/googleSignInButton';
import {
  Background,
  LoginContainer,
  Content,
  Title,
  Text,
  BotonArs,
  Input,
  Or,
  ForgotPasswordLink,
  SignUpLink,
  ErrorMsg,
  InputWrapper,
  FormWrapper
} from './loginFormStyles';

const LoginForm = () => {
  const {
    loading,
    authUser,
    signInWithCredentials,
  } = useAuth();
  const router = useRouter();
  const [submittedByEnter, setSubmittedByEnter] = useState(false);

  useEffect(() => {
    if (!loading && authUser)
      router.push('/');
  }, [authUser, loading])

  const initialValues = {
    email: '',
    password: '',
  };

  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Campo requerido'),
    password: Yup.string().required('Campo requerido'),
  });

  const handleSubmitWithCredentials = (values) => {
    signInWithCredentials(values.email, values.password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitWithCredentials,
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSubmittedByEnter(true);
      e.preventDefault();
      if (formik.isValid && formik.values.email && formik.values.password){
        handleSubmitWithCredentials(formik.values);
      }
    }
  };

  return (
    <Background>
      <LoginContainer>
        <Content>
          <Title>WeSex</Title>
          <Text>Hola de nuevo 👋</Text>
          <FormWrapper>
            <InputWrapper>
              <Input
                type="email"
                name="email"
                placeholder="Email"
                required
                hasError={formik.touched.email && formik.errors.email}
                value={formik.values.email}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(submittedByEnter || formik.touched.email) && formik.errors.email && (
                <ErrorMsg>{formik.errors.email}</ErrorMsg>
              )}
            </InputWrapper>
            <InputWrapper>
              <Input
                type="password"
                name="password"
                placeholder="Contraseña"
                required
                hasError={formik.touched.password && formik.errors.password}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(submittedByEnter ||formik.touched.password) && formik.errors.password && (
                <ErrorMsg>{formik.errors.password}</ErrorMsg>
              )}
            </InputWrapper>
            <BotonArs type="submit" onClick={formik.handleSubmit}>Entrar</BotonArs>
          </FormWrapper>
          <Or>o</Or>
          <GoogleSignInButton />
          <ForgotPasswordLink href="/forgot-password">
            Recuperar contraseña
          </ForgotPasswordLink>
          <SignUpLink href="/register">Aún no tienes cuenta</SignUpLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default LoginForm;