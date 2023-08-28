import React from 'react';
import { loadStripe } from '@stripe/stripe-js';
import { Elements } from '@stripe/react-stripe-js';
import StepForm from './stripeForm/stepForm';

const stripePromise = loadStripe('pk_test_BanXBYCwT9CATP3DfHn8nHiz00LBLj9klX');

function StripeBrick() {
  return (
    <Elements stripe={stripePromise}>
      <StepForm />
    </Elements>
  );
}

export default StripeBrick;