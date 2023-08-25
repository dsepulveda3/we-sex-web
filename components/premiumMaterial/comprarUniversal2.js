import React, { useEffect } from 'react';

const Comprar = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = () => {
      // Initialize MercadoPago and render the Payment Brick
      const mp = new MercadoPago('TEST-71162d0e-dda8-4ed8-9c18-1b082097914d', {
        locale: 'es-AR'
      });

      const bricksBuilder = mp.bricks();

      const renderPaymentBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
            amount: 10000,
            preferenceId: "<PREFERENCE_ID>",
            payer: {
              firstName: "Diego",
              lastName: " Sepulveda",
              email: "diegosepulv3@gmail.com",
            },
          },
          customization: {
            visual: {
              style: {
                theme: "default",
              },
            },
            paymentMethods: {
              creditCard: "all",
              bankTransfer: "all",
              atm: "all",
              wallet_purchase: "all",
              maxInstallments: 1,
            },
          },
          callbacks: {
            onReady: () => {
              /*
               Callback llamado cuando el Brick está listo.
               Aquí puede ocultar cargamentos de su sitio, por ejemplo.
              */
            },
            onSubmit: ({ selectedPaymentMethod, formData }) => {
              console.log("form data comming");
              console.log(formData);
              // callback llamado al hacer clic en el botón de envío de datos
              return new Promise((resolve, reject) => {
                fetch("/api/process_payment", {
                  method: "POST",
                  headers: {
                    "Content-Type": "application/json",
                  },
                  body: JSON.stringify(formData),
                  
                })
                  .then((response) => response.json())
                  .then((response) => {
                    // recibir el resultado del pago
                    resolve();
                  })
                  .catch((error) => {
                    // manejar la respuesta de error al intentar crear el pago
                    reject();
                  });
              });
            },
            onError: (error) => {
              // callback llamado para todos los casos de error de Brick
              console.error(error);
            },
          },
        };
        window.paymentBrickController = await bricksBuilder.create(
          "payment",
          "paymentBrick_container",
          settings
        );
      };

      renderPaymentBrick(bricksBuilder);
    };

    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return <div id="paymentBrick_container"></div>;
};

export default Comprar;





// export default MyPaymentComponent;
//  export default function PaymentButton({title_mp, unit_price_mp, quantity_mp, currency_id_mp,
//   redirection_succesful_mp, redirection_failed_mp, price_before_ARG, price_ARG, price_before_USD, price_USD, link_payhip_usd, 
//   has_promo, buy_just, reminder_buy_just, link_promo, text_promo1_1, text_promo1Span, text_promo1_2,
//   link_promo2, text_promo2_1, text_promo2Span, text_promo2_2}) {
//    const [preferenceId, setPreferenceId] = useState(null);
//    const [initPoint, setInitPoint] = useState(null); 
//    const [sdkLoaded, setSdkLoaded] = useState(false);
//    const [affiliate, setAffiliate] = useState("");
//    const [isVisible, setIsVisible] = useState(false);
//    const [hasPromo, setHasPromo] = useState(has_promo);

//    const botonPagoRef = useRef(null);
   
//    const handleClick = () => {
//     setIsVisible(!isVisible);
//   }
 
//    useEffect(() => {
//      const script = document.createElement("script");
//      script.src = "https://sdk.mercadopago.com/js/v2";
//      script.type = "text/javascript";
//      script.async = true;
//      script.onload = () => {
//        setSdkLoaded(true);
//      };
//      document.body.appendChild(script);
 
//      return () => {
//        document.body.removeChild(script);
//      };
//    }, []);
 
//    useEffect(() => {
//     const createPreference = async () => {
//       const response = await fetch("/api/create-preferences" , {
//        method: 'POST',
//        headers: {
//          'Content-Type': 'application/json',
//        },
//        body: JSON.stringify({
//          // Passing props data here
//          title_mp: title_mp,
//          unit_price_mp: unit_price_mp,
//          quantity_mp: quantity_mp,
//          currency_id_mp: currency_id_mp,
//          redirection_succesful_mp: redirection_succesful_mp,
//          redirection_failed_mp: redirection_failed_mp,
//          // title: 'Guía Sexo Anal - WeSex',
//          // unit_price: 1000,
//          // quantity: 1,
//          // currency_id: 'ARS',
//        }),
//      });
//       const data = await response.json();
//       setInitPoint(data.initPoint); // Guardar initPoint en el estado
//       setPreferenceId(data.preferenceId);
//     };
 
//      if (sdkLoaded) {
//        createPreference();
//      }
//    }, [sdkLoaded]);
 
  
//   useEffect(() => {
//     const button = botonPagoRef.current;
//     const handleClick = () => {
//       if (window.dataLayer) {
//         window.gtag("event", "click", {
//           event_category: "PayHip",
//           event_label: "Botón de Pago en USD",
//           event_callback: function () {
//             console.log("Evento PH enviado correctamente");
//           },
//         });
//       }
//     };

