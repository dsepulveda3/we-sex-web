import React, {useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';

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
  z-index: 999; /* Ensure the pop-up is on top of other elements */
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

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;


  @media (min-width: 768px) {
    flex-direction: row;
    align-items: flex-start;
  }
`;

const PopUpImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  max-height: 50vh; 

  @media (max-width: 540px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  margin-top: 20px;

  @media (min-width: 768px) {
    margin-top: 0;
    margin-left: 20px;
    text-align: left;
  }
`;

const PopUpTitle = styled.h4`
    font-size: 4.0rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    color: var(--violet);
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 3rem;
    }
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
`;

const Benefits = styled.div`
  font-size: 1.5rem;
  text-align: left;
`;

const Benefit = styled.div`
  display: flex;
  flex-direction: row;
  text-align: center;
`;

const BenefitItem = styled.ul`
  color: var(--violet);
  font-size: 2rem;
  text-align: center;
  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const PopUpButton = styled.a`
  background-color: var(--green);
  font-weight: bold;
  border-radius: 30px;
  padding: 10px 40px;
  color: white;
  cursor: pointer;
  white-space: nowrap;
  font-size: 2rem;
  margin-top: 20px;

  @media (max-width: 540px) {
    font-size: 1.5rem;
  }
`;

const AppImageChecksito = styled.img`
  width: 10%;
  height: auto;
  margin-right: 2rem;

  @media (max-width: 540px) {
    width: 12%;
    margin-right: 0;
    margin-left: 0;
  }
`;

function PopUpSubscription ({ setShowPopup }) {

    const premiumMaterials = [
        'Guias',
        'Beneficios con marcas asociadas',
        'Webinars QA',
      ];

    return (
        <PopupContainer>
            <PopupDialog>
                <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                <ContentContainer>
                <PopUpImage src="/img/premium-material/salir_rutina.png" alt="Premium Access" />
                <TextContainer>
                    <PopUpTitle>Puedes <span>suscribirte</span> para acceder a todo el material premium</PopUpTitle>
                    <Benefits>
                    {premiumMaterials.map((material, index) => (
                        <Benefit>
                            <AppImageChecksito src="/img/icons/checksito (1).png" className="img-fluid" alt="" />
                            <BenefitItem key={index}>{material}</BenefitItem>
                        </Benefit>
                    ))}
                    </Benefits>
                    <PopUpButton href='/premium-material/subscription'>Subscribirse</PopUpButton>
                </TextContainer>
                </ContentContainer>
            </PopupDialog>
        </PopupContainer>   
    )
}

export default PopUpSubscription;