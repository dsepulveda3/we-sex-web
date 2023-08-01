import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import { Container, Row, Col } from 'reactstrap';
import { useRouter } from 'next/router';
import Layout from '../components/general/Layout';
import SurveysHorizontal from '../components/surveys/surveysHorizontal'
import DebatesHorizontal from '../components/debates/DebatesHorizontal'
import ArticlesHorizontal from '../components/articles/ArticlesHorizontal'



export default function Home() {

  return (
    <>
      <Head>
        <title>
          {'Inicio | WeSex - La app para hablar y aprender de sexo'}
        </title>
        <meta name='description' content={''} />
        <meta name='keywords' content={''} />
      </Head>
      <Layout>
        <SurveysHorizontal />
        <ArticlesHorizontal />
        <DebatesHorizontal />
        

        
      </Layout>
    </>
  );
}