import React, { useState, useEffect } from 'react';
import { useRouter } from 'next/router';  
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { 
  Background, 
  LoginContainer, 
  Content, 
  Title, 
  SubTitleText, 
  CenteredText, 
  BotonArs, 
  InputWrapper, 
  Input,
  HomeLink,
  ErrorMsg,
} from './forgotPasswordStyles';
import { useAuth } from '../../context/authUserContext';

const ForgotPassword = () => {
    const {
        loading,
        authUser,
        sendResetPasswordEmail,
      } = useAuth();
    const router = useRouter();
    const [submittedByEnter, setSubmittedByEnter] = useState(false);
    
    useEffect(() => {
    if (!loading && authUser)
        router.push('/');
    }, [authUser, loading])

    const initialValues = {
        email: '',
    };

    const validationSchema = Yup.object().shape({
        email: Yup.string().email('Email invalido').required('Campo requerido'),
    });

    const handleSubmit = (values) => {
      sendResetPasswordEmail(values.email);
    };

    const formik = useFormik({
        initialValues,
        validationSchema,
        onSubmit: handleSubmit,
    });

    const handleKeyDown = (e) => 
    {
        if (e.key === 'Enter') 
        {
            setSubmittedByEnter(true);
            e.preventDefault();
            if (formik.isValid && formik.values.email){
            handleSubmit(formik.values);
            }
        }
    };


  return (
    <Background>
        <LoginContainer>
            <Content>
                <Title>WeSex</Title>
                <SubTitleText>Recuperar contraseña</SubTitleText>
                <CenteredText>Ingresa el email asociado a tu cuenta para recibir un correo con las instrucciones para modificar tu contraseña</CenteredText>
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
                  <BotonArs type="submit" onClick={formik.handleSubmit}>Enviar correo</BotonArs>
                <HomeLink href='/'>Volver</HomeLink>
            </Content>
        </LoginContainer>
    </Background>
  );
};

export default ForgotPassword;