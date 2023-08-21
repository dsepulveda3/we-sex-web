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

    min-height: 1000px; /* Set the minimum height here */
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
    position: relative; /* Ensure proper stacking of elements */
    background-color: white;
    background-size: cover;
    background-position: center;
    border-radius: 20px;
    border: 3px solid black;
    height: 450px;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
    padding: 20px;
    width: 100%;
    max-width: 300px;
    margin: 0 auto;
    color: black;
    text-align: center; /* Center align the content */
    display: flex;
    flex-direction: column;
    justify-content: center;

    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green);
        padding: 0.3rem 0.5rem;
        color: white;
    }

    /* Default text in the top right corner */
    ::before {
        content: "WeSex";
        position: absolute;
        top: 10px;
        right: 10px;
        font-family: "Averia Libre", sans-serif;
        font-size: 2.0rem;
        color: var(--green);
    }

    /* Default text in the bottom left corner */
    ::after {
        content: "WeSex";
        position: absolute;
        bottom: 10px;
        left: 10px;
        font-family: "Averia Libre", sans-serif;
        font-size: 2.0rem;
        color: var(--green);
    }
`;


const Question = styled.div`
    font-size: 1.6 rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;

    /* Default text in the top */
    ::before {
        display: ${props => (props.showBefore === false ? "none" : "block")};
        content: "PREGUNTA";
        position: absolute;
        top: 0;
        margin-top: 1rem;
        left: 50%; /* Center the text horizontally */
        transform: translateX(-50%); /* Move the text back by half its width */
        font-family: "Karla", sans-serif;
        font-size: 2.0rem;
        color: black;
    }

    span {
        font-size: 2.0rem;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.2rem 0.7rem; /* Add padding to make the background visible */
        padding-left: 1rem;
        padding-right: 1rem;
        color: white; /* Set the text color to white */
    }
`;

const Answer = styled.div`
    font-size: 1.6rem;
    font-family: "Karla", sans-serif;
    font-weight: bold;
    
    /* Default text in the top */
    ::before {
        content: "RESPUESTA";
        position: absolute;
        top: 0;
        margin-top: 1rem;
        left: 50%; /* Center the text horizontally */
        transform: translateX(-50%); /* Move the text back by half its width */
        font-family: "Karla", sans-serif;
        font-size: 2.0rem;
        color: black;
    }
    span {
        font-size: 1.8rem;
        background-color: white; /* Set the background color to green */
        color: var(--violet); /* Set the text color to white */
        font-style: italic; /* Set the font style to italic */
    }
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
      { question: "La testosterona solo está presente en los hombres.", answer: "Falso. Está presente tanto en hombres como en mujeres, aunque en diferentes cantidades." },
      { question: "Las mujeres pueden quedar embarazadas la primera vez que tienen relaciones sexuales.", answer: "Verdadero" },
      { question: "El uso frecuente de anticonceptivos orales puede causar infertilidad a largo plazo.", answer: "Falso" },
      { question: "La ducha vaginal después del sexo evita el embarazo.", answer: "Falso" },
      { question: "El tamaño del pie de un hombre está relacionado con el tamaño de su pene.", answer: "Falso." },
      { question: "Es posible contraer una ETS (enfermedad de transmisión sexual) a través de un asiento de baño.", answer: "Falso. Es altamente improbable." },
      { question: "Los hombres siempre tienen orgasmos durante el coito.", answer: "Falso" },
      { question: "El uso de dos condones al mismo tiempo proporciona el doble de protección.", answer: "Falso. Puede aumentar el riesgo de ruptura." },
      { question: "Las píldoras anticonceptivas protegen contra las ETS.", answer: "Falso." },
      { question: "Los hombres no pueden experimentar múltiples orgasmos.", answer: " Falso. Aunque es menos común que en las mujeres, algunos hombres pueden experimentar orgasmos múltiples." },
      { question: "El coito interrumpido es un método anticonceptivo altamente eficaz.", answer: "Falso" },
      { question: "Puedes saber si alguien tiene una ETS solo con mirarlo.", answer: "Falso." },
      { question: "Todas las personas con VIH (Virus de Inmunodeficiencia Humana) muestran síntomas evidentes.", answer: "Falso." },
      { question: "El herpes solo se transmite cuando hay síntomas visibles.", answer: " Falso." },
      { question: "Es posible que las mujeres experimenten un orgasmo sin ninguna estimulación genital.", answer: "Verdadero." },
      { question: "Las duchas vaginales regulares son una buena práctica para mantener una higiene saludable.", answer: " Falso. Pueden alterar el equilibrio natural y ser contraproducentes." },

      { question: "Solo las personas promiscuas contraen ETS.", answer: "Falso." },
      { question: "Los espermatozoides pueden vivir varios días dentro del cuerpo de la mujer después del coito.", answer: "Verdadero." },
      { question: "La masturbación causa impotencia o disfunción eréctil en los hombres.", answer: "Falso." },
      { question: "Es normal sentir dolor durante el sexo.", answer: "Falso. Si bien puede haber ocasiones en las que el sexo puede ser incómodo, el dolor persistente no es normal y debe ser abordado." },
    { question: "EL JUEGO HA ACABADO. PUEDES SELECCIONAR UNO NUEVO PARA SEGUIR DISFRUTANDO DE LOS JUEGOS DE WESEX." },


    ],
    // "PREGUNTA Y RESPUESTA": [
    //   { question: "What is the capital of France?", answer: "Paris" },
    //   { question: "What is the capital of Chile?", answer: "Santiago" },
    //   { question: "What is the capital of Argentina?", answer: "Buenos Aires" },
    //   // more questions for this mode...
    // ],
    // Add more game modes and their questions here...
  };

  const GameCard = ({ questions }) => {
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    const toggleQuestionAndAnswer = () => {
        // If the current index is not the last question, toggle the answer
        if (currentQuestionIndex < questions.length - 1) {
            setShowAnswer(!showAnswer);
        }

        // Move to the next question only if the answer is shown and it's not the last question
        if (showAnswer && currentQuestionIndex < questions.length - 1) {
            setCurrentQuestionIndex(currentQuestionIndex + 1);
            setShowAnswer(false);
        }
    };

    useEffect(() => {
        // Reset the current question index and answer status when questions change
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
    }, [questions]);

    if (questions.length === 0) {
        return <div>No questions available.</div>;
    }

    return (
        <QuestionCard onClick={toggleQuestionAndAnswer}>
            {showAnswer ? (
                <div>
                    <Question showBefore={false}>
                        <span>{questions[currentQuestionIndex].question}</span>
                    </Question>
                    <br />
                    <Answer>
                        <span>{questions[currentQuestionIndex].answer.toString()}</span>
                    </Answer>
                </div>
            ) : (
                <Question>
                    <span>{questions[currentQuestionIndex].question}</span>
                </Question>
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