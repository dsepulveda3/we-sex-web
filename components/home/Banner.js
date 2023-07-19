import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import Image from 'next/image';

const Background = styled.div`
  background-color: var(--violet);
  background-image: url('img/articles/article-background.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-attachment: fixed;
  min-height: 85vh;
  margin-top: 0.1rem;
  position: relative;
  @media (max-width: 540px) {
    text-align: center;
    padding-bottom: 3rem;
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

const Title = styled.h1`
  font-size: 5.5rem !important;
  font-family: 'Averia Libre', sans-serif;
  span {
    color: var(--green);
    font-weight: bold;
    font-family: 'Averia Libre', sans-serif;
  }
  @media (max-width: 540px) {
    margin-bottom: 1.5rem;
    font-size: 4.8rem;
  }
`;

const Text = styled.p`
  font-family: 'Averia Libre', sans-serif;
  font-size: 2rem;
  margin-bottom: 1rem;
  span {
    color: var(--green);
  }
  @media (max-width: 540px) {
    /* font-size: 1.6rem; */
  }
`;

const AppImage = styled.img`
  width: 85%;
  height: auto;
  @media (max-width: 991px) {
    display: none;
  }
`;
const Stores = styled.div`
  img {
    margin-right: 0.5rem;
    max-height: 6.5rem;
  }
  @media (max-width: 650px) {
    img {
      max-width: 16rem;
      margin-bottom: 0.5rem;
    }
  }
`;

const Banner = () => {
  return (
    <Background>
      <Container>
        <Row className='justify-content-between'>
          <Col lg={7} className='align-items-center'>
            <Content>
              <Title>
                La App para hablar y aprender de <span>sexo</span> sin tabú.
              </Title>
              <Text>
                Sáquese dudas <span>anónimamente</span> en los debates sexuales.
                <br />
                Conozca otras experiencias y articulos escritos por
                profesionales.
              </Text>
              <Stores>
                <a
                  target='_blank'
                  rel='noreferrer'
                  href='https://play.google.com/store/apps/details?id=com.wesx'
                >
                  <img
                    src='img/home/bt_playstore_off.png'
                    alt='Descarga WeSex en PlayStore para Android'
                  />
                </a>
                <a
                  target='_blank'
                  href='https://apps.apple.com/us/app/wesex/id1526063508'
                  rel='noreferrer'
                >
                  <img
                    src='img/home/bt_appstore_off.png'
                    alt='Descarga WeSex en AppStore para iPhone'
                  />
                </a>
              </Stores>
            </Content>
          </Col>
          <Col>
            <AppImage src='img/home/app.png' alt='WeSex App' />
          </Col>
        </Row>
      </Container>
    </Background>
  );
};

export default Banner;
