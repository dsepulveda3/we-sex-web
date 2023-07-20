import React from 'react';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';

const Number = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: black;
    font-weight: bold;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        text-align:left;
    }
`;

const TextSubtitleCharacteristics = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    margin-bottom: 0rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;

const AppImageDownload = styled.img`
    width: 30%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageArticles = styled.img`
    width: 30%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageDebates = styled.img`
    width: 30%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageInstagram = styled.img`
    width: 30%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const Statistic = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;
    margin-top: 20px;
    margin-bottom: 20px;

    @media(max-width: 540px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;


const Stadistics = () => {
    return (
        <Container>
            <Row>
                <Col xs="6" md="3" className="text-center">
                    <Statistic>
                        <AppImageDownload src="img/landing/Descargas.png" alt="" />
                        <Number>+135.000</Number>
                        <TextSubtitleCharacteristics>Usuarios</TextSubtitleCharacteristics>
                    </Statistic>
                </Col>
                <Col xs="6" md="3" className="text-center">
                    <Statistic>
                        <AppImageArticles src="img/landing/Articulos.png" alt="" />
                        <Number>+160</Number>
                        <TextSubtitleCharacteristics>Articulos</TextSubtitleCharacteristics>
                    </Statistic>
                </Col>
                <Col xs="6" md="3" className="text-center">
                    <Statistic>
                        <AppImageDebates src="img/landing/Debates.png" alt="" />
                        <Number>+14.000</Number>
                        <TextSubtitleCharacteristics>Debates</TextSubtitleCharacteristics>
                    </Statistic>
                </Col>
                <Col xs="6" md="3" className="text-center">
                    <Statistic>
                        <AppImageInstagram src="img/landing/Instagram.png" alt="" />
                        <Number>+43.000</Number>
                        <TextSubtitleCharacteristics>Seguidores</TextSubtitleCharacteristics>
                    </Statistic>
                </Col>
                
            </Row>
        </Container>
    );
};

export default Stadistics;