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

export default function BecaWeSexer() {
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
        if(currentRoute === '/premium-material/desafios-para-parejas/testing-a?origin=Argentina'){
            freshpaint.track("Test A (Argentina) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-a?origin=Otro'){
          freshpaint.track("Test A (Otro) - PRICING ", {"Path": currentRoute});
        } else if (currentRoute === '/premium-material/desafios-para-parejas/testing-a?origin=Chile'){
          freshpaint.track("Test A (Chile) - PRICING ", {"Path": currentRoute});
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
        <IntroDiscount subtitle1_1='' subtitle1_2='Acceso a BecaWeSexer' subtitle1_3=' : hasta 40% de descuento todos los meses'/>
        {/* <div style={{color: "black", textAlign: "center", fontSize: "3rem", fontWeight: "bold"}}>TESTING A</div> */}
        <Explicacion2 />
        <ComoFunciona />
        <Dudas />
        <Opinions />
        <PlansUniversal 
        discount=""
        country={origin}
        chile="yes"
        beca_text_basic="** Beca 40% descuento"
        beca_text_estandar="** Beca 30% descuento"
        beca_text_premium="** Beca 20% descuento"

        suscribirme='Suscribirme con Beca !'
        font_boton='1.2rem'
        free_month="yes"

        price_mp_basic_discount="Antes AR$10,000"
        price_mp_basic="AR$6.000 mes/pareja"
        mp_basic=""
        price_mp_estandar_discount="Antes AR$ 21,000"
        price_mp_estandar="AR$14.700 mes/pareja"
        mp_estandar=""
        price_mp_premium_discount="Antes AR$ 24,000"
        price_mp_premium="AR$19.200 mes/pareja"
        mp_premium=""

        price_stripe_basic_discount="U$D 30 mes/pareja"
        price_stripe_basic="U$D 0 primer mes"
        stripe_basic=""
        price_stripe_estandar_discount="U$D 38 mes/pareja"
        price_stripe_estandar="U$D 0 primer mes"
        stripe_estandar=""
        price_stripe_premium_discount="U$D 54 mes/pareja"
        price_stripe_premium="U$D 0 primer mes"
        stripe_premium=""

        price_stripe_chile_basic_discount="CLP 30.000 mes/pareja"
        price_stripe_chile_basic="CLP 0 primer mes"
        stripe_basic_chile=""
        price_stripe_chile_estandar_discount="CLP 38.000 mes/pareja"
        price_stripe_chile_estandar="CLP 0 primer mes"
        stripe_estandar_chile=""
        price_stripe_chile_premium_discount="CLP 54.000 mes/pareja"
        price_stripe_chile_premium="CLP 0 primer mes"
        stripe_premium_chile=""

       
        />
        <Explicacion/>
        </Layout>
        
      </main>
    </>
  )
}