import React, { useState } from 'react';
import styled from '@emotion/styled';
import CheckoutStep from './checkoutStep';
import StripeForm from './stripeForm';

const Container = styled.div`
    max-width: 600px;
    margin: 0 auto;
    padding: 20px;
    border: 1px solid #ccc;
    border-radius: 20px;
`;

const Background = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    // display: flex;
    // align-items: center;
    justify-content: center;
    background-color: var(--violet);
    // background-image: url("/img/auth/cta-bg.jpg");
    background-position: center;
    background-size: 100% 100%;
    
    
    min-height: 100vh;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
    }
`;

export const Title = styled.h1`
    margin-top: 3rem;
    font-size: 4.5rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center; /* Center align the text */
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }

    @media(max-width: 540px){
        font-size: 5.5rem;
        margin-bottom: 1.5rem;
    }
`;

export const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const StepForm = () => {
  const [activeStep, setActiveStep] = useState(-1);

  return (
    <Background>
        <Container>
            <Title>Subscripción</Title>
            <CheckoutStep
                stepNumber={1}
                title="Paso 1: Información de la subscripción"
                isActive={activeStep === 1}
                onClick={() => setActiveStep(1)}
            >
                <Text>Subscripcion $ID $Informacion de subscripcion</Text>
            </CheckoutStep>
            <CheckoutStep
                stepNumber={2}
                title="Paso 2: Metodo de pago"
                isActive={activeStep === 2}
                onClick={() => setActiveStep(2)}
            >
                <StripeForm />
            </CheckoutStep>
        </Container>
    </Background>
  );
};

export default StepForm;