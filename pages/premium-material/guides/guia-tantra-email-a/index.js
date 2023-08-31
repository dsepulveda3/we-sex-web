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
        <title>Guía de tantra: orgasmos más profundos- WeSex</title>
        <meta name="description" content="Guía de tantra: orgasmos más profundos- WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerUniversal titleText='Guía de tantra:' titleSpan='orgasmos más profundos' 
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`} 
          description1='Te enseñamos de 0 a 100,' 
          description2='cómo aplicar el tantra a tu vida sexual.'  imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/Tantra (1).png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Tantra es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='💗' text1_1='' text1Span='Inducirte al tantra' text1_2=' y aplicarlo en tu vida sexual.'
          emoji2='✨' text2_1='Tener orgasmos ' text2Span='más profundos y duraderos.' text2_2='' 
          emoji3='🏋️‍♀️' text3_1='Practicar ' text3Span='tantra con tu pareja.' text3_2='' 
          emoji4='🍆' text4_1 ='Incrementar las sensaciones de ' text4Span='placer en tu vida.' text4_2 = ''
          emoji5='🫦' text5_1='Técnicas de' text5Span='liberación emocional.' text5_2='' 
          emoji6='🤟' text6_1='' text6Span='Técnicas  ' text6_2='para llevar tus encuentros al siguiente nivel.'
          emoji7='🧘' text7_1='Una ' text7Span='meditación guiada' text7_2=' vía audio.' />
        {/* <QueVasAEncontrar /> */}
        <AfterDiv />
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <PackUniversal title1_1='' title1_2='Llevate la guía de Tantra + Sexo Anal ' 
        title1_3='a un precio orgasmico' link_promo='/premium-material/guides/guia-pack-anal-tantra-email-a' />
        <Regalar />
        <ComprarUniversal title_mp='EMA - Guía Tantra- WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} price_USD={`U$D ${globalPrices.OneProductUSD}`} redirection_succesful_mp='https://payhip.com/b/DfCSh' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-tantra-email-a'
          link_payhip_usd='https://payhip.com/b/yXD0e' has_promo={true}
          buy_just='Comprar solo guía tantra' reminder_buy_just='Estás comprando solo la guía de Tantra' 
          link_promo='/premium-material/guides/guia-pack-anal-tantra-email-a' text_promo1_1='O llevate la '
          text_promo1Span='guía de tantra + la guía de sexo anal' text_promo1_2=' a un precio orgásmico'
          link_promo2='' text_promo2_1=''
          text_promo2Span='' text_promo2_2=''/>
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}
