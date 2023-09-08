import React from "react";
import { useAuth } from '../../context/authUserContext';
import {
    BotonArs,
    AppleImage
} from './appleSingInButtonStyles.js';

export default function AppleSingInButton({origin}) {
    const { signInWithApple } = useAuth();

    const handleSignInWithApple = () => {
        signInWithApple(origin);
    };


    return (
        <BotonArs onClick={handleSignInWithApple}>
        <AppleImage src="img/auth/apple.png" />
            Entrar con Apple
        </BotonArs>
    )
}