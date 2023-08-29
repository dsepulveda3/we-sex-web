import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeForm from './stripeForm/stripeForm';
import Layout from '../general/Layout';
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: #6772E5;
  padding: 12rem;
  @media (max-width: 540px) {
    padding: 11rem 5rem 12rem 5rem;

    
  }
`;

const stripePromise = loadStripe('pk_test_BanXBYCwT9CATP3DfHn8nHiz00LBLj9klX');

function StripeBrick() {
  return (
    <Layout>
    <Background>
      <Elements stripe={stripePromise}>
        <StripeForm />
      </Elements>
    </Background>
    </Layout>
  );
}

export default StripeBrick;