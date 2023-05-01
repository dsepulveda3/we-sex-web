import React, {useState, useEffect} from 'react';
import {Row, Col, Container} from 'reactstrap';
import Head from 'next/head'
import styled from '@emotion/styled';

// import { createPreference } from "/API/mercadopago.js";

const Background = styled.div`
    background-color: #f5f5f5;
    @media(max-width: 540px){
        text-align: center;
        /* padding-bottom:3rem; */
    }
`;

const Title = styled.p`
    font-size: 4rem;
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
        font-size: 3rem;
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


// const Comprar = () => {
//     const [affiliate, setAffiliate] = useState("");
//     useEffect(() => {
//         const queryString = window.location.search;
//         const urlParams = new URLSearchParams(queryString);
//         const aff = urlParams.get('aff');
//         if(aff && aff !== '') {
//             setAffiliate(aff)
//         }
//         // eslint-disable-next-line
//     }, [])
//     return (
        // <Background id="comprar">
        //     <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center"}}>
        //         <Title>Compra desde Argentina</Title>
        //         <BotonConContorno target="_blank" href="https://mpago.la/12RtQEf">
        //             <img src="img/mercadopago.webp" />
        //         </BotonConContorno>
        //         <Amount>AR$  800</Amount>
        //         <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
        //         <BotonVioleta target="_blank" href={`https://payhip.com/b/WKi6V/${affiliate}`}>
        //             Pago en USD
        //         </BotonVioleta>
        //         <Amount>U$D  5</Amount>
        //     </Container>
        // </Background>
//     );
// }

// checkout.js



// async function Comprar() {
//     const response = await fetch('/api/mercadopago');
//     const data = await response.json();

//     const preferenceId = await createPreference();; // Reemplaza "ID_DE_LA_PREFERENCIA_GENERADA_EN_EL_BACKEND" con el ID de la preferencia generada en el backend

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.mercadopago.com/js/v2";
//     script.type = "text/javascript";
//     script.onload = () => {
//       const mp = new window.MercadoPago("TEST-ac8a77ee-fcb4-46b8-8f75-6cfb5ddb0d58");
//       const checkout = mp.checkout({
//         preference: {
//           id: preferenceId,
//         },
//       });
//       checkout.render({
//         container: ".checkout-container",
//       });
//     };
//     document.getElementsByTagName("head")[0].appendChild(script);
//   }, []);

//   return (
//     <>
//       <Head>
//         <script src="https://sdk.mercadopago.com/js/v2"></script>
//       </Head>

//       <div className="checkout-container"></div>
//     </>
//   );
// }

 
// export default Comprar;


 //CODIGO ANTES BIEN
// export default function PaymentButton() {
//   const [preferenceId, setPreferenceId] = useState(null);
//   const [sdkLoaded, setSdkLoaded] = useState(false);
//   const [affiliate, setAffiliate] = useState("");

//   useEffect(() => {
//     const script = document.createElement("script");
//     script.src = "https://sdk.mercadopago.com/js/v2";
//     script.type = "text/javascript";
//     script.async = true;
//     script.onload = () => {
//       setSdkLoaded(true);
//     };
//     document.body.appendChild(script);

//     return () => {
//       document.body.removeChild(script);
//     };
//   }, []);

//   useEffect(() => {
//     const createPreference = async () => {
//       const response = await fetch("/api/create-preferences");
//       const data = await response.json();
//       setPreferenceId(data.preferenceId);
//     };

//     if (sdkLoaded) {
//       createPreference();
//     }
//   }, [sdkLoaded]);

//   useEffect(() => {
//     if (sdkLoaded && preferenceId) {
//       initMercadoPago();
//     }
//   }, [sdkLoaded, preferenceId]);

//   const initMercadoPago = () => {
//     const mp = new MercadoPago("APP_USR-fda56132-1ed4-444a-b4d7-174220277f4a");
//     const bricksBuilder = mp.bricks();

