import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Layout from '../components/general/Layout';
import { Container } from 'reactstrap';
import styled from '@emotion/styled';
import Title from '../components/general/Title';
import clienteAxios from '../config/axios';

export default function SexFaqs({ sexfaqs }) {
  const [sexFaqsItems, setSexFaqsItems] = useState([]);
  useEffect(() => {
    getSexFaqs();

    // eslint-disable-next-line
  }, []);
  async function getSexFaqs() {
    await clienteAxios
      .get('/sexfaqs')
      .then((response) => {
        setSexFaqsItems(response.data);
        return response.data;
      })
      .catch((error) => {});
  }
  const ItemTitle = styled.p`
    color: black;
    font-weight: bold;
    @media (max-width: 540px) {
      font-size: 1rem;
      line-height: normal;
      margin-bottom: 0.5rem;
    }
  `;
  const Text = styled.p`
    color: black;
    line-height: normal;
    padding-bottom: 1rem;
    border-bottom: 1px solid var(--lightGrey);

    @media (max-width: 540px) {
      font-size: 0.85rem;
      margin-bottom: 1.5rem !important;
    }
  `;
  const AllSection = styled.div`
    max-width: 50rem;
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
        <Title title='SexFaqs' />
        <Container>
          <AllSection>
            {sexFaqsItems
              ? sexFaqsItems.map((item) => (
                  <div className='mb-3' key={item._id}>
                    <ItemTitle>{item.title}</ItemTitle>
                    <Text>{item.content}</Text>
                  </div>
                ))
              : null}
          </AllSection>
        </Container>
      </Layout>
    </>
  );
}
