import React, {useState, useEffect, useRef } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';
import Link from 'next/link';

const Background = styled.div`
    background-color: #f5f5f5;
    @media(max-width: 540px){
        text-align: center;
        min-height: 35vh;
        padding-top: 4rem;
    }
`;

const Title = styled.p`
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    color: var(--violet);
    font-weight: bold;
    margin-bottom:3rem;
    span {
        color: var(--green);
        font-weight: bold;
    font-family: "Karla", sans-serif;
    }
    @media(max-width: 540px){
        font-size: 2.5rem;
    }
`;

const Amount = styled(Title)`
    font-size: 2rem!important;
    margin-top: 2rem;
    margin-bottom: 0;
    span {
      text-decoration: line-through;
    }
`;

const Text = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.8rem;
    margin-bottom: 2rem;
    padding-bottom: 2rem;
    color: var(--violet);
    /* border-bottom: 2px solid var(--violet);
    border-width: 15px; */

    @media(max-width: 540px){
        position: relative;
    
        &:before {
            content: "";
            position: absolute;
            left: 35%;
            right: 35%;
            bottom: 0;
            height: 1px;
            width: 30%;  /* or 100px */
            border-bottom:2px solid var(--violet);
        }
    }
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        /* font-size: 1.6rem; */
    }
    strong {
        font-weight: bold;
        font-size:2rem;
    }
`;

const Text2 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.0rem;
    margin-bottom: 2.5rem;
    color: var(--green);
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.8rem;
    }
`;

const Text3 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 2.0rem;
    margin-top: 3rem;
    color: var(--violet);
    text-decoration: underline;

    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.0rem;
    }
`;

const Text4 = styled.p`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.05em;
    margin-top: 3rem;
    color: var(--violet);
    font-style: italic;

    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2.0rem;
    }
`;



const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    width: fit-content;
    border: none;
    transition: all .5s ease;
    font-size:2.3rem;
    max-width: 100%;
`;

const BotonConContorno = styled(Boton)`
    margin-top: 1rem!important;
    /* color: white; */
    background-color: white;
    border: 2px solid var(--violet);
    padding: 2.5rem;
    &:hover {
        background-color: white;
        color: var(--violet);
        border: 4px solid var(--violet);
        cursor: pointer;
    }
    img {
        width: 45vw;
        max-width: 17rem;
    }
`;

const BotonVioleta = styled(Boton)`
    margin-top: 1rem!important;
    color: white;
    background-color: var(--violet);
    padding: 2rem;
    &:hover {
        background-color: white;
        color: var(--violet);
        cursor: pointer;
    }
`;

const BotonVerde = styled(Boton)`
    margin-top: 5rem!important;
    color: white;
    background-color: var(--green);
    span {
      color: var(--violet);
  }
  
`;

