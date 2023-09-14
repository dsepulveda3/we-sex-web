import React from 'react';
import Layout from '../general/Layout';
import styled from '@emotion/styled';
import MPForm from './mercadopagoForm/mpForm';

const Background = styled.div`
  background-color: #00AEEF;
  padding: 12rem;
  height: 100%;
  @media (max-width: 540px) {
    padding: 11rem 5rem 12rem 5rem;
  }
`;


function MercadoPagoBrick() {
  return (
    <Layout>
    <Background>
        {/* <div>Estás pagando en pesos argentinos.</div>
        <a style={{textDecoration: "underline"}}>Cambiar a dolares</a> */}
        <MPForm />
    </Background>
    </Layout>
  );
}

export default MercadoPagoBrick;