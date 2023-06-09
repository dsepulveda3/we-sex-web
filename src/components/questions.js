import { useState } from 'react';
import { Card, CardBody, CardHeader, Collapse, Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';

const AppImageDudasFrecuentes = styled.img`
    width: 5%;
    margin-left: 20px;
    margin-top: 0px;
    
    @media(max-width: 540px){
        width: 7%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const TitleQuestion = styled.h4`
    font-size: 1.5rem;
    font-family: "Karla", sans-serif;
    text-align: left;
    color: black;
    font-weight: bold;
    margin-top: 10px;
    
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1rem;
        font-size: 2rem;
    }
    @media(min-width: 540px){
        margin-bottom: 1rem;
    }
`;

const Title = styled.h4`
    font-size: 3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;
    color: var(--violet);
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom:1.5rem;
        font-size: 3.5rem;
        margin-left: 1rem;
    }
    @media(min-width: 540px){
        margin-bottom: 2rem;
    }
`;

const TextOverTitle = styled.h4`
    font-family: "Averia Libre", sans-serif;
    font-size: 1.5rem;
    margin-top: 1rem;
    margin-bottom: 1rem;
    color: black;
    text-align: left;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        margin-left: 1rem;
        
    }
`;

const AnswerQuestion = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.5rem;
    margin-top: 0.8rem;
    margin-bottom: 1rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;



const TarjetaDesplegable = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isOpen1, setIsOpen1] = useState(false);
  const [isOpen2, setIsOpen2] = useState(false);
  const [isOpen3, setIsOpen3] = useState(false);
  const [isOpen4, setIsOpen4] = useState(false);
  const [isOpen5, setIsOpen5] = useState(false);

  const toggle = () => setIsOpen(!isOpen);
  const toggle1 = () => setIsOpen1(!isOpen1);
  const toggle2 = () => setIsOpen2(!isOpen2);
  const toggle3 = () => setIsOpen3(!isOpen3);
  const toggle4 = () => setIsOpen4(!isOpen4);
  const toggle5 = () => setIsOpen5(!isOpen5);

  return (
    <section id="questions">
    <Container style={{padding: "30px"}}>
        <TextOverTitle>FAQ</TextOverTitle>
        <Title>Dudas frequentes</Title>
        <Row data-aos="fade-left">
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Es gratis usar WeSex?</TitleQuestion>
                    </div>
                    <i className={isOpen ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen}>
                        <CardBody>
                            <AnswerQuestion>Si! Queremos que todxs puedan recibir una educación sexual práctica, confiable y gratuita! De una manera fácil y divertida ;)</AnswerQuestion>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle1} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Y si no quiero mostrar mi identidad al crear debates?</TitleQuestion>
                    </div>
                    <i className={isOpen1 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen1}>
                        <CardBody>
                            <AnswerQuestion>¡No te preocupes! Sabemos que el sexo aveces puede dar un poco de pudor, por eso creamos la opcion  “modo anonimo” para crear debates!</AnswerQuestion>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle2} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Qué hago si ante comentarios inapropiados de otros?</TitleQuestion>
                    </div>
                    <i className={isOpen2 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen2}>
                    <CardBody>
                        <AnswerQuestion>Manteniendo apretado el comentario podrás reportarlo! Una vez que lo reportes, el equipo de WeSex podrá revisarlo y en caso de ser necesario, eliminarlo. Ante todo, queremos que WeSex sea una comunidad saludable y constructiva.</AnswerQuestion>
                    </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle3} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Cómo puedo bloquear a un usuario?</TitleQuestion>
                    </div>
                    <i className={isOpen3 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen3}>
                        <CardBody>
                            <AnswerQuestion>Si deseas que un usuario no pueda enviarte más mensajes directos a tu casilla de chat, puedes bloquearlo, entrando a su perfil y tocando el botón “(!)” en la esquina superior derecha.</AnswerQuestion>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle4} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Por qué WeSex es una app para el celular?</TitleQuestion>
                    </div>
                    <i className={isOpen4 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen4}>
                        <CardBody>
                            <AnswerQuestion style={{color: "black"}}>Porque queremos brindar educación sexual al alcance de tu mano. Estes donde estes, podes chequear todas tus dudas sexuales en WeSex.</AnswerQuestion>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
            <Col xs="12" lg="6" md="3">
                <Card style={{margin:"10px 10px 10px 10px"}}>
                    <CardHeader onClick={toggle5} style={{backgroundColor: "white "}}>
                    <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                        <AppImageDudasFrecuentes src="img/ico/Dudas_frecuentes.png" className="img-fluid" alt="" />
                        <TitleQuestion>¿Qué es ser un WeSexer?</TitleQuestion>
                    </div>
                    <i className={isOpen5 ? 'bx bx-chevron-up icon-close' : 'bx bx-chevron-down icon-show'}></i>
                    </CardHeader>
                    <Collapse isOpen={isOpen5}>
                        <CardBody>
                            <AnswerQuestion style={{color: "black"}}>Tú eres un WeSexer! Somos Wesexers quienes nos sentimos parte de la comunidad de WeSex. Quienes creemos que el sexo no es tabu. Queremos aprender, compartir y disfrutar de una sexualidad libre. Con más amor, diversidad y empatía.</AnswerQuestion>
                        </CardBody>
                    </Collapse>
                </Card>
            </Col>
        </Row>
    </Container>
    </section>
  );
};

export default TarjetaDesplegable;