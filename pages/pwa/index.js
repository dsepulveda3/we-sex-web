import styled from '@emotion/styled';
import { useRouter } from 'next/router';
import React, { useEffect, useState } from 'react';
import { get_couple } from '../../requests/premiumService';
import { toast } from 'react-toastify';

const PageContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  background-color: var(--violet);
`;

const Logo = styled.img`
  width: 200px; 
  height: auto;
  margin-bottom: 20px;
`;

const WelcomeMessage = styled.h1`
  font-size: 24px;
  margin-bottom: 10px;
  color: var(--green);
`;

const InputContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const CoupleNameInput = styled.input`
  padding: 8px;
  margin-top: 10px;
  font-size: 16px;
  border-radius: 20px;
  margin-bottom: 10px;
`;

const LabelCoupleName = styled.label`
  font-size: 20px;
  margin-top: 10px;
  margin-bottom: 10px;
`;

const Button = styled.button`
  padding: 8px 16px;
  opacity: ${props => props.disabled ? '0.5' : '1'};
  background: var(--green);
  color: #fff;
  border: none;
  cursor: pointer;
  border-radius: 20px;
`;

const PwaEntryPoint = () => {
  const router = useRouter();
  const [coupleName, setCoupleName] = useState('');

  useEffect(() => {
    const savedCoupleName = localStorage.getItem('coupleName');
    if (window.matchMedia('(display-mode: standalone)').matches || window.navigator.standalone) {
      localStorage.setItem('isPwaInstalled', true);
    }
    if (savedCoupleName) {
      toast.success('Bienvenidos de vuelta');
      router.push(`/premium-material/desafios-para-parejas/road?origin=${savedCoupleName}`);
    }
  }, []);

  const handleCoupleName = () => {
    get_couple(coupleName)
      .then((res) => {
        router.push(`/premium-material/desafios-para-parejas/road?origin=${coupleName}`);
        toast.success('Bienvenidos de vuelta');
      })
      .catch((err) => {
        console.log(err);
        toast.error('No se encontró la pareja');
      });
  }

  return (
    <PageContainer>
      <Logo src="/img/wesex_logo_no_background.png" alt="Company Logo" />
      <WelcomeMessage>Gracias por instalar la app de WeSex Couples</WelcomeMessage>
      <InputContainer>
        <LabelCoupleName htmlFor="coupleName">Ingresa el nombre de tu pareja:</LabelCoupleName>
        <CoupleNameInput type="text" id="coupleName" name="coupleName" value={coupleName} onChange={(e) => setCoupleName(e.target.value)} />
        <Button onClick={handleCoupleName} disabled={coupleName === ''}>Entrar</Button>
      </InputContainer>
    </PageContainer>
  );
};

export default PwaEntryPoint;
