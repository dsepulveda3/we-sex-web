import { Col, Container, Row } from 'reactstrap';
import styled from '@emotion/styled';



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
    }
    @media(min-width: 540px){
        margin-bottom: 1.5rem;
    }
`;

const TextSubtitle = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-top: 1.5rem;
    margin-bottom: 1rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        text-align:left;
    }
`;

const TextTitleCharacteristics = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: black;
    font-weight: bold;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        text-align:left;
    }
`;

const TextSubtitleCharacteristics = styled.p`
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

const AppImage = styled.img`
    width: 10%;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const Community = () => {
  return (
    <section id="community" className="about" style={{padding: "40px 10px"}}>
      <Container>
      <Row>
          <Col md="4" data-aos="fade-right">
            <img src="img/perfil.png" className="img-fluid" alt="" />
          </Col>

          <Col xl="7" lg="6" className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <Title>Forma parte de la comunidad de WeSex</Title>
            <TextSubtitle>El sexo dejó de ser tabú. Si te gusta hablar de sexo, aprender los mejores tips, compartir experiencias o conocer gente, descarga WeSex y forma parte de la comunidad.</TextSubtitle>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              
              <AppImage src="img/ico/trophy (1).png" alt="" />
              <div>
                <TextTitleCharacteristics>Convertite en WeSexer</TextTitleCharacteristics>
                <TextSubtitleCharacteristics>Crea debates, Opina, interactúa con los demás usuarios, sacate todas tus dudas y ayuda a los demás wesexers con las suyas!</TextSubtitleCharacteristics>
              </div>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              <AppImage src="img/ico/book (1).png" alt="" />
              <div>
                <TextTitleCharacteristics>Empápate de conocimiento sexual</TextTitleCharacteristics>
                <TextSubtitleCharacteristics>Técnicas, posiciones, falsas creencias, juguetes, métodos anticonceptivos, anatomía y mucho más de lo que te puedes imaginar. Conecta con tu placer en WeSex.</TextSubtitleCharacteristics>
              </div>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              <AppImage src="img/ico/chatsito (1).png" alt="" />
              <div>
                <TextTitleCharacteristics>Chatea</TextTitleCharacteristics>
                <TextSubtitleCharacteristics>WeSex es el espacio para hablar de sexo. Aprovecha el contexto para hablar con quien quieras de lo que quieras. Para hablar de eso que no te animas a hablar en otro lado.</TextSubtitleCharacteristics>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Community;
