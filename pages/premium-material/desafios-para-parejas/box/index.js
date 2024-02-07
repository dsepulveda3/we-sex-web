import { useEffect } from "react";
import Intro from "../../../../components/premiumMaterial/desafiosParejas/box/intro";
import Carrusel from "../../../../components/premiumMaterial/desafiosParejas/box/carrusel";
import ChallengeContent from "../../../../components/premiumMaterial/desafiosParejas/box/challengeContent";
import BoxContent from "../../../../components/premiumMaterial/desafiosParejas/box/boxContent";
import Comprar from "../../../../components/premiumMaterial/desafiosParejas/box/comprar";
import Dudas from "../../../../components/premiumMaterial/dudas";
import FloatingWhatsApp from "../../../../components/premiumMaterial/desafiosParejas/box/floatingWhatsapp";
import ComprarCheckOutPro from "../../../../components/premiumMaterial/desafiosParejas/box/comprarCheckOutPro";

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
        <ComprarCheckOutPro 
            title_mp='Cajita WeSexer (+5 desafíos)' 
            unit_price_mp= {28000} 
            quantity_mp={1} 
            currency_id_mp='ARS'
            redirection_succesful_mp='https://www.we.sex/premium-material/desafios-para-parejas/suscritobox' 
            redirection_failed_mp='https://www.we.sex/premium-material/desafios-para-parejas/box' />
        <Dudas />
        <FloatingWhatsApp />
        </>
    )
}
