import React, {useEffect, useState} from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";
import { done_task, query_task } from "../../requests/premiumService";
import { toast } from "react-toastify";

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
    padding: 8px 13px;
    cursor: pointer;
    font-weight: bold;
    margin: 2rem;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */
    justify-content: center;
    text-align: center;
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
  display: flex;
  flex-direction: column;
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
    color: black;
   
  
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


const Instruction = styled.div`
    font-size: 2rem;
    text-align: left;
    color: black;

    span {
        font-weight: bold;
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green); /* Set the background color to green */
        padding: 0.5rem 1rem; /* Add padding to make the background visible */
        color: white; /* Set the text color to white */
    }

`;





const PopUpGeneral = ({setShowPopup}) => {

    

    return (
        <>
            <PopupContainer onClick={() => setShowPopup(false)}>
                <PopupDialog onClick={(e) => e.stopPropagation()}>
                    <CloseButton onClick={() => setShowPopup(false)}>✕</CloseButton>
                    <Title>
                        Agenda tu hora con la Dra Bárbara García
                    </Title>
                    <BotonNotificarDone href="https://www.instagram.com/docbarbaragarcia/?utm_source=ig_web_button_share_sheet&igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
                        Instagram de la Doc
                    </BotonNotificarDone>
                
                    <BotonNotificarDone href="https://www.picktime.com/DraBarbaraGarcia" target="_blank">
                        Agenda tu hora
                    </BotonNotificarDone>
                </PopupDialog>
            </PopupContainer>
        </>
    );
}

export default PopUpGeneral;