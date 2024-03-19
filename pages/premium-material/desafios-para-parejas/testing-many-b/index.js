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

export default function TestingA() {
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
        if(currentRoute === '/premium-material/desafios-para-parejas/testing-many-b?origin=Argentina'){
            freshpaint.track("Test MANY B (Argentina) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-many-b?origin=Otro'){
          freshpaint.track("Test MANY B (Otro) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-many-b?origin=Chile'){
          freshpaint.track("Test MANY B (Chile) - PRICING ", {"Path": currentRoute});
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
        discount="** desde el segundo mes"
        country={origin}
        chile="yes"

        suscribirme='Suscribirme (mes gratis)'
        font_boton='1.2rem'
        free_month="yes"

        price_mp_basic_discount="AR$15,600 mes/pareja"
        price_mp_basic="AR$ 0 primer mes"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a2f018e578934ba278a"
        price_mp_estandar_discount="AR$ 24,000 mes/pareja"
        price_mp_estandar="AR$ 0 primer mes"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a19018e578dd2a128cc"
        price_mp_premium_discount="AR$ 26,000 mes/pareja"
        price_mp_premium="AR$ 0 primer mes"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848e1d0a43018e578ec6de28d3"

        price_stripe_basic_discount="U$D 15 mes/pareja"
        price_stripe_basic="U$D 0 primer mes"
        stripe_basic="https://buy.stripe.com/6oE6r69RTeTjcwwdSe"
        price_stripe_estandar_discount="U$D 38 mes/pareja"
        price_stripe_estandar="U$D 0 primer mes"
        stripe_estandar="https://buy.stripe.com/4gwbLqggh9yZ1RS5lJ"
        price_stripe_premium_discount="U$D 54 mes/pareja"
        price_stripe_premium="U$D 0 primer mes"
        stripe_premium="https://buy.stripe.com/28o5n28NP9yZdAA9C0"

       
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}