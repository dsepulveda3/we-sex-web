import React from 'react';
import styled from '@emotion/styled';
import MPCardInput from './mpCardInput';

const Container = styled.div`
  border-radius: 2rem;
  padding: 2rem;
  border: 2px solid white;
  background-color: white;
  margin-bottom: 1rem;
  box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.3); /* Add shadow properties */

  @media (max-width: 540px) {
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.div`
  font-size: 2rem;
  text-align: left;
  color: black;
  padding: 1rem 0rem;

  @media(max-width: 540px){
    font-size: 1.6rem;
    
  }
`;

const CardSubTitle = styled.div`
  font-size: 1.2rem;
  text-align: left;
  color: black;
  padding: 1rem 0rem;

  span {
    font-weight: bold;
  }
  
`;

const CenterButton = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center; /* Center horizontally */
  align-items: center; /* Center vertically */
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    border: none;
    transition: all .5s ease;
    &:hover {
        background-color: grey;
        color: white;
        cursor: pointer;
    }
    @media(max-width: 540px){
        
        display:block;
        min-width: 80%;    
    }
`;

const StyledButtonLink = styled(Boton)`
  text-align: center;
  color: white;
  background-color: #00AEEF;
  margin: 0rem 2rem;
`;


const ByLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    color:  #00AEEF;
`;

const ContainerTitle = styled.div`
    display: flex;
    align-items: center;
    margin: 1rem;
`;

const AppImage = styled.img`
    height: 8rem;
    width: 8rem;
    margin: 2rem;
    object-fit: cover; /* Crop the center of the image */
    border-radius: 50%; /* Make it rounded */

    @media (max-width: 540px) {
      
    }
`;

const WeSex = styled.div`
    color: white;
    font-weight: bold;
    font-family: "Averia Libre", sans-serif;
`;



function MPForm() {
  return (
    <>
      <ContainerTitle>
        <AppImage src="/img/splash.png" className="img-fluid"/>
        <WeSex>WeSex</WeSex>
      </ContainerTitle>
      <Container>
        <CardTitle>Detalle de tu suscripción</CardTitle>
        <CardSubTitle><span>Nombre plan:</span> All Access</CardSubTitle>
        <CardSubTitle><span>Tipo suscripción:</span> Mensual</CardSubTitle>
        <CardSubTitle><span>Nombre Comercio:</span> WeSex</CardSubTitle>
      </Container>
      <Container>
        <MPCardInput />
      </Container>
    </>
  );
}

export default MPForm;