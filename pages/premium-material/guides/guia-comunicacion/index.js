import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ProfesionalesUniversal from '../../../../components/premiumMaterial/profesionalesUniversal'
import Regalar from '../../../../components/premiumMaterial/regalar'
import PackUniversal from '../../../../components/premiumMaterial/packUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import Dudas from '../../../../components/premiumMaterial/dudas'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import AboutWeSex from '../../../../components/premiumMaterial/aboutWeSex'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices';
import AutoresUniversal from '../../../../components/premiumMaterial/AutoresUniversal'

import DisclaimerTantra from '../../../../components/premiumMaterial/disclaimerTantra'


export default function Comunicacion() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/guides/guia-comunicacion'){
            freshpaint.track("Page View - Guía Comunicacion", {"Path": currentRoute});
        }
        
    }
  }, []);
  return (
    <>
      <Head>
        <title>Guía Comunicación Asertiva - WeSex</title>
        <meta name="description" content="Comunicación Asertiva - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía de' titleSpan=' Comunicación Asertiva'
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`}
          description1='' 
          description2='Te enseñamos a fortalecer la conexión en tus vínculos.' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/comunicacion.png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de comunicación es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💞' text1_1='Mejorar la ' text1Span='comunicación con tu pareja.' text1_2=''
          emoji2='🗣' text2_1='' text2Span='Expresar tus deseos ' text2_2='sin sentirte juzgado.' 
          emoji3='🫶' text3_1='' text3Span='Detectar y entender ' text3_2='tus emociones.' 
          emoji4='💖' text4_1 ='' text4Span='Potenciar la conexión emocional ' text4_2 = 'con tus vínculos.'
          emoji5='🙉' text5_1='Ser una persona que sabe ' text5Span='escuchar.' text5_2='' 
          emoji6='💦' text6_1='Fortalecer la ' text6Span='conexión sexual' text6_2=' con tus vínculos.'
          emoji7='💫' text7_1='Fomentar la empatía y ' text7Span='comprensión mutua.' text7_2='' />
        <AfterDiv />
        {/* <PackUniversal title1_1='Llevate el pack Tántrico' title1_2='Por AR$5600 llevate las 3 guías tántricas de Fabi Villalba: ' 
        title1_3='Orgasmos profundos, Masturbación Tántrica 1, y Masturbación Tántrica 2.' link_promo='/premium-material/packs/pack9-all-tantra' /> */}
        <AfterDiv />
        {/* <DisclaimerTantra /> */}
        <AutoresUniversal fabiVisibility={false} laraVisibility={false} ceciliaVisibility={false} barbaraVisibility={false} fernandaVisibility={true}/>
        <PackUniversal title1_1='' title1_2={`Por AR$${globalPrices.TwoProductARS} llevate las 8 guías de WeSex: `}
        title1_3='Comunicación + Deseo + Salir de la rutina + Orgasmos profundos + Tantra 1 + Tantra 2 + Zonas Erógenas + Sexo Anal.' 
        link_promo='/premium-material/packs/pack14-eight-guides' />
        <Regalar />
        <ComprarUniversal title_mp='Guía Comunicación Asertiva - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} 
          price_USD={`U$D ${globalPrices.OneProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/WyBAF' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-comunucacion'
          link_payhip_usd='https://payhip.com/b/yB3S1'
          has_promo={true}
          buy_just='Comprar de guía Comunicación' reminder_buy_just='Estás comprando solo la guía de Comunicación' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='/premium-material/packs/pack13-Comu-Deseo-SR' text_promo2_1='O llevate la '
          text_promo2Span='guía de comunicación + deseo + salir de la rutina' text_promo2_2=' a un precio orgásmico'
          />
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}