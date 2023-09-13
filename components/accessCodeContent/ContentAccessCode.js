import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import AccessCodeInput from './AccessCodeInput';
import AccessCodeLoginRequired from './AccessCodeLoginRequired';
import { useAuth } from '../../context/authUserContext';


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
  max-width: 50%;
  max-height: 50vh; 
  align-item: center;

  @media (max-width: 540px) {
    width: 40%;
  }

  @media (min-width: 768px) {
    width: 20%;
  }
`;

function ContentAccessCode () {
    const [isLogged, setIsLogged] = useState(false);
    const { authUser, loading } = useAuth();

    useEffect(() => {
      if (authUser){
        setIsLogged(true);
      }
    }, [authUser, loading])



    return (
        <ContentContainer>
          <PopUpImage src="/img/premium-material/subscription_image_2.png" alt="Premium Access" />
          {!isLogged && (<AccessCodeLoginRequired />)}
          {isLogged && (<AccessCodeInput />)}
        </ContentContainer>
    )
}

export default ContentAccessCode;