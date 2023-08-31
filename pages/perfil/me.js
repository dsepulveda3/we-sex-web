import React, { useState, useEffect } from 'react';
import Layout from '../../components/general/Layout';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import { useCookies } from 'react-cookie';
import { useAuth } from '../../context/authUserContext';

const ProfilePicture = styled.img`
  border-radius: 15rem;
  width: 10rem !important;
  height: 10rem !important;
  object-fit: cover;
`;

export const MainContainer = styled(Container)`
    display: flex;
    align-items: center;
    // justify-content: center;
    background-color: #ebe4f8;
    width: 550px;
    // height: 690px;
    padding: 5rem 5rem 5rem 5rem;
    margin-top: 8rem;

    @media(min-width: 540px){
        border-radius: 20px;
    }

    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
        height: 130vh;
    }
`;

const ProfileData = styled.div`
  display: flex;
  align-items: flex-start; /* Align items at the top */
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
  background-color: red;
  color: white;
  border: none;
  cursor: pointer;
  margin-left: 10rem;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  color: var(--violet);
  margin-bottom: 2rem;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 2rem;
`;

const InfoItem = styled.div`
  display: flex;
`;

const InfoFieldName = styled.span`
  color: var(--violet);
  font-weight: bold;
  margin-right: 0.5rem;
`;

const InfoFieldValue = styled.span`
  color: var(--violet);
`;

const InfoFieldContainer = styled.div`
  display: flex;
  align-items: center; /* Align text vertically in the middle */
`;

const MyProfile = () => {
  const [cookie, setCookie] = useCookies(['user']);
  const { authUser, loading, isSubscribed } = useAuth();
  const [isSubscribedStatus, setIsSubscribedStatus] = useState(false);
  const [profile, setProfile] = useState(null);

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
        <Row>
          <Col>
            <Title>Tu perfil</Title>
            <ProfileData>
              <ProfilePicture
                src={profile?.avatar}
                alt={`Foto de perfil de @${profile?.user}`}
              />
              <div>
                <div style={{ display: 'flex', alignItems: 'center' }}>
                  <h1>{profile?.firstName}</h1>
                  <h1>{profile?.lastName}</h1>
                </div>
                <p>@{profile?.user}</p>
              </div>
            </ProfileData>
            <Information>
              <h5>Información</h5>
              <InfoGrid>
                <InfoItem>
                  <InfoFieldName>Edad:</InfoFieldName>
                  <InfoFieldValue>{profile?.age}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>Email:</InfoFieldName>
                  <InfoFieldValue>{profile?.email}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>Pais:</InfoFieldName>
                  <InfoFieldValue>{profile?.country === 'AR'? 'Argentina': 'Otro'}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                  <InfoFieldName>Orientación sexual:</InfoFieldName>
                  <InfoFieldValue>{profile?.sexualOrientation === 'ratherNotSay'? 'Prefiere no decir': profile?.sexualOrientation}</InfoFieldValue>
                </InfoItem>
                <InfoItem>
                    <InfoFieldName>Estado de subscripción:</InfoFieldName>
                    <InfoFieldValue>
                      {isSubscribedStatus ? 'Suscrito' : 'No suscrito'}
                    </InfoFieldValue>
                </InfoItem>
                  {isSubscribedStatus && (
                        <UnsubscribeButton>Cancelar subscripción</UnsubscribeButton>
                      )}
              </InfoGrid>
            </Information>
          </Col>
        </Row>
      </MainContainer>
    </Layout>
  );
};

export default MyProfile;