import { Col, Container, Row } from 'reactstrap';
import styled from '@emotion/styled';


const Title = styled.h4`
    font-size: 2.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;
    color: var(--violet);
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
    }
    @media(max-width: 540px){
        margin-bottom: 0.5rem;
        font-size: 2.6rem;
    }
    @media(min-width: 540px){
        margin-bottom: 0.5rem;
    }
`;

const TextSubtitle = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: black;
    font-style: italic;
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

const CheckImage = styled.img`
    width: 7%;
    
    @media(max-width: 540px){
        width: 12%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const CeciliaImage = styled.img`
    width: 85%;
    
    @media(max-width: 540px){
        width: 85%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 1.5rem;
    }

    
`;



const Ceciliace = () => {
  return (
    <section id="about" className="profesionales" style={{padding: "40px 10px", backgroundColor: "#f7f7f7"}}>
      <Container>
      <Row>
          <Col md="4" data-aos="fade-right">
            <CeciliaImage src="img/cecice.jpg" alt="" />
          </Col>

          <Col xl="7" lg="6" className="icon-boxes d-flex flex-column align-items-stretch justify-content-center py-5 px-lg-5" data-aos="fade-left">
            <Title>Aprende de los mejores profesionales</Title>
            <TextSubtitle>Todos los artículos están escritos por la reconocida sexologa Cecilia Ce.</TextSubtitle>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              
              <CheckImage src="img/ico/checksito (1).png" alt="" />
              <div>
                <TextSubtitleCharacteristics>Escritora del libro lider en ventas <span>“Sexo ATR”</span> y <span>“Carnaval toda la vida”</span></TextSubtitleCharacteristics>
              </div>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              <CheckImage src="img/ico/checksito (1).png" alt="" />
              <div>
                <TextSubtitleCharacteristics>Oradora de la charla TED <span>“La ecuacion del sexo”</span></TextSubtitleCharacteristics>
              </div>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              <CheckImage src="img/ico/checksito (1).png" alt="" />
              <div>
                <TextSubtitleCharacteristics>1 millón de seguidores en su instagram: <span>@lic.ceciliace</span></TextSubtitleCharacteristics>
              </div>
            </div>

            <div className="icon-box" data-aos="zoom-in" data-aos-delay="100" style={{ display: "flex", alignItems: "center" }}>
              <CheckImage src="img/ico/checksito (1).png" alt="" />
              <div>
                <TextSubtitleCharacteristics>Creadora de <span>Beer & Sex</span>, un show de educación sexual.</TextSubtitleCharacteristics>
              </div>
            </div>
            
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default Ceciliace;
