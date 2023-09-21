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
  
//   const gameData = {
//     "VERDADERO O FALSO": [
//       { question: "La testosterona solo está presente en los hombres.", answer: "Falso. Está presente tanto en hombres como en mujeres, aunque en diferentes cantidades." },
//       { question: "Las mujeres pueden quedar embarazadas la primera vez que tienen relaciones sexuales.", answer: "Verdadero" },
//       { question: "El uso frecuente de anticonceptivos orales puede causar infertilidad a largo plazo.", answer: "Falso" },
//       { question: "La ducha vaginal después del sexo evita el embarazo.", answer: "Falso" },
//       { question: "El tamaño del pie de un hombre está relacionado con el tamaño de su pene.", answer: "Falso." },
//       { question: "Es posible contraer una ETS (enfermedad de transmisión sexual) a través de un asiento de baño.", answer: "Falso. Es altamente improbable." },
//       { question: "Los hombres siempre tienen orgasmos durante el coito.", answer: "Falso" },
//       { question: "El uso de dos condones al mismo tiempo proporciona el doble de protección.", answer: "Falso. Puede aumentar el riesgo de ruptura." },
//       { question: "Las píldoras anticonceptivas protegen contra las ETS.", answer: "Falso." },
//       { question: "Los hombres no pueden experimentar múltiples orgasmos.", answer: " Falso. Aunque es menos común que en las mujeres, algunos hombres pueden experimentar orgasmos múltiples." },
//       { question: "El coito interrumpido es un método anticonceptivo altamente eficaz.", answer: "Falso" },
//       { question: "Puedes saber si alguien tiene una ETS solo con mirarlo.", answer: "Falso." },
//       { question: "Todas las personas con VIH (Virus de Inmunodeficiencia Humana) muestran síntomas evidentes.", answer: "Falso." },
//       { question: "El herpes solo se transmite cuando hay síntomas visibles.", answer: " Falso." },
//       { question: "Es posible que las mujeres experimenten un orgasmo sin ninguna estimulación genital.", answer: "Verdadero." },
//       { question: "Las duchas vaginales regulares son una buena práctica para mantener una higiene saludable.", answer: " Falso. Pueden alterar el equilibrio natural y ser contraproducentes." },

