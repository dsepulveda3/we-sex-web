import React, { useState, useEffect } from 'react';
import { CardElement, useStripe, useElements } from '@stripe/react-stripe-js';
import { subscribe_to_premium, subscribe_to_premium_with_email } from '../../../requests/premiumService';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { useAuth } from '../../../context/authUserContext';
import styled from '@emotion/styled';

const Container = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  border: 2px solid white;
  background-color: white;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Add shadow properties */

  @media (max-width: 540px) {
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.div`
  font-size: 2rem;
  text-align: left;
  color: black;
  padding: 1rem 0rem;

  @media(max-width: 540px){
    font-size: 1.6rem;
    
  }
`;

const CardSubTitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
  color: black;
  padding: 1rem 0rem;

  span {
    font-weight: bold;
  }
  
`;

const CenterButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    border: none;
    transition: all .5s ease;
    &:hover {
        background-color: grey;
        color: white;
        cursor: pointer;
    }
    @media(max-width: 540px){
        
        display:block;
        min-width: 80%;    
    }
`;

const StyledButtonLink = styled(Boton)`
  text-align: center;
  color: white;
  background-color: black;
  margin: 0rem 2rem;
`;


const ByLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    color: black;
`;

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
`;

const AppImage = styled.img`
    height: 8rem;
    width: 8rem;
    margin: 2rem;
    object-fit: cover; /* Crop the center of the image */
    border-radius: 50%; /* Make it rounded */

    @media (max-width: 540px) {
      
    }
`;

const WeSex = styled.div`
    color: white;
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
`;

const EmailInput = styled.input`
  /* Add styles for your input here */
  padding: 1rem;
  border: 1px solid black;
  border-radius: 5px;
  font-size: 1.5rem;
  font-family: "Karla", sans-serif;
  margin-bottom: 2.5rem;
  width: 100%;
  &:focus {
    outline: none; /* Remove the browser's default focus outline */
  }
`;

const PLAN_ID = process.env.NEXT_PUBLIC_PLAN_ID;

function StripeForm() {
  const { authUser, loading } = useAuth();
  const [isSubmitting, setIsSubmitting] = useState(false); 
  const [errorOccurred, setErrorOccurred] = useState(false);
  const [isLogged, setIsLogged] = useState(false);
  const [emailValue, setEmailValue] = useState('');
  const router = useRouter();
  const stripe = useStripe();
  const elements = useElements();

  useEffect(() => {
    if (!loading && authUser) {
      setIsLogged(true);
      setEmailValue(user.email);
    }
  }, [loading, authUser]);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/subscription/stripe?origin=email'){
            freshpaint.track("EM - STRIPE - Page View Suscripción", {"Path": currentRoute});
        }
        
    }
  }, []);

  const handleRequest = async (token) => {
    if (isLogged){
      const response = await subscribe_to_premium(
        PLAN_ID,
        {
          cardToken: token.id,
          paymentMethod: 'STRIPE',
        }
      );
      if (response.status === 201) {
        router.push('/');
        toast.success("Suscripción exitosa");
      }
      setIsSubmitting(false);
      console.log(response);
      return response;
    } else {
      const response = await subscribe_to_premium_with_email(
        PLAN_ID,
        {
          cardToken: token.id,
          email: emailValue,
          paymentMethod: 'STRIPE',
        }
      );
      if (response.status === 201) {
        router.push('/premium-material/access-code');
        toast.success("Subscripción de la tarjeta exitosa");
      }
      setIsSubmitting(false);
      console.log(response);
      return response;
    }
  };


  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!stripe || !elements || isSubmitting) {
      return;
    }

    setIsSubmitting(true);
    setErrorOccurred(false); // Restablecer el estado de error

    const { token, error } = await stripe.createToken(elements.getElement(CardElement));

    if (error) {
      console.log(error);
      setErrorOccurred(true);
      setIsSubmitting(false);
    } else {
      try{
        const response = await handleRequest(token);
      } catch (error) {
        console.log(error);
        toast.error(    
          <div>
            Error al suscribirse. {' '}
            <a
              href="https://wa.me/5491140678698?
              text=Hola!%20Tengo%20un%20problema%20con%20mi%20suscripción"
              style={{
                textDecoration: 'underline', // Add underline
                fontFamily: 'inherit', // Use the same font as the surrounding div
                fontSize: 'inherit', // Use the same font size as the surrounding div
              }}
            >
             Contactar soporte
            </a>
            .
          </div>
        );
        setErrorOccurred(true);
        setIsSubmitting(false);
      }
    }
  };

  return (
    <>
      <ContainerTitle>
        <AppImage src="/img/splash.png" className="img-fluid"/>
        <WeSex>WeSex</WeSex>
      </ContainerTitle>
      <Container>
        <CardTitle>Detalle de tu suscripción</CardTitle>
        <CardSubTitle><span>Nombre plan:</span> All Access</CardSubTitle>
        <CardSubTitle><span>Tipo suscripción:</span> Mensual</CardSubTitle>
        <CardSubTitle><span>Precio:</span> 7 USD/mes</CardSubTitle>
        <CardSubTitle><span>Nombre Comercio:</span> WeSex</CardSubTitle>
      </Container>
      <Container>
        <CardTitle>Pagar con Tarjeta</CardTitle>
        <CardSubTitle>Información personal</CardSubTitle>
        <EmailInput 
          type="email" placeholder="Email" 
          value={emailValue} 
          disabled={isLogged} 
          onChange={(e) => setEmailValue(e.target.value)}
        />
        <CardSubTitle>Información de la tarjeta</CardSubTitle>
        <CardElement />
        <CenterButton>
          <StyledButtonLink onClick={handleSubmit} disabled={isSubmitting && !errorOccurred}>
            {isSubmitting ? "Procesando..." : "Suscribirme"}
          </StyledButtonLink>
          <ByLabel>Powered by Stripe</ByLabel>
        </CenterButton>
      </Container>
    </>
  );
}

export default StripeForm;
