
import React, {useState} from "react";
import styled from "@emotion/styled";

const Background = styled.div`
    background-color: white;
    height: 100%;
    display: flex;
    flex-direction: column;
    position: relative;
    
    padding: 0rem 25rem 0rem 25rem;
    z-index: 1;
    @media (max-width: 540px) {
        height: 100%;
        padding: 0rem;
    }
`;

// const WeSexText = styled.div`
//   position: absolute; /* Position the text absolutely within the container */
//   color: var(--green); /* Text color */
//   font-size: 24px; /* Font size */
//   font-weight: bold; /* Font weight */
//   pointer-events: none; /* Ensure the text doesn't block interaction with elements below */
//   font-family: "Averia Libre", sans-serif;
//   padding: 8rem;
//   z-index: 0;


//   /* Generate random positions */
//   top: ${Math.random() * 100}%; /* Random percentage for top position */
//   left: ${Math.random() * 100}%; /* Random percentage for left position */

//   /* You can add more styling here as needed */
// `;

const Border = styled.div`
    background-color: var(--green);
    border: 3px solid var(--violet); /* Add a white border */
    margin: 2rem 10rem 2rem 10rem;
    border-radius: 30px;
    display: flex;
    flex-direction: column;
    align-items: center; /* Center horizontally */
    padding: 1rem;
    @media (max-width: 540px) {
        border: 0px solid white; /* Add a white border */
        padding: 0rem;
        margin: 0rem;
        border-radius: 0px;
    
    }
`;

const Logo = styled.img`
    height: 150px;
    
    padding: 4rem;
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
    text-align: justify;

    span {
        background-color: var(--violet);
    }
`;

const SelectorButtonContainer = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    margin-top: 2rem;
    margin-bottom: 2rem;
    padding: 1rem;
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
    width: 80%;
    @media (max-width: 540px) {
        width: 90%;
        text-align: justify
    }
`;

const ContainerImage = styled.div`
    
    border-radius: 2rem;
    background-color: var(--green);
    height: 20%;
    width: 40%;
    margin: 2rem;
    @media (max-width: 540px) {
        height: 20%;
        width: 90%;
    }
    
`;

const PositionImg = styled.img`
    border-radius: 2rem;
`;

const Button = styled.a`
    
    color: var(--green);
    background-color: white;
    padding: 1.5rem;
    border-radius: 30px;

    &:hover {
        color: var(--violet); /* Change the color on hover */
      }
`;


const Penetracion = () => {

    const [selectedOption, setSelectedOption] = useState('op1');
    const [numeroAleatorio, setNumeroAleatorio] = useState(null);

    const generarNumeroAleatorio = () => {
        const nuevoNumero = Math.floor(Math.random() * 9) + 1;
        setNumeroAleatorio(nuevoNumero);
    };

    return(
        <Background>
            <Border>
            <Logo src='/img/logo_wesex_croped.png' />
            <Title>PENETRACIÓN</Title>
            <SubTitle>Posición v/s Estimulo</SubTitle>
        
            <Text style={{padding: "2rem"}}>Finalmente, llegó el turno de la penetración.</Text>
            <Text style={{padding: "2rem"}}>Es clave poder igualar o acercar esta brecha con estimulación previa. Y para eso, los venimos entrenando en desafíos anteriores.</Text>
            <Text style={{padding: "2rem"}}><span>Para la estimulación "previa" a penetrar, podrán usar todas las herramientas aprendidas:</span></Text>
            <Text style={{padding: "2rem"}}>
                <ul>
                    <li>
                        Masajes
                    </li>
                    <li>
                        Estimulación de zonas erógenas
                    </li>
                    <li>
                        Besos, caricias
                    </li>
                    <li>
                        Masturbación
                    </li>
                    <li>
                        Sexo oral
                    </li>
                    <li>
                        O simplemente elegir ir directo a los bifes jeje.
                    </li>
                </ul>
            </Text>
            <Text style={{padding: "2rem"}}><span>Una vez pasen a la penetración, les recomendamos lo siguiente:</span></Text>
            <Text style={{padding: "2rem"}}>
                <ul>
                    <li>
                        Empezar despacio.
                    </li>
                    <li>
                        Conectar con tu pareja y sentir cada sensación poco a poco.
                    </li>
                </ul>
            </Text>
            <Text style={{padding: "2rem"}}>
                <span>⚠️ Recuerden usar preservativo a menos que se hayan hecho estudios contra las ITS y usen otro método anticonceptivo 🙂</span>
            </Text>
            {/* <Text>Antes de comenzar con el desafío, les recomendamos leer este pequeño artículo sobre la brecha orgasmica:</Text> */}
            <Text style={{padding: "2rem"}}>
                Como nos gusta jugar, no vamos a dejar las cosas así nomás. Les recomendamos 8 posiciones para probar, y 6 estímulos diferentes. Con el dado wesexer van a poder sortear qué posición realizarán y con qué estímulo la van a combinar.
            </Text>
            <Text style={{padding: "2rem"}}>
                Además, les explicamos cómo aprovechar al máximo cada posición. Como siempre, con información de nuestros expertos 😎
            </Text>
            <div>
                <Text style={{padding: "2rem"}}>
                    {numeroAleatorio
                    ? <span>Lanza este botón y haz la posición correspondiente al número: {numeroAleatorio}</span>
                    : 'Presiona el botón para generar un número aleatorio.'}
                </Text>
                <SelectorButtonContainer>
                    <Button onClick={generarNumeroAleatorio}>Generar Número Aleatorio</Button>
                </SelectorButtonContainer>
            </div>
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
               
                <ContainerInstructions>
                <ul>
                    <li>
                        En vez de alejarse y hacer un movimiento de meter y sacar el pene (el famoso &quot;mete saca&quot;), la persona con pene debe pegarse a la pelvis de la persona con vulva y hacer el famoso “froti froti”.
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
                
                </>
            )}
            {selectedOption === 'op2' && (
                <>
                
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
            
                </>
            )}
            {selectedOption === 'op3' && (
                <>
              
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
                 
                </>
            )}
            {selectedOption === 'op4' && (
                <>
               
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
          
                </>
            )}
            {selectedOption === 'op5' && (
                <>
                
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
               
                </>
            )}
            {selectedOption === 'op6' && (
                <>
           
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
           
                </>
            )}
            {selectedOption === 'op7' && (
                <>
                
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
                
                </>
            )}
            {selectedOption === 'op8' && (
                <>
          
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
              
                </>
            )}
            </Border>
        </Background>
    )
};

export default Penetracion;