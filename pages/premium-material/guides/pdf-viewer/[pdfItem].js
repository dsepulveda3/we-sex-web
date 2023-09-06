import Head from 'next/head';
import { useRouter } from 'next/router';
import Layout from '../../../../components/general/Layout';
import PDF from '../../../../components/premiumMaterial/pdfPage';

import styled from '@emotion/styled';

const CenteredContainer = styled.div`
  @media (max-width: 768px) {
    background-image: url("/img/premium-material/ws-background.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    min-height: 100vh; /* This ensures the container takes the full viewport height */
    text-align: center; /* Center the content horizontally */
  }
`;


export default function PDFViewer() {
  const router = useRouter();
  const { pdfItem } = router.query; // Access the dynamic parameter
  
  return (
    <>
    <Head>
        <title>PDF - WeSex</title>
        <meta name="description" content="Guide - WeSex" />
        <meta name="keywords" content="" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />

        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png"/>
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png"/>
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png"/>
        <link rel="manifest" href="/img/favicon/site.webmanifest"/>
      </Head>

      <main>
        <Layout>
            <CenteredContainer>
              <PDF pdfItem={pdfItem}/>
            </CenteredContainer>
        </Layout>
      </main>
    </>
  )
}