//       { question: "Solo las personas promiscuas contraen ETS.", answer: "Falso." },
//       { question: "Los espermatozoides pueden vivir varios días dentro del cuerpo de la mujer después del coito.", answer: "Verdadero." },
//       { question: "La masturbación causa impotencia o disfunción eréctil en los hombres.", answer: "Falso." },
//       { question: "Es normal sentir dolor durante el sexo.", answer: "Falso. Si bien puede haber ocasiones en las que el sexo puede ser incómodo, el dolor persistente no es normal y debe ser abordado." },
//     ],
//     "JUST QUESTION": [
//         { question: "La testosterona solo está presente en los hombres." },
//         { question: "Las mujeres pueden quedar embarazadas la primera vez que tienen relaciones sexuales." },
//         // Add more questions without answers...
//     ],

   
//   };


  const gameData = {
    "PARA HABLAR DE SEXO Y DIVERTIRSE": {
        type: "question-only",
        questions: [
            { question: "¿Qué es lo que más te gusta de tu cuerpo?"},
            { question: "¿Tienes alguna fantasía sexual?"},
            { question: "¿Prefieres sexo mañanero o nocturno?"},
            { question: "¿Qué es lo más raro que te ha pedido alguien en la cama?"},
            { question: "¿Cuál es tu postura sexual favorita?"} ,
            { question: "¿Qué música te pone en el mood para el sexo?"},
            { question: "¿Cuál es tu opinión sobre los juguetes sexuales?"},
            { question: "¿Qué opinas del role-play en la cama?"},
            { question: "¿Sexo en lugares públicos, sí o no?"},
            { question: "¿Qué es lo que más te excita?"},
            { question: "¿Te gusta hablar sucio en la cama?"} ,
            { question: "¿Algo romántico que alguien ha hecho por ti?"} ,
            { question: "¿Alguna vez has experimentado con BDSM? ¿Te gustaría?"} ,
            { question: "¿Has tenido algún encuentro sexual que te haya cambiado la vida?"} ,
            { question: "¿Cómo fue tu primera vez?"},
            { question: "¿Tienes algún tabú sexual?"},
            { question: "¿Qué es lo que más valoras en un compañero/a sexual?"},
            { question: "¿Qué opinas del sexting?"},
            { question: "¿Alguna vez has tenido una experiencia sexual incómoda? Detalla."},
            { question: "¿Cuál es tu opinión sobre la pornografía?"},
            { question: "¿Cuál es la cosa más sexy que alguien ha hecho por ti?"},
            { question: "¿Cuánta importancia le das al aftercare después del sexo?"},
            { question: "¿Tienes algún límite en el sexo que jamás cruzarías?"},
            { question: "¿Sexo y menstruación? ¿Dale que va o prefieres en otro momento?"},
            { question: "¿Has participado alguna vez en un juego sexual? ¿Cuál?"},
            { question: "¿Cuál es tu opinión sobre el poliamor?"},
            { question: "¿Qué te parece el sexo en la primera cita?"},
            { question: "¿Cómo fue tu experiencia más embarazosa en el sexo?"},
            { question: "¿Alguna vez has grabado tus encuentros sexuales? Si nunca lo hiciste, ¿lo harías?"},
            { question: "¿Has tenido alguna fantasía con un/a famoso/a? ¿Cuál?"},
            { question: "¿Qué es lo más atrevido que has hecho en la cama?"},
            { question: "¿Prefieres dar o recibir placer?"},
            { question: "¿Orgia yes or no?"},
            { question: "¿Alguna vez has tenido un crush en alguien mucho mayor o menor que tú?"},
            { question: "¿Cuál es tu opinión sobre el sexo virtual?"},
            { question:  "¿Has tenido un 'amigo/a con beneficios'? ¿Cómo fue la experiencia?"},
            { question: "¿Qué parte del cuerpo te atrae más?"},
            { question: "¿Qué película o libro te ha dado ideas sexuales?"},
            { question: "¿Prefieres la dominación o la sumisión?"},
            { question: "¿Qué es un mito sexual que te gustaría desmentir?"},
            { question: "¿Rapido y furioso o slow sex?"},
            { question: "¿Alguna vez has hecho un striptease?"},
            { question: "¿Estimulantes/lubricantes: qué prefieres, efecto frío o calor?"},
            { question: "Del 1 al 10, ¿cuál es la importancia de las relaciones sexuales en tu vínculo?"},
            { question: "¿Qué zona te gusta más que te estimulen? Diga tres"},
            { question: "¿Prefieres sexo oral o que te masturben?"},
            { question: "¿Juguetes sexuales: vibradores o anillos? ¿Cuál prefieres?"},
            { question: "¿Qué tipo de material prefieres para tus juguetes sexuales: silicona, vidrio, metal?"},
            { question: "¿En qué zona del cuerpo sientes que eres más sensible al tacto?"},
            { question: "¿Qué es más excitante para ti: el misterio o la familiaridad?"},
            { question: "¿Te gusta más dar o recibir sexo oral?"},
            { question: "¿Cuál es tu opinión sobre el edging (retrasar el orgasmo para aumentar el placer)?"},
            { question: "¿Lencería o desnudez completa: qué te parece más sexy?"},
            { question: "¿Qué opinas sobre el dirty talk: excitante o fuera de lugar?"},
            { question: "¿Cual es tu opinión sobre el sexo en la ducha: sí o no?"},
            { question: "¿Te gusta más el sexo espontáneo o planificado?"},
            { question: "¿Qué opinas sobre el uso de espejos durante el sexo?"},
            { question: "¿Prefieres las caricias suaves o los arañazos y mordiscos?"},
            { question: "Chupon si o no?"},
            { question: "¿Qué te parece más sensual: una mirada o un susurro?"},
            { question: "¿Qué opinas sobre el spanking (nalgadas) durante el sexo?"},
            { question: "¿Cuál es tu opinión sobre el sexo durante la menstruación?"},
            { question: "¿Te gusta experimentar con diferentes temperaturas durante el sexo?"},
            { question: "¿Prefieres que te hablen al oído o que te susurren?"},
            { question: "¿Masajes si o no?"},
            { question: "¿Has incorporado alguna vez alimentos durante el sexo? ¿Cuáles?"},
            { question: "¿En qué lugar de la casa te gusta más tener sexo, aparte de la cama?"},
            { question: "¿Te gusta sumar vendas en los ojos o esposas?"},
            { question: "¿Tienes alguna canción que consideres tu 'himno sexual'?"},
            { question: "¿Cuál es tu opinión sobre el sexo sin penetración?"},
            { question: "¿Te gustan los juegos de poder en el sexo? Explica?"},
            { question: "¿Qué sensación te resulta más excitante: el roce de la piel o la respiración en la nuca?"},
            { question: "¿Te excita la fantasía de profesor(a)/alumno(a)?"},
            { question: "¿Te parece excitante la idea de hacerlo en un lugar donde puedan descubrirte?"},
            { question: "¿Qué opinas sobre el intercambio de roles de género en la cama?"}
        ]
    },
    "QUE PREFERIS": {
        type: "question-only",
        questions: [
            { question: "¿Qué te resulta más seductor: la profundidad de una conversación o la intensidad de una mirada?"},
            { question: "¿Qué te excita más: las palabras sucias o los gestos atrevidos?"},
            { question: "¿Qué te estimula más: la presión de una mano en tu espalda o el roce de un dedo a lo largo de tu brazo?"},
            { question: "¿Qué te emociona más: una caricia accidental o un toque intencionado?"},
            { question: "¿Qué te resulta más erótico: la anticipación del primer contacto o la certeza del último?"} ,
            { question: "¿Qué te atrae más: la vulnerabilidad de tu pareja o su confianza?"},
            { question: "¿Qué prefieres: la dulzura del amor o la intensidad de la pasión?"},
            { question: "¿Qué te estimula más: el sonido de la lluvia contra la ventana o el eco de gemidos en la habitación?"},
            { question: "¿Qué te emociona más: la promesa de lo que vendrá o la satisfacción de lo que ha pasado?"},
            { question: "¿Qué te atrae más: la intimidad de la cercanía o el misterio de la distancia?"},
            { question: "¿Qué prefieres: el susurro de palabras dulces o el grito de un orgasmo?"} ,
            { question: "¿Qué te resulta más erótico: la naturalidad del día o la oscuridad de la noche?"} ,
            { question: "¿Qué te estimula más: la mirada intensa de tu pareja o el contacto de sus labios?"} ,
            { question: "¿Qué te emociona más: el ritmo lento y constante o el rápido e impredecible?"} ,
            { question: "¿Qué prefieres: el sabor del deseo o el olor del anhelo?"},
            { question: "¿Qué te atrae más: la sutilidad de un juego de miradas o la obviedad de un toque físico?"},
            { question: "¿Qué te resulta más erótico: el silencio cómplice o el diálogo abierto?"},
            { question: "¿Qué prefieres: el tacto de la piel o la textura de la ropa?"},
            { question: "¿Qué te emociona más: la delicadeza de una caricia o la fuerza de un agarre?"},
            { question: "¿Qué te atrae más: el resplandor de la luna o el brillo de una vela?"},
            { question: "¿Qué prefieres: la suavidad de un abrazo o la rigidez de una postura?"},
            { question: "¿Qué te resulta más estimulante: el calor del momento o la frescura de una nueva experiencia?"},
            { question: "¿Qué te atrae más: la tensión de la espera o la liberación del acto?"},
            { question: "¿Qué prefieres: el susurro de un 'te amo' o el grito de un 'quiero más'?"},
            { question: "¿Qué te emociona más: la promesa de una nueva aventura o el confort de la rutina?"},
            { question: "¿Qué te estimula más: el misterio de lo desconocido o la seguridad de lo familiar?"},
            { question: "¿Qué prefieres: la cadencia de la respiración o el ritmo del corazón?"},
            { question: "¿Qué te resulta más erótico: la espontaneidad del acto o la planificación de la seducción?"},
            { question: "¿Qué te atrae más: el placer del tacto o el estímulo de la vista?"},
            { question: "¿Qué prefieres: la intimidad de los ojos cerrados o la conexión de la mirada directa?"},
            { question: "¿Qué te emociona más: la sutileza del susurro o la fuerza del grito?"},
            { question: "¿Qué te atrae más: el sentimiento de ser deseado o el deseo de querer más?"},
            { question: "¿Qué prefieres: la complejidad del juego previo o la simplicidad del acto?"},
            { question: "¿Qué te estimula más: la perfección del sincronismo o el encanto del desorden?"},
            { question: "¿Qué te emociona más: la pasión del momento o la emoción de la memoria?"},
            { question: "¿Qué te atrae más: el recuerdo del último beso o la expectativa del próximo?"},
            { question: "¿Qué prefieres: la fugacidad de una caricia o la permanencia de un abrazo?"},
            { question: "¿Qué te resulta más erótico: el eco de un gemido o el silencio de una mirada?"},
            { question: "¿Qué te estimula más: la singularidad de un encuentro o la rutina de una relación?"},
            { question: "¿Qué prefieres: la vulnerabilidad de la desnudez o la seguridad del misterio?"},
            { question: "¿Qué te resulta más erótico: una mirada intensa o un toque accidental?"},
            { question: "¿Qué te estimula más: un beso apasionado o una caricia delicada?"},
            { question: "¿Qué encuentras más seductor: un susurro al oído o un mordisco suave en el labio?"},
            { question: "¿Qué te resulta más excitante: la tensión sexual que se acumula o el alivio del orgasmo?"},
            { question: "¿Qué te atrae más: el juego previo prolongado o el sexo apasionado e intenso?"},
            { question: "¿Qué te resulta más erótico: la suavidad de las sábanas o la firmeza del colchón?"},
            { question: "¿Qué sensación prefieres: el calor del cuerpo de tu pareja o la frescura de la habitación?"},
            { question: "¿Qué te parece más atractivo: una risa coqueta o una sonrisa tímida?"},
        ]
    },
    // "VERDADERO O FALSO": {
    //     type: "question-answer",
    //     questions: [
    //         { question: "La testosterona solo está presente en los hombres.", answer: "Falso. Está presente tanto en hombres como en mujeres, aunque en diferentes cantidades." },
    //         { question: "El uso frecuente de anticonceptivos orales puede causar infertilidad a largo plazo.", answer: "Falso" },
    //         { question: "La ducha vaginal después del sexo evita el embarazo.", answer: "Falso" },
    //         { question: "El tamaño del pie de un hombre está relacionado con el tamaño de su pene.", answer: "Falso." },
    //         // Other question-answer pairs...
    //     ]
    // },
    // Add more game modes and their questions here...
};

