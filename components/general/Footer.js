import React from 'react';
import styled from '@emotion/styled';
import { Row, Col, Container } from 'reactstrap';
import Link from 'next/link';

const Title = styled.p`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 2.5rem;
  padding-bottom: 0;
  border-bottom: 1px solid var(--green);
  width: fit-content;
  margin-bottom: 1rem;
  @media (max-width: 768px) {
    margin-right: auto;
    margin-left: auto;
    margin-top: 2rem;
  }
`;

const WebLink = styled.a`
  font-size: 2rem;
  cursor: pointer;
  transition: all 0.5s ease;
  &:hover {
    font-weight: bold;
  }
`;

const Footer = () => {
  return (
    <>
      <div className='bg-violet py-7 mt-5'>
        <Container>
          <Row>
            <Col xs={12} sm={12} md={12} lg={3}>
              <img
                src='../img/wesex_logo_no_background.png'
                alt='Logo WeSex'
                style={{ maxWidth: '25rem' }}
              />
              <br />
              <a
                href='https://instagram.com/wesexapp'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='../img/icons/instagram.svg'
                  alt='Logo Instagram'
                  style={{
                    maxHeight: '3.5rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.3rem',
                  }}
                />
                @wesexapp
              </a>
              <br />
              <a
                href='https://wa.me/5491140678698'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='../img/icons/whatsapp.svg'
                  alt='Logo Instagram'
                  style={{
                    maxHeight: '3.5rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.3rem',
                  }}
                />
                +54 9 11 4067-8698
              </a>
              <br />
              <a
                href='mailto:matias@we.sex'
                target='_blank'
                rel='noopener noreferrer'
              >
                <img
                  src='../img/icons/email.png'
                  alt='Logo Instagram'
                  style={{
                    maxHeight: '3.5rem',
                    marginRight: '0.5rem',
                    marginBottom: '0.3rem',
                  }}
                />
                matias@we.sex
              </a>
            </Col>

            <Col xs={12} sm={6} md={6} lg={3}>
              <Title>Recomendado</Title>
              <div style={{ display: 'grid' }}>
                <Link href='/articulos?categoria=techniques'>
                  <WebLink>😍 Técnicas</WebLink>
                </Link>
                <Link href='/articulos?categoria=sex-toys'>
                  <WebLink>🧸 Juguetes Sexuales</WebLink>
                </Link>
                <Link href='/debates?categoria=hot'>
                  <WebLink>🔥 Debates Hot</WebLink>
                </Link>
                <Link href='/debates?categoria=fantasy'>
                  <WebLink>💭 Fantasías</WebLink>
                </Link>
                <Link href='/debates?categoria=bizarre'>
                  <WebLink>🐙 Debates bizarros</WebLink>
                </Link>
              </div>
            </Col>
            <Col xs={12} sm={6} md={6} lg={3}>
              <Title>Secciones</Title>
              <div style={{ display: 'grid' }}>
                <Link href='/articulos'>
                  <WebLink>🍑 Artículos</WebLink>
                </Link>
                <Link href='/debates'>
                  <WebLink>😎 Debates</WebLink>
                </Link>
                <Link href='/sexionario'>
                  <WebLink>📖 Sexionario</WebLink>
                </Link>
                <Link href='/sexfaqs'>
                  <WebLink>🧿 SexFaqs</WebLink>
                </Link>
                <Link href='/descargar'>
                  <WebLink>🚀 Descargar App</WebLink>
                </Link>
              </div>
            </Col>

            <Col xs={12} sm={12} md={6} lg={3}>
              <Title>Profesionales</Title>
              <div style={{ display: 'grid' }}>
                <Link href='/perfil/lic.ceciliace'>
                  <WebLink>👅 Lic. Cecilia Ce</WebLink>
                </Link>
                <Link href='/perfil/sexualidadeslibres'>
                  <WebLink>👅 Dra. Bárbara García</WebLink>
                </Link>
                <Link href='/perfil/voicesofbrotherhood'>
                  <WebLink>👅 Ricardo Rivera</WebLink>
                </Link>
                <Link href='/perfil/perezjose'>
                  <WebLink>👅 Josë Perez</WebLink>
                </Link>
              </div>
            </Col>
          </Row>
        </Container>
      </div>
      <div
        style={{
          textAlign: 'center',
          backgroundColor: 'var(--violet)',
          borderTop: 'solid white 1px',
          padding: '.5rem',
        }}
      >
        <Link href='/politicas-de-privacidad'>
          <a>Politicas de Privacidad.</a>
        </Link>
        <Link href='/'>
          <a style={{ marginLeft: '0.5rem' }}>Todos los derechos reservados.</a>
        </Link>
      </div>
    </>
  );
};

export default Footer;
