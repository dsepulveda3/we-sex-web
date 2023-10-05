import React from "react";
import styled from "@emotion/styled";

const Background = styled.div`
    background-color: var(--green);
    height: 100vh;
`;


const Dosis1 = () => {

    return(
        <Background>
            <div style={{color: "black"}}>Dosis</div>
        </Background>
    )

}

export default Dosis1;