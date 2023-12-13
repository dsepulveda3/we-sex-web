import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack12LARA() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/packs/pack12-Deseo-SR-Lara'){
            freshpaint.track("LARA - Page View - Deseo + Rutina", {"Path": currentRoute});
        }
        
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Pack Deseo + Rutina - WeSex</title>
        <meta name="description" content="Pack Deseo + Rutina - WeSex" /> 
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías' titleSpan='Deseo + Salir de la rutina' 
          price_before={`AR$ ${globalPrices.OneProductARS*2}  /  U$D ${globalPrices.OneProductUSD*2}`}
          price={`AR$ ${globalPrices.TwoProductARS}  /  U$D ${globalPrices.TwoProductUSD}`}
          description1='' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
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
        
        <ComprarUniversal title_mp='LARA - Guía Deseo + Salir de la rutina - WeSex' 
          unit_price_mp= {globalPrices.TwoProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*2}`} price_ARG={`AR$ ${globalPrices.TwoProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*2}`} price_USD={`U$D ${globalPrices.TwoProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/nxopi' 
          redirection_failed_mp='https://www.we.sex/premium-material/packs/pack12-Deseo-SR-Lara'
          link_payhip_usd='https://payhip.com/b/W71cN' has_promo={true}
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