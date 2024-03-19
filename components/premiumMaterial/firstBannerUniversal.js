import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import ReactPlayer from 'react-player';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';
import { useAuth } from '../../context/authUserContext'

const Background = styled.div`

    background-color: var(--violet);
    background-image: url("/img/premium-material/ws-background.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 75vh;
    margin-top: .1rem;
    position: relative;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
        min-height: 65vh;
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
        font-size: 4.0rem;
        margin-bottom:3rem;
        margin-top: 12rem;
        margin-right: 2rem;
        margin-left: 2rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        
    }
`;

const AppImage = styled.img`
    // width: 80%;
    // height: auto;
    @media(max-width: 540px){
        margin-top: 3rem;
    }

    
`;

const Botones = styled.div`
    margin-top: 5rem;
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
        margin-right: 3rem;
        margin-left: 3rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const BotonUsd = styled(Boton)`
    color: white;
    border: 3px solid white;
    background-color: transparent;
    @media(max-width: 540px){
        margin-right: 3rem;
        margin-left: 3rem;
    }
`;

const Video = styled.div`
    position: relative; 
    padding-top: 14rem;
    padding-left: 2rem;
    height: 0;
    top: 0; 
    left: 0; 
    width: 100%; 
    height: 100%;
    @media(max-width: 540px){
        padding-top: 6rem;
        padding-left: 0rem;
    }
`;

const PriceBefore = styled.span`
  text-decoration: line-through;
  color: white;
`;

const FirstBanner = ({titleText, titleSpan, titleText2, titleSpan2, price_before, price, description1, 
    descriptionSpan, description2, image, widthImage, imageVisibility, video, videoVisibility, isEmbedded, buyVisibility=true}) => {
    const [imageIsVisible, setImageIsVisible] = useState(imageVisibility);
    const [videoIsVisible, setVideoIsVisible] = useState(videoVisibility);
    const [isEmbeddedVideo, setIsEmbeddedVideo] = useState(isEmbedded);
    const [buyIsVisible, setBuyIsVisible] = useState(buyVisibility);
    const [userHasAccess, setUserHasAccess] = useState(false);
    const [isClient, setIsClient] = useState(false);
    const { authUser, loading, isSubscribed } = useAuth();

    useEffect(() => {
        setIsClient(true)
    }, [])

    useEffect(() => {
        if (isSubscribed) {
            setUserHasAccess(true)
        }
    }, [isSubscribed, authUser, loading])

    return (
        <Background>
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                                <Title>{titleText} <span>{titleSpan}</span> {titleText2} <span>{titleSpan2}</span></Title>
                                <Text style={{fontWeight: "bold", textDecoration: "underline", fontSize: "3rem"}}>¡Descuento 50%OFF solo x hoy!</Text>
                                <Text>
                                    <span><strong>{price}</strong></span> <br/>
                                    <PriceBefore>AR$ 6.400 / U$D 12  </PriceBefore>
                                    {description1} <PriceBefore>{price_before}  </PriceBefore>
                                    
                                </Text>
                                <Text>
                                    <span>{descriptionSpan}</span>
                                </Text>
                                <Text>
                                    {description2}
                                </Text>
                                <Botones>
                                    {buyIsVisible && (
                                        <BotonArs
                                            href="#comprar"
                                        >Comprar</BotonArs>
                                    )}
                                    <BotonUsd
                                        href="#paravos"
                                    >¿Qué voy a aprender?</BotonUsd>
                                </Botones>
                            </Content>
                        </Col>
                        <Col>
                            {imageIsVisible && (
                                <ContentImage>
                                    <AppImage src={image} width={widthImage} alt="Logotipo Guía Wesex" />
                                </ContentImage>
                            )}
                            {videoIsVisible && isClient && !isEmbeddedVideo && userHasAccess && (
                                <Video>
                                    <ReactPlayer url={video} controls={true} width="100%" height="100%" />
                                </Video>
                            )}
                            {videoIsVisible && isEmbeddedVideo && (
                                <Video>
                                    <iframe src={video} frameborder="0" webkitallowfullscreen="true" mozallowfullscreen="true" allowFullScreen></iframe>
                                </Video>
                            )}
                        </Col>
                    </Row>
            </Container>
        </Background>
    );
}
 
export default FirstBanner;