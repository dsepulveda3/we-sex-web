import React from "react";
import { useState } from "react";
import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ContainerNotificarDone = styled.div`
    padding: 0.8rem;
    display: flex;
    justify-content: center;

`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    font-size: 1.2rem;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 14px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;


const Diagnostic = ({origin}) => {
    const router = useRouter();
    const link = "profile"

    const handleClick = () => {
        router.push(`/premium-material/desafios-para-parejas/${link}?origin=${origin}`);
    }
    return(
        <>
         <ContainerNotificarDone>
            {/* <BotonNotificarDone color="green" onClick={handleFeebackClick} > */}
            <BotonNotificarDone color="green" onClick={handleClick}>
                Ver diagnóstico de pareja
            </BotonNotificarDone>
        </ContainerNotificarDone>
        </>
    )
}

export default Diagnostic;