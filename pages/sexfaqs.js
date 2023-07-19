import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Title from '../components/general/Title';
import clienteAxios from '../config/axios';
import ItemSexFaq from '../components/SexFaqs/ItemSexFaq';
export async function getStaticProps() {
  const response = await clienteAxios.get(`/sexfaqs`);

  return {
    props: {
      sexFaqsItems: response.data,
    },
    revalidate: 60,
  };
}

const SexFaqs = ({ sexFaqsItems }) => {
  const [searchString, setSearchString] = useState('');
  function onChangeSearch(e) {
    setSearchString(e.target.value);
    // filterSexionaryItems();
  }

  const AllSection = styled.div`
    max-width: 80rem;
  `;

  const ItemTitle = styled.p`
    color: black;
    font-size: 2.2rem;
    font-weight: bold;
    @media (max-width: 540px) {
      /* font-size: 1rem; */
      line-height: normal;
      margin-bottom: 0.5rem;
    }
  `;

  return (
    <>
      <Head>
        <title>
          {'SexFaqs | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout>
        <div className='sec-title'>
          <Container>
            <Row>
              <div
                className='w-fit-content mb-100'
                // xs={12} sm={12} md={12} lg={4} xl={3}
              >
                <h1>SexFaqs</h1>
              </div>
              <Col>
                <input
                  type='text'
                  className='sex-search'
                  id='search'
                  placeholder='Buscar en SexFaqs'
                  onChange={(e) => onChangeSearch(e)}
                />
              </Col>
            </Row>
          </Container>
        </div>
        <Container>
          <AllSection>
            {sexFaqsItems.some(
              (item) =>
                item.title
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .includes(
                    searchString
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLowerCase()
                  ) ||
                item.content
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
              sexFaqsItems.map((item) =>
                searchString === '' ||
                item.title
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .includes(
                    searchString
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLowerCase()
                  ) ||
                item.content
                  .normalize('NFD')
                  .replace(/[\u0300-\u036f]/g, '')
                  .toLowerCase()
                  .includes(
                    searchString
                      .normalize('NFD')
                      .replace(/[\u0300-\u036f]/g, '')
                      .toLowerCase()
                  ) ? (
                  <ItemSexFaq key={item._id} item={item} />
                ) : null
              )
            ) : (
              <ItemTitle>No encontramos respuesta a tu pregunta</ItemTitle>
            )}
          </AllSection>
        </Container>
      </Layout>
    </>
  );
};

export default SexFaqs;
