import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack13Fer() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/packs/pack13-Comu-Deseo-SR-fer'){
            freshpaint.track("FER - Page View - Comu + Deseo + Rutina", {"Path": currentRoute});
        }
        
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Pack Comunicación + Deseo + Rutina - WeSex</title>
        <meta name="description" content="Pack Comunicación + Deseo + Rutina - WeSex" /> 
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías' titleSpan=' Comunicación + Deseo + Salir de la rutina' 
          price_before={`U$D ${globalPrices.OneProductUSD*3}`}
          price={`U$D ${globalPrices.ThreeProductUSD}`}
          description1=''
          description2='Compra el pack a un precio orgásmico.'
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de comunicación es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💞' text1_1='Mejorar la ' text1Span='comunicación con tu pareja.' text1_2=''
          emoji2='🗣' text2_1='' text2Span='Expresar tus deseos ' text2_2='sin sentirte juzgado.' 
          emoji3='🫶' text3_1='' text3Span='Detectar y entender ' text3_2='tus emociones.' 
          emoji4='💖' text4_1 ='' text4Span='Potenciar la conexión emocional ' text4_2 = 'con tus vínculos.'
          emoji5='🙉' text5_1='Ser una persona que sabe ' text5Span='escuchar.' text5_2='' 
          emoji6='💦' text6_1='Fortalecer la ' text6Span='conexión sexual' text6_2=' con tus vínculos.'
          emoji7='💫' text7_1='Fomentar la empatía y ' text7Span='comprensión mutua.' text7_2='' />
        <EsParaVosSiUniversal title1_1='Esta guía de Deseo es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='🧠' text1_1='Entender y ' text1Span='aceptar tu deseo sexual.' text1_2=''
          emoji2='✨' text2_1='' text2Span='Reavivar la pasión' text2_2=' en tu relación.' 
          emoji3='💦' text3_1='' text3Span='Herramientas prácticas ' text3_2='para incrementar tu deseo sexual.' 
          emoji4='💗' text4_1 ='' text4Span='Aprender que cosas estimulan ' text4_2 = 'tu deseo sexual y cuales lo inhiben.'
          emoji5='👀' text5_1='' text5Span='Detectar tus zonas erógenas ' text5_2='preferidas.' 
          emoji6='😋' text6_1='Encontrar la ' text6Span='frecuencia sexual perfecta ' text6_2='para tu relación.'
          emoji7='🤟' text7_1='' text7Span='Cómo mantener encendido' text7_2=' tu deseo.' />
        <EsParaVosSiUniversal title1_1='Esta guía para salir de la rutina es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='Dejar de hacer siempre lo mismo a la hora de ' text1Span='darse placer.' text1_2=''
          emoji2='💑' text2_1='Juegos prácticos para ' text2Span=' experimentar' text2_2=' con tu pareja.' 
          emoji3='✨' text3_1='' text3Span='Explorar tu sexualidad' text3_2=' más allá de lo convencional.' 
          emoji4='🏓' text4_1 ='Ping pong de ' text4Span='preguntas para hablar' text4_2 = ' en sus encuentros.'
          emoji5='🧸' text5_1='Incorporar' text5Span=' juguetes sexuales' text5_2=' en la pareja.' 
          emoji6='🧚‍♀️' text6_1='Llevar a cabo' text6Span=' tus fantasías.' text6_2=''
          emoji7='👅' text7_1='Reavivar la llama' text7Span=' como si fuera la primera vez.' text7_2='' />
        <AfterDiv />
        <AfterDiv />
        
        <ComprarUniversal title_mp='FER - Guía Comunicación + Deseo + Salir de la rutina - WeSex' 
          unit_price_mp= {globalPrices.ThreeProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*3}`} price_ARG={`AR$ ${globalPrices.ThreeProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*3}`} price_USD={`U$D ${globalPrices.ThreeProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/iMpVJ'
          redirection_failed_mp='https://www.we.sex/premium-material/packs/pack13-Comu-Deseo-SR-fer'
          link_payhip_usd='https://payhip.com/b/KlqjU' has_promo={true}
          buy_just='Comprar pack' reminder_buy_just='Estás comprando el pack'
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='' text_promo2_1=''
          text_promo2Span='' text_promo2_2=''
        />
        <Footer />
        </Layout>
      </main>
    </>
  )
}