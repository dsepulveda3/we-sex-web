import { Col, Container, Row } from 'reactstrap';
import styled from '@emotion/styled';


const Number = styled.p`
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
    margin-bottom: 0rem;
    color: black;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;

const AppImageDownload = styled.img`
    width: 77%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageArticles = styled.img`
    width: 100%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageDebates = styled.img`
    width: 83%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageInstagram = styled.img`
    width: 80%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const Stadistic = styled.div`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 20px;
    margin-left: 20px;

    @media(max-width: 540px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
`;

const Stadistics = () => {
  return (
    <section id="about" className="about" style={{padding: "30px 0px"}}>
        <Container>
        <Row>
            <Col sm="6" md="3" className="icon-boxes d-flex flex-column justify-content-center align-items-center px-lg-5">
                <Stadistic>
                <AppImageDownload src="img/ico/Descargas.png" alt="" />
                <Number>+135.000</Number>
                <TextSubtitleCharacteristics>Usuarios</TextSubtitleCharacteristics>
                </Stadistic>
            </Col>

            <Col sm="6" md="3" className="icon-boxes d-flex flex-column justify-content-center align-items-center px-lg-5">
                <Stadistic>
                <AppImageArticles src="img/ico/Articulos.png" alt="" />
                <Number>+160</Number>
                <TextSubtitleCharacteristics>Articulos</TextSubtitleCharacteristics>
                </Stadistic>
            </Col>

            <Col sm="6" md="3" className="icon-boxes d-flex flex-column justify-content-center align-items-center px-lg-5">
                <Stadistic>
                <AppImageDebates src="img/ico/Debates.png" alt="" />
                <Number>+14.000</Number>
                <TextSubtitleCharacteristics>Debates</TextSubtitleCharacteristics>
                </Stadistic>
            </Col>

            <Col sm="6" md="3" className="icon-boxes d-flex flex-column justify-content-center align-items-center px-lg-5">
                <Stadistic>
                <AppImageInstagram src="img/ico/Instagram.png" alt="" />
                <Number>+43.000</Number>
                <TextSubtitleCharacteristics>Seguidores</TextSubtitleCharacteristics>
                </Stadistic>
            </Col>
        </Row>
    </Container>
    </section>
  );
};

export default Stadistics;