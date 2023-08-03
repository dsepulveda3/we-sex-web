import React, { useState, useEffect } from 'react';
import OtpInput from 'react-otp-input';
import { 
  ModalContainer, 
  StyledNumberInput, 
  Content, 
  Title, 
  SubTitleText, 
  CenteredText, 
  BotonArs, 
  InputWrapper, 
  SignUpLink,
  Overlay,
} from './codeInputModalStyles';
import { useAuth } from '../../../context/authUserContext';

const CodeInputModal = ({ setModalStatus }) => {
  const [otpValue, setOtpValue] = useState('');
  const { signOutAndClear, submitVerificationCode } = useAuth();

  const handleLogOut = () => {
    signOutAndClear();
    setModalStatus(false);
  };

  useEffect(() => {
    if (otpValue.length === 6) {
      submitVerificationCode(otpValue, setModalStatus);
    }
  }, [otpValue]);

  return (
    <Overlay>
      <ModalContainer>
          <Content>
              <Title>WeSex</Title>
              <SubTitleText>Confirma tu cuenta</SubTitleText>
              <CenteredText>Ingresa el código de 6 dígitos que te enviamos a tu correo</CenteredText>
              <InputWrapper>
                  <OtpInput
                      value={otpValue}
                      onChange={setOtpValue}
                      numInputs={6}
                      renderSeparator={<span style={{ margin: '0 5px' }}></span>}
                      renderInput={(props) => <StyledNumberInput {...props} />}
                  />
              </InputWrapper>
              <BotonArs>Reenviar Correo</BotonArs>
              <SignUpLink onClick={handleLogOut}>Cerrar sesión</SignUpLink>
          </Content>
      </ModalContainer>
    </Overlay>
  );
};

export default CodeInputModal;