const GameCard = ({ game }) => {
    const [questionOrder, setQuestionOrder] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    useEffect(() => {
        const shuffledQuestions = [...game.questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }
        // Add the "game over" card to the end
        shuffledQuestions.push({ question: "EL JUEGO HA ACABADO. PUEDES SELECCIONAR UNO NUEVO PARA SEGUIR DISFRUTANDO DE LOS JUEGOS DE WESEX." });
        setQuestionOrder(shuffledQuestions);
    }, [game.questions]);

    const toggleQuestionAndAnswer = () => {
        if (currentQuestionIndex === questionOrder.length - 1) return;

        const currentQuestion = questionOrder[currentQuestionIndex];

        if (game.type === "question-answer") {
            // Toggle the answer if the game type is question-answer
            setShowAnswer(!showAnswer);
        }

        if (showAnswer || game.type === "question-only") {
            if (currentQuestionIndex < questionOrder.length - 2) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowAnswer(false);
            } else {
                setCurrentQuestionIndex(questionOrder.length - 1);
            }
        }
    };

    useEffect(() => {
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
    }, [game.questions]);

    if (questionOrder.length === 0) {
        return <div>No questions available.</div>;
    }

    const currentQuestion = questionOrder[currentQuestionIndex];
    return (
        <QuestionCard onClick={toggleQuestionAndAnswer}>
            {showAnswer && game.type === "question-answer" ? (
                <div>
                    <Question showBefore={!currentQuestion.answer}>
                        <span>{currentQuestion.question}</span>
                    </Question>
                    {currentQuestion.answer && (
                        <div>
                            <br />
                            <Answer>
                                <span>{currentQuestion.answer}</span>
                            </Answer>
                        </div>
                    )}
                </div>
            ) : (
                <Question>
                    <span>{currentQuestion.question}</span>
                </Question>
            )}
        </QuestionCard>
    );
};

