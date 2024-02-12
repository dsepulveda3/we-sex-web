import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import { query_premium_guide } from '../../requests/premiumService';
import CircularProgressBar from './Loader';
import styled from '@emotion/styled';

pdfjs.GlobalWorkerOptions.workerSrc = `//cdnjs.cloudflare.com/ajax/libs/pdf.js/${pdfjs.version}/pdf.worker.js`;

const Background = styled.div`
    background-image: url("/img/premium-material/ws-background.jpg");
    background-color: var(--violet);
    background-position: center;
    background-repeat: no-repeat;
    background-attachment: fixed;
    /* min-height: 85vh; */
    // margin-top: .1rem;
    position: relative;
    overflow: hidden;
    min-height: 100vh;
    padding-top: ${props => props.paddingTop || '0'}; // Add a default value if props.paddingTop is not provided
    min-height: ${props => props.minHeight || '0'}; // Add a default value if props.minHeight is not provided


    // @media(max-width: 540px){
    //   // padding-top:6rem;
    //   // padding-bottom:6rem;
    //   // background-attachment: scroll;
    //   // text-align: center;
    //   // min-height: 100vh;
    // }
`;


const PDFViewer = ({pdfItem, demo, setLoaded}) => {
  const [pdfUrl, setPdfUrl] = useState("");
  const containerwd = 1.5;
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);
  const [hideGuide, setHideGuide] = useState(false);
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);
  const [loadProgress, setLoadProgress] = useState(0);


  useEffect(() => {
    setContainerWidth(window.innerWidth);
    const handleResize = () => {
      setContainerWidth(window.innerWidth);
      setPageHeight(window.innerHeight / 2);
    };

    if (typeof window !== 'undefined') {
      setPageHeight(window.innerHeight / 2);
      window.addEventListener('resize', handleResize);
      return () => window.removeEventListener('resize', handleResize);
    }
  }, []);

  const onDocumentLoadSuccess = ({ numPages }) => {
    setNumPages(numPages);
  };
  
  useEffect(() => {
    if (demo === 'true'){
      setHideGuide(true);
    }
  }, [])
  

  useEffect(() => {
    const handleResize = () => {
      const screenWidth = window.innerWidth;
      setIsPhoneScreen(screenWidth < 540); // Adjust the breakpoint as needed
    };

    handleResize(); // Initial check
    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const queryGuide = async () => {
    const response = await query_premium_guide(pdfItem);
    console.log(response);
    if (response.status === 200) {
      setPdfUrl(`https://we-sex-premium.s3.amazonaws.com/${response.data.pdf.key}`);
      console.log(pdfUrl);
    }
  }

  useEffect(() => {
    if (pdfItem === 'guia-anal') {
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b3f67626bfe72c4ef30/guiasexoanal-WeSex-3_compressed.pdf");
      containerwd = 1.5;
    } 
    else if (pdfItem === 'guia-tantra') {
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b6167626bfe72c4ef36/Guia de tantra_Orgasmos mas profundos 1_compressed.pdf");
      containerwd = 1.5;
    }
    else if (pdfItem === 'guia-zonas-erogenas') {
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b8167626bfe72c4ef3c/Guia de zonas erogenas WeSex_compressed.pdf");
      containerwd = 1.5;
    }
    else if (pdfItem === 'guia-salir-rutina') {
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68cef67626bfe72c4ef48/Guía para salir de la rutina con tu pareja  WeSex_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
    } else if (pdfItem === 'guia-mt'){
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64f7817a650421f970535baf/Guía Tantra y masturbación Parte 1_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
    } else if (pdfItem === 'guia-mt2'){
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/65300f3d8fdff02c326f1b83/Gui%CC%81a%20de%20masturbacio%CC%81n%20ta%CC%81ntrica%202%20masajes%20genitales%20nivel%20_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
    } else if (pdfItem === 'guia-meno'){
      setPdfUrl("https://we-sex-premium.s3.amazonaws.com/guides/pdfs/65564615f94d0fa60f7c5d44/WeSex%20-%20Menogui%CC%81a%20Sexulidad&Menopausia%20%20(1)_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
      // Arreglar con link correccto :)
    } else if (pdfItem === 'guia-deseo'){
      setPdfUrl("https://we-sex-premium.s3.us-east-2.amazonaws.com/guides/pdfs/Guia+Deseo+sexual++WeSex-alta_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
    } else if (pdfItem === 'guia-comunicacion'){
      setPdfUrl("https://we-sex-premium.s3.us-east-2.amazonaws.com/guides/pdfs/WeSex++Guia+comunicacio%CC%81n+asertiva_compressed.pdf");
      if (isPhoneScreen) {
        // Execute your function specific to phone screens here
        containerwd = 1.3;
      } else {
        containerwd = 4.4;
      }
    }
    else {
      queryGuide();
    }
  }, [pdfItem])

  return (
    <Background paddingTop={demo? '0': '6rem'} minHeight={demo? '0': '100vh'}>
      <div className="pdf-container">
        <Document 
          file={pdfUrl} 
          onLoadSuccess={onDocumentLoadSuccess} 
          loading={<CircularProgressBar progress={loadProgress} />}
          onLoadProgress={({ loaded, total }) => {
              setLoadProgress(Math.round((loaded / total) * 100));
            }
          }
        >
        <div className="pdf-pages">
          {hideGuide ? (
            Array.from(new Array(numPages || 0), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className={`pdf-page ${index >= 2 ? 'blurry-page' : ''}`}
              >
                <Page
                  pageNumber={index + 1}
                  width={containerWidth / containerwd}
                  height={pageHeight}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  renderInteractiveForms={false}
                  renderMode="canvas"
                />
              </div>
            ))
          ) : (
            Array.from(new Array(numPages || 0), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className={`pdf-page ${index >= 2 ? '' : ''}`}
              >
                <Page
                  pageNumber={index + 1}
                  width={containerWidth / containerwd}
                  height={pageHeight}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  renderInteractiveForms={false}
                  renderMode="canvas"
                />
              </div>
            ))
          )}
        </div>
        </Document>
      </div>

      <style jsx>{`
        .pdf-container {
          max-width: 100%;
          overflow: auto; /* Allow scrolling if content overflows */
          height: 80vh;
          margin-left: 100px;
          margin-right: 100px;
          margin-top: 20px;
          margin-bottom: 20px;
        }

        @media (max-width: 540px) {
          .pdf-container {
            margin: 0; /* Remove margin for smaller screens */
            padding: 20px 0px 0px 0px; /* Remove padding for smaller screens */
            width: 100%; /* Adjust width for smaller screens */
            height: auto; /* Adjust height for smaller screens */
            overflow: visible; /* Adjust overflow for smaller screens */
          }
        }

        .pdf-pages {
          display: flex;
          flex-direction: column;
          align-items: center;
        }

        .pdf-page {
          margin: 10px 0; /* Add margin between pages */
        }

        .blurry-page {
          filter: blur(10px); /* Apply blur to the pages from the 3rd page onward */
        }

        .guide-container {
          margin-top: 20px; /* Add spacing between viewer and guide */
          max-width: 100%;
          display: flex;
          flex-direction: column;
          align-items: center;
          text-align: center;
          /* Add your guide's responsive styles here */
        }

        @media (max-width: 768px) {
          .pdf-container {
            width: 80vw;
            height: 680px;
            overflow-x: auto;
          }

          .guide-container {
            /* Add guide's responsive styles for smaller screens */
          }
        }
      `}</style>
    </Background>
    
  );
};

export default PDFViewer;
