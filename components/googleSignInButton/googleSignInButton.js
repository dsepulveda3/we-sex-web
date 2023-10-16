import React from "react";
import { useAuth } from '../../context/authUserContext';
import {
    BotonArs,
    GoogleImage
} from './googleSingInButtonStyles.js';

export default function GoogleSignInButton({origin}) {
    const { signInWithGoogle } = useAuth();

    const handleSignInWithGoogle = () => {
        //console.log(origin);
        signInWithGoogle(origin);
    };


    return (
        <BotonArs onClick={handleSignInWithGoogle}>
        <GoogleImage src="img/auth/google.png" />
            Entrar con Google
        </BotonArs>
    )
}