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
import DisclaimerTantra from '../../../../components/premiumMaterial/disclaimerTantra'


export default function MenopausiaNP() {
  
  return (
    <>
      <Head>
        <title>Guía Menopausia - WeSex</title>
        <meta name="description" content="Guía Menopausia - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía de' titleSpan=' Menopausia' 
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`} 
          description1='' 
          description2='Descubre Tu Plenitud Sexual en la Menopausia.' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/menopausia.png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Menopausia es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='✨' text1_1='Conectar con tu deseo sexual y ' text1Span='disfrutar de una sexualidad plena durante la menopausia.' text1_2=''
          emoji2='👀' text2_1='' text2Span='Derribar mitos sobre la menopausia' text2_2=' y la sexualidad que han limitado tu percepción.' 
          emoji3='💦' text3_1='' text3Span='Aprender a adaptarte a los cambios en tu cuerpo' text3_2=' y vida sexual en esta nueva etapa.' 
          emoji4='💗' text4_1 ='Explorar ' text4Span='cómo los cambios hormonales afectan tu sexualidad' text4_2 = ' y cómo gestionarlos.'
          emoji5='🤟' text5_1='' text5Span='Descubrir que la sexualidad va más allá del sexo y la reproducción' text5_2=', abarcando el placer, el vínculo emocional y la conexión' 
          emoji6='😋' text6_1='' text6Span='Aprender a cambiar los guiones sexuales' text6_2=' y disfrutar de la intimidad sin presiones.'
          emoji7='🧠' text7_1='' text7Span='Conocer la importancia de la erotofília' text7_2=' y cómo cultivarla en tu vida.' />
        <AfterDiv />
        {/* <PackUniversal title1_1='Llevate el pack Tántrico' title1_2='Por AR$5600 llevate las 3 guías tántricas de Fabi Villalba: ' 
        title1_3='Orgasmos profundos, Masturbación Tántrica 1, y Masturbación Tántrica 2.' link_promo='/premium-material/packs/pack9-all-tantra' /> */}
        <AfterDiv />
        {/* <DisclaimerTantra /> */}
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <Regalar />
        <ComprarUniversal title_mp='NP - Guía Menopausia - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} 
          price_USD={`U$D ${globalPrices.OneProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/3qWJp' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-masturbacion-tantrica-2'
          link_payhip_usd='https://payhip.com/b/TOmpj'
          has_promo={true}
          buy_just='Comprar guía Menopausia' reminder_buy_just='Estás comprando solo la guía de Menopausia' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='' text_promo2_1=' '
          text_promo2Span='' text_promo2_2=''
          />
        <Dudas />
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}