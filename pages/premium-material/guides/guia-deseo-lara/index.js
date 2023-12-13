import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ProfesionalesUniversal from '../../../../components/premiumMaterial/profesionalesUniversal'
import AutoresUniversal from '../../../../components/premiumMaterial/AutoresUniversal'
import Regalar from '../../../../components/premiumMaterial/regalar'
import PackUniversal from '../../../../components/premiumMaterial/packUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import Dudas from '../../../../components/premiumMaterial/dudas'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import AboutWeSex from '../../../../components/premiumMaterial/aboutWeSex'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

import DisclaimerTantra from '../../../../components/premiumMaterial/disclaimerTantra'


export default function DeseoLara() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/guides/guia-deseo-lara'){
            freshpaint.track("LARA - Page View - Guía Deseo", {"Path": currentRoute});
        }
        
    }
  }, []);
  return (
    <>
      <Head>
        <title>Guía Deseo Sexual- WeSex</title>
        <meta name="description" content="Guía Deseo Sexual- WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía de' titleSpan=' Deseo Sexual' 
          price={`USD$ ${globalPrices.OneProductUSD}`} 
          description1='' 
          description2='Cómo mantenerlo encendido.' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/deseo-sexual.png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Deseo es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='Entender y ' text1Span='aceptar tu deseo sexual.' text1_2=''
          emoji2='👀' text2_1='' text2Span='Reavivar la pasión' text2_2=' en tu relación..' 
          emoji3='💦' text3_1='' text3Span='Herramientas prácticas' text3_2=' para incrementar tu deseo sexual.' 
          emoji4='💗' text4_1 ='' text4Span='Aprender que cosas estimulan ' text4_2 = 'tu deseo sexual y cuales lo inhiben.'
          emoji5='🤟' text5_1='' text5Span='Detectar tus zonas erógenas ' text5_2='preferidas.' 
          emoji6='😋' text6_1='Encontrar la ' text6Span='frecuencia sexual perfecta ' text6_2='para tu relación.'
          emoji7='🧠' text7_1='' text7Span='Cómo mantener encendido' text7_2=' tu deseo.' />
        <AfterDiv />
        {/* <PackUniversal title1_1='Llevate el pack Tántrico' title1_2='Por AR$5600 llevate las 3 guías tántricas de Fabi Villalba: ' 
        title1_3='Orgasmos profundos, Masturbación Tántrica 1, y Masturbación Tántrica 2.' link_promo='/premium-material/packs/pack9-all-tantra' /> */}
        <AfterDiv />
        {/* <DisclaimerTantra /> */}
        <AutoresUniversal fabiVisibility={false} laraVisibility={true} ceciliaVisibility={false} barbaraVisibility={false}/>
        <PackUniversal title1_1='' title1_2={`Por USD$${globalPrices.TwoProductUSD} llevate 2 guías de WeSex: `}
        title1_3='Deseo + Salir de la rutina.' link_promo='/premium-material/packs/pack12-Deseo-SR-Lara' />
        <Regalar />
        <ComprarUniversal title_mp='Guía Deseo Sexual - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} 
          price_USD={`U$D ${globalPrices.OneProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/I4l0O' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-deseo-lara'
          link_payhip_usd='https://payhip.com/b/6QREN'
          has_promo={true}
          buy_just='Comprar guía Deseo' reminder_buy_just='Estás comprando solo la guía de Deseo'
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='/premium-material/packs/pack12-Deseo-SR-Lara' text_promo2_1='O llevate la '
          text_promo2Span='guía de deseo + salir de la rutina' text_promo2_2=' a un precio orgásmico'
          />
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}