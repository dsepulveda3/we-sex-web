import Head from 'next/head'
import FirstBannerUniversal from '../../../../components/premiumMaterial/firstBannerUniversal'
import EsParaVosSiUniversal from '../../../../components/premiumMaterial/esParaVosSiUniversal'
import ProfesionalesUniversal from '../../../../components/premiumMaterial/profesionalesUniversal'
import ComprarUniversal from '../../../../components/premiumMaterial/comprarUniversal'
import Dudas from '../../../../components/premiumMaterial/dudas'
import AfterDiv from '../../../../components/premiumMaterial/afterDiv'
import AboutWeSex from '../../../../components/premiumMaterial/aboutWeSex'
import Footer from '../../../../components/premiumMaterial/footer'
import Layout from '../../../../components/general/Layout';

export default function Home() {
  
  return (
    <>
      <Head>
        <title>MasterSex Class por Bárbara García - WeSex</title>
        <meta name="description" content="MasterSex Class por Bárbara García - WeSex" /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>

      <main>
      <Layout>
        <FirstBannerUniversal titleText='MasterSex Class por' titleSpan='Barbara García' price='AR$ 4.500  /  U$D 15' description1='2 horas de aprendizaje sexual.' 
          descriptionSpan='Ondemand: ¡Mira la clase cuando prefieras!' description2='Aprende a disfrutar de cada instante de tus momentos sexuales.' 
          imageVisibility={false} video="https://jumpshare.com/embed/u37eETh6sUpMkZJ2zl6A" videoVisibility={true} isEmbedded={true} />
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta MasterSex Class es ' title1Span='para ti' title1_2=' si buscas' 
          emoji1='🗨️' text1_1='' text1Span='Técnicas de relajación ' text1_2='para conectar con el encuentro.'
          emoji2='🤟' text2_1='' text2Span='Masajes eróticos: ' text2_2='cómo dar y darte placer con masajes.' 
          emoji3='🧼' text3_1='' text3Span='Paja express v/s paja flow: ' text3_2='cómo disfrutar más la masturbación.' 
          emoji4='🍆' text4_1='' text4Span='Posporno: ' text4_2 = 'porno y sano para nuestra sexualidad.'
          emoji5='💦' text5_1='' text5Span='Acuerdos sexuales: ' text5_2='te enseñamos a llevar a cabo tus fantasías con tus parejas.' 
          emoji6='👀' text6_1='' text6Span='Respiración  ' text6_2='orgásmica y no orgásmica.'
          emoji7='🤟' text7_1='' text7Span='Técnicas ' text7_2='para llevar tus encuentros al siguiente nivel' />
        <ProfesionalesUniversal fabiVisibility={false} ceciliaVisibility={false} barbaraVisibility={true}/>
        <Dudas />
        <ComprarUniversal title_mp='MasterSex Class: revoluciona tu vida sexual' unit_price_mp= {4500} quantity_mp={1} currency_id_mp='ARS'
          price_ARG='AR$  4500' price_USD='U$D  15' redirection_succesful_mp='https://payhip.com/b/Sdivh' 
          redirection_failed_mp='https://we.sex/premium-material/masters/masterclass-1'
          link_payhip_usd='https://payhip.com/b/FDN0X' has_promo={false}/>
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}