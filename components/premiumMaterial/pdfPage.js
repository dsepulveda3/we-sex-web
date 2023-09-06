import React, { useState, useEffect } from 'react';
import { Document, Page, pdfjs } from 'react-pdf';
import Link from 'next/link';
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
  console.log(pdfItem);
  const pdfUrl = "";
  const containerwd = 1.5;
  const [isPhoneScreen, setIsPhoneScreen] = useState(false);
  const [hideGuide, setHideGuide] = useState(false);
  
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

  
  if (pdfItem === 'guia-anal') {
    pdfUrl = "https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b3f67626bfe72c4ef30/guiasexoanal-WeSex-3_compressed.pdf";
    containerwd = 1.5;
  } 
  else if (pdfItem === 'guia-tantra') {
    pdfUrl = "https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b6167626bfe72c4ef36/Guia de tantra_Orgasmos mas profundos 1_compressed.pdf"
    containerwd = 1.5;
  }
  else if (pdfItem === 'guia-zonas-erogenas') {
    pdfUrl = "https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68b8167626bfe72c4ef3c/Guia de zonas erogenas WeSex_compressed.pdf"
    containerwd = 1.5;
  }
  else if (pdfItem === 'guia-salir-rutina') {
    pdfUrl = "https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64e68cef67626bfe72c4ef48/Guía para salir de la rutina con tu pareja  WeSex_compressed.pdf"
    if (isPhoneScreen) {
      // Execute your function specific to phone screens here
      containerwd = 1.3;
    } else {
      containerwd = 4.4;
    }
  } else if (pdfItem === 'guia-mt'){
    pdfUrl = "https://we-sex-premium.s3.amazonaws.com/guides/pdfs/64f7817a650421f970535baf/Guía Tantra y masturbación Parte 1_compressed.pdf"
    if (isPhoneScreen) {
      // Execute your function specific to phone screens here
      containerwd = 1.3;
    } else {
      containerwd = 4.4;
    }

  }
  const [numPages, setNumPages] = useState(null);
  const [containerWidth, setContainerWidth] = useState(0);
  const [pageHeight, setPageHeight] = useState(0);


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

  return (
    <Background paddingTop={demo? '0': '6rem'} minHeight={demo? '0': '100vh'}>
      <div className="pdf-container">
        <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
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
