import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';

const Background = styled.div`

    background-color: var(--violet);
    background-image: url("/img/ws-background.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 85vh;
    margin-top: .1rem;
    position: relative;
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
    margin-top: 20%;
`;

const ContentImage = styled.div`
    margin-top:20%;
    @media(max-width: 540px){
        margin-top:0!important;
    }
`;

const Title = styled.h1`
    font-size: 4.5rem;
    font-family: "Averia Libre", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        font-size: 5.5rem;
        margin-bottom:1.5rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 1rem;
    margin-top: 1rem;

    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const AppImage = styled.img`
    width: 45%;
    height: auto;
    margin-left: 12rem;
    margin-top: 2rem;
    @media(max-width: 540px){
        margin-right: 6rem;
        margin-left: 7rem;
    }

    
`;

const Botones = styled.div`
    margin-top: 2rem;
    @media(min-width: 540px){
        display: flex;
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

const Text4 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.05em;
    margin-top: 0.5rem;
    color: white;
    font-style: italic;

    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.0rem;
    }
`;

const FirstBannerGT = () => {
    return (
        <Background>
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                                <Title><span>Guía de tantra: </span>orgasmos más profundos</Title>
                                <Text>
                                    <span><strong>AR$ 1.000  /  U$D 5</strong></span> <br/>
                                    Te enseñamos de 0 a 100,<br/>cómo aplicar el tantra a tu vida sexual.

                                    <Text4>Con la compra de esta guía te llevas un audio con una meditación guiada.</Text4>
                                </Text>

                                <Botones>
                                    <BotonArs
                                        href="comprar"
                                        onClick={(e) => {
                                        e.preventDefault();
                                        const el = document.getElementById('comprar');
                                        window.scrollTo({
                                            top: el.offsetTop - 90, // Adjust this value as needed
                                            behavior: 'smooth',
                                        });
                                        }}
                                    >Comprar</BotonArs>
                                    {/* <BotonUsd
                                        href="#paravos"
                                    >¿Qué voy a aprender?</BotonUsd> */}
                                </Botones>
                            </Content>
                        </Col>
                        <Col>
                            <ContentImage>
                                <AppImage src="../../img/ico/Tantra (1).png" />
                            </ContentImage>
                        </Col>
                    </Row>
            </Container>
        </Background>
    );
}
 
export default FirstBannerGT;