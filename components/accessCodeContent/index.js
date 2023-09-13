import React from 'react';
import styled from '@emotion/styled';
import ContentAccessCode from './ContentAccessCode';

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: url("/img/landing/cta-bg.jpg");
  display: flex;
  justify-content: center;
  align-items: center;
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

function AccessCodeContent () {
    return (
        <PopupContainer>
            <PopupDialog>
              <ContentAccessCode />
            </PopupDialog>
        </PopupContainer>   
    )
}

export default AccessCodeContent;