// {}


 export default function PaymentButton({title_mp, unit_price_mp, quantity_mp, currency_id_mp,
  redirection_succesful_mp, redirection_failed_mp, price_before_ARG, price_ARG, price_before_USD, price_USD, link_payhip_usd, 
  has_promo, buy_just, reminder_buy_just, link_promo, text_promo1_1, text_promo1Span, text_promo1_2,
  link_promo2, text_promo2_1, text_promo2Span, text_promo2_2}) {
   const [preferenceId, setPreferenceId] = useState(null);
   const [initPoint, setInitPoint] = useState(null); // Agregar estado para initPoint
   const [sdkLoaded, setSdkLoaded] = useState(false);
   const [affiliate, setAffiliate] = useState("");
   const [isVisible, setIsVisible] = useState(false);
   const [hasPromo, setHasPromo] = useState(has_promo);

   const botonPagoRef = useRef(null);
   
   const handleClick = () => {
    setIsVisible(!isVisible);
  }
 
   useEffect(() => {
     const script = document.createElement("script");
     script.src = "https://sdk.mercadopago.com/js/v2";
     script.type = "text/javascript";
     script.async = true;
     script.onload = () => {
       setSdkLoaded(true);
     };
     document.body.appendChild(script);
 
     return () => {
       document.body.removeChild(script);
     };
   }, []);
 
   useEffect(() => {
    const createPreference = async () => {
      const response = await fetch("/api/create-preferences" , {
       method: 'POST',
       headers: {
         'Content-Type': 'application/json',
       },
       body: JSON.stringify({
         // Passing props data here
         title_mp: title_mp,
         unit_price_mp: unit_price_mp,
         quantity_mp: quantity_mp,
         currency_id_mp: currency_id_mp,
         redirection_succesful_mp: redirection_succesful_mp,
         redirection_failed_mp: redirection_failed_mp,
         // title: 'Guía Sexo Anal - WeSex',
         // unit_price: 1000,
         // quantity: 1,
         // currency_id: 'ARS',
       }),
     });
      const data = await response.json();
      setInitPoint(data.initPoint); // Guardar initPoint en el estado
      setPreferenceId(data.preferenceId);
    };
 
     if (sdkLoaded) {
       createPreference();
     }
   }, [sdkLoaded]);
 
  
  useEffect(() => {
    const button = botonPagoRef.current;
    const handleClick = () => {
      if (window.dataLayer) {
        window.gtag("event", "click", {
          event_category: "PayHip",
          event_label: "Botón de Pago en USD",
          event_callback: function () {
            console.log("Evento PH enviado correctamente");
          },
        });
      }
    };

    if (button) {
      button.addEventListener("click", handleClick);
    }

    // Cleanup function to remove the listener when component unmounts
    return () => {
      if (button) {
        button.removeEventListener("click", handleClick);
      }
    };
  }, []);  // [] as the dependency array ensures the effect runs only on mount and unmount

  useEffect(() => {
      if (sdkLoaded && isVisible && preferenceId) {
          initMercadoPago();
        }
      else if (sdkLoaded && !hasPromo && preferenceId) {
        initMercadoPago();
      }
      }, [sdkLoaded, isVisible, preferenceId, hasPromo]);

   const initMercadoPago = () => {
    const mp = new MercadoPago("APP_USR-fda56132-1ed4-444a-b4d7-174220277f4a");
    const bricksBuilder = mp.bricks();
  
    bricksBuilder
      .create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
      })
      .then(function () {
        console.log("Checkout iniciado correctamente");
  
        const walletContainer = document.getElementById("wallet_container");
        const handleWalletContainerClick = () => {
          if (window.dataLayer) {
            window.gtag("event", "click", {
              "gtm.elementId": "wallet_container",
              "gtm.clickId": "pagoMP",
              event_category: "Mercado Pago",
              event_label: "Botón de Pagar",
              event_callback: function () {
                console.log("Evento MP enviado correctamente");
              },
            });
          }
        };
  
        walletContainer.addEventListener("click", handleWalletContainerClick);
  
        // Cleanup function to remove the listener when component unmounts
        return () => {
          walletContainer.removeEventListener("click", handleWalletContainerClick);
        };
      })
      .catch(function (error) {
        console.log(error);
      });
  };
  
 
   return (
    <div>
      <Background id="comprar">

        {!hasPromo && (
          <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center"}}>
          <Text4 style={{marginTop: '0rem', marginBottom: '2rem'}}>Luego de comprar la guía la recibirás por email</Text4>
          <Title>Compra desde Argentina</Title>
          {/* <BotonConContorno target="_blank" href="https://mpago.la/12RtQEf">
              <img src="img/mercadopago.webp" />
          </BotonConContorno> */}
          <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
          <Amount><span>{price_before_ARG}</span>  {price_ARG}</Amount>
          <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
          <BotonVioleta className="pagoPH" id="boton-pago" target="_blank" href={link_payhip_usd}>
              Pago en USD
          </BotonVioleta>
          <Amount><span>{price_before_USD}</span>  {price_USD}</Amount>
        </Container>    
        )}

        {hasPromo && (
          <Container style={{ paddingBottom: "6rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
            <Text4>Luego de comprar la guía la recibirás por email</Text4>
            {!isVisible && (
                <BotonVerde onClick={handleClick}>{buy_just}</BotonVerde>
            )}
            {isVisible && (
              <div style={{ paddingTop: "5rem"}}>
                <Text2> {reminder_buy_just} </Text2>
                <Title>Compra desde Argentina</Title>
                <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
                <Amount><span>{price_before_ARG}</span>  {price_ARG}</Amount>
                <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
                <BotonVioleta className="pagoPH" ref={botonPagoRef} id="boton-pago" target="_blank" href={`https://payhip.com/b/MiWzq${affiliate}`}>
                    Pago en USD
                </BotonVioleta>
                <Amount><span>{price_before_USD}</span>  {price_USD}</Amount>
              </div>
            )}
            <Link href={link_promo}>
              <Text3>{text_promo1_1}<span>{text_promo1Span}</span> {text_promo1_2}</Text3>
            </Link>
            <Link href={link_promo2}>
              <Text3>{text_promo2_1}<span>{text_promo2Span}</span> {text_promo2_2}</Text3>
            </Link>
          </Container>
        )}

        
      </Background>
    </div>
  );
}