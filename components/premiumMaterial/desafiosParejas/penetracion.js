
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
    // justify-content: center;
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
        height: 20%;
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
                    <option value="op3">3-. Levitate de dua lipa</option>
                    <option value="op4">4-. AbraSex</option>
                    <option value="op5">5-. Boca abajo</option>
                    <option value="op6">6-. Costadito</option>
                    <option value="op7">7-. Pe-Perreito</option>
                    <option value="op8">8-. Patitas al hombro</option>
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
            {selectedOption === 'op3' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Posición para estimular el punto G.
                    </li>
                    <li>
                        Levantando las caderas en la posición del misionero, podemos estimular mejor la pared anterior de la vagina en la zona del Punto G.
                    </li>
                    <li>
                        Persona con vulva: Subir la cadera y realizar pequeños movimientos de pelvis hacia tu pareja
                    </li>
                    <li>
                        Persona con pene: Puedes ayudar a tu pareja a levantarse o sostenerle la cadera.
                    </li>
                    <li>
                        Wesexer tip: recomendamos el contacto visual en esta posición.
                    </li>
                </ul>
                </ContainerInstructions>
                    <ContainerImage>
                        <PositionImg src='/img/positions/levitate.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op4' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Acá queda aún más apretado y friccionado el clítoris con la pelvis de tu pareja sexual.
                    </li>
                    <li>
                        La persona con pene se queda quieta y la persona con vulva va y viene buscando la fricción.
                    </li>
                    <li>
                        Disfruten de la cercanía de sus cuerpos. Esta posición es ideal para sincronizar la respiración.
                    </li>
                    <li>
                        Pueden combinar con besos en el cuello 💥
                    </li>
                </ul>
                </ContainerInstructions>
                    <ContainerImage>
                        <PositionImg src='/img/positions/abrasex.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op5' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Esta posición permite a la persona con vulva friccionar el clítoris contra sus manos o contra el colchón mientras es penetrada.
                    </li>
                    <li>
                        Los besos en la espalda y en el cuello suman mucho.
                    </li>
                    <li>
                        Agarrar los senos de tu pareja o estimularle manualmente el clitoris para mas placer 🔥.
                    </li>
                    <li>
                        Si les gusta a ambos, tirar un poquito del pelo queda comodo en esta posición. Siempre con cuidado y consentimiento.
                    </li>
                </ul>
                </ContainerInstructions>
                    <ContainerImage>
                        <PositionImg src='/img/positions/boca_abajo.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op6' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Acá la vulva queda en fricción con la pierna de tu pareja.
                    </li>
                    <li>
                        Persona con vulva: Vas a buscar que tu vulva quede entrelazada con las piernas de tu pareja y mover tus caderas para buscar la fricción
                    </li>
                    <li>
                        Persona con pene: entrar y salir suavemente, sintiendo cada sensación.
                    </li>
                </ul>
                </ContainerInstructions>
                    <ContainerImage>
                        <PositionImg src='/img/positions/costadito.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op7' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Permite buena estimulación del canal vaginal.
                    </li>
                    <li>
                        Podes además estimular tu clítoris de forma manual.
                    </li>
                    <li>
                        Jugá con la inclinación de tu torso para buscar la estimulación y presión que mas placer te produzca. Hay que ir con cuidado para no lastimar el pene.
                    </li>
                    <li>
                        Persona con pene: Relajate y disfruta.
                    </li>
                </ul>
                </ContainerInstructions>
                    <ContainerImage>
                        <PositionImg src='/img/positions/pe_perreito.jpg' />
                    </ContainerImage> 
                </Background2>  
                </>
            )}
            {selectedOption === 'op8' && (
                <>
                <Background2>
                <ContainerInstructions>
                <ul>
                    <li>
                        Al levantar las piernas el canal vaginal se acorta y el cuello del útero queda más expuesto.
                    </li>
                    <li>
                        Recomendamos entrar y salir variando la velocidad e intensidad.
                    </li>
                    <li>
                        Posición no recomendada para penes de más de 16 cm.
                    </li>
                </ul>
                </ContainerInstructions>
                <ContainerImage>
                    <PositionImg src='/img/positions/patitas_al_hombro.jpg' />
                </ContainerImage>
                </Background2>  
                </>
            )}
        </Background>
    )
};

export default Penetracion;