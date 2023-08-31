import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';
import globalPrices from '../../../../utils/globalPrices'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guías de Salir de la rutina + Tantra + Anal - WeSex</title>
        <meta name="description" content="Guías Salir de la rutina + Tantra + Anal - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guías ' titleSpan='Salir de la rutina + Tantra + Anal' 
          price_before= {`AR$ ${globalPrices.OneProductARS*3}  /  U$D ${globalPrices.OneProductUSD*3}`} 
          price={`AR$ ${globalPrices.ThreeProductARS}  /  U$D ${globalPrices.ThreeProductUSD}`} 
          description1='Llevate 3, paga 2 :) .' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
          <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía para salir de la rutina es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='Dejar de hacer siempre lo mismo a la hora de ' text1Span='darse placer.' text1_2=''
          emoji2='💑' text2_1='Juegos prácticos para ' text2Span=' experimentar' text2_2=' con tu pareja.' 
          emoji3='✨' text3_1='' text3Span='Explorar tu sexualidad' text3_2=' más allá de lo convencional.' 
          emoji4='🏓' text4_1 ='Ping pong de ' text4Span='preguntas para hablar' text4_2 = ' de sexo en pareja.'
          emoji5='🧸' text5_1='Incorporar' text5Span=' juguetes sexuales' text5_2=' en la pareja.' 
          emoji6='🧚‍♀️' text6_1='Llevar a cabo' text6Span=' tus fantasías.' text6_2=''
          emoji7='👅' text7_1='Explorar' text7Span=' tus sentidos.' text7_2='' />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Tantra es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💗' text1_1='' text1Span='Inducirte al tantra' text1_2=' y aplicarlo en tu vida sexual.'
          emoji2='✨' text2_1='Tener orgasmos ' text2Span='más profundos y duraderos.' text2_2='' 
          emoji3='🏋️‍♀️' text3_1='Practicar ' text3Span='tantra con tu pareja.' text3_2='' 
          emoji4='🍆' text4_1 ='Incrementar las sensaciones de ' text4Span='placer en tu vida.' text4_2 = ''
          emoji5='🫦' text5_1='Técnicas de ' text5Span='liberación emocional.' text5_2='' 
          emoji6='🤟' text6_1='' text6Span='Técnicas  ' text6_2='para llevar tus encuentros al siguiente nivel.'
          emoji7='🧘' text7_1='Una ' text7Span='meditación guiada' text7_2=' vía audio.' />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Sexo Anal es ' title1Span='para ti' title1_2=' si buscas' 
        emoji1='🤟' text1_1='Un ' text1Span='paso a paso' text1_2=' sobre cómo tener una experiencia anal placentera.'
        emoji2='👀' text2_1='Reducir ' text2Span='riesgos asociados con el sexo anal' text2_2=' y cómo cuidar tu salud.' 
        emoji3='🧼' text3_1='Tener una ' text3Span='buena higiene' text3_2=' en el sexo anal.' 
        emoji4='🗨️' text4_1 ='Información sobre ' text4Span='cómo comunicarte con tu pareja' text4_2 = ' sobre tus deseos y limites en relación al sexo anal.'
        emoji5='😬' text5_1='' text5Span='Evitar dolor ' text5_2='innecesario.' 
        emoji6='🍆' text6_1='' text6Span='Diferentes juguetes sexuales ' text6_2='y cómo usarlos de forma segura y placentera.'
        emoji7='💦' text7_1='Tipos de ' text7Span='lubricantes disponibles' text7_2='y como usarlos correctamente para evitar el dolor o la incomodidad.' />
        <ComprarUniversal title_mp='Guía Salir de la rutina + Tantra + Anal - WeSex' 
          unit_price_mp= {3200} 
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*3}`} price_ARG={`U$D ${globalPrices.ThreeProductARS}`} 
          price_before_USD={`U$D ${globalPrices.OneProductUSD*3}`} price_USD={`U$D ${globalPrices.ThreeProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/EfNDw' 
          redirection_failed_mp='https://www.we.sex/packs/pack4-rutina-tantra-anal'
          link_payhip_usd='https://payhip.com/b/sEZuw' has_promo={false}
        />
        <Footer />
        </Layout>
      </main>
    </>
  )
}