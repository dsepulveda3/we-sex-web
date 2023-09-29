import styled from "@emotion/styled";
import { useRouter } from "next/router";


const ContainerNotificarDone = styled.div`
    padding: 2rem;

`;

const BotonNotificarDone = styled.a`
    background-color: var(--green);
    color: white;
    border: none;
    border-radius: 20px;
    padding: 15px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;


const Notificar = ({message, url}) => {
    const router = useRouter();

    const handleMessage = () => {
        router.push(url);
    };
    return(
        <ContainerNotificarDone>
            <BotonNotificarDone onClick={handleMessage}>
                {message}
            </BotonNotificarDone>
        </ContainerNotificarDone>
    );
}

export default Notificar;