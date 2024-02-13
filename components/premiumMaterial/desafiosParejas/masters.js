import { Container, Row, Col } from 'reactstrap';
import { useState } from 'react';
import styled from '@emotion/styled';
import Link from 'next/link';

const Background = styled.div`
    background-color: var(--violet);
    background-image: url("/img/landing/cta-bg.webp");
    background-position: center;
    background-size: cover;
    background-repeat: no-repeat;
    background-attachment: fixed;
    min-height: 110vh;
    margin-top: .1rem;
    position: relative;
    padding-top: 10rem;
`;

const GuideSquare = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center; /* Center items vertically */
    align-items: flex-start; /* Align items to the left */
    background-color: white;
    height: ${({ expanded }) => (expanded ? 'auto' : '0')};
    overflow: hidden;
    padding-bottom: ${({ expanded }) => (expanded ? '50%' : '20%')}; /* Adjust padding-bottom for expanded state */
    position: relative;
    margin-top: 2rem;
    margin-right: 1rem;
    margin-left: 1rem;
    border-radius: 10px;
    transition: height 0.3s ease; /* Add transition effect for smooth expansion */
`;

const ExpandButton = styled.button`
    position: absolute;
    top: 10px;
    right: 10px;
    background-color: transparent;
    border: none;
    color: white;
    cursor: pointer;
    z-index: 1;
`;

const Title = styled.div`
    font-size: 1.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 0.85; /* adjust the opacity as needed */
    color: white;
    text-align: left; /* Align text to the left */
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
        font-size: 1.5rem;
        margin-bottom:1.5rem;
    }
`;

const Description = styled.p`
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
`;



const Text = styled.p`
    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    margin-top: 2rem;
    margin-bottom: 1rem;
    color: white;
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

const AppImageGuia1 = styled.img`
    width: 40%;
    margin-top: 1rem;
    margin-left: 4rem;
    margin-right: 1rem;
    
    
    @media(max-width: 540px){
        width: 40%;
        margin-top: 2.3rem;
        // margin-right: 2rem;
        //margin-left: 5rem;
    }
    @media(min-width: 540px){
        // margin-right: 2rem;
    }
`;

const AppImageGuia2 = styled.img`
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


const Masters = () => {
    const [toggles, setToggles] = useState(Array(3).fill({ expanded: false, initialText: 'Initial Text' }));

    // Arrays to store titles and descriptions for each toggle
    const titles = [
        "Parejas creativas",
        "Title 2",
        "Title 3",
        
    ];

    const descriptions = [
        "🌈 ¿Qué vamos a ver? Acuerdos, preferencias y prácticas sexuales diversas",
        "Description 2",
        "Description 3",
        
    ];

    //

    const toggleExpand = (index) => {
        setToggles(prevState =>
            prevState.map((toggle, i) =>
                i === index
                    ? { ...toggle, expanded: !toggle.expanded }
                    : toggle
            )
        );
    };

    return (
        <Background>
            <Container>
                <Row data-aos="fade-left">
                    {[...Array(3)].map((_, index) => (
                        <Col lg="3" md="4" key={index}>
                            <GuideSquare expanded={toggles[index].expanded}>
                                <ExpandButton onClick={() => toggleExpand(index)} style={{ color: "black" }}>
                                    {toggles[index].expanded ? "Collapse" : "Expand"}
                                </ExpandButton>
                                <Title style={{color: "black"}}>{titles[index]}</Title>
                                {toggles[index].expanded && <Description>{descriptions[index]}</Description>}
                                
                            </GuideSquare>
                        </Col>
                    ))}
                </Row>
            </Container>
        </Background>
    );
};

export default Masters;