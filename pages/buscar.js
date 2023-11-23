import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../config/axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import ArticlesLine from '../components/articles/ArticlesLine';
import DiscussionsLine from '../components/debates/DiscussionsLine';

const Title = styled.p`
  /* text-align: left; */
  color: var(--violet);
  font-weight: bold;
  font-size: 3.5rem;
  margin-bottom: 1rem;
  margin-top: 2rem;
  text-transform: capitalize;
  @media (max-width: 540px) {
    font-size: 2.9rem;
  }
`;

const NoContent = styled.p`
  font-weight: bold;
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

const Search = () => {
  const [searchString, setSearchString] = useState('');
  const [searchingString, setSearchingString] = useState('');
  const [itemsToSearch, setItemsToSearch] = useState([]);
  const [autofocus, setAutofocus] = useState(false);
  const [articles, setArticles] = useState([]);
  const [discussions, setDiscussions] = useState([]);

  useEffect(() => {
    const queryString = window.location.search;
    const urlParams = new URLSearchParams(queryString);
    const search = urlParams.get('search');
    const autofocusParam = urlParams.get('autofocus');
    if (autofocusParam === 'true' || autofocusParam) {
      setAutofocus(true);
      // const searchInputs = document.querySelectorAll('.wrapper input');
      // searchInputs[1].focus()
    }
    setSearchString(search || '');
    getArticles();
    getDiscussions();
    setItemsToSearch([...discussions, ...articles]);
    // eslint-disable-next-line
  }, []);

  async function getArticles() {
    await clienteAxios.get(`/search/articles?queryString=${searchString}`).then((response) => {
      setArticles(response.data.results);
    });
  }

  async function getDiscussions() {
    await clienteAxios.get(`search/public-discussions?queryString=${searchString}`).then((response) => {
      setDiscussions(response.data.results);
    });
  }

  function handleOnSearch(string, results) {
    setSearchingString(string);
  }

  function handleOnSelect(item) {
    //   window.open(`/buscar?search=${item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase()}`)
    // setSearchString(item.title.normalize("NFD").replace(/[\u0300-\u036f]/g, '').toLowerCase())
    window.location.href = `buscar/?search=${item.title
      .normalize('NFD')
      .replace(/[\u0300-\u036f]/g, '')
      .toLowerCase()}`;
  }
  return (
    <>
      <Head>
        <title>
          {'Buscar | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>

      <Layout>
        <div className='sec-title'>
          <Container>
            <h1 style={{ textTransform: 'capitalize' }}>
              {searchString ? searchString : null}
            </h1>
            <div className='hide-desktop m-3'>
              <ReactSearchAutocomplete
                autoFocus={autofocus}
                items={itemsToSearch}
                maxResults={15}
                onSearch={handleOnSearch}
                onSelect={handleOnSelect}
                showNoResultsText={searchingString}
                resultStringKeyName='title' // String to display in the results
                formatResult={formatResult}
                fuseOptions={{ keys: ['title', 'description', 'keywords'] }} // Search in the description text as well
                styling={{ zIndex: 3 }} // To display it on top of the search box below
              />
            </div>
          </Container>
        </div>
        <Container>
          <Title>Artículos</Title>
          <ArticlesLine articles={articles} />

          <Title>Debates</Title>
          <DiscussionsLine discussions={discussions} />
        </Container>
      </Layout>
    </>
  );
};

export default Search;
