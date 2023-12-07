import Head from 'next/head'
import Layout from '../../../../components/general/Layout';
import Intro from '../../../../components/premiumMaterial/desafiosParejas/intro'
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';
import { useRouter } from 'next/router';
import { useEffect, useState } from 'react';

export default function Playsure() {
  const router = useRouter();
  const [paymentMode, setPaymentMode] = useState();

  useEffect(() => {
    if (router.isReady){
      setPaymentMode(router.query.pay);
    }
  }
  );

  const PlanComponentFuction = () => {
    if (paymentMode === "freemonth"){
      return <PlansUniversal 
        discount="Mes gratis x Playsure"
        other_countries='no'

        price_mp_basic="15,600 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c44be6a018c45c276f500d3" 
        price_mp_estandar="26,600 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c44be29018c45c5635000e7"
        price_mp_premium="33,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c44be6a018c45c6558400da"

        />
    } else {
      return <PlansUniversal 
        discount="Referido por Playsure"

        price_mp_basic="15,600 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b48faa1018b5de4c5120b9d" 
        price_mp_estandar="26,600 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b48fa5a018b5de526d60b81"
        price_mp_premium="33,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b48faa1018b5de5d5740ba0"

        price_stripe_basic="30 USD/pareja"
        stripe_basic="https://buy.stripe.com/28o16MgghaD39kk3cR"
        price_stripe_estandar="38 USD/pareja"
        stripe_estandar="https://buy.stripe.com/14kcPufcdaD3gMM28O"
        price_stripe_premium="54 USD/pareja"
        stripe_premium="https://buy.stripe.com/bIY8zefcdbH72VW4gX"
        />
    }
  }

  console.log("payment mode");
  console.log(paymentMode);

  
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
        <Intro subtitle1_1='' subtitle1_2='Desafios sexuales' subtitle1_3='para hacer en pareja'/>
        {/* <div style={{color: "black", textAlign: "center", fontSize: "3rem", fontWeight: "bold"}}>TESTING A</div> */}
        <Explicacion2 />
        <ComoFunciona />
        <Dudas />
        <Opinions />
        {PlanComponentFuction()}
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}