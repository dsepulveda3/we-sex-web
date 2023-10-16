import { Col, Container, Row } from 'reactstrap';
import styled from '@emotion/styled';


const Number = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.7rem;
    margin-top: 1.5rem;
    margin-bottom: 0.5rem;
    color: white;
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
    color: white;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 1.7rem;
        text-align:left;
    }
`;

const AppImageMail = styled.img`
    width: 30%;
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

const AppImageWhatsApp = styled.img`
    width: 38%;
    margin-left: 20px;
    
    @media(max-width: 912px){
        width: 35%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        //margin-right: 2rem;
    }
`;

const ContactChannel = styled.a`
    display: flex;
    align-items: center;
    flex-direction: column;
    margin-right: 100px;
    margin-left: 100px;


    
    @media(max-width: 540px){
        margin-top: 20px;
        margin-bottom: 20px;
    }
    @media(min-width: 540px){
       
    }
`;

const Title = styled.h4`
    font-size: 3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;
    // color: var(--violet);
    color: white;
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
    color: white;
    text-align: left;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        margin-left: 1rem;
        
    }
`;

const ContainerTitle = styled.div`
    margin-top: 1rem;
    margin-bottom: 1rem;
    margin-right: 10rem;
    // text-align: left;
    
    @media(max-width: 540px){
        margin-top: 1rem;
        margin-bottom: 1rem;
        
    }
`;

const ContainerContact = styled.div`
    margin-top: 0rem;
    margin-bottom: 0rem;
    margin-right: 0rem;
    // text-align: left;
    
    @media(max-width: 540px){
        margin-top: 0rem;
        margin-bottom: 0rem;
        
    }
`;

const Background = styled.div`

    background-color: var(--violet);
    background-image: url("/img/cta-bg.webp");
    background-position: center;
    -webkit-background-size: cover;
    -moz-background-size: cover;
    -o-background-size: cover;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    // min-height: 85vh;
    margin-top: rem;
    position: relative;
    padding: 30px 0px;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
        margin-bottom: 5rem;
    }
`;



const Contactus = () => {
  return (
    <section id="contact">
    <Background className="about" style={{padding: "30px 0px"}}>
        <Container >
            <Row style={{justifyContent: "center"}}>
                    <Col xl="7" lg="6" className="icon-boxes d-flex flex-column flex-lg-row justify-content-center align-items-center px-lg-5"  >
                        <ContainerTitle >
                            <TextOverTitle>Más cerca tuyo</TextOverTitle>
                            <Title>¿Qué quisieras contarnos?</Title>
                        </ContainerTitle>
                        <ContainerContact>
                            <Col xl="7" lg="6" className="icon-boxes d-flex flex-column flex-lg-row  align-items-center px-lg-5"  >
                                <ContactChannel href="mailto:info@wesex.com.ar">
                                    <AppImageMail src="img/landing/Mail.png" alt="" />
                                    <TextSubtitleCharacteristics>Mail</TextSubtitleCharacteristics>
                                    <Number>info@wesex.com.ar</Number>
                                </ContactChannel>

                                <ContactChannel href="https://wa.me/5491140678698">
                                    <AppImageWhatsApp src="img/landing/Whatsapp.png" alt="" />
                                    <TextSubtitleCharacteristics>Whatsapp</TextSubtitleCharacteristics>
                                    <Number>+5491140678698</Number>
                                </ContactChannel>
                            </Col>
                        </ContainerContact>
                    </Col>
            </Row>
        </Container>
    </Background>
    </section>


  );
};

export default Contactus;