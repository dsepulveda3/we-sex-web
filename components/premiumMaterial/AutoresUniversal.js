import React from 'react';
import {Row, Col, Container, Card, CardBody, CardTitle, CardText} from 'reactstrap';
import styled from '@emotion/styled';
import { useState, useEffect } from 'react';

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

const AutoresUniversal = ({fabiVisibility, ceciliaVisibility, barbaraVisibility, laraVisibility}) => {
  const [FabiIsVisible, setFabiIsVisible] = useState(fabiVisibility);
  const [CeciliaIsVisible, setCeciliaIsVisible] = useState(ceciliaVisibility);
  const [BarbaraIsVisible, setBarbaraIsVisible] = useState(barbaraVisibility);
  const [LaraIsVisible, setLaraIsVisible] = useState(laraVisibility);

  useEffect(() => {
    setFabiIsVisible(fabiVisibility);
    setCeciliaIsVisible(ceciliaVisibility);
    setBarbaraIsVisible(barbaraVisibility);
    setLaraIsVisible(laraVisibility);
  }, [fabiVisibility, ceciliaVisibility, barbaraVisibility, laraVisibility]);

    return (
        <section id="profesional">
          <Background>
            <Container style={{paddingTop: "5rem", paddingBottom: "1rem", textAlign: "center"}}>
              <Title>Autora de la guía</Title>
              <RowPers style={{display: "flex", flexDirection: "row", flexWrap: "wrap", justifyContent: "center"}}>
                
                {FabiIsVisible && (
                  <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
                  <Card style={{borderRadius: "4rem", minHeight: "63.5vh", display: "flex", flexDirection: "column"}}>
                      <img
                          alt="Fabi Villalba"
                          src="/img/premium-material/fabi_villalba2.jpeg"
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
                              <img src="/img/premium-material/instagram (1).png" alt="Instagram Logo" />
                              </a>
                              <a href="https://bio.site/fabivillalba" target="_blank">
                              <img src="/img/premium-material/website.png" alt="Website Logo" />
                              </a>
                          </Redes>
                          </div>
                      </CardBody>
                    </Card>
                  </Col>
                )}

                {CeciliaIsVisible && (
                  <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
                  <Card style={{borderRadius: "4rem", minHeight: "63.5vh", display: "flex", flexDirection: "column"}}>
                    <img
                      alt="Lic. Cecilia Ce"
                      src="/img/premium-material/cecilia-ce-profesional-wesex.jpg"
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
                            <img src="/img/premium-material/instagram (1).png" alt="Instagram Logo" />
                          </a>
                          <a href="https://www.ceciliace.com" target="_blank">
                            <img src="/img/premium-material/website.png" alt="Website Logo" />
                          </a>
                        </Redes>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                )}

                {LaraIsVisible && (
                  <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
                  <Card style={{borderRadius: "4rem", minHeight: "63.5vh", display: "flex", flexDirection: "column"}}>
                    <img
                      alt="Lara"
                      src="/img/premium-material/lara-placer-consentido.jpeg"
                      style={{
                        borderTopLeftRadius: "4rem",
                        borderTopRightRadius: "4rem"
                      }}
                    />
                    <CardBody style={{flexGrow: 1, display: "flex", flexDirection: "column", justifyContent: "flex-end"}}>
                      <Name>Lara Castro-Grañen</Name>
                      <SubTitle>Psicoterapeuta de Pareja, Sexóloga y CEO de Placer ConSentido. .</SubTitle>
                      <div style={{marginTop: "auto"}}>
                        <Redes>
                          <a href="https://instagram.com/placerconsentido?igshid=YTQwZjQ0NmI0OA==" target="_blank">
                            <img src="/img/premium-material/instagram (1).png" alt="Instagram Logo" />
                          </a>
                          <a href="https://www.placerconsentido.com/psicologia-sexologia-y-terapia-de-pareja-online" target="_blank">
                            <img src="/img/premium-material/website.png" alt="Website Logo" />
                          </a>
                        </Redes>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                )}

                {BarbaraIsVisible && (
                  <Col xl={4} lg={4} md={4} xs={12} sm={12} style={{marginBottom: "5rem"}}>
                  <Card style={{borderRadius: "4rem", minHeight: "63.5vh", display: "flex", flexDirection: "column"}}>
                    <img
                      alt="Dra. Bárbara García"
                      src="/img/premium-material/dra-barbara-garcia-profesional-wesex.jpg"
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
                            <img src="/img/premium-material/instagram (1).png" alt="Instagram Logo" />
                          </a>
                          <a href="https://www.sexualidadeslibres.com/" target="_blank">
                            <img src="/img/premium-material/website.png" alt="Website Logo" />
                          </a>
                        </Redes>
                      </div>
                    </CardBody>
                  </Card>
                </Col>
                )}  
                </RowPers>
            </Container>
        </Background>
        </section>
    );
}
 
export default AutoresUniversal;