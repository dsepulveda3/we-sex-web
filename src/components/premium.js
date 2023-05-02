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
    margin-top: 5rem;
    margin-right: 3rem;
    margin-left: 3rem;
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

const AppImageGuia = styled.img`
    width: 30%;
    margin-left: 80px;
    margin-top: 80px;
    
    @media(max-width: 540px){
        width: 25%;
        margin-top: 6rem;
        // margin-right: 2rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImageMaster = styled.img`
    width: 30%;
    margin-left: 80px;
    margin-right: 5px;
    margin-top: 70px;   
    
    @media(max-width: 540px){
        width: 25%;
        margin-top: 5rem;
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
    font-size: 3.3rem;
    margin-top: 5rem;
    margin-bottom: 1rem;
    margin-left: 5rem;
    @media(max-width: 540px){
        font-size: 2rem;
        margin-left: 2rem;
    }
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


const Guides = () => {
  return (
    <Section id="guides">
        <Background>
            <Container>
                <Title>Nuestro Material <span>Premium</span></Title>
                <Text>
                    Descripción, descripción descripción descripción descripción .
                </Text>
                <Row data-aos="fade-left">
                <Col lg="3" md="4" >
                <Link href="/guides">
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuia src="img/ico/guide.png" className="img-fluid"/>
                            <h3>Guías</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </Link>
                </Col>
                <Col lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageMaster src="img/ico/webinar.png" className="img-fluid"/>
                            <h3>Masterclasses</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </Col>
            </Row>
                </Container>
      </Background>
    </Section>
  );
};

export default Guides;

