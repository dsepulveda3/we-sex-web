import Head from 'next/head'
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../components/general/Layout';
import IntroDiscount from '../../../../components/premiumMaterial/desafiosParejas/introDiscount';
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal';
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';

export default function TestingManyA() {
  const router = useRouter();
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    if (router.isReady){
      if (router.query.origin) {
        setOrigin(router.query.origin);
      }
    }
  }, [router.isReady]);

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/desafios-para-parejas/testing-many-a?origin=Argentina'){
            freshpaint.track("Test Many A (Argentina) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-many-a?origin=Otro'){
          freshpaint.track("Test Many A (Otro) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-many-a?origin=Chile'){
          freshpaint.track("Test Many A (Chile) - PRICING ", {"Path": currentRoute});
        }
        
    }
  }, []);

  
  
  return (
    <>
      <Head>
        <title>Desafio para parejas - WeSex</title>
        <meta name="description" content="Reavivar la llama con tu pareja - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>

      <main>
        <Layout>
        <IntroDiscount subtitle1_1='' subtitle1_2='Desafios sexuales' subtitle1_3='para hacer en pareja'/>
        {/* <div style={{color: "black", textAlign: "center", fontSize: "3rem", fontWeight: "bold"}}>TESTING A</div> */}
        <Explicacion2 />
        <ComoFunciona />
        <Dudas />
        <Opinions />
        <PlansUniversal 
        discount="** después de 15 días"
        country={origin}
        chile="no"

        suscribirme='Suscribirme (15 días gratis)'
        font_boton='1.2rem'
        free_month="no"

        price_mp_basic_discount="AR$15,600 mes/pareja"
        price_mp_basic="U$D 0 primeros 15 días"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a19018e577b30ac28b5"
        price_mp_estandar_discount="AR$ 24,000 mes/pareja"
        price_mp_estandar="U$D 0 primeros 15 días"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a43018e577cebda28bd"
        price_mp_premium_discount="AR$ 26,000 mes/pareja"
        price_mp_premium="U$D 0 primeros 15 días"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a43018e577dd81d28bf"

        price_stripe_basic_discount="U$D 15 mes/pareja"
        price_stripe_basic="U$D 0 primeros 15 días"
        stripe_basic="https://buy.stripe.com/3csbLqaVX6mN4006pJ"
        price_stripe_estandar_discount="U$D 38 mes/pareja"
        price_stripe_estandar="U$D 0 primeros 15 días"
        stripe_estandar="https://buy.stripe.com/4gw2aQ0hj8uV1RS7tO"
        price_stripe_premium_discount="U$D 54 mes/pareja"
        price_stripe_premium="U$D 0 primeros 15 días"
        stripe_premium="https://buy.stripe.com/eVadTyfcddPf9kk6pL"
       
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}