import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import Image from 'next/image';
import { Container } from 'reactstrap';
import styled from '@emotion/styled';
import Title from '../components/general/Title';
import clienteAxios from '../config/axios';

export default function Sexionary() {
  const [sexionaryItems, setSexionaryItems] = useState([]);
  useEffect(() => {
    getSexionaryItems();
    // eslint-disable-next-line
  }, []);
  async function getSexionaryItems() {
    await clienteAxios
      .get('/sextionary')
      .then((response) => {
        setSexionaryItems(response.data.results);
        return response.data.results;
      })
      .catch((error) => {});
  }
  const Section = styled.p`
    font-weight: bold;
    color: var(--violet);
    font-size: 2.5rem;
    margin-bottom: 0 !important;
  `;
  const ItemTitle = styled.p`
    color: black;
    font-weight: bold;
  `;
  const Text = styled.p`
    color: black;
    line-height: normal;
    @media (max-width: 540px) {
      font-size: 0.85rem;
    }
  `;
  const AllSection = styled.div`
    max-width: 50rem;
  `;

  return (
    <>
      <Head>
        <title>
          Sexionario | WeSex - La app para hablar y aprender de sexo
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout>
        <Title title='Sexionario' />
        <Container>
          {sexionaryItems
            ? sexionaryItems.map((item) => (
                <AllSection key={item._id} id={item.section.toLowerCase()}>
                  <Section>{item.section}</Section>
                  {item.results?.map((subitem) => (
                    <div
                      className='mb-3'
                      key={subitem.id}
                      id={subitem.title.toLowerCase()}
                    >
                      <ItemTitle>{subitem.title}</ItemTitle>
                      <Text>{subitem.content}</Text>
                    </div>
                  ))}
                </AllSection>
              ))
            : null}
        </Container>
      </Layout>
    </>
  );
}
