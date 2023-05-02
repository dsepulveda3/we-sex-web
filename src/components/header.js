import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledHeader = styled.header`
  .navbar {
    background-image: url(${({ bgImage }) => bgImage});
    background-size: cover;
    background-position: center;
    
    padding-right: 100px;
    
    @media (max-width: 768px) {
      .navbar-toggler {
        float: right;
      }
    }

    @media (min-width: 769px) {
      .ml-auto {
        margin-left: auto !important;
      }
      .navbar-nav {
        margin-left: auto !important;
      }
    }
  }
`;

const Title = styled.h1`
  font-size: 5.5rem;
  color: white;
  font-family: "Averia Libre", sans-serif;
  opacity: 1;
  margin-left: 4px;
  margin-top: 4px;

  @media(max-width: 540px){
    color: white;
    font-size: 5.5rem;
    margin-bottom:1.5rem;
  }
`;

const navLinkHoverStyles = css`
  text-decoration: underline;
  color: black;
`;

const PremiumMaterialButton = styled(NavLink)`
  background-color: var(--green);
  border-radius: 30px;
  //padding: 10px 20px;
  padding-right: 10px;
  margin-left: 15px;
  color: white;
  font-weight: bold;
  transition: all 0.3s ease-in-out;
  &:hover {
    background-color: var(--green-darken);
    color: white;
  }
`;


const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [bgColor, setBgColor] = useState('transparent');
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 0) {
        setBgColor('#000000');
        setBgImage('/img/cta-bg.jpg');
      } else {
        setBgColor('transparent');
        setBgImage('');
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleNavbar = () => {
    setIsOpen(!isOpen);
  };

  return (
    <StyledHeader bgColor={bgColor} bgImage={bgImage}>
      <Navbar expand="md" className="fixed-top">
        <div className="d-flex justify-content-between align-items-center w-100" style={{marginLeft: "20px", marginRight: "20px"}}>
          <NavbarBrand href="/">
            <Title>WeSex</Title>
          </NavbarBrand>
          <NavbarToggler aria-controls="basielc-navbar-nav" onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItem>
                <NavLink style={{ color: "white"}} css={{ "&:hover": {textDecoration: "underline"}}} className="nav-link scrollto active" href="/#hola">
                  Hola!
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" href="/#features" style={{color: "white"}}>
                  Temas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" href="/#community" style={{color: "white"}}>
                  Comunidad
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" href="/#profesionales" style={{color: "white"}}>
                  Profesionales
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" href="/#questions" style={{color: "white"}}>
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" href="/#contact" style={{color: "white"}}>
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <PremiumMaterialButton className="nav-link scrollto" href="/premium-material" style={{color: "white"}}>
                  Premium Material
                </PremiumMaterialButton>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
    </StyledHeader>
  );
};

export default Header;
