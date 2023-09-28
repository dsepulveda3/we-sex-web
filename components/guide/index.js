import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import Head from 'next/head';
import { query_guide } from '../../requests/premiumService';
import FirstBannerUniversal from '../premiumMaterial/firstBannerUniversal';
import EsParaVosSiUniversal from '../premiumMaterial/esParaVosSiUniversal';
import ProfesionalesUniversal from '../premiumMaterial/profesionalesUniversal';
import Regalar from '../premiumMaterial/regalar';
import PackUniversal from '../premiumMaterial/packUniversal';
import ComprarUniversal from '../premiumMaterial/comprarUniversal';
import Dudas from '../premiumMaterial/dudas';
import AfterDiv from '../premiumMaterial/afterDiv';
import AboutWeSex from '../premiumMaterial/aboutWeSex';
import Footer from '../premiumMaterial/footer';
import Layout from '../general/Layout';
import globalPrices from '../../utils/globalPrices';
import Guides from '../premiumMaterial/guides';


export default function MasturbacionTantrica() {
  const router = useRouter();
  const { guideId } = router.query;
  const [guide, setGuide] = useState(null);
  const [fabiVisibility, setFabiVisibility] = useState(false);
  const [ceciliaVisibility, setCeciliaVisibility] = useState(false);
  const [barbaraVisibility, setBarbaraVisibility] = useState(false);

  useEffect(() => {
    if (guideId) {
      query_guide(guideId).then((response) => {
        console.log(response.data);
        setGuide(response.data);
        setFabiVisibility(response.data.proffesionals.includes('fabi'));
        setCeciliaVisibility(response.data.proffesionals.includes('cecilia'));
        setBarbaraVisibility(response.data.proffesionals.includes('barbara'));
      });
    }
  }, [guideId]);

  const guideName = guide ? guide.name : '';
  const priceArs = guide ? guide.priceARS : '2500';
  const priceUsd = guide ? guide.priceUSD : '7';
  const coverImage = guide ? guide.coverImage.key : '';
  
  return (
    <>
      <Head>
        <title> {guideName} - WeSex</title>
        <meta name="description" content={`${guideName} - WeSex`} /> 
        <meta name="keywords" content="" /> 
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>
      
      <main>
      <Layout>
        <FirstBannerUniversal titleText='Guía' titleSpan={`${guideName}`} 
          price={`AR$ ${priceArs}  /  U$D ${priceUsd}`} 
          description1='' 
          description2='Descubre nuevas capas de placer y goza como nunca' imageVisibility={true} 
          videoVisibility={false} image={`https://we-sex-premium.s3.amazonaws.com/${coverImage}`} widthImage={'70%'}/>
        <AfterDiv />
        <EsParaVosSiUniversal title1_1='Esta guía de masturbación tántrica es  ' title1Span='para ti' title1_2=' si buscas'
          emoji1='👀' text1_1='Experimentar nuevas ' text1Span='dimensiones de placer.' text1_2=''
          emoji2='✨' text2_1='Transformar el ' text2Span='autoplacer' text2_2=' en una práctica espiritual y de bienestar.'
          emoji3='💗' text3_1='' text3Span='Amigarte con tu cuerpo' text3_2=' y tu placer interior.'
          emoji4='🏓' text4_1 ='Introducirte ' text4Span='a nuevas técnicas' text4_2 = ' de Masturbación.'
          emoji5='🫦' text5_1='Sensibilizar tus tejidos para una' text5Span=' experiencia más profunda.' text5_2=''
          emoji6='🧚‍♀️' text6_1='Descubrir el poder de la' text6Span=' atención plena en tu vida sexual.' text6_2=''
          emoji7='🧘' text7_1='Explorar la ' text7Span='conexión mente-cuerpo.' text7_2=''
        />
        <AfterDiv />
        <ProfesionalesUniversal fabiVisibility={fabiVisibility} ceciliaVisibility={ceciliaVisibility} barbaraVisibility={barbaraVisibility}/>
        {/* <PackUniversal title1_1='3 x 2' title1_2={`Por AR$${globalPrices.ThreeProductARS} llevate 3 guías de WeSex: `}
        title1_3='Masturbación Tántrica, Zonas Erógenas, Sexo Anal.' link_promo='/premium-material/packs/pack7-MT-zonas-anal' /> */}
        <Regalar />
        <ComprarUniversal title_mp='Guía Masturbación Tántrica - WeSex' unit_price_mp= {globalPrices.OneProductARS} quantity_mp={1} currency_id_mp='ARS'
          price_ARG={`AR$ ${globalPrices.OneProductARS}`} price_USD={`U$D ${globalPrices.OneProductUSD}`} redirection_succesful_mp='https://payhip.com/b/s29W0' 
          redirection_failed_mp='https://www.we.sex/premium-material/guides/guia-masturbacion-tantrica'
          link_payhip_usd='https://payhip.com/b/iYPqx' has_promo={true}
          buy_just='Comprar guía masturbación tántrica 1' reminder_buy_just='' 
          link_promo='' text_promo1_1=''
          text_promo1Span='' text_promo1_2=''
          link_promo2='' text_promo2_1=''
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