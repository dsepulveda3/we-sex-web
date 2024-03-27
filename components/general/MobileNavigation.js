import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import BotonUniversal from '../premiumMaterial/botonUniversal';

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
  color: black;
  font-weight: bold;
`;

const PopupContainer2 = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog2 = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton2 = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InfoText = styled.div`
    color: black;
    font-size: 1.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.2rem;
        color: white; /* Set the text color to white */
    }
`;

const InfoText2 = styled.div`
    color: black;
`;

const PopupContent3 = () => {

  return (
    <>
      <InfoText><span>Debes estar suscrito para acceder a todo el material premium</span></InfoText>
      <br />
      <BotonUniversal 
        text={"Suscribete"} 
        bgColor={'var(--green)'} 
        textColor={'white'}
        bgColorHover={'var(--violet)'}
        link_redireccion={"https://wa.me/5491140678698?text=Hola!%20Vengo%20de%20mi%20prueba%20gratuita.%20Me%20gustaría%20saber%20más%20de%20la%20suscripción"}
      />
    </>
  );
};

const MobileNavigation = ({ type, coupleType }) => {
  const [activeLink, setActiveLink] = useState('/');
  const [showPopup, setShowPopup] = useState(false);
  const [clickedIcons, setClickedIcons] = useState({
    home: false,
    debates: false,
    articulos: false,
    premium: false,
  });
  const router = useRouter();

  const handleShowPopup = () => {
    setShowPopup(true);
  };

  const handleIconClick = (link, iconName) => {
    if (coupleType === 'free_tier' || coupleType === 'box') {
      console.log("here");
      handleShowPopup();
      return;
    } else {
      console.log("NOT HERE");
      setActiveLink(link);
      router.push(link);
      setClickedIcons(prevState => ({
        ...prevState,
        [iconName]: true,
      }));
    }
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
                <a onClick={() => handleIconClick(`/premium-material/guides?origin=${router.query.origin}`, 'coupleGuides')}>
                  {/* <a onClick={() => handleIconClick('/buscar?autofocus=true', 'premium')}> */}
                    <Icon src={clickedIcons.coupleGuides ? '/img/icons/open-book.svg' : '/img/icons/open-book_unfilled.svg'} active={activeLink.includes('/premium-material/guides')} alt='premium-material-logo' />
                    {activeLink.includes('/premium-material/guides') ? <BoldText>Premium</BoldText> : <InfoText2>Premium</InfoText2>}
                  </a>
            </Col>
          </Row>
        </Container>
      </Fondo>) : (<></>)
    }
    {showPopup && (
              <PopupContainer2 onClick={() => setShowPopup(false)}>
                  <PopupDialog2 onClick={(e) => e.stopPropagation()}>
                      <CloseButton2 onClick={() => setShowPopup(false)}>✕</CloseButton2>
                      <PopupContent3 />
                  </PopupDialog2>
              </PopupContainer2>
    )}
    </>
  );
};

export default MobileNavigation;

