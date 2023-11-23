import Head from 'next/head'
import Layout from '../../../../components/general/Layout';
import Intro from '../../../../components/premiumMaterial/desafiosParejas/intro'
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';

export default function Home() {
  
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
        <PlansUniversal 
        discount="Incluye 10% descuento Dirac"
        price_mp_basic="14,040 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b1aa470018b1be3b6c80166" 
        price_mp_estandar="18,000 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b1aa477018b1be49fae016f"
        price_mp_premium="24,300 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b1aa492018b1be5aa83015d"
        price_stripe_basic="27 USD/pareja"
        stripe_basic="https://buy.stripe.com/aEUeXCaVX26xaoo008"
        price_stripe_estandar="34,2 USD/pareja"
        stripe_estandar="https://buy.stripe.com/7sI5n2e893aB400aEN"
        price_stripe_premium="48,6 USD/pareja"
        stripe_premium="https://buy.stripe.com/28o5n29RT8uV688cMW"
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}