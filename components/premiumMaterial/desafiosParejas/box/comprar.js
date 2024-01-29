import styled from "@emotion/styled";
import BotonUniversal from "../../botonUniversal";

const Background = styled.div`

    
    text-align: center;
    margin-top: 6rem;
    margin-bottom: 6rem;


`;

const Text = styled.div`

    font-family: "Karla", sans-serif;
    font-size: 2.2rem;
    font-weigth: bold;
    text-align: center;
    color: white;
    margin-bottom: 4rem;

    span {
        font-family: "Averia Libre", sans-serif;
        background-color: var(--green);
        padding: 0.3rem 0.5rem;
        color: white;
    }



    @media(max-width: 540px) {
        font-size: 2rem;
    }
`;

const ByLabel = styled.div`
    font-size: 1rem;
    font-weight: bold;
    font-style: italic;
    margin-top: 1rem;
    color:  #00AEEF;
    text-align: center;
    margin-left: 2rem;
`;


const PriceContainer = styled.div`
    border: 2px solid #00AEEF;
    padding: 2rem;
    border-radius: 3rem;
    transition: all 2s ease;
    &:hover {
        background-color: white;
        color: var(--violet);
    }

    @media(min-width: 540px) {
        margin-left: 20rem;
        margin-right: 20rem;
    }

        `;

const Amount = styled.div`
    font-size: 2rem;
    font-family: "Karla", sans serif;
    margin-bottom: 2rem;
    font-weight: bold;

}

`;

const Comprar = () => {

    return(
        <Background>
        <Text><span>COMPRA LA CAJITA WESEXER</span></Text>
            <PriceContainer>
                <Amount style={{color: "#00AEEF"}}>AR$ 26.000</Amount>
                <BotonUniversal
                style={{fontSize: "2rem", margin: "1rem 0rem 0rem 2rem" }}
                link_redireccion="https://mpago.la/1XH5JXQ"
                text="Compra Argentina"
                textColor='white'
                bgColor='#00AEEF'
                bgColorHover='var(--green)'
                />
                <ByLabel>By Mercado Pago</ByLabel>
            </PriceContainer>
            <br/>
            <br/>
            <PriceContainer style={{border: "2px solid black"}}>
                <Amount style={{color: "black"}}>U$D 35</Amount>
                <BotonUniversal
                style={{fontSize: "2rem", margin: "1rem 0rem 0rem 2rem" }}
                // link_redireccion={stripe_basic_chile}
                text="Compra internacional"
                textColor='white'
                bgColor='black'
                bgColorHover='var(--green)'
            />
            <ByLabel style={{color: "black"}}>By Stipe</ByLabel>
            </PriceContainer>
     
        
        </Background>
    )
}

export default Comprar;