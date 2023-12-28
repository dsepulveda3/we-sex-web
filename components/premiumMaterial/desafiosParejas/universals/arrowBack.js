import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Arrow = styled.a`
    font-weight: bold;
    margin-right: auto; /* Pushes "Atrás" button to the left */
    
    @media (max-width: 540px) {
        padding: 0.5rem;
    }

    
`;
const ContainerNotificarDone = styled.div`
    padding: 2rem;
    display: flex;
    justify-content: center;
    margin-right: auto; /* Pushes "Atrás" button to the left */

`;

const BotonNotificarDone = styled.a`
    background-color: ${(props) => (props.color === "violet" ? "var(--violet)" : "var(--green)")};
    font-size: 1.4rem;
    color: white;
    border: none;
    border-radius: 20px;
    padding: 5px 20px;
    cursor: pointer;
    font-weight: bold;
    box-shadow: 0px 4px 6px rgba(0, 0, 0, 0.1); /* Add a box shadow */

`;



const ArrowBack = ({url, color = "green"}) => {
    const router = useRouter();

    const handleArrowClick = () => {
        router.push(url);
    }

    return(
        <ContainerNotificarDone>
            <BotonNotificarDone color={color} onClick={handleArrowClick}>
                Atrás
            </BotonNotificarDone>
        </ContainerNotificarDone>
    );
}

export default ArrowBack;