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
        <title>Pack Explorador - WeSex</title>
        <meta name="description" content="Guías Salir de la rutina + Zonas Erógenas - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guías ' titleSpan='Salir de la rutina + Zonas Erógenas' 
          price_before={`AR$ ${globalPrices.OneProductARS*2}  /  U$D ${globalPrices.OneProductUSD*2}`} 
          price={`AR$ ${globalPrices.TwoProductARS}  /  U$D ${globalPrices.TwoProductUSD}`} 
          description1='' 
          description2='Compra el pack a un precio orgásmico.' 
          videoVisibility={false} imageVisibility={false}/>
          <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía para salir de la rutina es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='Dejar de hacer siempre lo mismo a la hora de ' text1Span='darse placer.' text1_2=''
          emoji2='💑' text2_1='Juegos prácticos para ' text2Span=' experimentar' text2_2=' con tu pareja.' 
          emoji3='✨' text3_1='' text3Span='Explorar tu sexualidad' text3_2=' más allá de lo convencional.' 
          emoji4='🏓' text4_1 ='Ping pong de ' text4Span='preguntas para hablar' text4_2 = ' en sus encuentros.'
          emoji5='🧸' text5_1='Incorporar' text5Span=' juguetes sexuales' text5_2=' en la pareja.' 
          emoji6='🧚‍♀️' text6_1='Llevar a cabo' text6Span=' tus fantasías.' text6_2=''
          emoji7='👅' text7_1='Reavivar la llama' text7Span=' como si fuera la primera vez.' text7_2='' />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Zonas Erógenas es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='La magia de combinar diferentes zonas y ' text1Span='técnicas para alcanzar un placer extremo.' text1_2=''
          emoji2='👀' text2_1='Cómo ' text2Span='romper con el coitocentrismo' text2_2=' y explorar nuevas prácticas sexuales.' 
          emoji3='💦' text3_1='Minimizar conflictos ' text3Span='relacionados con la eyaculación precoz' text3_2=' y la falta de erección.' 
          emoji4='💗' text4_1 ='La importancia de ' text4Span='disfrutar el placer' text4_2 = ' más allá de la penetración vaginal.'
          emoji5='🤟' text5_1='' text5Span='Técnicas de ' text5_2='masajes eróticos.' 
          emoji6='😋' text6_1='' text6Span='Cómo estimular cada parte del cuerpo' text6_2=', de pies a cabeza.'
          emoji7='🫦' text7_1='' text7Span='Variadas técnicas de estimulación' text7_2=' desde suaves mordiscos hasta succiones.' />
        <ComprarUniversal title_mp='EMC - Guía Salir de la rutina + Zonas Erógenas - WeSex' 
          unit_price_mp= {globalPrices.TwoProductARS}
          quantity_mp={1} currency_id_mp='ARS'
          price_before_ARG={`AR$ ${globalPrices.OneProductARS*2}`} price_ARG={`AR$ ${globalPrices.TwoProductARS}`}
          price_before_USD={`U$D ${globalPrices.OneProductUSD*2}`} price_USD={`U$D ${globalPrices.TwoProductUSD}`}
          redirection_succesful_mp='https://payhip.com/b/Thqz0'
          redirection_failed_mp='https://www.we.sex/packs/pack5-rutina-zonas-email-c'
          link_payhip_usd='https://payhip.com/b/Ky7XU' has_promo={false}
        />
        <Footer />
        </Layout>
      </main>
    </>
  )
}