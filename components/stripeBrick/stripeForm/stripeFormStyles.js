import {Container} from 'reactstrap';
import styled from '@emotion/styled';


export const Background = styled.div`
    padding-top: 7.5rem;
    padding-bottom: 7.5rem;
    // display: flex;
    // align-items: center;
    justify-content: center;
    background-color: var(--violet);
    // background-image: url("/img/auth/cta-bg.jpg");
    background-position: center;
    background-size: 100% 100%;
    
    
    min-height: 100vh;
    position: relative;
    
    @media(max-width: 540px){
        background-attachment: scroll;
        text-align: center;
        padding-bottom: 3rem;
    }
`;