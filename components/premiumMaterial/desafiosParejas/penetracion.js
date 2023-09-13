
import React, {useState} from "react";
import styled from "@emotion/styled";

const Background = styled.div`
    background-color: var(--green);
    height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */

    @media (max-width: 540px) {
        height: 100vh;
    }

`;

const Logo = styled.img`
    height: 8%;
    display: block;
    margin: auto;
    padding: 1rem;
`;

const Title = styled.div`
    font-family: "Averia Libre", sans-serif;
    font-size: 3rem;
    font-weight: bold;
    text-align: center;
    padding: 2rem;
`;

const SubTitle= styled.div`
    width: 100%;
    font-family: "Averia Libre", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
    background-color: var(--violet);
    padding: 1rem;
`;

const Text = styled.div`
    font-family: "Karla", sans-serif;
    font-size: 2rem;
    font-weight: bold;
    text-align: center;
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
`;

const SelectorButton = styled.select`
    border-radius: 4rem;
    padding: 1rem 5rem 1rem 5rem;
    
`;

const ContainerInstructions = styled.div`
    text-align: justify
    justify-content: center;
    font-family: "Karla", sans-serif;
    padding: 2rem;
    color: black;
    border-radius: 2rem;
    background-color: white;
    width: 30%;
    @media (max-width: 540px) {
        width: 90%;
        text-align: justify
    }
`;

const Background2 = styled.div`
    background-color: var(--green);
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const ContainerImage = styled.div`
    
    border-radius: 2rem;
    background-color: var(--green);
    height: 20%;
    width: 30%;
    margin: 2rem;
    @media (max-width: 540px) {
        height: 15%;
        width: 90%;
    }
    
`;

const PositionImg = styled.img`
    border-radius: 2rem;
`;



const Penetracion = () => {

    const [selectedOption, setSelectedOption] = useState('op1');

    return(
        <Background>
            <Logo src='/img/logo_wesex_croped.png' />
            <Title>PENETRACIÓN</Title>
            <SubTitle>Posición v/s Estimulo</SubTitle>
            <Text style={{padding: "1rem"}}>Finalmente, llegó el turno de la penetración.</Text>
            {/* <Text>Antes de comenzar con el desafío, les recomendamos leer este pequeño artículo sobre la brecha orgasmica:</Text> */}
            <SelectorButtonContainer>
                <SelectorButton onChange={(e) => setSelectedOption(e.target.value)}>
                    <option value="op1">1-. Misionero con cercanía</option>
                    <option value="op2">2-. Basculeame todo</option>
                </SelectorButton>
            </SelectorButtonContainer>
            {selectedOption === 'op1' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        En vez de alejarse y hacer un movimiento de meter y sacar el pene &quot;el famoso ”mete saca”&quot;, la persona con pene debe pegarse a la pelvis de la persona con vulva y hacer el famoso “froti froti”.
                    </li>
                    <li>
                        Persona con pene: El movimiento es hacia arriba y hacia adelante. Friccionando tu pelvis contra el clítoris.
                    </li>
                    <li>
                        Es conveniente que la persona con vulva mantenga las piernas extendidas para dejar su pubis bien expuesto.
                    </li>
                    <li>
                        Otra variante es probar cerrar las piernas de la persona con vulva para mayor fricción.
                    </li>
                </ul>
                </ContainerInstructions>
                
                    <ContainerImage>
                        <PositionImg src='/img/positions/misionero-cercania.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op2' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Es la posición en la que más probabilidad tiene la persona con vulva de tener un orgásmo.
                    </li>
                    <li>
                        Es importante que en lugar de moverse hacia arriba y abajo,  busque frotar la vulva bien pegada a la pelvis de la persona con pene, con un movimiento hacia adelante y hacia atrás.
                    </li>
                </ul>
                </ContainerInstructions>
                
                    <ContainerImage>
                        <PositionImg src='/img/positions/basculeo.gif' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            
            
        </Background>
    )
};

export default Penetracion;