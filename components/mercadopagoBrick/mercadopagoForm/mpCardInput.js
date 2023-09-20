import React, { useEffect, useState } from 'react';
import { subscribe_to_premium, subscribe_to_premium_with_email } from '../../../requests/premiumService';
import { useAuth } from '../../../context/authUserContext';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const MERCADO_PAGO_API_KEY = process.env.NEXT_PUBLIC_MP_API_KEY;
const PLAN_ID = process.env.NEXT_PUBLIC_PLAN_ID;

function MPCardInput (){
  const { authUser, loading } = useAuth();
  const [isLogged, setIsLogged] = useState(false);
  const router = useRouter();

  useEffect(() => {
    if (!loading && authUser) {
      setIsLogged(true);
    }
  }, [authUser, loading]);

  const handleRequest = async (token, email) => {
    console.log("request sent");
    if (isLogged){
      const response = await subscribe_to_premium(
        PLAN_ID,
        {
          cardToken: token,
          paymentMethod: 'MP',
        }
      );
      if (response.status === 201) {
        router.push('/');
        toast.success("Suscripción exitosa");
      }
      return response;
    } else {
      const response = await subscribe_to_premium_with_email(
        PLAN_ID,
        {
          cardToken: token,
          email: email,
          paymentMethod: 'MP',
        }
      );
      if (response.status === 201) {
        router.push('premium-material/access-code');
        toast.success("Subscripcion de la tarjeta exitosa");
      }
      return response;
    }
  };

  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://sdk.mercadopago.com/js/v2";
    script.async = true;
    script.onload = () => {
      // Initialize MercadoPago and render the Payment Brick
      const mp = new MercadoPago(MERCADO_PAGO_API_KEY, {
        locale: 'es-AR'
      });

      const bricksBuilder = mp.bricks();

      const renderPaymentBrick = async (bricksBuilder) => {
        const settings = {
          initialization: {
            amount: 250,
          },
          customization: {
            visual: {
              hideFormTitle: true,
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
            onSubmit: async ({ selectedPaymentMethod, formData }) => {
              try{
                const response = await handleRequest(formData.token, formData.payer.email);
              } catch (error) {
                console.log("Displayed Error");
                console.log(error);
                toast.error("Error al suscribirse");
              }
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

export default MPCardInput;
