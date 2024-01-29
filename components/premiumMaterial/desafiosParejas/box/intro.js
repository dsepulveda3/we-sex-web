import React from 'react';
import {Row, Col, Container, Button} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
background-color: var(--violet);
background-image: url("/img/landing/cta-bg.webp");
background-position: center;
-webkit-background-size: cover;
-moz-background-size: cover;
-o-background-size: cover;
background-size: cover;
background-repeat: no-repeat;
background-attachment: fixed;
margin-top: 0; /* Set margin-top to 0 */
position: relative;
padding-bottom: 8rem;
padding-top: 1rem;
@media (max-width: 540px) {
  background-attachment: scroll;
  text-align: center;
  padding-bottom: 3rem;
}

`;

const Content = styled.div`
  margin-top: 15%;
  text-align: center;
  width: 100%; /* Ensure full width on larger screens */
  @media (min-width: 540px) {
    margin-top: 10%;
  }
`;


const ContentImage = styled.div`
    margin-top:15%;
    margin-left: 10%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

const Title = styled.h1`
    font-size: 4.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 0.85; /* adjust the opacity as needed */
    span {
        // color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        text-decoration-thickness: 0.3rem; /* ajusta el grosor */
    }
    
    @media(max-width: 540px){
        font-size: 4rem;
        padding-top: 4rem;
        padding-bottom: 1rem;
    }
`;

const SubTitle = styled.h2`
  margin-top: 1rem;
  margin-bottom: 4rem;
  font-size: 2.7rem;
  font-family: "Averia Libre", sans-serif;
  opacity: 1;
  color: white;
  span {
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green);
    padding: 0.3rem 0.5rem;
    color: white;
  }
  @media (max-width: 540px) {
    font-size: 1.8rem;
    padding-top: 0rem;
    padding-bottom: 0rem;
  }
`;


const Text = styled.p`
  font-family: "Averia Libre", sans-serif;
  font-size: 2.2rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  span {
    color: var(--green);
  }
  @media (max-width: 540px) {
    font-size: 1.8rem;
  }
`;


const AppImage = styled.img`
    margin-top: 5rem;
    margin-left: 2rem;
    width: 65%;
    height: 65%;
    @media(max-width: 540px){
        margin-top: 3rem;
        margin-left: 0rem;
        margin-right: 3rem;
        width: 70%;
        height: 70%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const Botones = styled.div`
  margin-top: 5rem;
  @media (min-width: 540px) {
    display: flex;
    justify-content: center;
  }
`;



const Boton = styled.a`
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

const BotonArs = styled(Boton)`
    color: var(--violet);
    background-color: white;
    @media(max-width: 540px){
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const BotonUsd = styled(Boton)`
    color: white;
    border: 3px solid white;
    background-color: transparent;
`;

const Intro = ({subtitle1_1, subtitle1_2, subtitle1_3}) => {
    return (
        <section id="hola">
        <Background>
            <Container>
                            <Content>
                                <Title><span>Cajita WeSexer</span></Title>
                                <SubTitle><span>Tenemos el regalo de San Valentín que estabas buscando</span></SubTitle>
                                {/* <SubTitle>Desafios para <span>reavivar la llama</span></SubTitle> */}
                                {/* <Text>
                                ¿Quieren experimentar la sexualidad juntos? ¿Probar nuevas cosas? ¿Están juntos desde hace mucho tiempo y quieren innovar en la cama (o en cualquier lado 😉)?
                                </Text> */}
                                <Botones>
                                    <BotonArs
                                        href="#comprar"
                                    >Comprar</BotonArs>
                                    {/* <BotonUsd
                                        href="#queVoyAEncontrar"
                                    >¿Cómo funciona?</BotonUsd> */}
                                </Botones>
                            </Content>
                        
            </Container>
        </Background>
        </section>
    );
}
 
export default Intro;