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
                <RowPers>
                    <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                        <Card style={{borderRadius: "4rem", marginBottom: "5rem"}}>
                            <img
                                alt="Lic. Cecilia Ce"
                                src="../../img/cecilia-ce-profesional-wesex.jpg"
                                style={{
                                    borderTopLeftRadius: "4rem",
                                    borderTopRightRadius: "4rem"
                                }}
                            />
                            <CardBody>
                                <Name>Lic. Cecilia Ce</Name>
                                <SubTitle>Psicóloga, sexóloga clínica, escritora y comunicadora formada en el Modelo Sistémico.</SubTitle>
                                <Redes>
                                    <a href="https://www.instagram.com/lic.ceciliace" target="_blank">
                                        <img src="../../img/instagram.png" alt="Instagram Logo" />
                                    </a>
                                    <a href="https://www.ceciliace.com" target="_blank">
                                        <img src="../../img/website.png" alt="Website Logo" />
                                    </a>
                                </Redes>
                            </CardBody>
                        </Card>

                    </Col>
                    <Col xl={6} lg={6} md={6} xs={12} sm={12}>
                        <Card style={{borderRadius: "4rem", marginBottom: "5rem"}}>
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
                                    <a href="https://www.instagram.com/sexualidadeslibres/" target="_blank">
                                        <img src="../../img/instagram.png" alt="Instagram Logo" />
                                    </a>
                                    <a href="https://www.sexualidadeslibres.com" target="_blank">
                                        <img src="../../img/website.png" alt="Website Logo" />
                                    </a>
                                </Redes>
                            </CardBody>
                        </Card>
                    </Col>
                </RowPers>
            </Container>
        </Background>
        </section>
    );
}
 
export default Profesionales;