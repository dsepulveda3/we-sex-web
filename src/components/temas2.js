import { Container, Row, Col } from 'reactstrap';
import styled from '@emotion/styled';

const FeaturesSection = styled.section`
  padding: 40px 0;
  background-color: #f7f7f7;

  h2 {
    font-size: 28px;
    font-weight: 700;
    margin-bottom: 20px;
    text-align: center;
  }

  p {
    font-size: 15px;
    font-weight: 500;
    margin-bottom: 0;
    text-align: center;
  }

  .icon-box {
    background-color: #fff;
    padding: 20px;
    border-radius: 4px;
    box-shadow: 0 0 30px rgba(0, 0, 0, 0.1);
    margin-bottom: 20px;
    position: relative;
    overflow: hidden;
    color: var(--violet);
  }

  .icon-box img {
    max-width: 100%;
    transition: all 0.4s;
  }

  .icon-box h3 {
    font-size: 18px;
    font-weight: 600;
    margin: 10px 0;
    transition: all 0.4s;
    text-align: center;
  }

  .icon-box:hover img {
    transform: scale(1.1);
  }

  .icon-box:hover h3 {
    color: var(--violet);
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
    }
    @media(min-width: 540px){
        margin-bottom: 3rem;
    }
`;

const Text = styled.p`
    font-family: "Karla", sans-serif;
    color: violet;
    font-size: 2.2rem;
    text-align:center;
    margin-bottom: 1.5rem;
    padding: .5rem 1rem;
    /* vertical-align: middle; */

    transition: all 1s ease;

    /* SWIPER */
    border: 2px solid white;
    border-radius: 5rem;
    padding: 2rem;
     
    &:hover {
        background-color: white;
        color: var(--violet);
    }
    
    span {
        color: var(--green);
        font-weight: bold;
    }
    @media(max-width: 540px){
        margin-bottom: 1rem;
        font-size: 2rem;
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
    }
`;

const AppImageHot = styled.img`
    width: 22%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageGustos = styled.img`
    width: 20.6%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageFantasias = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageDudas = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageJuegos = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageRelaciones = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageHabitos = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageBizarro = styled.img`
    width: 19.7%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;
const AppImagePrimera = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageLevante = styled.img`
    width: 20.9%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageSOS = styled.img`
    width: 20.8%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const AppImageOtros = styled.img`
    width: 21.5%;
    margin-left: 20px;
    
    @media(max-width: 540px){
        width: 15%;
        margin-right: 2rem;
        margin-left: 2rem;
    }
    @media(min-width: 540px){
        margin-right: 2rem;
    }
`;

const ColHideOnPhone = styled(Col)`
  @media (max-width: 767px) {
    display: none;
  }
`;

const Features = () => {
  return (
    <FeaturesSection id="features">
      <Container>
        {/* <div className="section-title" data-aos="fade-up">
          <h2>Compartí los temas que más te interesan</h2>
          <p>¿De qué se habla en WeSex?</p>
        </div> */}
        <TextOverTitle>Compartí los temas que más te interesan</TextOverTitle>
        <Title>¿De qué se habla en WeSex?</Title>

        <Row data-aos="fade-left">
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageHot src="img/ico/Hot.png" className="img-fluid" alt="" />
                    <h3><a>Hot</a></h3>
                </div>
            </ColHideOnPhone>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageGustos src="img/ico/Gustos.png" className="img-fluid" alt="" />
                    <h3><a>Gustos</a></h3>
                </div>
            </ColHideOnPhone>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageFantasias src="img/ico/Fantasias.png" className="img-fluid" alt="" />
                    <h3><a>Fantasías</a></h3>
                </div>
            </ColHideOnPhone>
            <Col lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageDudas src="img/ico/Dudas.png" className="img-fluid" alt="" />
                    <h3><a>Dudas</a></h3>
                </div>
            </Col>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageJuegos src="img/ico/Juegos.png" className="img-fluid" alt="" />
                    <h3><a>Juegos</a></h3>
                </div>
            </ColHideOnPhone>
            <Col lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageRelaciones src="img/ico/Relaciones.png" className="img-fluid" alt="" />
                    <h3><a>Relaciones</a></h3>
                </div>
            </Col>
            <Col lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageHabitos src="img/ico/Habitos.png" className="img-fluid" alt="" />
                    <h3><a>Hábitos</a></h3>
                </div>
            </Col>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageBizarro src="img/ico/Bizarro.png" className="img-fluid" alt="" />
                    <h3><a>Bizzarro</a></h3>
                </div>
            </ColHideOnPhone>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImagePrimera src="img/ico/Primera.png" className="img-fluid" alt="" />
                    <h3><a>Primeras veces</a></h3>
                </div>
            </ColHideOnPhone>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageLevante src="img/ico/Levante.png" className="img-fluid" alt="" />
                    <h3><a>De levante</a></h3>
                </div>
            </ColHideOnPhone>
            <ColHideOnPhone lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageSOS src="img/ico/SOS.png" className="img-fluid" alt="" />
                    <h3><a>WeSexers S.O.S</a></h3>
                </div>
            </ColHideOnPhone>
            <Col lg="3" md="4" >
                <div className="icon-box" style={{ display: "flex", alignItems: "center" }} data-aos="zoom-in" data-aos-delay="50">
                    <AppImageOtros src="img/ico/Otros.png" className="img-fluid" alt="" />
                    <h3><a>Otros</a></h3>
                </div>
            </Col>
          </Row>
        </Container>
    </FeaturesSection>
    );
}

export default Features;