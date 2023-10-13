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
    // min-height: 72vh;
    margin-top: .1rem;
    position: relative;
    padding-bottom:8rem;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;

const Content = styled.div`
    /* margin: 0;
    position: absolute;
    top: 50%;
    -ms-transform: translateY(-50%);
    transform: translateY(-50%); */
    margin-top: 15%;
    @media(min-width: 540px){
        margin-top: 20%;
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
    font-size: 5.5rem;
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
        padding-bottom: 2rem;
    }
`;


const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
    }
    @media(min-width: 540px){
        
    }
`;

const AppImage = styled.img`
    width: 75%;
    height: 75%;
    @media(max-width: 540px){
        margin-top: 3rem;
        width: 70%;
        height: 70%;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const AppImageAppStore = styled.img`
    width: 80%;
    height: 90%;
    @media(max-width: 540px){
        margin-top: 2.9rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImagePlayStore = styled.img`
    width: 75%;
    height: 90%;
    @media(max-width: 540px){
        margin-top: 3rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const Botones = styled.div`
    margin-top: 6rem;
    display: flex;
    justify-content: center; /* for horizontal centering */
    align-items: center; /* for vertical centering */

    @media (max-width: 540px) {
        flex-direction: row;
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

const Hola = () => {
    return (
        <section id="hola">
        <Background>
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                                <Title>La app para aprender y hablar de <span>sexo</span></Title>
                                <Text>
                                    Desde educación sexual hasta debates calientes, con WeSex aprendes a disfrutar más de tu sexualidad, y a conocer un mundo de posibilidades.
                                </Text>
                                <Botones>
                                <a href="https://apps.apple.com/us/app/wesex/id1526063508" target="_blank">
                                    <AppImageAppStore src="img/landing/bt_appstore_off.png" alt="Link to appstore." />
                                </a>
                                <a href="https://apps.apple.com/us/app/wesex/id1526063508" target="_blank">
                                    <AppImagePlayStore src="img/landing/bt_playstore_off.png" alt="Link to playstore." />
                                </a>

                                    {/* <BotonArs
                                        href="#comprar"
                                    >Comprar</BotonArs>
                                    <BotonUsd
                                        href="#queVoyAEncontrar"
                                    >¿Qué voy a aprender?</BotonUsd> */}
                                </Botones>
                            </Content>
                        </Col>
                        <Col>
                            <ContentImage>
                                <AppImage src="img/landing/hero-img.png" alt="Sexo Anal, como nunca antes gozado." />
                            </ContentImage>
                        </Col>
                    </Row>
            </Container>
        </Background>
        </section>
    );
}
 
export default Hola;