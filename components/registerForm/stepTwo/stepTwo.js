import React, { useState } from 'react';
import { useFormik } from 'formik';
import * as Yup from 'yup';
import {
  Background,
  LoginContainer,
  Content,
  Title,
  Text,
  BotonArs,
  Input,
  ImageInputContainer,
  Image,
  FileInput,
  FormWrapper,
  PencilContainer,
  ErrorMsg,
  InputWrapper,
  LoginLink,
  LabelForDate,
  LastInputWrapper,
} from './stepTwoStyles';
import { BsPencil } from 'react-icons/bs';
import { useRegisterContext } from '../../../context/registerContext';
import { useAuth } from '../../../context/authUserContext';
import { useRouter } from 'next/router';

const StepTwo = () => {
  const router = useRouter();
  const defaultImageURL = '/img/auth/no-avatar.jpg';
  const [submittedByEnter, setSubmittedByEnter] = useState(false);
  const [avatar, setAvatar] = useState(null);
  const { formData, resetFormData, setStepOneCompleted } = useRegisterContext();
  const { registerUserWithFormData } = useAuth();
  const [isOriginSubscribeRoute, setIsOriginSubscribeRoute] = useState(false);

  useEffect(() => {
    if (router.isReady){
      if (router.query.origin === 'subscribe') {
        setIsOriginSubscribeRoute(true);
      }
    }
  }, [router.isReady, isOriginSubscribeRoute]);

  const validationSchema = Yup.object().shape({
    avatar: Yup.string().nullable(),
    firstName: Yup.string().min(2).required('Campo requerido'),
    lastName: Yup.string()
      .min(2).required('Campo requerido'),
    username: Yup.string()
      .min(2)
      .required('Campo requerido'),
    date: Yup.date()
      .required('Campo requerido')
      .test('valid-age', 'Debes ser mayor de 18 años', function (value) {
        if (!value) return false;
        const currentDate = new Date();
        const birthDate = new Date(value);
        const age = currentDate.getFullYear() - birthDate.getFullYear();
        return age >= 18;
      }),
  });

  const initialValues = {
    avatar: null,
    firstName: '',
    lastName: '',
    username: '',
    date: '',
  };

  const handleSubmit = async (values) => {
    await registerUserWithFormData({
      avatar: values.avatar ? values.avatar : '',
      firstName: values.firstName,
      lastName: values.lastName,
      user: values.username,
      birthDate: values.date,
      email: formData.email,
      password: formData.password,
      acceptedTos: formData.acceptedTos,
    }, isOriginSubscribeRoute? 'subscribe' : null);
  };

  const handleBackPress = () => {
    resetFormData();
    setStepOneCompleted(false);
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter'){
      setSubmittedByEnter(true);
      e.preventDefault();
      if (formik.isValid && 
        formik.values.date &&
        formik.values.firstName &&
        formik.values.lastName &&
        formik.values.username
        )
      {
        handleSubmit(formik.values);
      }
    } 
  };

  const handleAvatarChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      const base64ImageString = reader.result;
      formik.setFieldValue('avatar', base64ImageString);
      setAvatar(file)
    };

    if (file) {
      reader.readAsDataURL(file);
    }
  };

  return (
    <Background>
      <LoginContainer>
        <Content>
          <Title>WeSex</Title>
          <Text>One last step 🤝</Text>

          <ImageInputContainer>
            <Image src={formik.values.avatar ? URL.createObjectURL(avatar) : defaultImageURL} alt="Profile" />
            <PencilContainer>
              <BsPencil onClick={() => document.getElementById('fileInput').click()} />
            </PencilContainer>
            <FileInput type="file" id="fileInput" accept="image/*" onChange={handleAvatarChange} />
          </ImageInputContainer>

          <FormWrapper>
            <InputWrapper>
              <Input
                type="text"
                name="firstName"
                placeholder="Nombre"
                required
                hasError={formik.touched.firstName && formik.errors.firstName}
                value={formik.values.firstName}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(formik.touched.firstName && formik.errors.firstName) && (
                <ErrorMsg>{formik.errors.firstname}</ErrorMsg>
              )}
            </InputWrapper>
          
          <InputWrapper>
            <Input
              type="text"
              name="lastName"
              placeholder="Apellido"
              required
              hasError={formik.touched.lastName && formik.errors.lastName}
              value={formik.values.lastName}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyDown={handleKeyDown}
            />
            {(formik.touched.lastName && formik.errors.lastName) && (
              <ErrorMsg>{formik.errors.lastName}</ErrorMsg>
            )}
          </InputWrapper>

            <LastInputWrapper>
              <Input
                type="text"
                name="username"
                placeholder="@usuario"
                required
                hasError={formik.touched.username && formik.errors.username}
                value={formik.values.username}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(formik.touched.username && formik.errors.username) && (
                <ErrorMsg>{formik.errors.username}</ErrorMsg>
              )}
            </LastInputWrapper>
            
            <InputWrapper>
              <LabelForDate htmlFor="date">Fecha de nacimiento:</LabelForDate>
              <Input
                type="date"
                name="date"
                placeholder="Fecha de nacimiento"
                required
                hasError={formik.touched.date && formik.errors.date}
                value={formik.values.date}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(formik.touched.date && formik.errors.date) && (
                <ErrorMsg>{formik.errors.date}</ErrorMsg>
              )}
            </InputWrapper>

            <BotonArs type="submit" onClick={formik.handleSubmit}>
              Comenzar
            </BotonArs>
          </FormWrapper>
          <LoginLink onClick={handleBackPress}>Volver al paso anterior</LoginLink>
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default StepTwo;
