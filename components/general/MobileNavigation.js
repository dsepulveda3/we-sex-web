import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';

const Fondo = styled.div`
  position: fixed;
  height: 7rem;
  width: 100%;
  bottom: 0;
  background-color: white;
  a {
    color: black;
    text-align: center;
    margin: auto;
    padding-top: 0.2rem!important;
    padding-bottom: 0.2rem!important;
    max-width: 2rem!important;
  }
  img {
    max-height: 2.5rem;
    width: 100%;
  }
`;

const Icon = styled.img`
  height: ${props => (props.active ? '2.5rem' : '2.2rem')};
  width: 100%;
  transition: height 0.2s ease;

  &:hover {
    cursor: pointer;
  }
`;

const BoldText = styled.span`
  font-weight: bold;
`;

const MobileNavigation = () => {
  const [activeLink, setActiveLink] = useState('/');
  const [clickedIcons, setClickedIcons] = useState({
    home: false,
    debates: false,
    articulos: false,
    premium: false,
  });
  const router = useRouter();

  const handleIconClick = (link, iconName) => {
    setActiveLink(link);
    router.push(link);
    setClickedIcons(prevState => ({
      ...prevState,
      [iconName]: true,
    }));
  };

  useEffect(() => {
    // Update active link and clicked icons when the component mounts
    setActiveLink(router.pathname);
    setClickedIcons(prevState => ({
      ...prevState,
      home: router.pathname === '/',
      debates: router.pathname === '/debates',
      articulos: router.pathname === '/articulos',
      premium: router.pathname === '/premium',
    }));
  }, [router.pathname]);

  return (
    <Fondo className="hide-desktop">
      <Container>
        <Row className="pb-1 pt-1">
          <Col xs={3} sm={3}>
            <Link href="/">
              <a onClick={() => handleIconClick('/', 'home')}>
                <Icon src={clickedIcons.home ? '/img/icons/home2-icon-black.svg' : '/img/icons/home2-icon-white.svg'} active={activeLink === '/'} />
                {activeLink === '/' ? <BoldText>Inicio</BoldText> : 'Inicio'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
            <Link href="/debates">
              <a onClick={() => handleIconClick('/debates', 'debates')}>
                <Icon src={clickedIcons.debates ? '/img/icons/debate2-icon-black.svg' : '/img/icons/debate2-icon-white.svg'} active={activeLink === '/debates'} />
                {activeLink === '/debates' ? <BoldText>Debates</BoldText> : 'Debates'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
            <Link href="/articulos">
              <a onClick={() => handleIconClick('/articulos', 'articulos')}>
                <Icon src={clickedIcons.articulos ? '/img/icons/article2-icon-black.svg' : '/img/icons/article2-icon-white.svg'} active={activeLink === '/articulos'} />
                {activeLink === '/articulos' ? <BoldText>Artículos</BoldText> : 'Artículos'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
          <Link href="/premium">
            {/* <Link href="/buscar?autofocus=true"> */}
            <a onClick={() => handleIconClick('/premium', 'premium')}>
              {/* <a onClick={() => handleIconClick('/buscar?autofocus=true', 'premium')}> */}
                <Icon src={clickedIcons.premium ? '/img/icons/premium2-icon-black.svg' : '/img/icons/premium2-icon-white.svg'} active={activeLink === '/buscar?autofocus=true'} />
                {activeLink === '/buscar' ? <BoldText>Premium</BoldText> : 'Premium'}
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Fondo>
  );
};

export default MobileNavigation;

