import Head from 'next/head'
import Layout from '../../../../components/general/Layout';
import Intro from '../../../../components/premiumMaterial/desafiosParejas/intro'
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';

export default function MartaDiport() {
  
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
        discount="Referido por Marta Diport"
        extra_countries="yes"
        country="España"
        argentina="no"

        price_mp_basic=""
        mp_basic="" 
        price_mp_estandar=""
        mp_estandar=""
        price_mp_premium=""
        mp_premium=""

        price_stripe_basic="30 USD/pareja"
        stripe_basic="https://buy.stripe.com/8wMg1Ge898uV688fZx"
        price_stripe_estandar="38 USD/pareja"
        stripe_estandar="https://buy.stripe.com/3cs16M4xzeTjgMM5kU"
        price_stripe_premium="54 USD/pareja"
        stripe_premium="https://buy.stripe.com/aEUdTyc0126x5446oZ"

        price_stripe_spain_basic="28 EUR/pareja"
        stripe_basic_spain="https://buy.stripe.com/5kAcPuaVXbH7400fZA"
        price_stripe_spain_estandar="36 EUR/pareja"
        stripe_estandar_spain="https://buy.stripe.com/14k9Dic01h1r2VW4gT"
        price_stripe_spain_premium="51 EUR/pareja"
        stripe_premium_spain="https://buy.stripe.com/dR67va9RT5iJcww5kY"

        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}