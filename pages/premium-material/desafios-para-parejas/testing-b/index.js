import Head from 'next/head';
import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import Layout from '../../../../components/general/Layout';
import IntroDiscount from '../../../../components/premiumMaterial/desafiosParejas/introDiscount';
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';


export default function TestingB() {
  const router = useRouter();
  const [origin, setOrigin] = useState(null);

  useEffect(() => {
    if (router.isReady){
      if (router.query.origin) {
        setOrigin(router.query.origin);
      }
    }
  }, [router.isReady]);

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
        <IntroDiscount subtitle1_1='Lleva la sexualidad con tu pareja' subtitle1_2='al máximo de placer' />
        {/* <div style={{color: "black", textAlign: "center", fontSize: "3rem", fontWeight: "bold"}}>TESTING B</div> */}
        <Explicacion2 />
        <ComoFunciona />
        <Dudas />
        <Opinions />
        <PlansUniversal 
        discount="Incluye 1er mes gratis"
        country={origin}

        price_mp_basic="15,000 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b95ad7e018ba6cca95509f8" 
        price_mp_estandar="20,000 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b95ad95018ba6cde43a09ca"
        price_mp_premium="27,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b95ad8a018ba6cf23c40a22"

        price_stripe_basic="15 USD/pareja"
        stripe_basic="https://buy.stripe.com/fZecPu2prfXngMMg01"
        price_stripe_estandar="19 USD/pareja"
        stripe_estandar="https://buy.stripe.com/bIY5n29RTeTj688eVY"
        price_stripe_premium="27 USD/pareja"
        stripe_premium="https://buy.stripe.com/14kaHm6FHbH7fIIdRV"
       
        />
        <Explicacion />
        </Layout>
        
        
      </main>
    </>
  )
}