import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';
import Link from 'next/link';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("/img/landing/cta-bg.jpg");
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
    font-size: 1.6rem;
    margin-top: 4rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-top: 7rem;
    }
`;

const TextGuide2 = styled.p`
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.6rem;
    margin-top: 5.5rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-top: 7rem;
    }
`;

const TextPack = styled.p`
    font-family: "Karla", sans-serif;
    color: var(--violet);
    text-align: left;
    font-weight: bold;
    font-size: 1.6rem;
    margin-top: 5.5rem;
    margin-bottom: 1rem;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.8rem;
        margin-top: 7rem;
    }
`;

const ContainerContentGuide = styled.div`
    display: flex;
    align-items: center;
    padding-right: 2rem;
    span {
        color: var(--green);
    }
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

const AppImageGiftBox = styled.img`
    width: 43%;
    padding-left: 3.5rem;
    padding-right: 2rem;
    padding-top: 2.5rem;
    
    @media(max-width: 540px){
        width: 42%;
        margin-top: 3rem;
        // margin-right: 2rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImageGiftBox2 = styled.img`
    width: 43%;
    padding-left: 3.5rem;
    padding-right: 2rem;
    padding-top: 3.8rem;
    
    @media(max-width: 540px){
        width: 42%;
        margin-top: 1rem;
        // margin-right: 2rem;
        // margin-left: 2rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImagePack = styled.img`
    width: 43%;
    padding-left: 3.5rem;
    padding-right: 2rem;
    padding-top: 4.0rem;
    
    @media(max-width: 540px){
        width: 42%;
        margin-top: 1rem;
        // margin-right: 2rem;
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
    
`;

const ColHideOnPhone = styled(Col)`
  @media (max-width: 767px) {
    display: none;
  }
`;

// {}

const Packs = () => {

  return (
    <Section id="guides">
        <Background>
            <Container>
                <Title>Nuestros <span>Packs Orgásmicos</span></Title>
                <Text>
                    Páginas de sabiduría sexual para volverte un experto en el tema y poder aplicarlo en tu vida sexual.
                </Text>
                <Row data-aos="fade-left">

                <Col lg="3" md="4" >
                    <Link href="/premium-material/packs/pack6-rutina-zonas-tantra-anal">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImagePack src="/img/premium-material/giftbox.png" className="img-fluid"/>
                                <TextPack>Pack <span>Premium</span> 3 x 4</TextPack>
                             </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>
                    
                <Col lg="3" md="4" >
                    <Link href="/premium-material/packs/pack5-rutina-zonas">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImagePack src="/img/premium-material/giftbox.png" className="img-fluid"/>
                                <TextPack>Pack <span>Explorador</span></TextPack>
                             </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>

                <Col lg="3" md="4" >
                    <Link href="/premium-material/packs/pack1">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImagePack src="/img/premium-material/giftbox.png" className="img-fluid"/>
                                {/* <TextGuide>Guía <span>Zonas Erógenas</span> + <span>Anal</span> + <span>Tantra</span></TextGuide> */}
                                <TextPack>Pack <span>Experto</span> 2 x 3</TextPack>
                             </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>
                <Col lg="3" md="4" >
                    <Link href="/premium-material/packs/pack2">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImagePack src="/img/premium-material/giftbox.png" className="img-fluid"/>
                                {/* <TextGuide2 >Guía <span>Zonas Erógenas</span> + <span>Tantra</span></TextGuide2> */}
                                <TextPack>Pack <span>Placer</span></TextPack>
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
                <Col lg="3" md="4" >
                    <Link href="/premium-material/packs/pack3">
                        <GuideSquare>
                            <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                                <AppImageGiftBox src="/img/premium-material/giftbox.png" className="img-fluid"/>
                                <TextGuide>Guía <span>Zonas Erógenas</span> + Masterclass <span>Barbi</span></TextGuide>
                             </ContainerContentGuide>
                        </GuideSquare>
                    </Link>
                </Col>

                {/* <ColHideOnPhone lg="3" md="4" >
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
                </ColHideOnPhone> */}

                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="/img/premium-material/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="/img/premium-material/question-mark-draw.png" className="img-fluid"/>
                            <h3>Pronto</h3>
                        </ContainerContentGuide>
                    </GuideSquare>
                </ColHideOnPhone>
                <ColHideOnPhone lg="3" md="4" >
                    <GuideSquare>
                        <ContainerContentGuide className="icon-box" data-aos="zoom-in" data-aos-delay="50">
                            <AppImageGuiaQuestion src="/img/premium-material/question-mark-draw.png" className="img-fluid"/>
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

export default Packs;