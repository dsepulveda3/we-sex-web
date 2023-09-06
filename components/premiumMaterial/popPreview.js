import React, {useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import PDFPage from '../../components/premiumMaterial/pdfPage'

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000; /* Ensure the pop-up is on top of other elements */
  @media (max-width: 540px) {
    max-height: 90%;
    
  }
`;

const PopupDialog = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  display: flex; /* Added to create a flex container */
  flex-direction: column; /* Arrange children in a column */
  align-items: center; /* Center children horizontally */
  justify-content: center; /* Center children vertically */
  position: relative; /* Added to position the CloseButton */

  @media (max-width: 768px) {
    max-width: 90%;
    max-height: 90%;
  }

  @media (min-width: 768px) {
    padding: 4rem 4rem;
  }
`;

const ButtonContainer = styled.div`
  position: relative; /* Set the position to relative */
  /* Other styles for your popup container */
`;

const CloseButton = styled.button`
  position: absolute;
  background-color: var(--green); /* Change to your desired green color */
  border: 2px solid white; /* Add a white border */
  border-radius: 50%;
  top: 10px;
  right: 10px;
  font-size: 1.5rem;
  cursor: pointer;
  z-index: 999;
  padding: 2rem;
  color: white; /* Set the text color to white */
  font-weight: bold; /* Make the text bold */
  display: flex;
  align-items: center;
  justify-content: center;
  width: 2.5rem; /* Adjust the width */
  height: 2.5rem; /* Adjust the height */
`;


const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  @media (max-width: 540px) {
    min-width: 400px;
  }


  
`;



function PopUpPrewiew ({ setShowPopup, guideShown }) {
  console.log("guideshowwn");
  console.log(guideShown);

    return (
        <PopupContainer>
            <PopupDialog>
                <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                <ContentContainer>
                  <PDFPage pdfItem={guideShown} demo='true'/>
                </ContentContainer>
            </PopupDialog>
        </PopupContainer>   
    )
}

export default PopUpPrewiew;