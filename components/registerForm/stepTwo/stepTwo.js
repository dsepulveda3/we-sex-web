import React from 'react';
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
} from './stepTwoStyles';
import { BsPencil } from 'react-icons/bs';

const StepTwo = () => {
  const defaultImageURL = '/img/auth/no-avatar.jpg';

  const validationSchema = Yup.object().shape({
    image: Yup.mixed(),
    firstname: Yup.string().required('Campo requerido'),
    lastname: Yup.string().required('Campo requerido'),
    username: Yup.string().required('Campo requerido'),
    date: Yup.date().required('Campo requerido'),
  });

  const initialValues = {
    image: null,
    firstname: '',
    lastname: '',
    username: '',
    date: '',
  };

  const handleSubmit = (values) => {
    const imageToSubmit = values.image ? values.image : defaultImageURL;

    console.log('Form Values:', {
      image: imageToSubmit,
      firstname: values.firstname,
      lastname: values.lastname,
      username: values.username,
      date: values.date,
    });
  };

  const formik = useFormik({
    initialValues,
    validationSchema,
    onSubmit: handleSubmit,
  });

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      handleSubmit(formik.values);
    }
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    const reader = new FileReader();

    reader.onloadend = () => {
      formik.setFieldValue('image', file);
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
            <Image src={formik.values.image ? URL.createObjectURL(formik.values.image) : defaultImageURL} alt="Profile" />
            <PencilContainer>
              <BsPencil onClick={() => document.getElementById('fileInput').click()} />
            </PencilContainer>
            <FileInput type="file" id="fileInput" accept="image/*" onChange={handleImageChange} />
          </ImageInputContainer>

          <FormWrapper>
            <InputWrapper>
              <Input
                type="text"
                name="firstname"
                placeholder="Nombre"
                required
                hasError={formik.touched.firstname && formik.errors.firstname}
                value={formik.values.firstname}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                onKeyDown={handleKeyDown}
              />
              {(formik.touched.firstname && formik.errors.firstname) && (
                <ErrorMsg>{formik.errors.firstname}</ErrorMsg>
              )}
            </InputWrapper>
          
          <InputWrapper>
            <Input
              type="text"
              name="lastname"
              placeholder="Apellido"
              required
              hasError={formik.touched.lastname && formik.errors.lastname}
              value={formik.values.lastname}
              onChange={formik.handleChange}
              onBlur={formik.handleBlur}
              onKeyDown={handleKeyDown}
            />
            {(formik.touched.lastname && formik.errors.lastname) && (
              <ErrorMsg>{formik.errors.lastname}</ErrorMsg>
            )}
          </InputWrapper>

            <InputWrapper>
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
            </InputWrapper>
            
            <InputWrapper>
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
        </Content>
      </LoginContainer>
    </Background>
  );
};

export default StepTwo;
