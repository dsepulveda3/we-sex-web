import React from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("img/ws-background.jpg");
    background-position: center;
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

const Title = styled.p`
    font-size: 5rem;
    font-family: "Averia Libre", sans-serif;
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;

    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 4.5rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 3rem;
    margin-bottom: 1rem;
    margin-top: 3rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        /* font-size: 1.6rem; */
    }
`;

const SmallText = styled(Text)`
    font-size: 2.5rem;
    margin-bottom: 4rem;
`;

const AppImage = styled.img`
    width: 90%;
    height: auto;
`;

const Boton = styled.button`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    display:block;
    min-width: 80%;
    margin: 1rem auto;
    border: none;
    transition: all .5s ease;
    &:hover {
        width: 95%;
    }
`;

const Stores = styled.div`
    img {
        margin-right: .5rem;
        max-height: 6.5rem;
    }
    @media(max-width: 650px){
        img {
            max-width: 16rem;
            margin-bottom:.5rem; 
        }
    }
`;

const AboutWeSex = () => {
    return (
        <Background id="wesex">
            <Container>
                    <Row className="justify-content-between">
                        <Col lg={7} className="align-items-center">
                            <Content>
                                <Title>¿Conoces WeSex?</Title>
                                {/* <Text>La App para hablar y aprender de sexo <span>sin tabú</span>.</Text> */}
                                <SmallText>Desde educación sexual hasta debates calientes, con WeSex aprendes a disfrutar más de tu sexualidad de la mano de los mejores expertos y una comunidad wesexer.</SmallText>
                                <Stores>
                                    <a  target="_blank" rel="noreferrer" href="https://play.google.com/store/apps/details?id=com.wesx">
                                        <img src="img/bt_playstore_off.png" alt="Descarga WeSex en PlayStore para Android" />
                                    </a>
                                    <a  target="_blank" href="https://apps.apple.com/us/app/wesex/id1526063508" rel="noreferrer">
                                        <img src="img/bt_appstore_off.png" alt="Descarga WeSex en AppStore para iPhone" />
                                    </a>
                                </Stores>
                            </Content>
                        </Col>
                        <Col>
                            <AppImage src="img/app.png" alt="Sexo Anal, como nunca antes gozado." />
                        </Col>
                    </Row>
            </Container>
        </Background>
    );
}
 
export default AboutWeSex;