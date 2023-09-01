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
import ReactPlayer from 'react-player';
import { useEffect, useState } from 'react';
import { NavbarBrand } from 'reactstrap';
import styled from '@emotion/styled';
import { FaBeer } from 'react-icons/fa';
import { useAuth } from '../../../../context/authUserContext'

const AppImage = styled.img `
  width: 10%;
  padding-top: 1.0rem;
  padding-bottom: 1.0rem;
  margin-left: 2.5rem;

  @media (max-width: 540px) {
    width: 30%;
    padding-top: 1.2rem;
    padding-bottom: 1.2rem;
    margin-left: 4.5rem;

  }
`;

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
        <FirstBannerUniversal titleText='MasterSex Class por' titleSpan='Barbara García' description1='2 horas de aprendizaje sexual.' 
          descriptionSpan='Ondemand: ¡Mira la clase cuando prefieras!' description2='Aprende a disfrutar de cada instante de tus momentos sexuales.' 
          imageVisibility={false} video="https://we-sex-premium.s3.us-east-2.amazonaws.com/masterclasses/videos/Masterclass1/Mastersex+Class+Encuentros+Sexuales+V1.mp4" 
          videoVisibility={true} isEmbedded={false} buyVisibility={false}
        />
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
        <AboutWeSex />
        <Footer />
        </Layout>
      </main>
    </>
  )
}