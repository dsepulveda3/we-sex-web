import styled from '@emotion/styled';
import {Container} from 'reactstrap';


export const Background = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    display: flex;
    align-items: center;
    justify-content: center;
    // background-color: var(--violet);
    background-image: url("/img/auth/cta-bg.jpg");
    background-position: center;
    background-size: 100% 100%;
    background-repeat: repeat;
    
    
    min-height: 100vh;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
    }
`;

export const LoginContainer = styled(Container)`

    display: flex;
    align-items: center;
    justify-content: center;
    width: 550px;
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

export const HomeLink = styled.a`
    color: white;
    margin-top: 1rem;
    margin-bottom: 6rem;
    text-decoration: underline;
    cursor: pointer;
`;

export const Input = styled.input`
  width: 100%;
  padding: 1rem;
  border-radius: 10px;
  border: 1px solid white;
  ::placeholder {
    color: ${(props) => (props.hasError ? '#FF9800' : 'initial')};
  }
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