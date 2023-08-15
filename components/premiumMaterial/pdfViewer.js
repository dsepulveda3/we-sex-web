import React from 'react';
import { Document, Page } from 'react-pdf-js';

const CustomPDFViewer = ({ pdfUrl }) => {
  return (
    <div>
      <Document file={pdfUrl}>
        <Page pageNumber={1} />
      </Document>
    </div>
  );
};

export default CustomPDFViewer;
