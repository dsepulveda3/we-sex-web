import React, {useState, useEffect, useRef } from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';
import Link from 'next/link';

const Background = styled.div`
    background-color: #f5f5f5;
    @media(max-width: 540px){
        text-align: center;
        /* padding-bottom:3rem; */
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

 export default function PaymentButton() {
   const [preferenceId, setPreferenceId] = useState(null);
   const [initPoint, setInitPoint] = useState(null); // Agregar estado para initPoint
   const [sdkLoaded, setSdkLoaded] = useState(false);
   const [affiliate, setAffiliate] = useState("");
   const [isVisible, setIsVisible] = useState(false);
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
       const response = await fetch("/api/create-preferences-tantra-email-a");
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
      }, [sdkLoaded, isVisible, preferenceId]);

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
      <Container style={{ paddingBottom: "6rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
        <Text4>Luego de comprar la guía la recibirás por email</Text4>
            {!isVisible && (
                <BotonVerde onClick={handleClick}>Comprar solo guía tantra</BotonVerde>
            )}
            {isVisible && (
              
                <div style={{ paddingTop: "5rem"}}>
                  <Text2> Estás comprando solo la guía de Tantra </Text2>
                  <Title>Compra desde Argentina</Title>
                  <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
                  <Amount>AR$  1000</Amount>
                  <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
                  <BotonVioleta className="pagoPH" ref={botonPagoRef} id="boton-pago" target="_blank" href={`https://payhip.com/b/yXD0e${affiliate}`}>
                      Pago en USD
                  </BotonVioleta>
                  <Amount>U$D  5</Amount>
                </div>
                
            )}
            {/* <BotonVerde >Comprar guía <span>tantra</span> + <span>sexo anal</span></BotonVerde> */}
            <Link href="/premium-material/guides/guia-pack-anal-tantra-email-a">
              <Text3>O llevate la <span>guía de tantra</span> + la <span>guía de sexo anal</span> a un precio orgásmico</Text3>
            </Link>

        </Container>
      </Background>
    </div>
  );
}