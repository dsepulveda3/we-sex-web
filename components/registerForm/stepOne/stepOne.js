import React, { useState, useEffect } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import { useRouter } from 'next/router';
import GoogleSignInButton from '../../googleSignInButton/googleSignInButton';
import AppleSingInButton from '../../appleSignInButton/appleSignInButton';
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
  LoginLink,
  InputWrapper,
  FormWrapper,
  ErrorMsg,
  EyeIcon,
  StyledLabel,
  StyledCheckbox,
  StyledTosLink
} from './stepOneStyles.js';
import { toast } from 'react-toastify';
import { useRegisterContext } from '../../../context/registerContext';
import { useAuth } from '../../../context/authUserContext';

const StepOne = () => {
  const router = useRouter();
  const [passwordVisible, setPasswordVisible] = useState(false);
  const [confirmPasswordVisible, setConfirmPasswordVisible] = useState(false);
  const [submittedByEnter, setSubmittedByEnter] = useState(false);
  const [isEmbeddedBrowser, setIsEmbeddedBrowser] = useState(false);
  const [isOriginSubscribeRoute, setIsOriginSubscribeRoute] = useState(false);
  const [origin, setOrigin] = useState(null);
  const { updateFormData, setStepOneCompleted } = useRegisterContext();
  const {
    emailIsInUse
  } = useAuth();

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
        if(currentRoute === '/register?origin=email'){
            freshpaint.track("EM - REGISTER - Page View Suscripción", {"Path": currentRoute});
        }
        
    }
  }, []);

  useEffect(() => {
    if (navigator.userAgent.includes('Instagram')) {
      setIsEmbeddedBrowser(true);
    }
  }, []);
  
  const validationSchema = Yup.object().shape({
    email: Yup.string().email('Email invalido').required('Campo requerido'),
    password: Yup.string()
      .required('Campo requerido')
      .min(8, 'La contraseña debe tener al menos 8 caracteres')
      .matches(/^(?=.*[a-zA-Z])(?=.*\d)/, 'La contraseña debe tener al menos una letra y un número'),
    confirmPassword: Yup.string()
      .oneOf([Yup.ref('password'), null], 'Las contraseñas deben coincidir')
      .required('Campo requerido'),
    acceptedTos: Yup.boolean().oneOf([true], 'Debes aceptar los términos y condiciones'),
  });

  const initialValues = {
    email: '',
    password: '',
    confirmPassword: '',
    acceptedTos: false,
  };

  const handleSubmit = async (values) => {
    const emailIsInUseValue = await emailIsInUse(values.email);
    if (!emailIsInUseValue){
      updateFormData(values);
      setStepOneCompleted(true);
    } else {
      toast.error('El email ya está en uso o es inválido');
    }
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      setSubmittedByEnter(true);
      e.preventDefault();
      if (
        formik.isValid &&
        formik.values.email &&
        formik.values.password &&
        formik.values.confirmPassword &&
        formik.values.acceptedTos === true
      ) {
        handleSubmit(formik.values);
      }
    }
  };

  const togglePasswordVisibility = () => {
    setPasswordVisible((prevState) => !prevState);
  };

  const toggleConfirmPasswordVisibility = () => {
    setConfirmPasswordVisible((prevState) => !prevState);
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
          {!isEmbeddedBrowser && (<GoogleSignInButton origin={origin} />)}
          {!isEmbeddedBrowser && (<AppleSingInButton origin={origin} />)}
          {!isEmbeddedBrowser && (<Or>o</Or>) }

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
                {passwordVisible ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />} 
              </EyeIcon>
              {(submittedByEnter || formik.touched.password) && formik.errors.password && (
                <ErrorMsg>{formik.errors.password}</ErrorMsg>
              )}
            </InputWrapper>

            <InputWrapper>
              <Input
                type={confirmPasswordVisible ? 'text' : 'password'}
                name="confirmPassword"
                placeholder="Confirma tu contraseña"
                required
                hasError={formik.touched.confirmPassword && formik.errors.confirmPassword}
                value={formik.values.confirmPassword}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              <EyeIcon onClick={toggleConfirmPasswordVisibility}>
                {confirmPasswordVisible ? <AiOutlineEye size={25} /> : <AiOutlineEyeInvisible size={25} />}
              </EyeIcon>
              {(submittedByEnter || formik.touched.confirmPassword) && formik.errors.confirmPassword && (
                <ErrorMsg>{formik.errors.confirmPassword}</ErrorMsg>
              )}
            </InputWrapper>

            <InputWrapper>
              {/* Checkbox input for accepting TOS */}
              <StyledLabel>
                <StyledCheckbox
                  type="checkbox"
                  id="aacceptedTos"
                  name="acceptedTos"
                  checked={formik.values.acceptedTos}
                  onChange={formik.handleChange}
                />
                Acepto los <StyledTosLink href="https://we.sex/privacy-policy">términos, condiciones y politicas de privacidad</StyledTosLink>
              </StyledLabel>
              {formik.touched.acceptedTos && formik.errors.acceptedTos && <ErrorMsg>{formik.errors.acceptedTos}</ErrorMsg>}
            </InputWrapper>

            <BotonArs type="submit" onClick={formik.handleSubmit}>
              Continuar
            </BotonArs>
          </FormWrapper>
          <LoginLink href={origin? `/login?origin=${origin}` : "/login"}>Ya tengo cuenta</LoginLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default StepOne;