//     if (button) {
//       button.addEventListener("click", handleClick);
//     }

//     // Cleanup function to remove the listener when component unmounts
//     return () => {
//       if (button) {
//         button.removeEventListener("click", handleClick);
//       }
//     };
//   }, []);  // [] as the dependency array ensures the effect runs only on mount and unmount

//   useEffect(() => {
//       if (sdkLoaded && isVisible && preferenceId) {
//           initMercadoPago();
//         }
//       else if (sdkLoaded && !hasPromo && preferenceId) {
//         initMercadoPago();
//       }
//       }, [sdkLoaded, isVisible, preferenceId, hasPromo]);

//    const initMercadoPago = () => {
//     const mp = new MercadoPago("APP_USR-4a74ea09-0b8a-4ed4-a727-ef745049d75f");
//     const bricksBuilder = mp.bricks();
  
//     bricksBuilder
//       .create("wallet", "wallet_container", {
//         initialization: {
//           preferenceId: preferenceId,
//         },
//       })
//       .then(function () {
//         console.log("Checkout iniciado correctamente");
  
//         const walletContainer = document.getElementById("wallet_container");
//         const handleWalletContainerClick = () => {
//           if (window.dataLayer) {
//             window.gtag("event", "click", {
//               "gtm.elementId": "wallet_container",
//               "gtm.clickId": "pagoMP",
//               event_category: "Mercado Pago",
//               event_label: "Botón de Pagar",
//               event_callback: function () {
//                 console.log("Evento MP enviado correctamente");
//               },
//             });
//           }
//         };
  
//         walletContainer.addEventListener("click", handleWalletContainerClick);
  
//         // Cleanup function to remove the listener when component unmounts
//         return () => {
//           walletContainer.removeEventListener("click", handleWalletContainerClick);
//         };
//       })
//       .catch(function (error) {
//         console.log(error);
//       });
//   };
  
 
//    return (
//     <div>
//       <Background id="comprar">

//         {!hasPromo && (
//           <Container style={{paddingTop: "5rem", paddingBottom: "6rem", textAlign: "center"}}>
//           <Text4 style={{marginTop: '0rem', marginBottom: '2rem'}}>Cualquier producto comprado será enviado a tu email</Text4>
//           <Title>Compra desde Argentina</Title>
//           {/* <BotonConContorno target="_blank" href="https://mpago.la/12RtQEf">
//               <img src="img/mercadopago.webp" />
//           </BotonConContorno> */}
//           <button className ="pagoMP" id="wallet_container" data-href={initPoint}></button>
//           <Amount><span>{price_before_ARG}</span>  {price_ARG}</Amount>
//           <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
//           <BotonVioleta className="pagoPH" id="boton-pago" target="_blank" href={link_payhip_usd}>
//               Pago en USD
//           </BotonVioleta>
//           <Amount><span>{price_before_USD}</span>  {price_USD}</Amount>
//         </Container>    
//         )}

//         {hasPromo && (
//           <Container style={{ paddingBottom: "6rem", textAlign: "center", display: "flex", flexDirection: "column", alignItems: "center"}}>
//             <Text4>Cualquier producto comprado será enviado a tu email</Text4>
//             {!isVisible && (
//                 <BotonVerde onClick={handleClick}>{buy_just}</BotonVerde>
//             )}
//             {isVisible && (
//               <div style={{ paddingTop: "5rem"}}>
//                 <Text2> {reminder_buy_just} </Text2>
//                 <Title>Compra desde Argentina</Title>
//                 <a className ="pagoMP" id="wallet_container" data-href={initPoint}></a>
//                 <Amount><span>{price_before_ARG}</span>  {price_ARG}</Amount>
//                 <Title style={{marginTop: "5rem"}}>Compra internacionalmente</Title>
//                 <BotonVioleta className="pagoPH" ref={botonPagoRef} id="boton-pago" target="_blank" href={link_payhip_usd}>
//                     Pago en USD
//                 </BotonVioleta>
//                 <Amount><span>{price_before_USD}</span>  {price_USD}</Amount>
//               </div>
//             )}
//             <Link href={link_promo}>
//               <Text3>{text_promo1_1}<span>{text_promo1Span}</span> {text_promo1_2}</Text3>
//             </Link>
//             <Link href={link_promo2}>
//               <Text3>{text_promo2_1}<span>{text_promo2Span}</span> {text_promo2_2}</Text3>
//             </Link>
//           </Container>
//         )}

        
//       </Background>
//     </div>
//   );
// }