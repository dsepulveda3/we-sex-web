import React, { useState, useEffect } from 'react';
import Head from 'next/head';

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
      <main>
      <div style={{color: "black"}}>Hello</div>
      </main>
    </>
  );
}