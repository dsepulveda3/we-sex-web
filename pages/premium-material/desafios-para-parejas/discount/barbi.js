import Head from 'next/head'
import Layout from '../../../../components/general/Layout';
import Intro from '../../../../components/premiumMaterial/desafiosParejas/intro'
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';

export default function Barbi() {
  
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
        discount="Incluye 1er mes gratis"
        price_mp_basic="15,600 ARS/pareja"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b84cc76018b8cd6c8fc0618" 
        price_mp_estandar="20,000 ARS/pareja"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b84cc76018b8cd7d23f0619"
        price_mp_premium="27,000 ARS/pareja"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b84cc99018b8cd8328e0636"

        price_stripe_basic="30 USD/pareja"
        stripe_basic="https://buy.stripe.com/00g6r67JL26xdAA9Bu"
        price_stripe_estandar="38 USD/pareja"
        stripe_estandar="https://buy.stripe.com/fZe3eU1ln3aB9kk8xr"
        price_stripe_premium="54 USD/pareja"
        stripe_premium="https://buy.stripe.com/7sI02Id456mNcwwbJE"

       
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}