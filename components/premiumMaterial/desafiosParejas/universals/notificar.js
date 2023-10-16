import styled from "@emotion/styled";
import { useRouter } from "next/router";

const ContainerNotificarDone = styled.div`
    padding: 1rem;
    display: flex;
    justify-content: center;
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

const Notificar = ({ message, url, color = "green" }) => {
    const router = useRouter();

    const handleMessage = () => {
        window.open(url, "_blank"); // Opens the URL in a new tab or window
    };

    return (
        <ContainerNotificarDone>
            <BotonNotificarDone color={color} onClick={handleMessage}>
                {message} 
            </BotonNotificarDone>
        </ContainerNotificarDone>
    );
};

export default Notificar;