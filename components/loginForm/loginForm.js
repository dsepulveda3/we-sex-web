import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useAuth } from '../../context/authUserContext';
import GoogleSignInButton from '../googleSignInButton/googleSignInButton';
import AppleSingInButton from '../appleSignInButton/appleSignInButton';
import { AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai';
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
  FormWrapper,
  EyeIcon
} from './loginFormStyles';

const LoginForm = () => {
  const {
    loading,
    authUser,
    user,
    signInWithCredentials,
  } = useAuth();
  const router = useRouter();
  const [submittedByEnter, setSubmittedByEnter] = useState(false);
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [isEmbeddedBrowser, setIsEmbeddedBrowser] = useState(false);
  const [isOriginSubscribeRoute, setIsOriginSubscribeRoute] = useState(false);
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    if (router.isReady){
      if (router.query.origin) {
        setIsOriginSubscribeRoute(true);
        setOrigin(router.query.origin);
      }
    }
  }, [router.isReady, isOriginSubscribeRoute]);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/login?origin=email'){
            freshpaint.track("EM - LOGIN - Page View Suscripción", {"Path": currentRoute});
        }
        
    }
  }, []);


  useEffect(() => {
    if (navigator.userAgent.includes('Instagram')) {
      setIsEmbeddedBrowser(true);
    }
  }, []);
  

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
    signInWithCredentials(values.email, values.password, origin);
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

  const togglePasswordVisibility = () => {
    setPasswordVisible(!passwordVisible);
  };

  return (
    <Background>
      <LoginContainer>
        <Content>
          <Title>WeSex</Title>
          {isOriginSubscribeRoute? 
            origin === 'access-code' ?
            (<Text><span>Ingresa para canjear tu código 🤝</span></Text>) :
            (<Text><span>Ya casi estas suscrito 🤝</span></Text>) :
            (<Text>Hola de nuevo 👋</Text>)
          }
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
                type={passwordVisible ? 'text' : 'password'}
                name="password"
                placeholder="Contraseña"
                required
                hasError={formik.touched.password && formik.errors.password}
                value={formik.values.password}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              <EyeIcon onClick={togglePasswordVisibility}>
                {passwordVisible ?  <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
              </EyeIcon>
              {(submittedByEnter ||formik.touched.password) && formik.errors.password && (
                <ErrorMsg>{formik.errors.password}</ErrorMsg>
              )}
            </InputWrapper>
            <BotonArs type="submit" onClick={formik.handleSubmit}>Entrar</BotonArs>
          </FormWrapper>
          {!isEmbeddedBrowser && (<Or>o</Or>)}
          {!isEmbeddedBrowser && (<GoogleSignInButton origin={origin} />)}
          {!isEmbeddedBrowser && (<AppleSingInButton origin={origin} />)}
          <ForgotPasswordLink href="/forgotPassword">
            Recuperar contraseña
          </ForgotPasswordLink>
          <SignUpLink href={origin? `/register?origin=${origin}` : "/register"}>Aún no tienes cuenta</SignUpLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default LoginForm;