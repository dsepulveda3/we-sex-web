import Head from 'next/head'
import { useEffect } from 'react'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Pack11NP() {
  useEffect(() => {
    // Check if window is defined (client-side)
    if (typeof window !== 'undefined') {
      // This code will only run on the client side
        const currentRoute = window.location.pathname + window.location.search;

        // Send the complete route to Freshpaint as a custom event
        if(currentRoute === '/premium-material/packs/pack11-Meno-R-NP'){
            freshpaint.track("NP - Page View - Pack Meno + Rutina", {"Path": currentRoute});
        }
        
    }
  }, []);
  
  return (
    <>
      <Head>
        <title>Pack Menopausia + Rutina - WeSex</title>
        <meta name="description" content="Pack Menopausia + Rutina - WeSex" /> 
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías' titleSpan='Menopausia + Salir de la rutina' 
          price_before={`AR$ ${globalPrices.OneProductARS*2}  /  U$D ${globalPrices.OneProductUSD*2}`}
          price={`AR$ ${globalPrices.TwoProductARS}  /  U$D ${globalPrices.TwoProductUSD}`}
          description1='' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Menopausia es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='Conectar con tu deseo sexual y ' text1Span='disfrutar de una sexualidad plena durante la menopausia.' text1_2=''
          emoji2='👀' text2_1='' text2Span='Derribar mitos sobre la menopausia' text2_2=' y la sexualidad que han limitado tu percepción.' 
          emoji3='💦' text3_1='' text3Span='Aprender a adaptarte a los cambios en tu cuerpo' text3_2=' y vida sexual en esta nueva etapa.' 
          emoji4='💗' text4_1 ='Explorar ' text4Span='cómo los cambios hormonales afectan tu sexualidad' text4_2 = ' y cómo gestionarlos.'
          emoji5='🤟' text5_1='' text5Span='Descubrir que la sexualidad va más allá del sexo y la reproducción' text5_2=', abarcando el placer, el vínculo emocional y la conexión' 
          emoji6='😋' text6_1='' text6Span='Aprender a cambiar los guiones sexuales' text6_2=' y disfrutar de la intimidad sin presiones.'
          emoji7='🧠' text7_1='' text7Span='Conocer la importancia de la erotofília' text7_2=' y cómo cultivarla en tu vida.' />
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
        
        <ComprarUniversal title_mp='NP - Guía Menopausia + Salir de la rutina - WeSex' 
          unit_price_mp= {globalPrices.TwoProductARS} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*2}`} price_ARG={`AR$ ${globalPrices.TwoProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*2}`} price_USD={`U$D ${globalPrices.TwoProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/HUzQ9' 
          redirection_failed_mp='https://www.we.sex/premium-material/packs/pack11-Meno-R-NP'
          link_payhip_usd='https://payhip.com/b/NnYkq' has_promo={true}
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