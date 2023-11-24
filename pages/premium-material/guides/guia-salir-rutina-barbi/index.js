import Head from 'next/head'
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
import globalPrices from '../../../../utils/globalPrices'

export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guía para salir de la rutina con tu pareja - WeSex</title>
        <meta name="description" content="Guía para salir de la rutina con tu pareja - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
        {/* <NavBarWS /> */}
        <Layout>
        <FirstBannerUniversal titleText='Guía para' titleSpan=' salir de la rutina con tu pareja' 
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`} 
          description1='' 
          description2='Reavivar la llama como si fuera la primera vez.' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/salir_rutina.png' widthImage={'45%'}/>
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
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <PackUniversal title1_1='2 x 3' title1_2={`Por AR$${globalPrices.ThreeProductARS} llevate 3 guías de WeSex: `}
        title1_3='Salir de la rutina + Tantra + Anal' link_promo='/premium-material/packs/pack4-rutina-tantra-anal-barbi' />
        {/* <Pack/> */}
        <Regalar />
        <ComprarUniversal title_mp='B - Guía para salir de la rutina - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} price_USD={`U$D ${globalPrices.FourProductUSD}`} redirection_succesful_mp='https://payhip.com/b/J7U1A' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-salir-rutina-barbi'
          link_payhip_usd='https://payhip.com/b/FXPAo' has_promo={true}
          buy_just='Comprar solo guía para salir de la rutina' reminder_buy_just='Estás comprando solo la guía para salir de la rutina' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='/premium-material/packs/pack5-rutina-zonas-barbi' text_promo2_1='O llevate la '
          text_promo2Span='guía para salir de la rutina + zonas erógenas' text_promo2_2=' a un precio orgásmico'
          />
        <Dudas />
        <AboutWeSex />
        {/* <SeguisDudando /> */}
        {/* <NoLoPienses /> */}
        <Footer />
        </Layout>
      </main>
    </>
  )
}