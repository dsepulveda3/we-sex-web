import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StripeForm from './stripeForm/stripeForm';
import Layout from '../general/Layout';
import styled from '@emotion/styled';

const Background = styled.div`
  background-color: #6772E5;
  padding: 12rem;
  height: 100%;
  @media (max-width: 540px) {
    padding: 11rem 5rem 12rem 5rem;
  }
`;

const STRIPE_API_KEY = process.env.NEXT_PUBLIC_STRIPE_API_KEY;

const stripePromise = loadStripe(STRIPE_API_KEY);

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