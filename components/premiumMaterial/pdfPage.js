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
    margin-top: .1rem;
    position: relative;
    padding-top:6rem;
    padding-bottom:6rem;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
    }
`;


const PDFViewer = () => {
  const pdfUrl = '/pdf/guia-anal.pdf';
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
    <Background>
      <div className="pdf-container">
        Hello
        {/* <Document file={pdfUrl} onLoadSuccess={onDocumentLoadSuccess}>
          <div className="pdf-pages">
            {Array.from(new Array(numPages || 0), (_, index) => (
              <div
                key={`page_${index + 1}`}
                className={`pdf-page ${index >= 2 ? 'blurry-page' : ''}`}
              >
                <Page
                  pageNumber={index + 1}
                  width={containerWidth / 1.5}
                  height={pageHeight}
                  renderTextLayer={false}
                  renderAnnotationLayer={false}
                  renderInteractiveForms={false}
                  renderMode="canvas"
                />
              </div>
            ))}
          </div>
        </Document> */}
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
            margin-left: 0px;
            margin-right: 0px;
            margin-top: 0px;
            margin-bottom: 0px;
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
            width: 100%;
            height: 300px;
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
