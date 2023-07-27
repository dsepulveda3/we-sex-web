import React from "react";
import { useAuth } from '../../context/authUserContext';
import {
    BotonArs,
    GoogleImage
} from './googleSingInButtonStyles.js';

export default function GoogleSignInButton() {
    const { signInWithGoogle } = useAuth();

    const handleSignInWithGoogle = () => {
        signInWithGoogle();
    };


    return (
        <BotonArs onClick={handleSignInWithGoogle}>
        <GoogleImage src="img/auth/google.png" />
            Entrar con Google
        </BotonArs>
    )
}