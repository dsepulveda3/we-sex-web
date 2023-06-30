import React from 'react';
import {Row, Col, Container, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import styled from '@emotion/styled';

const Background = styled.div`
    background-color: #f5f5f5;
`;

const Title = styled.h4`
    font-size: 4.0rem;
    font-family: "Averia Libre", sans-serif;
    color: var(--violet);
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 4rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    color: var(--violet);
`;

const Name = styled(Text)`
    font-weight: bold;
    font-size: 2.2rem;
    @media(min-width: 540px){
        font-size: 3rem;
    }
`;
const SubTitle = styled(Text)`
    font-size: 1.8rem;
    @media(min-width: 540px){
        font-size: 2rem;
    }
`;

const RowPers = styled(Row)`
    margin-top: 3.7rem;
    @media(min-width: 768px){
        margin: 5rem auto;
        margin-top: 5rem;
        max-width: 80rem; 
    }
`;

const Redes = styled.div`
    img {
        max-width: 3rem;
        margin: .5rem; 
    }
`;


const Profesionales = () => {
    return (
        <section id="profesional">
<Background>
  <Container style={{paddingTop: "5rem", paddingBottom: "1rem", textAlign: "center"}}>
    <Title>Profesionales detrás de WeSex</Title>
    <RowPers style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
      <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
        <Card style={{borderRadius: "4rem", minHeight: "60vh", display: "flex", flexDirection: "column"}}>
            <img
                alt="Fabi Villalba"
                src="../../img/fabi_villalba2.jpeg"
                style={{
                borderTopLeftRadius: "4rem",
                borderTopRightRadius: "4rem"
                }}
            />
            <CardBody style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                <Name>Fabi Villalba</Name>
                <SubTitle>Profesora, investigadora y divulgadora de Tantra.</SubTitle>
                <div style={{marginTop: "auto"}}>
                <Redes>
                    <a href="https://www.instagram.com/fabivillalba.tantra/" target="_blank">
                    <img src="../../img/instagram.png" alt="Instagram Logo" />
                    </a>
                    <a href="https://bio.site/fabivillalba" target="_blank">
                    <img src="../../img/website.png" alt="Website Logo" />
                    </a>
                </Redes>
                </div>
            </CardBody>
         </Card>
      </Col>

      <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
        <Card style={{borderRadius: "4rem", minHeight: "60vh", display: "flex", flexDirection: "column"}}>
          <img
            alt="Lic. Cecilia Ce"
            src="../../img/cecilia-ce-profesional-wesex.jpg"
            style={{
              borderTopLeftRadius: "4rem",
              borderTopRightRadius: "4rem"
            }}
          />
          <CardBody style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            <Name>Lic. Cecilia Ce</Name>
            <SubTitle>Psicóloga, sexóloga clínica, escritora y comunicadora formada en el Modelo Sistémico.</SubTitle>
            <div style={{marginTop: "auto"}}>
              <Redes>
                <a href="https://www.instagram.com/lic.ceciliace" target="_blank">
                  <img src="../../img/instagram.png" alt="Instagram Logo" />
                </a>
                <a href="https://www.ceciliace.com" target="_blank">
                  <img src="../../img/website.png" alt="Website Logo" />
                </a>
              </Redes>
            </div>
          </CardBody>
        </Card>
      </Col>

      <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
        <Card style={{borderRadius: "4rem", minHeight: "60vh", display: "flex", flexDirection: "column"}}>
          <img
            alt="Dra. Bárbara García"
            src="../../img/dra-barbara-garcia-profesional-wesex.jpg"
            style={{
              borderTopLeftRadius: "4rem",
              borderTopRightRadius: "4rem"
            }}
          />
          <CardBody style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
            <Name>Dra. Bárbara García</Name>
            <SubTitle>Médica Ginecóloga, Obstetra, Especialista en Sexualidad Humana.</SubTitle>
            <div style={{marginTop: "auto"}}>
              <Redes>
                <a href="https://www.instagram.com/docbarbaragarcia/" target="_blank">
                  <img src="../../img/instagram.png" alt="Instagram Logo" />
                </a>
                <a href="https://www.sexualidadeslibres.com/" target="_blank">
                  <img src="../../img/website.png" alt="Website Logo" />
                </a>
              </Redes>
            </div>
          </CardBody>
        </Card>
      </Col>


      {/* <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
        <Card style={{borderRadius: "4rem"}}>
          <img
            alt="Dra. Bárbara García"
            src="../../img/dra-barbara-garcia-profesional-wesex.jpg"
            style={{
              borderTopLeftRadius: "4rem",
              borderTopRightRadius: "4rem"
            }}
          />
          <CardBody>
            <CardTitle>
              <Name>Dra. Bárbara García</Name>
            </CardTitle>
            <CardText>
              <SubTitle>Médica Ginecóloga, Obstetra, Especialista en Sexualidad Humana.</SubTitle>
            </CardText>
            <Redes>
            </Card>
      </Col> */}
        
                </RowPers>
            </Container>
        </Background>
        </section>
    );
}
 
export default Profesionales;