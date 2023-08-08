import React, { useEffect, useState } from 'react';
import {
  Container,
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText,
} from 'reactstrap';
import Link from 'next/link';
import styled from '@emotion/styled';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import AuthToggleLinks from './AuthToggleLinks';
// import { itemsToSearch } from '../../data';
import clienteAxios from '../../config/axios';
import { useRouter } from 'next/router';
import HeaderLanding from '../general/HeaderLanding'
import { useAuth } from '../../context/authUserContext';

const StyledHeader = styled.header`
    z-index: 1000;  /* Higher z-index value */
    position: sticky;
    top: 0;
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
        height: 30vh;
        width: 100vw;
        background-color: violet;
        background-image: url("/img/landing/cta-bg.jpg");
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

const SingUpButton = styled.a`
    display: inline-block;
    background-color: var(--bs-red);
    border-radius: 30px;
    padding: 10px 20px;
    color: white;
    cursor: pointer;
    white-space: nowrap; 

    @media(max-width: 540px){
      margin-top: 2rem;

    }

`;

const StyledNavbarToggler = styled(NavbarToggler)`
  background-image: url(${'/img/icons/navbar-icon.png'});
  padding: 0.2px;
  background-size: cover;
  background-position: center;
  border: none;
   /* Add this line to make the SVG white */
  
  &:focus {
    outline: none;
  }

  &::after {
    display: none;
  }
`;



const NavItemHideOnPhone = styled(NavItem)`
  &:hover {
  text-decoration: underline;
  }
  @media (max-width: 767px) {
    display: none;
  }
`;

const formatResult = (item) => {
  return (
    <div className='result-wrapper'>
      <span className='result-span'>
        {item.title}
        {item.description ? `: ${item.description}` : null}
      </span>
      {/* <span className="result-span"></span> */}
    </div>
  );
};

const Header = ({type}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [discussionsToSearch, setDiscussionsToSearch] = useState([]);
  const [articlesToSearch, setArticlesToSearch] = useState([]);
  const [itemsToSearch, setItemsToSearch] = useState([]);
  const { authUser, loading } = useAuth();
  const [loggedIn, setLoggedIn] = useState(false);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  const [bgColor, setBgColor] = useState('transparent');
  const [bgImage, setBgImage] = useState('');

  useEffect(() => {
    if (!loading && authUser){
     setLoggedIn(true)
    }
  }, [authUser, loading]);

  useEffect(() => {
    if (type === 'landing') {
      setBgImage('');
    }
    else if(type === 'nothidden') {
      setBgImage('/img/landing/cta-bg.jpg');
    }
    
  }, [type]);
  

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset >= 0) {
        setBgColor('#000000');
        if (type === 'nothidden') {
          setBgImage('/img/landing/cta-bg.jpg');
        } else {
          setBgImage('');
        }
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

  function handleOnSearch(string, results) {
    setSearchString(string);
  }

  function handleOnSelect(item) {
    window.open(
      `/buscar?search=${item.title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()}`
    );
  }

  return (
    <>
    {type === 'landing' ? (<HeaderLanding />): (
      <StyledHeader bgColor={bgColor} bgImage={bgImage}>
      <Navbar expand="md" className="fixed-top" >
      <div className="d-flex justify-content-between align-items-center w-100" style={{marginLeft: "20px", marginRight: "20px"}}>
          <NavbarBrand href="/">
            <Title>WeSex</Title>
          </NavbarBrand>
          <StyledNavbarToggler aria-controls="basielc-navbar-nav" onClick={toggleNavbar} />
          <Collapse isOpen={isOpen} navbar>
            <Nav navbar>
              <NavItemHideOnPhone>
                <NavLink onClick={toggleNavbar} style={{ color: "white"}} css={{ "&:hover": {textDecoration: "underline"}}} className="nav-link scrollto active" href="/inicio">
                  Home
                </NavLink>
              </NavItemHideOnPhone>

              <NavItemHideOnPhone>
                <NavLink className="nav-link scrollto" 
                href="/debates" style={{color: "white"}}
                >
                  Debates
                </NavLink>
              </NavItemHideOnPhone>

              <NavItemHideOnPhone>
                <NavLink  className="nav-link scrollto" 
                href="/articulos" style={{color: "white"}}>
                  Articulos
                </NavLink>
              </NavItemHideOnPhone>
              
              <NavItemHideOnPhone>
                <PremiumMaterialButton onClick={toggleNavbar} className="nav-link scrollto" href="/premium-material" style={{color: "white"}}>
                  Premium Material
                </PremiumMaterialButton>
              </NavItemHideOnPhone>

              
            </Nav>

            

            <NavbarText style={{ width: 300, marginLeft: 20, marginRight: 20 }}>
                <ReactSearchAutocomplete
                  items={itemsToSearch}
                  maxResults={15}
                  onSearch={handleOnSearch}
                  onSelect={handleOnSelect}
                  showNoResultsText={searchString}
                  resultStringKeyName='title'
                  formatResult={formatResult}
                  fuseOptions={{
                    keys: ['title', 'description', 'keywords'],
                  }} 
                  styling={{ zIndex: 3 }} 
                />
              </NavbarText>

              {loggedIn? <AuthToggleLinks setLoginStatus={setLoggedIn} /> : (
                <SingUpButton href='/login' >
                      Iniciar sesión
                </SingUpButton>
              )}
              
          </Collapse>
        </div>
        
      </Navbar>
      {isOpen && <div className="backgroundClick" onClick={toggleNavbar}></div>}
    </StyledHeader>
    )}
      
    </>
  );
};

export default Header;


// return (
//   <div style={{ backgroundColor: 'var(--violet)' }}>
//     <StyledHeader>
//       <NavbarW expand='lg' dark>
//         <NavbarBrand
//           style={{ color: 'white', fontSize: '2.8rem', marginBottom: '0' }}
//           href='/'
//         >
//           WeSex
//         </NavbarBrand>
//         <NavbarToggler onClick={toggle} />
//         <Collapse isOpen={isOpen} navbar>
//           <Nav className='me-auto' navbar>
//             <NavItem>
//               <NavLink href='/articulos' className='nav-item-ws'>
//                 Articulos
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href='/debates' className='nav-item-ws'>
//                 Debates
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href='/sexionario' className='nav-item-ws'>
//                 Sexionario
//               </NavLink>
//             </NavItem>
//             <NavItem>
//               <NavLink href='/sexfaqs' className='nav-item-ws'>
//                 SexFaqs
//               </NavLink>
//             </NavItem>
//           </Nav>

//           <NavbarText style={{ width: 300, marginLeft: 20, marginRight: 20 }}>
//             <ReactSearchAutocomplete
//               items={itemsToSearch}
//               maxResults={15}
//               onSearch={handleOnSearch}
//               onSelect={handleOnSelect}
//               // onHover={handleOnHover}
//               // onFocus={handleOnFocus}
//               // onClear={handleOnClear}
//               showNoResultsText={searchString}
//               resultStringKeyName='title' // String to display in the results
//               formatResult={formatResult}
//               fuseOptions={{
//                 keys: ['title', 'description', 'keywords'],
//               }} // Search in the description text as well
//               styling={{ zIndex: 3 }} // To display it on top of the search box below
//             />
//           </NavbarText>
//         </Collapse>
//       </NavbarW>
//     </StyledHeader>
//   </div>
// );
// };

// export default Header;