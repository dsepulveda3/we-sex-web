import styled from '@emotion/styled';
import {Container} from 'reactstrap';

export const Overlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(86, 47, 139, 0.7); 
  z-index: 9999; 
`;

export const ModalContainer = styled(Container)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 550px;
  padding: 5rem 5rem 5rem 5rem;
  background-color: var(--violet);
  background-image: url("/img/auth/cta-bg.webp");
  background-position: center;
  background-size: cover;
  border-radius: 20px;
  border: 1px solid white;
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);

  @media (max-width: 540px) {
    text-align: center;
    padding-bottom: 3rem;
    background-color: var(--violet);
    background-image: url("/img/auth/cta-bg.webp");
    background-position: center;
    background-size: cover;
    height: 100vh; 
    width: 100vw;
    border-radius: 0; 
    border: none;
  }
`;

export const StyledNumberInput = styled.input`
    text-align: center;
    border: 2px solid #ccc;
    font-size: 18px;
    color: #333;
    border-radius: 5px;
    box-sizing: content-box;
`;

export const Content = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
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

export const SubTitleText = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.8rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

export const CenteredText = styled.p`
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 4rem;
    @media(max-width: 540px){
        font-size: 1rem;
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

export const InputWrapper = styled.div`
    // display: flex;
    // justify-content: center;
    // align-items: center;
    margin-bottom: 2rem;
`;

export const SignUpLink = styled.a`
    color: white;
    margin-top: 1rem;
    margin-bottom: 6rem;
    text-decoration: underline;
    cursor: pointer;
`;