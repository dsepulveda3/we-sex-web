import React, { useState, useEffect } from 'react';
import Head from 'next/head';
import Image from 'next/image';
import Layout from '../../components/general/Layout';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import clienteAxios from '../../config/axios';

const ProfilePicture = styled.img`
  border-radius: 15rem;
  width: 10rem !important;
  height: 10rem !important;
  object-fit: cover;
`;
const ProfileData = styled.div`
  display: flex;
  align-items: center;
  margin: 2rem 0;
  h1,
  p {
    color: var(--violet);
    margin-left: 2rem;
  }
`;

const Information = styled.div`
  color: var(--violet);
  p {
    font-size: 2rem;
  }
  h5 {
    font-size: 2.5rem;
    font-weight: bold;
  }
`;

const Perfil = () => {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    const currentUrl = window.location.pathname.split('/')[2];
    if (typeof window !== 'undefined') {
      getProfile(currentUrl);
    }
  }, []);
  

  async function getProfile(user) {
    await clienteAxios.get(`/users/public/${user}`).then((response) => {
      setProfile(response.data[0]);
    });
  }

  return (
    <Layout>
      <Container>
        <Row>
          <Col>
            <ProfileData>
              <ProfilePicture
                src={profile?.avatar}
                alt={`Foto de perfil de @${profile?.user}`}
              />
              <div>
                <div style={{ display: 'flex' }}>
                  <h1>{profile?.firstName}</h1>
                  <h1>{profile?.lastName}</h1>
                </div>
                <p>@{profile?.user}</p>
              </div>
            </ProfileData>
            <Information>
              <h5>Información</h5>
              <p>
                {profile?.aboutMe
                  ? profile.aboutMe
                  : 'No hay información sobre este usuario'}
              </p>
            </Information>
          </Col>
        </Row>
      </Container>
    </Layout>
  );
};

export default Perfil;
