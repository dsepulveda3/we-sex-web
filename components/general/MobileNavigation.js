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
  z-index: 999; /* Set a high value for the z-index */
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

const MobileNavigation = ({type}) => {
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
      premium: router.pathname === '/premium-material',
      road: router.pathname === '/premium-material/desafios-para-parejas/road',
      coupleGuides: router.pathname.includes('/premium-material/guides'),
    }));
  }, [router.pathname]);

  return (
    <>
    { type === 'landing' && type !== 'road' ? (<></>): (
      <Fondo className="hide-desktop">
      <Container>
        <Row className="pb-1 pt-1">
          <Col xs={3} sm={3}>
            <Link legacyBehavior href="/">
              <a onClick={() => handleIconClick('/', 'inicio')}>
                <Icon src={clickedIcons.home ? '/img/icons/home2-icon-black.svg' : '/img/icons/home2-icon-white.svg'} active={activeLink === '/'} alt='home-logo'/>
                {activeLink === '/' ? <BoldText>Inicio</BoldText> : 'Inicio'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
            <Link legacyBehavior href="/debates">
              <a onClick={() => handleIconClick('/debates', 'debates')}>
                <Icon src={clickedIcons.debates ? '/img/icons/debate2-icon-black.svg' : '/img/icons/debate2-icon-white.svg'} active={activeLink === '/debates'} alt='discussions-logo' />
                {activeLink === '/debates' ? <BoldText>Debates</BoldText> : 'Debates'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
            <Link legacyBehavior href="/articulos">
              <a onClick={() => handleIconClick('/articulos', 'articulos')}>
                <Icon src={clickedIcons.articulos ? '/img/icons/article2-icon-black.svg' : '/img/icons/article2-icon-white.svg'} active={activeLink === '/articulos'} alt='articles-logo' />
                {activeLink === '/articulos' ? <BoldText>Artículos</BoldText> : 'Artículos'}
              </a>
            </Link>
          </Col>
          <Col xs={3} sm={3}>
          <Link legacyBehavior href="/premium-material">
            {/* <Link href="/buscar?autofocus=true"> */}
            <a onClick={() => handleIconClick('/premium-material', 'premium-material')}>
              {/* <a onClick={() => handleIconClick('/buscar?autofocus=true', 'premium')}> */}
                <Icon src={clickedIcons.premium ? '/img/icons/premium2-icon-black.svg' : '/img/icons/premium2-icon-white.svg'} active={activeLink === 'premium-material'} alt='premium-material-logo' />
                {activeLink === '/premium-matrial' ? <BoldText>Premium</BoldText> : 'Premium'}
              </a>
            </Link>
          </Col>
        </Row>
      </Container>
    </Fondo>
    )}
    { type === 'road' ? (
      <Fondo className="hide-desktop">
        <Container>
          <Row className="pb-1 pt-1">
            <Col xs={6} sm={6}>
              <Link legacyBehavior href={`/premium-material/desafios-para-parejas/road?origin=${router.query.origin}`}>
                <a onClick={() => handleIconClick(`/premium-material/desafios-para-parejas/road?origin=${router.query.origin}`, 'road')}>
                  <Icon src={clickedIcons.road ? '/img/icons/home2-icon-black.svg' : '/img/icons/home2-icon-white.svg'} active={activeLink === '/premium-material/desafios-para-parejas/road'} alt='home-logo'/>
                  {activeLink === '/premium-material/desafios-para-parejas/road' ? <BoldText>Inicio</BoldText> : 'Inicio'}
                </a>
              </Link>
            </Col>
            <Col xs={6} sm={6}>
              <Link legacyBehavior href={`/premium-material/guides?origin=${router.query.origin}`}>
                <a onClick={() => handleIconClick(`/premium-material/guides?origin=${router.query.origin}`, 'coupleGuides')}>
                  {/* <a onClick={() => handleIconClick('/buscar?autofocus=true', 'premium')}> */}
                    <Icon src={clickedIcons.coupleGuides ? '/img/icons/open-book.svg' : '/img/icons/open-book_unfilled.svg'} active={activeLink.includes('/premium-material/guides')} alt='premium-material-logo' />
                    {activeLink.includes('/premium-material/guides') ? <BoldText>Premium</BoldText> : 'Premium'}
                  </a>
                </Link>
            </Col>
          </Row>
        </Container>
      </Fondo>) : (<></>)
    }
    </>
  );
};

export default MobileNavigation;

