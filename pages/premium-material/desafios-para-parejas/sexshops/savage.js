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
import { useState } from 'react';
import { useEffect } from 'react';

export default function Home() {
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
        discount="Mes gratis x Savage"
        other_countries='no'

        suscribirme='Suscribirme (mes gratis)'
        font_boton='1.2rem'
        free_month="yes"

        price_mp_basic="15,600 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c83b4a7018c83dcd68b000f" 
        price_mp_estandar="26,600 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c83056f018c83e97f1200c1"
        price_mp_premium="33,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848c83b4ad018c83ea201d0017"

        />
    } else {
      return <PlansUniversal 
        discount="Referido por Savage"

        price_mp_basic="15,600 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b2a4548018b4843120714d7" 
        price_mp_estandar="20,000 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b2a4561018b4844060814f9"
        price_mp_premium="27,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b2a4561018b4844addb14fa"

        price_stripe_basic="30 USD/pareja"
        stripe_basic="https://buy.stripe.com/4gwdTy0hj5iJ0NO9AO"
        price_stripe_estandar="38 USD/pareja"
        stripe_estandar="https://buy.stripe.com/14kdTye894eF8ggaET"
        price_stripe_premium="54 USD/pareja"
        stripe_premium="https://buy.stripe.com/aEU3eUc018uV68814k"
        />
    }
  }
  
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