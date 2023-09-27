import { useRouter } from "next/router";
import styled from "@emotion/styled";

const Arrow = styled.a`
    font-weight: bold;
    
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