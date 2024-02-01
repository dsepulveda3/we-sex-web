import React, {useState, useEffect, useRef } from 'react';
import {Row, Col, Container} from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';


const Background = styled.div`

    
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 6rem;


`;

const Text = styled.div`

    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    font-weigth: bold;
    text-align: center;
    color: white;
    margin-bottom: 4rem;

    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green);
        padding: 0.3rem 0.5rem;
        color: white;
    }



    @media(max-width: 540px) {
        font-size: 2rem;
    }
`;

const ByLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    color:  #00AEEF;
    text-align: center;
    margin-left: 2rem;
`;


const PriceContainer = styled.div`
    border: 2px solid #00AEEF;
    padding: 2rem;
    border-radius: 3rem;
    transition: all 2s ease;
    &:hover {
        background-color: white;
        color: var(--violet);
    }

    @media(min-width: 540px) {
        margin-left: 20rem;
        margin-right: 20rem;
    }

        `;

const Amount = styled.div`
    font-size: 2rem;
    font-family: "Karla", sans serif;
    margin-bottom: 2rem;
    font-weight: bold;

}

`;



 export default function ComprarCheckOutPro({title_mp, unit_price_mp, quantity_mp, currency_id_mp,
  redirection_succesful_mp, redirection_failed_mp, price_before_ARG, price_ARG, price_before_USD, price_USD, link_payhip_usd, 
  has_promo, buy_just, reminder_buy_just, link_promo, text_promo1_1, text_promo1Span, text_promo1_2,
  link_promo2, text_promo2_1, text_promo2Span, text_promo2_2}) {
   const [preferenceId, setPreferenceId] = useState(null);
   const [initPoint, setInitPoint] = useState(null); 
   const [sdkLoaded, setSdkLoaded] = useState(false);
   const [affiliate, setAffiliate] = useState("");
   const [isVisible, setIsVisible] = useState(false);
   const [hasPromo, setHasPromo] = useState(has_promo);
   const [showPopup, setShowPopup] = useState(false);


   const botonPagoRef = useRef(null);
   
   const handleClick = () => {
    // setShowPopup(true);
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
            //console.log("Evento PH enviado correctamente");
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
      if (sdkLoaded && preferenceId) {
          initMercadoPago();
        }
      
      }, [sdkLoaded, preferenceId]);

   const initMercadoPago = () => {
    const mp = new MercadoPago("APP_USR-4a74ea09-0b8a-4ed4-a727-ef745049d75f");
    const bricksBuilder = mp.bricks();
  
    bricksBuilder
      .create("wallet", "wallet_container", {
        initialization: {
          preferenceId: preferenceId,
        },
      })
      .then(function () {
        //console.log("Checkout iniciado correctamente");
  
        const walletContainer = document.getElementById("wallet_container");
        const handleWalletContainerClick = () => {
          if (window.dataLayer) {
            window.gtag("event", "click", {
              "gtm.elementId": "wallet_container",
              "gtm.clickId": "pagoMP",
              event_category: "Mercado Pago",
              event_label: "Botón de Pagar",
              event_callback: function () {
                //console.log("Evento MP enviado correctamente");
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
        //console.log(error);
      });
  };
  
 
   return (
        <section id="comprar">
            <Background>

            <Text><span>COMPRA LA CAJITA WESEXER</span></Text>
                {/* <PriceContainer> */}
                    <Amount style={{color: "#00AEEF"}}>AR$ 26.000</Amount>
                    <Container style={{paddingTop: "0rem", paddingBottom: "0rem", textAlign: "center"}}>
                        <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
                    </Container>   
                    {/* <ByLabel>By Mercado Pago</ByLabel> */}
                {/* </PriceContainer> */}
            </Background>
        </section>


  );
}