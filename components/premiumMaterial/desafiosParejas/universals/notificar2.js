import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { done_task, query_task } from "../../../../requests/premiumService";
import { toast } from "react-toastify";
import StarRating from "./starRating.js";
import Dropdown from "./Dropdown.js";

const ContainerNotificarDone = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
`;

const ContainerDone = styled.div`
    padding: 1rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    color: white;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
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
    }
`;

const SurveyLink = styled.a`
    color: var(--green); /* Set the text color to green */
    margin: 0 10px;
    text-decoration: none;
    cursor: pointer;
    font-size: 1.8rem;
    text-decoration: underline;
`;

const CommentInput = styled.textarea`
    width: 100%;
    padding: 10px;
    border: 1px solid #ccc;
    border-radius: 5px;
    resize: vertical;
    margin-top: 3rem;
`;

const TitleContainer = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 3rem;
`;

const Title = styled.div`
    font-size: 2.5rem;
    font-family: "Averia Libre", sans-serif;
    opacity: 1; /* adjust the opacity as needed */
   
  
    font-weight: bold;
    
    text-decoration: underline;
    text-decoration-color: var(--green);
    text-underline-offset: 1rem; /* ajusta la separación */
    margin-right: 2rem;
    
    @media(max-width: 540px){
        font-size: 2.5rem;
        padding-top: 0rem;
        padding-bottom: 1rem;

    }
`;

const CommentContainer = styled.div`
//   background-color: var(--violet); 
//   border-radius: 20px; 
  
  margin-top: 20px; 
  color: black; 
  font-size: 1.5rem; 
  font-family: "Averia Libre", sans-serif;
  font-weight: bold;
  text-align: left;
  span {
    font-family: "Averia Libre", sans-serif;
    background-color: var(--green); /* Set the background color to green */
    padding: 0.5rem 1rem; /* Add padding to make the background visible */
    color: white;
    
  }
        
`;

const Instruction = styled.div`
    font-size: 2rem;
    text-align: left;

`;

const DescriptionInstruction = styled.div`
    font-size: 1.2rem;
    font-style: italic;
    text-align: left;

`;

const StarContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center; 
    height: 100%;
    margin-top: 1rem;
