import React, { useEffect, useState } from 'react';
import { subscribe_to_premium } from '../../../requests/premiumService';
import { useAuth } from '../../../context/authUserContext';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';

const MERCADO_PAGO_API_KEY = process.env.NEXT_PUBLIC_MP_API_KEY;

function MPCardInput (){
  const { user, loading } = useAuth();
  const [email, SetEmail] = useState("");
  const router = useRouter();

  useEffect(() => {
    if (!loading && user) {
      SetEmail(user.email);
    }
  }, [user, loading]);

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
            // preferenceId: "<PREFERENCE_ID>",
            // payer: {
            //   // firstName: "Diego",
            //   // lastName: " Sepulveda",
            //   // email: "jhon@doe.cl",
            // },
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
                const response = await subscribe_to_premium(
                  '64ee1e3d2d42f2e934c56068',
                  {
                      cardToken: formData.token,
                      paymentMethod: 'MP',
                  }
                );
                if (response.status === 201) {
                  router.push('/');
                  toast.success("Suscripción exitosa");
                }
              } catch (error) {
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
