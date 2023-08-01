import React from "react";
import { useAuth } from '../../context/authUserContext';
import {
    BotonArs,
    AppleImage
} from './appleSingInButtonStyles.js';

export default function AppleSingInButton() {
    const { signInWithApple } = useAuth();

    const handleSignInWithApple = () => {
        signInWithApple();
    };


    return (
        <BotonArs onClick={handleSignInWithApple}>
        <AppleImage src="img/auth/apple.png" />
            Entrar con Apple
        </BotonArs>
    )
}