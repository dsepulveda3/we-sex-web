import React, {useEffect} from 'react';
import { useRouter } from 'next/router';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/authUserContext';
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
  ErrorMsg,
  InputWrapper,
  FormWrapper
} from './loginFormStyles';

const LoginForm = () => {
  const {
    loading,
    authUser,
    user,
    signInWithCredentials,
    signInWithGoogle,
  } = useAuth();
  const router = useRouter();

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

  const handleSignInWithGoogle = () => {
    signInWithGoogle();
  };

  const handleSubmitWithCredentials = (values) => {
    signInWithCredentials(values.email, values.password);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmitWithCredentials,
  });

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
              />
              {formik.touched.email && formik.errors.email && (
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
              />
              {formik.touched.password && formik.errors.password && (
                <ErrorMsg>{formik.errors.password}</ErrorMsg>
              )}
            </InputWrapper>
            <BotonArs type="submit" onClick={formik.handleSubmit}>Entrar</BotonArs>
          </FormWrapper>
          <Or>o</Or>
          <BotonArs onClick={handleSignInWithGoogle}>
            <GoogleImage src="img/auth/google.png" />
            Entrar con Google
          </BotonArs>
          <ForgotPasswordLink href="/forgot-password">
            Recuperar contraseña
          </ForgotPasswordLink>
          <SignUpLink href="/sign-up">Aún no tienes cuenta</SignUpLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default LoginForm;