const CardGame = () => {
    const [selectedOption, setSelectedOption] = useState('VERDADERO O FALSO');
    const [showPopup, setShowPopup] = useState(false);
    const [showStartCard, setShowStartCard] = useState(true);
    const [game, setGame] = useState(null); // Store the selected game mode
    const [questionOrder, setQuestionOrder] = useState([]);
    const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
    const [showAnswer, setShowAnswer] = useState(false);

    // Function to initialize the game when the selected game mode changes
    const initializeGame = (selectedGame) => {
        const shuffledQuestions = [...selectedGame.questions];
        for (let i = shuffledQuestions.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [shuffledQuestions[i], shuffledQuestions[j]] = [shuffledQuestions[j], shuffledQuestions[i]];
        }
        // Add the "game over" card to the end
        shuffledQuestions.push({ question: "EL JUEGO HA ACABADO. PUEDES SELECCIONAR UNO NUEVO PARA SEGUIR DISFRUTANDO DE LOS JUEGOS DE WESEX." });
        setQuestionOrder(shuffledQuestions);
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
        setGame(selectedGame);
    };

    useEffect(() => {
        // Initialize the game when the component mounts
        initializeGame(gameData[selectedOption]);
    }, [selectedOption]);

    // Function to handle clicking the start card and begin the game
    const startGame = () => {
        setShowStartCard(false);
    };

    // Function to toggle between questions and answers
    const toggleQuestionAndAnswer = () => {
        if (currentQuestionIndex === questionOrder.length - 1) return;

        const currentQuestion = questionOrder[currentQuestionIndex];

        if (game.type === "question-answer") {
            // Toggle the answer if the game type is question-answer
            setShowAnswer(!showAnswer);
        }

        if (showAnswer || game.type === "question-only") {
            if (currentQuestionIndex < questionOrder.length - 2) {
                setCurrentQuestionIndex(currentQuestionIndex + 1);
                setShowAnswer(false);
            } else {
                setCurrentQuestionIndex(questionOrder.length - 1);
            }
        }
    };

    const resetGame = () => {
        // Reset the game to its initial state
        setShowStartCard(true);
        setQuestionOrder([]);
        setCurrentQuestionIndex(0);
        setShowAnswer(false);
        setGame(null);
    };

    return (
        <Background>
            <Title>JUEGOS DE CARTAS</Title>
            <SelectorButtonContainer>
                {/* <InfoButton onClick={() => setShowPopup(true)}>¿De qué tratan los juegos? ℹ️</InfoButton> */}
                <SelectorButton onChange={(e) => {
                    setSelectedOption(e.target.value);
                    // Reset the game when the selected game mode changes
                    resetGame();
                }}>
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

            {showStartCard && <StartCard onClick={startGame} />}
            {!showStartCard && (
                <GameCard
                    game={game}
                    questionOrder={questionOrder}
                    currentQuestionIndex={currentQuestionIndex}
                    showAnswer={showAnswer}
                    toggleQuestionAndAnswer={toggleQuestionAndAnswer}
                />
            )}
        </Background>
    );
};

export default CardGame;