import { Container } from 'reactstrap';
import styled from '@emotion/styled';
import { icons } from 'react-icons';

export const Background = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    background-color: var(--violet);
    // background-image: url("/img/auth/cta-bg.jpg");
    background-position: center;
    background-size: 100% 100%;    
    min-height: 100vh;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 8rem;
    }
`;

export const LoginContainer = styled(Container)`

    display: flex;
    align-items: center;
    justify-content: center;
    // border-radius: 20px;
    // border: 1px solid white;
    /* Set width and height if needed */
    width: 550px;
    height: 750px;
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

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 100%;
`;

export const Title = styled.h1`
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

export const Text = styled.p`
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

export const Boton = styled.a`
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

export const BotonArs = styled(Boton)`
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


export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid white;
`;

export const Or = styled.p`
    padding-top: 2rem;
    padding-bottom: 2rem;
`;

export const GoogleImage = styled.img`
    width: 6%;
    margin-right: 2rem;
    height: auto;
`;

export const LoginLink = styled.a`
  color: white;
  margin-top: 1rem;
  margin-bottom: 6rem;
  text-decoration: underline;
  cursor: pointer;
`;

export const FormWrapper = styled.form`
    width: 100%; 
`;

export const ErrorMsg = styled.div`
    position: absolute;
    color: #FF9800;
    font-size: 1.5rem;
`;

export const InputWrapper = styled.div`
    position: relative;
    width: 100%;
    margin-bottom: 3rem;
`;

export const ImageInputContainer = styled.label`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 130px;
  height: 130px;
  border-radius: 50%;
  border: 2px solid #ccc;
  cursor: pointer;
  margin-bottom: 3rem;
`;

export const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  position: absolute;
  border-radius: 50%;
  top: 0;
  left: 0;
`;

export const FileInput = styled.input`
  display: none;
`;

export const PencilContainer = styled.div`
  position: absolute;
  bottom: 0;
  right: 0;
  background-color: #fff;
  border-radius: 20%;
  padding: 5px;
`;
