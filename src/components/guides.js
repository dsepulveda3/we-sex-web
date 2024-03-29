import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("/img/cta-bg.jpg");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 100vh;
    margin-top: .1rem;
    position: relative;
    padding-top: 10rem;
    

    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;


const GuideSquare = styled.div`
    background-color: white;
    height: 0;
    padding-bottom: 50%;
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    @media(max-width: 540px){
        margin-right: 3rem;
        margin-left: 3rem;
    }
`;

const Title = styled.h1`
    font-size: 5.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 0.85; /* adjust the opacity as needed */
    span {
        color: var(--green);
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        text-decoration: underline;
        text-decoration-color: var(--green);
        text-underline-offset: 1rem; /* ajusta la separación */
        text-decoration-thickness: 0.3rem; /* ajusta el grosor */
    }
    @media(max-width: 540px){
        font-size: 4.5rem;
        margin-bottom:1.5rem;
    }
`;


const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(min-width: 540px){
        // margin-left: 2rem;
        // margin-right: 2rem;
    }
    @media(max-width: 540px){
        font-size: 2rem;
    }
`;

const TextGuide = styled.p`
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        
    }
`;

const ContainerContentGuide = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
`;

const AppImageGuia1 = styled.img`
    width: 60%;
    margin-left: 0px;
    
    @media(max-width: 540px){
        width: 60%;
        margin-top: 1rem;
        // margin-right: 2rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImageGuia2 = styled.img`
    width: 32%;
    margin-left: 40px;
    margin-right: 3rem;
    margin-top: 18px;   
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 2.5rem;
        margin-right: 3rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;


const AppImageGuia3 = styled.img`
    width: 32%;
    margin-left: 40px;
    margin-right: 3rem;
    margin-top: 21px;   
    
    @media(max-width: 540px){
        width: 35%;
        margin-top: 2.5rem;
        margin-right: 3rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;
const AppImageGuiaQuestion = styled.img`
    width: 40%;
    margin-left: 40px;
    margin-right: 5px;
    margin-top: 18px;   
    
    @media(max-width: 540px){
        width: 45%;
        margin-top: 2rem;
        margin-right: 0.5rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const Section = styled.section`
  

  .icon-box {
    
  }

  .icon-box img {
    max-width: 100%;
    transition: all 0.4s;
  }

  .icon-box h3 {
    
    
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.8rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
  }

  .icon-box:hover img {
    transform: scale(1.1);
  }

  .icon-box:hover h3 {
    color: var(--green);
    font-weight: bold;
    transform: scale(1.01);
  }
`;

const ColHideOnPhone = styled(Col)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const StyledH3 = styled.h3`
  font-family: "Karla", sans-serif;
  color: var(--violet);
  text-align: left;
  font-weight: bold;
  font-size: 1.8rem;
  margin-top: 2rem;
  margin-bottom: 1rem;

  span {
    color: var(--violet); /* Default color for the <span> elements */
  }

  &:hover {
    color: var(--green); /* Change the color of the whole <h3> on hover */
    span {
      color: var(--green); /* Change the color of the <span> elements on hover */
    }
  }
`;



const Guides = () => {
  return (
    <Section id="guides">
        <Background>
            <Container>
                <Title>Nuestras <span>guías Premium</span></Title>
                <Text>
                    Páginas de sabiduría sexual para volverte un experto en cada tema.
                </Text>
                <Row data-aos="fade-left">

                <Col lg="3" md="4" >
                <Link href="/premium-material/guides/guia-salir-rutina">
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuia2 src="../img/ico/salir_rutina.png" className="img-fluid"/>
                            <StyledH3>Salir <span>de la</span> rutina <span>con tu</span> pareja</StyledH3>
                        </ContainerContentGuide>
                    </GuideSquare>
                    </Link>
                </Col>

                <Col lg="3" md="4" >
                    <Link href="/premium-material/guides/guia-zonas-erogenas">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImageGuia3 src="../img/ico/2ZonasErogenas (1).png" className="img-fluid"/>
                                <h3>Zonas Erógenas</h3>
                            </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>
                <Col lg="3" md="4" >
                    <Link href="/premium-material/guides/guia-tantra">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImageGuia2 src="../img/ico/Tantra (1).png" className="img-fluid"/>
                                <h3>Tantra</h3>
                            </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>
                <Col lg="3" md="4" >
                <Link href="/premium-material/guides/guia-sexo-anal">
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuia1 src="../img/como-nunca-antes-gozado.png" className="img-fluid"/>
                            <h3>Guía Sexo Anal</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                    </Link>
                </Col>
                {/* <Col lg="3" md="4" >
                    <Link href="/premium-material/guides/guia-zonas-erogenas">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImageGuia2 src="../img/ico/Tantra (1).png" className="img-fluid"/>
                                <h3>Zonas Erogenas</h3>
                            </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col> */}

                {/* <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="../img/ico/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone> */}

                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="../img/ico/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="../img/ico/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="../img/ico/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="../img/ico/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                
            </Row>
                </Container>
      </Background>
    </Section>
  );
};

export default Guides;