//     bricksBuilder
//       .create("wallet", "wallet_container", {
//         initialization: {
//           preferenceId: preferenceId,
//         },
//       })
//       .then(function () {
//         console.log("Checkout iniciado correctamente");
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };

//   return (
//     <div>
//       {/* <div id="wallet_container"></div> */}
//       <Background id="comprar">
//             <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center"}}>
//                 <Title>Compra desde Argentina</Title>
//                 {/* <BotonConContorno target="_blank" href="https://mpago.la/12RtQEf">
//                     <img src="img/mercadopago.webp" />
//                 </BotonConContorno> */}
//                 <div id="wallet_container"></div>
//                 <Amount>AR$  800</Amount>
//                 <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
//                 <BotonVioleta target="_blank" href={`https://payhip.com/b/WKi6V/${affiliate}`}>
//                     Pago en USD
//                 </BotonVioleta>
//                 <Amount>U$D  5</Amount>
//             </Container>
//         </Background>
//     </div>
//   );
// }

 //CODIGO ANTES BIEN

 function handlePayButtonClick() {
    gtag("event", "pay_button_click", {
      event_category: "MercadoPago",
      event_label: "Checkout PRO",
    });
  }  

 export default function PaymentButton() {
   const [preferenceId, setPreferenceId] = useState(null);
   const [initPoint, setInitPoint] = useState(null); // Agregar estado para initPoint
   const [sdkLoaded, setSdkLoaded] = useState(false);
   const [affiliate, setAffiliate] = useState("");
 
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
       const response = await fetch("/api/create-preferences-caro");
       const data = await response.json();
       setInitPoint(data.initPoint); // Guardar initPoint en el estado
       setPreferenceId(data.preferenceId);
     };
 
     if (sdkLoaded) {
       createPreference();
     }
   }, [sdkLoaded]);
 
   useEffect(() => {
     if (sdkLoaded && preferenceId) {
        initMercadoPago();

        const botonPago = document.getElementById("boton-pago");
        botonPago.addEventListener("click", () => {
          if (window.dataLayer) {
            window.gtag("event", "click", {
              event_category: "PayHip",
              event_label: "Botón de Pago en USD",
              event_callback: function () {
                console.log("Evento PH enviado correctamente");
              },
              
            });
          }
        });

     }
   }, [sdkLoaded, preferenceId]);
 
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

         // Agregando el controlador de eventos aquí
         
         const walletContainer = document.getElementById("wallet_container");
         walletContainer.addEventListener("click", () => {
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
         });

         console.log(walletContainer);
       })
       
       .catch(function (error) {
         console.log(error);
       });
   };
 
   return (
    <div>
    {/* <div id="wallet_container"></div> */}
    <Background id="comprar">
          <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center"}}>
              <Title>Compra desde Argentina</Title>
              {/* <BotonConContorno target="_blank" href="https://mpago.la/12RtQEf">
                  <img src="img/mercadopago.webp" />
              </BotonConContorno> */}
              <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
              <Amount>AR$  800</Amount>
              <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
              <BotonVioleta className="pagoPH" id="boton-pago" target="_blank" href={`https://payhip.com/b/us2mB/${affiliate}`}>
                  Pago en USD
              </BotonVioleta>
              <Amount>U$D  5</Amount>
          </Container>
      </Background>
  </div>
    );
}
      
 



  

// Otro código

//   const initMercadoPago = () => {
//     // Inicializa el checkout
//     const mp = new MercadoPago("TEST-ac8a77ee-fcb4-46b8-8f75-6cfb5ddb0d58");
//     const bricksBuilder = mp.bricks();

//     bricksBuilder
//       .create("wallet", "wallet_container", {
//         initialization: {
//           preferenceId: preferenceId,
//         },
//       })
//       .then(function () {
//         console.log("Checkout iniciado correctamente");
//       })
//       .catch(function (error) {
//         console.log(error);
//         console.log(document.body)
//       });
//   };
