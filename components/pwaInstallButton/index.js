import { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AnimatedArrow from '../AnimatedArrow';

const PopupContainer = styled.div`
  position: fixed;
  top: 0px;
  right: 0px; /* Position the container at the top right corner */
  background-color: var(--violet);
  padding: 10px;
  border-radius: 20px;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
  z-index: 1000;
`;

const Logo = styled.img`
  width: auto;
  height: 50px; /* Adjust the size of your logo */
`;

const ArrowContainer = styled.div`
  position: absolute;
  top: 10px;
  right: 10px;
`;

const DismissButton = styled.button`
  margin-top: 10px;
  cursor: pointer;
  background-color: var(--green);
  color: #fff;
  border: none;
  padding: 8px 16px;
  border-radius: 4px;
  font-size: 14px;
`;

const TextContainer = styled.div`
  white-space: pre-line;
  text-align: center;
`;

const InstructionsList = styled.ol`
  text-align: left;
  margin-top: 10px;
  padding-left: 20px;
`;

const PwaInstallPopup = () => {
  const [showPopup, setShowPopup] = useState(false);

  useEffect(() => {
    const isPwaInstalled = () => {
      return window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone;
    };

    const showInstallPopup = () => {
      if (!isPwaInstalled() && !localStorage.getItem('dismissedPopup')) {
        setShowPopup(true);
      }
    };

    showInstallPopup();
  }, []);

  const handleDismissClick = () => {
    localStorage.setItem('dismissedPopup', 'true');
    setShowPopup(false);
  };

  return (
    <>
      {showPopup && (
        <PopupContainer>
          <ArrowContainer>
            <AnimatedArrow />
          </ArrowContainer>
          <Logo src="/img/wesex_logo_no_background.png" alt="WeSex Logo" />
          <TextContainer>
            <p>¡Gracias por usar WeSex!</p>
            <p>Instala la aplicación para una mejor experiencia 💚</p>
          </TextContainer>
          <InstructionsList>
            <li>Presiona &rdquo;instalar app&rdquo; o &rdquo;agregar a inicio&rdquo; en el menú de tu navegador.</li>
            <li>Sigue las instrucciones de instalación.</li>
            <li>¡Disfruta de tus desafíos de pareja!</li>
          </InstructionsList>
          <DismissButton onClick={handleDismissClick}>Más tarde</DismissButton>
        </PopupContainer>
      )}
    </>
  );
};

export default PwaInstallPopup;
