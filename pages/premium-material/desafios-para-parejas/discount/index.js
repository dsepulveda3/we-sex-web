import Head from 'next/head'
import Layout from '../../../../components/general/Layout';
import IntroDiscount from '../../../../components/premiumMaterial/desafiosParejas/introDiscount';
import Explicacion2 from '../../../../components/premiumMaterial/desafiosParejas/explicacion2'
import Explicacion from '../../../../components/premiumMaterial/explicacion'
import ComoFunciona from '../../../../components/premiumMaterial/desafiosParejas/comoFunciona'
import Dudas from '../../../../components/premiumMaterial/dudas'
import PlansUniversal from '../../../../components/premiumMaterial/desafiosParejas/plansUniversal'
import Opinions from '../../../../components/premiumMaterial/desafiosParejas/opinions';
import { useEffect } from 'react';

export default function Home() {

  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/desafios-para-parejas/discount'){
            freshpaint.track("Discount Unique Price", {"Path": currentRoute});
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

        suscribirme='Suscribirme (mes gratis)'
        font_boton='1.2rem'
        free_month="yes"

        price_mp_basic_discount="AR$ 15,600 mes/pareja"
        price_mp_basic="AR$ 0 primer mes"
        mp_basic="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b62d290018b679bd9b50364" 
        price_mp_estandar_discount="AR$ 20,000 mes/pareja"
        price_mp_estandar="AR$ 0 primer mes"
        mp_estandar="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b62d285018b679d5eea037c"
        price_mp_premium_discount="AR$ 27,000  mes/pareja"
        price_mp_premium="AR$ 0 primer mes"
        mp_premium="https://www.mercadopago.com.ar/subscriptions/checkout?preapproval_plan_id=2c9380848b62d290018b67a01e2d0369"

        price_stripe_basic_discount="U$D 30 mes/pareja"
        price_stripe_basic="U$D 0 primer mes"
        stripe_basic="https://buy.stripe.com/8wM8zed45dPf2VW6p6"
        price_stripe_estandar_discount="U$D 38 mes/pareja"
        price_stripe_estandar="U$D 0 primer mes"
        stripe_estandar="https://buy.stripe.com/bIYbLqc0112tcww4gZ"
        price_stripe_premium_discount="U$D 54 mes/pareja"
        price_stripe_premium="U$D 0 primer mes"
        stripe_premium="https://buy.stripe.com/aEU8ze8NPeTjeEE4h0"

       
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}