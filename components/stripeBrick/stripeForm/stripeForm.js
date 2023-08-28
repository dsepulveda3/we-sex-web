import React from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { subscribe_to_premium } from '../../../requests/premiumService';

function StripeForm() {
  const stripe = useStripe();
  const elements = useElements();

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements) {
      return;
    }

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.log(error);
    } else {
        const response = await subscribe_to_premium(
          '64e4e3c034416fca1267144c', 
          {
            cardToken: token.id, 
            paymentMethod: "STRIPE"
          }
        );
        console.log(response);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <CardElement />
      <button type="submit">Submit Payment</button>
    </form>
  );
}

export default StripeForm;
