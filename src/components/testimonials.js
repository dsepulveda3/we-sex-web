import { Container } from "reactstrap";
import SwiperCore, { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import styled from '@emotion/styled';

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
    // min-height: 85vh;
    margin-top: rem;
    position: relative;
    padding: 20px 10px;
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom:3rem;
    }
`;

const Name = styled.h4`
    font-size: 2.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: center;
    color: var(--white);
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

const Age = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 1.8rem;
    text-align: center;
    margin-top: 0.5rem;
    margin-bottom: 1rem;
    color: white;
    font-style: italic;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        text-align:center;
    }
`;

const Description = styled.p`
    font-family: "Karla", sans-serif;
    text-align: center;
    font-size: 1.8rem;
    margin-top: 0.5rem;
    margin-bottom: 30px;
    color: white;
    // font-style: italic;
    span {
        color: var(--green);
    }
    @media(max-width: 540px){
        font-size: 2rem;
        text-align:center;
    }
`;

const Image = styled.img`
    width: 25%;
    border-radius: 50%;
    text-align: center;
    margin-left: 25px;
    margin-top: 10px;
    margin-bottom: 10px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }

    
`;

const ContainerImage = styled.p`
    text-align: center;
    
    @media(max-width: 540px){

    }
    @media(min-width: 540px){
        
    }

    
`;


const StyledSwiperSlide = styled(SwiperSlide)`
    // Código display, flex y align no se está aplicando descomentado
    // display: flex;
    // flex-direction: column;
    // align-items: center;
  @media (max-width: 540px) {
    margin-left: 6.5rem;
    margin-right: 6.5rem;
  }

  @media (min-width: 540px) {
    margin-left: 49rem;
    margin-right: 51rem;
  }
`;




SwiperCore.use([Pagination]);

const Testimonials = () => {
    return (
        <Background id="testimonials" className="testimonials">
            <Container>
                <Swiper
                className="testimonials-slider"
                data-aos="fade-up"
                data-aos-delay="100"
                pagination={{ clickable: true }}
                
                >
                    <StyledSwiperSlide>
                    <SwiperSlide>
                        
                        <ContainerImage>
                            <Image src= "img/testimonials/testimonials-1.jpg" />
                        </ContainerImage>
                        <Name>Romina</Name>
                        <Age>24 años</Age>
                        <Description>Desde que descargamos la app con mi novio, nuestra sexualidad pasó a otro nivel.</Description>
                        
                    </SwiperSlide>
                    </StyledSwiperSlide>
                    <StyledSwiperSlide>
                    <SwiperSlide >
                        
                        <ContainerImage>
                            <Image src= "img/testimonials/testimonials-6.jpg" />
                        </ContainerImage>
                        <Name>Nadia</Name>
                        <Age>26 años</Age>
                        <Description>Pude conocer y chatear con gente que tenía los mismos gustos sexuales que yo, eso me encantó.</Description>
                        
                    </SwiperSlide>
                    </StyledSwiperSlide>
                </Swiper>
            </Container>
        </Background>
    );
};

export default Testimonials;