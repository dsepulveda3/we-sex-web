import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Title from '../components/general/Title';
import clienteAxios from '../config/axios';
import { ReactSearchAutocomplete } from 'react-search-autocomplete';
import ItemSexionario from '../components/sexionario/ItemSexionario';

export async function getStaticProps() {
  const response = await clienteAxios.get(`/sextionary`);

  return {
    props: {
      sexionaryItems: response.data.results,
    },
    revalidate: 60,
  };
}

const Sexionary = ({ sexionaryItems }) => {
  const [searchString, setSearchString] = useState('');
  // const [ allItems, setAllItems ] = useState(sexionaryItems);
  const [filteredItems, setFilteredItems] = useState([]);
  useEffect(() => {
    setFilteredItems(sexionaryItems);
    // testArticles();
    // async function testArticles() {
    //   const responseTest = await clienteAxios
    //     .get(`/articles/all-public`)
    //     .then((res) => {
    //       //console.log(res);
    //     })
    //     .catch((err) => {
    //       //console.log(err);
    //     });
    //   //console.log(responseTest);
    // }
    // setAllItems(sexionaryItems)
    // eslint-disable-next-line
  }, [sexionaryItems]);

  const AllSection = styled.div`
    max-width: 80rem;
    border-bottom: 1px solid var(--lightGrey);
  `;

  const Section = styled.p`
    font-weight: bold;
    color: var(--violet);
    font-size: 150%;
    margin-bottom: 0 !important;
  `;

  function onChangeSearch(e) {
    setSearchString(e.target.value);
  }

  function removeIfNoChildren() {
    filteredItems.forEach((element) => {
      if (
        document.querySelector(`#${element.section.toLowerCase()}`)?.children
          .length <= 1
      ) {
        document.querySelector(`#${element.section.toLowerCase()}`).innerHTML =
          '';
        document.querySelector(`#${element.section.toLowerCase()}`).innerHTML =
          '<p></p>';
      }
    });
  }

  return (
    <>
      <Head>
        <title>
          {'Sexionario | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout>
        <div className='sec-title'>
          <Container>
            <Row>
              <Col xs={12} sm={12} md={12} lg={4} xl={3}>
                <h1>Sexionario</h1>
              </Col>
              <Col>
                <input
                  type='text'
                  className='sex-search'
                  id='search'
                  placeholder='Buscar en el sexionario'
                  onChange={(e) => onChangeSearch(e)}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          {filteredItems.some((item) =>
            item.results.some(
              (subitem) =>
                subitem.title
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .includes(
                    searchString
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLowerCase()
                  ) ||
                subitem.content
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .includes(
                    searchString
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLowerCase()
                  )
            )
          ) ? (
            filteredItems.map((item) =>
              item.results.some(
                (subitem) =>
                  subitem.title
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .includes(
                      searchString
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase()
                    ) ||
                  subitem.content
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .includes(
                      searchString
                        .normalize('NFD')
                        .replace(/[\u0300-\u036f]/g, '')
                        .toLowerCase()
                    )
              ) ? (
                <AllSection
                  key={item._id}
                  id={item._id
                    .normalize('NFD')
                    .replace(/[\u0300-\u036f]/g, '')
                    .toLowerCase()
                    .replace(/\s/g, '-')}
                >
                  <Section>{item.section}</Section>
                  {item.results.map((subitem) => (
                    <ItemSexionario key={subitem._id} item={subitem} />
                  ))}
                </AllSection>
              ) : null
            )
          ) : (
            <Section>No hay definiciones</Section>
          )}
        </Container>
      </Layout>
    </>
  );
};

export default Sexionary;
