import React from 'react';
import { Row, Col, Container } from 'reactstrap';
import styled from '@emotion/styled';
import Debates from '@/components/Debates/DebatesExperiment/discussionsWithTabs2'
import Articles from '@/components/Articles/ArticlesExperiment/articlesWithTabs2'

const Icon = styled.img`
  width: 10%;
`;

const ProfilePicture = styled.img`
  width: 10%;
`;

const Title = styled.h1`
  font-size: 5.5rem;
  color: var(--violet);
  font-family: "Averia Libre", sans-serif;
  opacity: 1;
  margin-left: 0px;
  margin-top: 0px;
  margin-bottom: 10rem;

  @media(max-width: 540px){
    color: white;
    font-size: 5.5rem;
    margin-bottom:1.5rem;
  }
`;

const ItemContainer = styled.div`
  display: flex;
  align-items: center;
  
  margin-top: 2rem;
`;

const Text = styled.p`
  margin-left: 3rem;
  color: black;
  font-size: 2rem;
`;

const CenteredCol = styled(Col)`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const Boton = styled.a`
    border-radius: 4rem;
    padding: 1rem 3rem;
    font-weight: bold;
    width: fit-content;
    border: none;
    transition: all .5s ease;
    font-size: 1.8rem;
    max-width: 100%;
`;

const BotonVioleta = styled(Boton)`
    margin-top: 5rem!important;
    width: 90%;
    text-align: center;
    color: white;
    background-color: var(--violet);
    span {
      color: var(--violet);
  }
  
`;

const DebatesExperiment = () => {
  return (
    <Container >
      <Row>
        <CenteredCol xs="3" className="left-sidebar" style={{backgroundColor: "white", borderRight: "1px solid var(--violet)"}}>
       
          <ul style={{marginTop: "0rem"}}>
            <Title>WeSex</Title>
            <ItemContainer>
              <Icon src='../../img/ico/home_icon_selected.png' />
              <Text style={{fontWeight: "bold"}}>Home</Text>
            </ItemContainer>
            <ItemContainer>
              <Icon src='../../img/ico/explore_icon.png' />
              <Text>Explore</Text>
            </ItemContainer>
            <ItemContainer>
              <Icon src='../../img/ico/debates_icon.png' />
              <Text>Debates</Text>
            </ItemContainer>
            <ItemContainer>
              <Icon src='../../img/ico/articles_icon.png' />
              <Text>Articles</Text>
            </ItemContainer>
            <ItemContainer>
              <Icon src='../../img/ico/premium_icon.png' />
              <Text>Premium Material</Text>
            </ItemContainer>
            <ItemContainer>
              <Icon src='../../img/ico/messages_icon.png' />
              <Text>Messages</Text>
            </ItemContainer>
            <ItemContainer>
              <BotonVioleta>Debatir</BotonVioleta>
            </ItemContainer>
          </ul>
          <div className="tweet" style={{backgroundColor: "white", paddingLeft: "2rem", paddingTop: "15rem"}}>
            <ItemContainer Container className="tweet-header">
              <ProfilePicture src="../../img/ico/profile_icon.png" alt="Profile Picture" />
              <h2 style={{color: "black", marginLeft: "2rem"}}> Bienvenido John Doe</h2>
            </ItemContainer>
          </div>

        </CenteredCol>
        <Col xs="6" className="main-content" style={{backgroundColor: "#FEFBFF", paddingLeft: "1.5rem"}}>
        {/* <Col xs="6" className="main-content" style={{backgroundColor: "#F6EEFF", paddingLeft: "1.5rem"}}> */}
          {/* <div style={{backgroundColor: "white", paddingLeft: "1rem",}}>
            <ItemContainer>
                <ProfilePicture src="../../img/ico/profile_icon.png" alt="Profile Picture" />
                <h2 style={{color: "black", marginLeft: "2rem"}}> Bienvenido John Doe</h2>
            </ItemContainer>
          </div> */}
          <div >
           <Debates/>
          </div>
          {/* Add more tweet elements here */}
        </Col>
        <Col xs="3" className="right-sidebar"style={{backgroundColor: "white", borderLeft: "1px solid var(--violet)"}} >
          <Articles/>
        </Col>
      </Row>
    </Container>
  );
};

export default DebatesExperiment;
