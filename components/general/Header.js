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
// import { itemsToSearch } from '../../data';
import clienteAxios from '../../config/axios';
import { useRouter } from 'next/router';

const NavbarW = styled(Navbar)`
  background-color: var(--violet);
  /* padding: 1rem; */
  .nav-item-ws {
    color: White !important;
    padding: 0.5rem 1rem !important;
    font-size: 2.2rem;
    margin: 0 0 0 1rem;
    border: transparent solid;
    border-radius: 3rem;
    transition: all 1s ease;
    &:hover {
      border: white solid;
    }
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

const Header = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [searchString, setSearchString] = useState('');
  const [discussionsToSearch, setDiscussionsToSearch] = useState([]);
  const [articlesToSearch, setArticlesToSearch] = useState([]);
  const [itemsToSearch, setItemsToSearch] = useState([]);
  const toggle = () => setIsOpen(!isOpen);
  const router = useRouter();

  function handleOnSearch(string, results) {
    setSearchString(string);
  }

  function handleOnSelect(item) {
    // const url = window.location.href.split('/');

    // if (articlesToSearch.map((a) => a._id).includes(item._id)) {
    //   router.push(
    //     url[3] === 'articleDetail' ? `${item._id}` : `articleDetail/${item._id}`
    //   );
    // } else if (discussionsToSearch.map((a) => a._id).includes(item._id)) {
    //   router.push(
    //     url[3] === 'discussionDetail'
    //       ? `${item._id}`
    //       : `discussionDetail/${item._id}`
    //   );
    // }
    window.open(
      `/buscar?search=${item.title
        .normalize('NFD')
        .replace(/[\u0300-\u036f]/g, '')
        .toLowerCase()}`
    );
  }

  useEffect(() => {
    getDiscussionsToSearch();
    getArticlesToSearch();
    setItemsToSearch([...discussionsToSearch, ...articlesToSearch]);
  }, [searchString]);

  async function getDiscussionsToSearch() {
    await clienteAxios
      .get('search/public-discussions', {
        query: { queryString: searchString },
      })
      .then((response) => {
        setDiscussionsToSearch(response.data.results);
      });
  }

  async function getArticlesToSearch() {
    await clienteAxios
      .get('search/articles', { query: { queryString: searchString } })
      .then((response) => {
        setArticlesToSearch(response.data.results);
      });
  }

  async function getUsersToSearch() {
    await clienteAxios
      .get('search/users', { query: { queryString: searchString } })
      .then((response) => {
        setUsersToSearch(response.data.results);
      });
  }

  return (
    <div style={{ backgroundColor: 'var(--violet)' }}>
      <Container>
        <NavbarW expand='lg' dark>
          <NavbarBrand
            style={{ color: 'white', fontSize: '2.8rem', marginBottom: '0' }}
            href='/'
          >
            WeSex
          </NavbarBrand>
          <NavbarToggler onClick={toggle} />
          <Collapse isOpen={isOpen} navbar>
            <Nav className='me-auto' navbar>
              <NavItem>
                <NavLink href='/articulos' className='nav-item-ws'>
                  Articulos
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/debates' className='nav-item-ws'>
                  Debates
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/sexionario' className='nav-item-ws'>
                  Sexionario
                </NavLink>
              </NavItem>
              <NavItem>
                <NavLink href='/sexfaqs' className='nav-item-ws'>
                  SexFaqs
                </NavLink>
              </NavItem>
            </Nav>

            <NavbarText style={{ width: 300, marginLeft: 20, marginRight: 20 }}>
              <ReactSearchAutocomplete
                items={itemsToSearch}
                maxResults={15}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                // onHover={handleOnHover}
                // onFocus={handleOnFocus}
                // onClear={handleOnClear}
                showNoResultsText={searchString}
                resultStringKeyName='title' // String to display in the results
                formatResult={formatResult}
                fuseOptions={{
                  keys: ['title', 'description', 'keywords'],
                }} // Search in the description text as well
                styling={{ zIndex: 3 }} // To display it on top of the search box below
              />
            </NavbarText>
          </Collapse>
        </NavbarW>
      </Container>
    </div>
  );
};

export default Header;
