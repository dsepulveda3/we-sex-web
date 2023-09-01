import React from 'react';
import Layout from '../general/Layout';
import styled from '@emotion/styled';
import MPForm from './mercadopagoForm/mpForm';

const Background = styled.div`
  background-color: #6772E5;
  padding: 12rem;
  @media (max-width: 540px) {
    padding: 11rem 5rem 12rem 5rem;

    
  }
`;


function MercadoPagoBrick() {
  return (
    <Layout>
    <Background>
        <MPForm />
    </Background>
    </Layout>
  );
}

export default MercadoPagoBrick;