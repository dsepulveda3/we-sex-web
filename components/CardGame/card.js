import React from "react";
import { useState, useEffect } from "react";
import styled from '@emotion/styled';

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
    padding-top: 2rem;
    padding-bottom: 2rem;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
       
    }

    min-height: 860px; /* Set the minimum height here */
`;

const Title = styled.div`
    text-align: center;
    font-size: 2.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    color: white;
    

    @media(max-width: 540px){
        font-size: 2.8rem;
        margin-bottom: 0rem;
    }
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    flex-direction: column; /* Add this to make items stack vertically */


    font-size: 1.5rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;

    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const SelectorButton = styled.select`
    border-radius: 4rem;
    padding: 1rem 2rem 1rem 2rem;
    
`;

const InfoButton = styled.a`
    font-size: 1.4rem;
    font-family: "Karla", sans-serif;
    cursor: pointer;
    font-weight: bold;
    margin-bottom: 1rem;
   
`;

const StartCard = styled.div`
    background-image: url("/img/splash.png");
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    border: 2px solid #FFFFFF;
    height: 450px; 
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    
`;

const QuestionCard = styled.div`
    background-color: white; /* Set the background color to white */
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    border: 2px solid #FFFFFF;
    height: 450px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    color: black;
    
    
`;

const PopupContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 999; /* Ensure the pop-up is on top of other elements */
`;

const PopupDialog = styled.div`
  background-color: white;
  padding: 2rem;
  border-radius: 10px;
  max-width: 80%;
  max-height: 80%;
  overflow-y: auto;
  position: relative; /* Added to position the CloseButton */
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background-color: transparent;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

const InfoText = styled.div`
    color: black;
    font-size: 1.3rem;
    font-family: "Averia Libre", sans-serif;
    text-align: left;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
`;

const PopupContent = () => {
    return (
      <>
        <br />
        <InfoText>
          <span>Verdadero o Falso:</span> Las cartas contienen afirmaciones sobre sexualidad, anatomía, mitos, etc. Los jugadores deben decidir si la afirmación es verdadera o falsa.
        </InfoText>
        <br />
        <InfoText>
          <span>Pregunta y Respuesta:</span> Similar a juegos triviales, donde las cartas hacen preguntas y los jugadores deben responder correctamente.Puede ser sobre historia sexual, biología, términos sexuales, entre otros.
        </InfoText>
        <br />
        <InfoText>
          <span>Desafío de la Conversación:</span> Las cartas contienen temas o preguntas, y los jugadores deben iniciar una conversación o compartir una experiencia relacionada.
        </InfoText>
        <br />
        <InfoText>
          <span>Cartas de Escenarios:</span> Las cartas describen diferentes escenarios o situaciones y los jugadores deben discutir cómo manejarían la situación o cómo se sentirían al respecto.
        </InfoText>
        <br />
        <InfoText>
          <span>Juego de Rol:</span> Las cartas proporcionan roles o situaciones y los jugadores tienen que actuar o discutir cómo sería esa situación.
        </InfoText>
        <br />
        <InfoText>
          <span>Desmitificación:</span> Las cartas contienen mitos sexuales, y los jugadores deben discutir por qué es un mito y cuál es la realidad.
        </InfoText>
        <br />
        <InfoText>
          <span>Construye tu historia:</span> Cada carta contiene una palabra o frase relacionada con el sexo. Los jugadores, en sus turnos, deben tomar una carta y construir una historia con las palabras o frases que han recogido.
        </InfoText>
        <br />
        <InfoText>
          <span>Cartas de Consentimiento</span> Las cartas describen situaciones y los jugadores deben decidir si hay consentimiento o cómo obtenerlo de manera adecuada.
        </InfoText>
        <br />
        <InfoText>
          <span>Descubre el término</span> Una versión sexual del juego &quot;Tabú&quot;. Las cartas contienen un término relacionado con el sexo, y el jugador debe describirlo sin usar ciertas palabras &quot;prohibidas&quot;.
        </InfoText>
        <br />
        <InfoText>
          <span>Cuestionario de Conexión</span> Las cartas tienen preguntas diseñadas para que las parejas se conozcan mejor a nivel sexual y discutan sus límites, deseos y necesidades.
        </InfoText>
        <br />
        
        {/* Add more content as needed */}
      </>
    );
  };
  
  const gameData = {
    "VERDADERO O FALSO": [
      { question: "Statement 1", answer: true },
      { question: "Statement 2", answer: false },
    ],
    "PREGUNTA Y RESPUESTA": [
      { question: "What is the capital of France?", answer: "Paris" },
      { question: "What is the capital of Chile?", answer: "Santiago" },
      // more questions for this mode...
    ],
    // Add more game modes and their questions here...
  };

  const GameCard = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleQuestionAndAnswer = () => {
        setShowAnswer(!showAnswer);
    };

    const nextQuestion = () => {
        if (currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowAnswer(false);
        }
    };

    useEffect(() => {
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
    }, [questions]);

    if (questions.length === 0) {
        return <div>No questions available.</div>;
    }

    return (
        <QuestionCard onClick={toggleQuestionAndAnswer}>
            {showAnswer ? (
                questions[currentQuestionIndex].answer.toString()
            ) : (
                <div>
                    {questions[currentQuestionIndex].question}
                    <button onClick={nextQuestion}>Next Question</button>
                </div>
            )}
        </QuestionCard>
    );
};

const CardGame = () => {
    const [selectedOption, setSelectedOption] = useState('VERDADERO O FALSO');
    const [showPopup, setShowPopup] = useState(false);
    const [showCard, setShowCard] = useState(false);
    const [showStartCard, setShowStartCard] = useState(true);
    const [resetCard, setResetCard] = useState(false);

    useEffect(() => {
        setResetCard(true);
    }, [selectedOption]);

    useEffect(() => {
        if (resetCard) {
            setResetCard(false);
            setShowCard(false);
            setShowStartCard(true);
        }
    }, [resetCard]);

    const selectedQuestions = gameData[selectedOption];

    return (
        <Background>
            <Title>JUEGOS DE CARTAS</Title>
            <SelectorButtonContainer>
                <InfoButton onClick={() => setShowPopup(true)}>¿De qué tratan los juegos? ℹ️</InfoButton>
                <SelectorButton onChange={(e) => setSelectedOption(e.target.value)}>
                    {Object.keys(gameData).map(mode => (
                        <option key={mode} value={mode}>{mode}</option>
                    ))}
                </SelectorButton>
            </SelectorButtonContainer>
            {showPopup && (
                <PopupContainer>
                    <PopupDialog>
                        <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                        <PopupContent />
                    </PopupDialog>
                </PopupContainer>
            )}

            {showStartCard && <StartCard onClick={() => setShowStartCard(false) /* This starts the game */} />}
            {!showStartCard && <GameCard questions={selectedQuestions} />}
        </Background>
    );
};

export default CardGame;

//get rid of the showAnswer ? What is used for ?