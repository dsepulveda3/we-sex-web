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


export default function Home() {
  
  return (
    <>
      <Head>
        <title>Guía Masturbación Tántrica 2 - WeSex</title>
        <meta name="description" content="Guía Masturbación Tántrica 2 - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía de' titleSpan=' Masturbación Tántrica 2' 
          price={`AR$ ${globalPrices.OneProductARS}  /  U$D ${globalPrices.OneProductUSD}`} 
          description1='' 
          description2='Masajes genitales avanzados.' imageVisibility={true} 
          videoVisibility={false} image='/img/premium-material/Masturbacion_tantrica.png' widthImage={'45%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de Masturbación Tántrica 2 es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='😋' text1_1='' text1Span='Aprender técnicas' text1_2=' tántricas de masturbación.'
          emoji2='💑' text2_1='' text2Span='Sentir placer de manera más profunda' text2_2=' en tus relaciones sexuales.' 
          emoji3='✨' text3_1='Aprender masajes tántricos' text3Span=' de vulva, clítoris y canal vaginal.' text3_2='' 
          emoji4='🏓' text4_1='Aprender masajes tántricos' text4Span=' de ano, períneo, pene y testículos.' text4_2 = ''
          emoji5='🧸' text5_1='Darte un espacio de' text5Span=' placer personal.' text5_2='' 
          emoji6='🧚‍♀️' text6_1='Tener' text6Span=' orgasmos más profundos' text6_2=' y poder regularlos.'
          emoji7='👅' text7_1='Descubrir el poder de la' text7Span=' atención plena' text7_2=' en tu vida sexual.' />
        <AfterDiv />
        <PackUniversal title1_1='Llevate el pack Tántrico' title1_2='Por AR$5600 llevate las 3 guías tántricas de Fabi Villalba: ' 
        title1_3='Orgasmos profundos, Masturbación Tántrica 1, y Masturbación Tántrica 2.' link_promo='/premium-material/packs/pack9-all-tantra' />
        <ProfesionalesUniversal fabiVisibility={true} ceciliaVisibility={true} barbaraVisibility={true}/>
        <DisclaimerTantra />
        <Regalar />
        <ComprarUniversal title_mp='Guía Masturbación Tántrica 2 - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} 
          price_USD={`U$D ${globalPrices.OneProductUSD}`} 
          redirection_succesful_mp='https://payhip.com/b/ExUtJ' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-masturbacion-tantrica-2'
          link_payhip_usd='https://payhip.com/b/g2p5j' 
          has_promo={true}
          buy_just='Comprar solo guía Masturbación Tantrica 2' reminder_buy_just='Estás comprando solo la guía Masturbación Tántrica 2' 
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