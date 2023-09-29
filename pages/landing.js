import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';


import HeaderLanding from '../components/landing/headerLanding';
import Hola from '../components/landing/hola';
import Stadistics2 from '../components/landing/stadistics2';
import Temas2 from '../components/landing/temas2';
import Community from '../components/landing/community';
import Ceciliace from '../components/landing/ceciliace';
import Questions from '../components/landing/questions';
import Contactus from '../components/landing/contactus';


import Layout from '../components/general/Layout';
import DebatesHome from '../components/debates/DebatesHome';
import TopUsers from '../components/home/TopUsers';
import ArticlesHome from '../components/articles/ArticlesHome';
import Banner from '../components/home/Banner';
import Faqs from '../components/home/Faqs';
import clienteAxios from '../config/axios';
import Inicio from '../pages/inicio';

export default function Home() {
  // async function getData() {
  //   await clienteAxios.get('/articles/feed')
  //     .then(res => {
  //       console.log(res)
  //     })
  //     .catch(err => {
  //       console.log(err)
  //     })
  // }

  // useEffect(() => {
  //   getData();
  //   // eslint-disable-next-line
  // },[])

  return (
    <>
      <Head>
        <title>WeSex - La app para hablar y aprender de sexo</title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout type={''}>
        <Hola />
        <Stadistics2 />
        <Temas2 />
        <Community />
        <Ceciliace />
        <Questions/>
        <Contactus/>
      </Layout>
  
      {/* <Layout>
        <Banner />
        <ArticlesHome />
        <DebatesHome />
        <TopUsers />
        <div className='violet-divisor'></div>
        <Faqs />
      </Layout> */}
    </>
  );
}
