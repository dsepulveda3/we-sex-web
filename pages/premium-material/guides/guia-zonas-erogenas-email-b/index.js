import Head from 'next/head'
import FirstBannerGZB from '../../../../components/premiumMaterial/firstBannerGZB'
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
        <title>Guía de zonas erogenas - WeSex</title>
        <meta name="description" content="Guía de zonas erogenas WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout >
        <FirstBannerGZB/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Zonas Erógenas es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='La magia de combinar diferentes zonas y ' text1Span='técnicas para alcanzar un placer extremo.' text1_2=''
          emoji2='👀' text2_1='Cómo ' text2Span='romper con el coitocentrismo' text2_2=' y explorar nuevas prácticas sexuales.' 
          emoji3='💦' text3_1='Minimizar conflictos ' text3Span='relacionados con la eyaculación precoz' text3_2=' y la falta de erección.' 
          emoji4='💗' text4_1 ='La importancia de ' text4Span='disfrutar el placer' text4_2 = ' más allá de la penetración vaginal.'
          emoji5='🤟' text5_1='' text5Span='Técnicas de ' text5_2='masajes eróticos.' 
          emoji6='😋' text6_1='' text6Span='Cómo estimular cada parte del cuerpo' text6_2=', de pies a cabeza.'
          emoji7='🫦' text7_1='' text7Span='Variadas técnicas de estimulación' text7_2=' desde suaves mordiscos hasta succiones.' />
        <AfterDiv />
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <PackUniversal title1_1='2 x 3' title1_2='por 3.000 llevate las 3 guías de WeSex: ' 
        title1_3='Zonas Erógenas + Sexo Anal + Tantra' link_promo='/premium-material/packs/pack1-email-b' />
        <Regalar />
        <ComprarUniversal title_mp='EMB - Guía Zonas Erógenas - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} price_USD={`U$D ${globalPrices.OneProductUSD}`} redirection_succesful_mp='https://payhip.com/b/3V1Ci' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-zonas-erogenas-email-b'
          link_payhip_usd='https://payhip.com/b/4TPzr' has_promo={true}
          buy_just='Comprar solo guía zonas erógenas' reminder_buy_just='Estás comprando solo la guía de zonas erógenas' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='/premium-material/packs/pack2-email-b' text_promo2_1='O llevate la '
          text_promo2Span='guía de zonas erógenas + tantra' text_promo2_2=' a un precio orgásmico'
          />
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}
