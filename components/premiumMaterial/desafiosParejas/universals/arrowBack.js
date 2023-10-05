import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Arrow = styled.a`
    font-weight: bold;
    margin-right: auto; /* Pushes "Atrás" button to the left */
    
    @media (max-width: 540px) {
        padding: 0.5rem;
    }

    
`;


const ArrowBack = ({url}) => {
    const router = useRouter();

    const handleArrowClick = () => {
        router.push(url);
    }

    return(
        <Arrow onClick={handleArrowClick}>Atrás</Arrow>

    );
}

export default ArrowBack;