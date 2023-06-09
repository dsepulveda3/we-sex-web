import React, { useState, useEffect } from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink } from 'reactstrap';
import styled from '@emotion/styled';
import { css } from '@emotion/react';

const StyledHeader = styled.header`
  .navbar {
    background-image: url(${({ bgImage }) => bgImage});
    background-size: cover;
    background-position: center;

    .navbar-toggler {
      border-color: white;
      color: white;
      z-index: 2;  /* set the z-index of the navbar-toggler */
    }

    @media (max-width: 768px) {
      .navbar-toggler {
        float: right;
      }
      .navbar-collapse {
        position: fixed;
        top: 0;
        left: 0;
        height: 40vh;
        width: 100vw;
        background-color: violet;
        background-image: url("/img/cta-bg.jpg");
        z-index: 1;  /* set the z-index of the navbar-collapse */
      }
      .navbar-nav {
        padding-top: 70px; /* adjust this value as needed to add space at the top */
      }
      .navbar-nav .nav-link {
        color: black;
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
  
  .backgroundClick {
    position: fixed;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background-color: transparent;
    z-index: 1;  /* set the z-index of the background click */
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

const StyledNavbarToggler = styled(NavbarToggler)`
  background-image: url(${'/img/ico/navbar-icon.png'});
  background-size: cover;
  background-position: center;
  border: none;
  
  &:focus {
    outline: none;
  }

  &::after {
    display: none;
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
      <Navbar expand="md" className="fixed-top" >
      <div className="d-flex justify-content-between align-items-center w-100" style={{marginLeft: "20px", marginRight: "20px"}}>
          <NavbarBrand href="/">
            <Title>WeSex</Title>
          </NavbarBrand>
          <StyledNavbarToggler aria-controls="basielc-navbar-nav" onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
            <NavItem>
                <NavLink onClick={toggleNavbar} style={{ color: "white"}} css={{ "&:hover": {textDecoration: "underline"}}} className="nav-link scrollto active" href="/#hola">
                  Hola!
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink  className="nav-link scrollto" 
                href="/#features" style={{color: "white"}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleNavbar();
                  const el = document.getElementById('/#features');
                  window.scrollTo({
                    top: el.offsetTop - 70, // Adjust this value as needed
                    behavior: 'smooth',
                  });
                }}
                >
                  Temas
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" 
                href="/#community" style={{color: "white"}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleNavbar();
                  const el = document.getElementById('community');
                  window.scrollTo({
                    top: el.offsetTop - 70, // Adjust this value as needed
                    behavior: 'smooth',
                  });
                }}
                >
                  Comunidad
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" 
                href="/#about" style={{color: "white"}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleNavbar();
                  const el = document.getElementById('about');
                  window.scrollTo({
                    top: el.offsetTop - 70, // Adjust this value as needed
                    behavior: 'smooth',
                  });
                }}
                >
                  Profesionales
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" 
                href="/#questions" style={{color: "white"}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleNavbar();
                  const el = document.getElementById('questions');
                  window.scrollTo({
                    top: el.offsetTop - 70, // Adjust this value as needed
                    behavior: 'smooth',
                  });
                }}
                >
                  FAQ
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link scrollto" 
                href="/#contact" style={{color: "white"}}
                onClick={(e) => {
                  e.preventDefault();
                  toggleNavbar();
                  const el = document.getElementById('contact');
                  window.scrollTo({
                    top: el.offsetTop - 70, // Adjust this value as needed
                    behavior: 'smooth',
                  });
                }}
                >
                  Contacto
                </NavLink>
              </NavItem>
              <NavItem>
                <PremiumMaterialButton onClick={toggleNavbar} className="nav-link scrollto" href="/premium-material" style={{color: "white"}}>
                  Premium Material
                </PremiumMaterialButton>
              </NavItem>
            </Nav>
          </Collapse>
        </div>
      </Navbar>
      {isOpen && <div className="backgroundClick" onClick={toggleNavbar}></div>}
    </StyledHeader>
  );
};


export default Header;
