import React from 'react';
import styled from 'styled-components';

const FloatingContainer = styled.div`
  position: fixed;
  bottom: 20px;
  right: 20px;
  cursor: pointer;
  z-index: 1000;
  display: flex;
  align-items: flex-end;
`;

const WhatsAppIcon = styled.img`
  width: 80px; /* Set the desired width */
  height: 80px; /* Set the desired height */
  border-radius: 50%; /* Make the icon round */
`;

const TextContainer = styled.div`
  background-color: #2aa81a; /* Replace with your desired green color */
  padding: 9px;
  border-top-right-radius: 8px;
  border-bottom-left-radius: 8px;
  font-size: 14px;
  font-family: "Karla", sans-serif;
  font-weight: bold;
  color: white;
  margin-right: 10px; /* Adjust the margin to your preference */
  margin-bottom: 2rem; /* Adjust the margin-bottom for vertical positioning */
`;

const FloatingWhatsApp = () => {
  const handleClick = () => {
    // Redirect to the specified URL when the image is clicked
    window.location.href = 'https://wa.me/5491140678698?text=Hola!%20Quiero%20saber%20más%20sobre%20la%20Cajita%20WeSexer%20😊';
  };

  return (
    <FloatingContainer onClick={handleClick}>
      <TextContainer>Quiero saber más</TextContainer>
      <WhatsAppIcon src="/img/whatsapp_logo.png" alt="WhatsApp" />
    </FloatingContainer>
  );
};

export default FloatingWhatsApp;
