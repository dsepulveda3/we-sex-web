import { useEffect } from "react";
import Intro from "../../../../components/premiumMaterial/desafiosParejas/box/intro";
import Carrusel from "../../../../components/premiumMaterial/desafiosParejas/box/carrusel";
import ChallengeContent from "../../../../components/premiumMaterial/desafiosParejas/box/challengeContent";
import BoxContent from "../../../../components/premiumMaterial/desafiosParejas/box/boxContent";
import Comprar from "../../../../components/premiumMaterial/desafiosParejas/box/comprar";
import Dudas from "../../../../components/premiumMaterial/dudas";

export default function DesafiosBox() {

    useEffect(() => {
        // Check if window is defined (client-side)
        if (typeof window !== 'undefined') {
          // This code will only run on the client side
            const currentRoute = window.location.pathname + window.location.search;
    
            // Send the complete route to Freshpaint as a custom event
            if(currentRoute === '/premium-material/desafios-para-parejas/box'){
                freshpaint.track("PAGE VIEW - Cajita WeSexer", {"Path": currentRoute});
            }
            
        }
      }, []);
    


    return(
        <>
        <Intro />
        <Carrusel/>
        <BoxContent />
        <ChallengeContent />
        <Comprar />
        <Dudas />
        </>
    )
}