`;


const PopupContent = ({ closePopUp, surveyUrl_m1, surveyUrl_m2, setDone, type }) => {
    const router = useRouter();
    const [query, setQuery] = useState(null);
    const [comment, setComment] = useState("");
    const [commentOne, setCommentOne] = useState("");
    const [commentTwo, setCommentTwo] = useState("");
    const [starsOne, setStarsOne] = useState(0);
    const [starsTwo, setStarsTwo] = useState(0);
    const [step, setStep] = useState(1);
    const [initiator, setInitiator] = useState(null);

    const handleNextStep = () => {
        setStep(step + 1);
    };


    useEffect(() => {
        if (router.isReady){
          if (router.query.origin) {
            setQuery(router.query);
          }
        }
    }, [router.isReady]);

    // const handleNewWindowM1 = () => {
    //     window.open(surveyUrl_m1, "_blank");
    // };

    // const handleNewWindowM2 = () => {
    //     window.open(surveyUrl_m2, "_blank");
    // };

    const handleSubmit = async () => {
        const { origin, type, index, road } = query;

        try{
            const response = await done_task({
                coupleName: origin,
                completedTaskType: type,
                completedTaskIndex: index,
                comment: comment,
                commentOne: commentOne,
                commentTwo: commentTwo,
                ratingOne: starsOne,
                ratingTwo: starsTwo,
                initiatedBy: initiator.value,
                selected_area: road,
            });
            if (response.status === 200) {
                toast.success("Tarea completada!!");
                setDone(true);
                closePopUp();
            }
        } catch (error) {
            toast.error("Error al notificar");
        }
    };

    return (
        <InfoText>
            <TitleContainer>
                <Title>Notificar</Title>
            </TitleContainer>

            {step === 1 && (
                <>
                    <Instruction><span>Paso 1/3:</span> ¿Quien inicio esta tarea?</Instruction>   
                    <Dropdown options={[
                        { label: router.query.members.split("-")[0], value: router.query.members.split("-")[0] },
                        { label: router.query.members.split("-")[1], value: router.query.members.split("-")[1] }
                    ]} 
                    onSelect={setInitiator} />
                    <Instruction>Diario sexual en pareja. Anoten su experiencia para registrarla en su diario.</Instruction>
                    <CommentInput
                        placeholder="Compartan sus pensamientos/sensaciones sobre este desafío"
                        value={comment}
                        onChange={(e) => setComment(e.target.value)}
                    />
                </>
            )}

            {step === 2 && (
                <>
                    <Instruction><span>Paso 2/3:</span> {router.query.members.split("-")[0]} danos tu opinión sobre esta tarea</Instruction>    
                    <StarContainer>
                        <StarRating totalStars={5} setStars={setStarsOne} />
                    </StarContainer>
                    <CommentInput
                        placeholder="Comparte tus pensamientos/sensaciones sobre este desafío"
                        value={commentOne}
                        onChange={(e) => setCommentOne(e.target.value)}
                    />
                </>
            )}

            {step === 3 && (
                <>
                    <Instruction><span>Paso 3/3:</span> {router.query.members.split("-")[1]} danos tu opinión sobre esta tarea</Instruction>    
                    <StarContainer>
                        <StarRating totalStars={5} setStars={setStarsTwo} />
                    </StarContainer>
                    <CommentInput
                        placeholder="Comparte tus pensamientos/sensaciones sobre este desafío"
                        value={commentTwo}
                        onChange={(e) => setCommentTwo(e.target.value)}
                    />
                </>
            )}



            <ContainerNotificarDone>
                {step !== 3 ? (
                    <BotonNotificarDone color="green" onClick={handleNextStep}>
                        Siguiente
                    </BotonNotificarDone>
                ) : (
                    <BotonNotificarDone color="green" onClick={handleSubmit}>
                        Finalizar
                    </BotonNotificarDone>
                )}
            </ContainerNotificarDone>
        </InfoText>
    );

    // return (
    //     <InfoText>
    //         <TitleContainer>
    //             <Title>Notificar</Title>
    //         </TitleContainer>

    //         {type !== "dosis" && (
    //             <>
    //                 <Instruction><span>Paso 1:</span> Rellenen los formularios cada uno de manera individual.</Instruction>
    //                 <ContainerNotificarDone>
    //                     {query && (
    //                         <SurveyLink onClick={handleNewWindowM1}>Encuesta {query.members.split('-')[0]} </SurveyLink>
    //                     )}
    //                     {query && (
    //                         <SurveyLink onClick={handleNewWindowM2}>Encuesta {query.members.split('-')[1]} </SurveyLink>
    //                     )}
    //                 </ContainerNotificarDone>
    //             </>
    //         )}
    //         {type !== "dosis" && (
    //             <>
    //                 <Instruction><span>Paso 2:</span> Diario sexual en pareja. Anoten su experiencia para registrarla en su diario.</Instruction>
    //             </>
    //         )}
    //         {type === "dosis" && (
    //             <>
    //                 <Instruction>Diario sexual en pareja. Anoten su experiencia para registrarla en su diario.</Instruction>
    //             </>
    //         )}
                
    //         <CommentInput
    //             placeholder="Compartan sus pensamientos/sensaciones sobre este desafío"
    //             value={comment}
    //             onChange={(e) => setComment(e.target.value)}
    //         />
    //         <ContainerNotificarDone>
    //         <BotonNotificarDone color="green" onClick={handleSubmit} >
    //             Finalizar
    //         </BotonNotificarDone>
    //         </ContainerNotificarDone>
    //     </InfoText>
    // );
};

const NotDoneTask = ({ message, url_m1, url_m2, color = "green", setDone, type }) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ContainerNotificarDone>
                <BotonNotificarDone color={color} onClick={() => setShowPopup(true)}>
                    {message} 
                </BotonNotificarDone>
            </ContainerNotificarDone>
            {showPopup && (
                <PopupContainer>
                    <PopupDialog>
                        <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                        <PopupContent closePopUp={() => setShowPopup(false)} surveyUrl_m1={url_m1} surveyUrl_m2={url_m2} setDone={setDone} type={type}/>
                    </PopupDialog>
                </PopupContainer>
            )}  
        </>
    );
};

const PopupContentDone = ({ comment, member1, member2}) => {
    return (
        <InfoText>
            <TitleContainer>
                <Title>Aprendizajes</Title>
            </TitleContainer>
            <DescriptionInstruction>Sensaciones percibidas: Esto fue lo que sintieron al terminar el desafío</DescriptionInstruction>
            <CommentContainer>
                <span>Respuesta {member1} y {member2}:</span>
                <br />
                <br />
                {comment ? comment : "No guardaron ningún comentario"}
            </CommentContainer>
        </InfoText>
    );
};

const DoneTask = ({ task, query}) => {
    const [showPopup, setShowPopup] = useState(false);

    return (
        <>
            <ContainerDone>
                <Title>
                    ¡Tarea completada!
                </Title>
                <br />
                <BotonNotificarDone color='violet' onClick={() => setShowPopup(true)}>
                    Ver aprendizajes
                </BotonNotificarDone>
            </ContainerDone>
            {showPopup && (
                <PopupContainer onClick={() => setShowPopup(false)}>
                    <PopupDialog onClick={(e) => e.stopPropagation()}>
                        <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                        <PopupContentDone comment={task.comment}  member1={query.members.split('-')[0]} member2={query.members.split('-')[1]}/>
                    </PopupDialog>
                </PopupContainer>
            )}  
        </>
    );
};


const Notificar2 = ({ message, url_m1, url_m2, color = "green", type }) => {
    const router = useRouter();
    const [query, setQuery] = useState(null);
    const [task, setTask] = useState(null);
    const [completed, setCompleted] = useState(false);

    useEffect(() => {
        if (router.isReady){
          if (router.query.origin) {
            setQuery(router.query);
          }
        }
    }, [router.isReady]);

    useEffect(() => {
        if (query) {
            load_task();
        }
    }, [query, completed]);

    const load_task = async () => {
        const { origin, type, index, road } = query;
        try {
            const response = await query_task(origin, type, index, road);
            setTask(response.data);
            console.log("Data task");
            console.log(task);
            if (response.data.status === 'done') {
                setCompleted(true);
            }
        } catch (error) {
            toast.error("Error al cargar la tarea");
        }
    }

    return (
        <>
            {completed ? (
                <DoneTask task={task} query={query}/>
            ) : (
                <NotDoneTask message={message} url_m1={url_m1} url_m2={url_m2} color={color} setDone={setCompleted} type={type}/>
            )}
        </>
    );
}

export default Notificar2;