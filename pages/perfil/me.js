import React, { useState, useEffect } from 'react';
import Layout from '../../components/general/Layout';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import { useCookies } from 'react-cookie';
import { useAuth } from '../../context/authUserContext';
import { useRouter } from 'next/router';

const ProfileData = styled.div`
  display: flex;
  align-items: center; /* Align items at the top */
  margin: 2rem 0;

  h1,
  p {
    color: var(--violet);
    margin-left: 2rem;
  }
`;

const Information = styled.div`
  color: var(--violet);
  margin-top: 2rem;
  align-items: center;

  h5 {
    font-size: 2.5rem;
    font-weight: bold;
    margin-bottom: 1rem; /* Add margin to the bottom of h5 */
  }

  p {
    font-size: 2rem;
  }
`;

const Content = styled.div`
  position: absolute;
  padding: 8rem;
  background-color: #ebe4f8;
  border-radius: 3rem;
  margin-top: 10rem;
  left: 25%;
`;

const UnsubscribeButton = styled.button`
  background-color: var(--violet);
  border-radius: 20px;
  padding: 1rem;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10rem;
`;

const Title = styled.h2`
  font-size: 3rem;
  color: var(--violet);
  margin-bottom: 2rem;
  align-text: center;

`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
  align-items: center;
`;

const InfoItem = styled.div`
  display: flex;
  background-color: white;
  padding: 0.8rem;
  border-radius: 1rem;
  align-items: center;
  
`;

const InfoFieldName = styled.span`
  color: var(--violet);
  font-weight: bold;
  margin-right: 0.5rem;
  font-family: "Karla", sans-serif;
  font-size: 1.5rem;

  @media(max-width: 540px){
    font-size: 1.5rem;
  }
`;

const InfoFieldValue = styled.span`
  color: var(--violet);
  font-family: "Karla", sans-serif;
  font-size: 1.5rem;

  @media(max-width: 540px){
    font-size: 1.5rem;
  }
`;

const InfoFieldContainer = styled.div`
  display: flex;
  align-items: center; /* Align text vertically in the middle */
`;



const ProfilePicture = styled.img`
  border-radius: 15rem;
  width: 10rem;
  height: 10rem;
  object-fit: cover;
  margin: 1rem;

  @media(max-width: 540px) {
    width: 5rem;
    height: 5rem;
  }
`;

const MainContainer = styled(Container)`
  display: flex;
  flex-direction: column; /* Stack elements vertically */
  align-items: center; /* Center horizontally */
  justify-content: center; /* Center vertically */
  // background-color: #ebe4f8;
  background-color: var(--green);
  width: 550px;
  padding: 3rem;
  margin-top: 15rem;

  @media(min-width: 540px){
    border-radius: 20px;
  }

  @media(max-width: 540px){
    background-attachment: scroll;
    text-align: center;
    padding-bottom: 3rem;
    height: 70vh;
    width: 350px;
    border-radius: 20px;
  }
`;

// Rest of your styled components...

const MyProfile = () => {
  const [cookie, setCookie] = useCookies(['user']);
  const { authUser, loading, isSubscribed } = useAuth();
  const [isSubscribedStatus, setIsSubscribedStatus] = useState(false);
  const [profile, setProfile] = useState(null);

  const router = useRouter();

  const handleCancelSubscription = () => {
    router.push("https://wa.me/5491140678698?text=Hola!%20Quiero%20cancelar%20mi%20suscripción%20a%20WeSex")
  }

  useEffect(() => {
    if (cookie.user) {
      setProfile(cookie.user);
    }
  }, []);

  useEffect(() => {
    if (!loading && authUser) {
      setIsSubscribedStatus(isSubscribed);
    }
  }, [authUser, loading]);

  return (
    <Layout type={'nothidden'}>
      <MainContainer>
      <ProfileData>
              <ProfilePicture
                src={profile?.avatar}
                alt={`Foto de perfil de @${profile?.user}`}
              />
              <div style={{alignItems: "center"}}>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h2 style={{color: "white"}}>{profile?.firstName}</h2>
                  <h2 style={{color: "white"}}>{profile?.lastName}</h2>
                </div>
                <p style={{color: "white"}}>@{profile?.user}</p>
              </div>
            </ProfileData>
        <Information>
          <InfoGrid>
          <InfoItem>
                  <InfoFieldName>EDAD:</InfoFieldName>
                  <InfoFieldValue>{profile?.age}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>EMAIL:</InfoFieldName>
                  <InfoFieldValue>{profile?.email}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>PAÍS:</InfoFieldName>
                  <InfoFieldValue>{profile?.country === 'AR'? 'Argentina': 'Otro'}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>ORIENTACIÓN:</InfoFieldName>
                  <InfoFieldValue>{profile?.sexualOrientation === 'ratherNotSay'? 'Prefiere no decir': profile?.sexualOrientation}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                    <InfoFieldName>ESTADO SUSCRIPCIÓN:</InfoFieldName>
                    <InfoFieldValue>
                      {isSubscribedStatus ? 'Suscrito' : 'No suscrito'}
                    </InfoFieldValue>
                </InfoItem>
                  {isSubscribedStatus && (
                        <UnsubscribeButton onClick={handleCancelSubscription}>Cancelar suscripción</UnsubscribeButton>
                      )}
          </InfoGrid>
        </Information>
      </MainContainer>
    </Layout>
  );
};

export default MyProfile;
