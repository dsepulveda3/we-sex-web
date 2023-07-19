import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';

import Layout from '../components/general/Layout';
import DebatesHome from '../components/debates/DebatesHome';
import TopUsers from '../components/home/TopUsers';
import ArticlesHome from '../components/articles/ArticlesHome';
import Banner from '../components/home/Banner';
import Faqs from '../components/home/Faqs';
import clienteAxios from '../config/axios';

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
      <Layout>
        <Banner />
        <ArticlesHome />
        <DebatesHome />
        <TopUsers />
        <div className='violet-divisor'></div>
        <Faqs />
      </Layout>
    </>
  );
}
