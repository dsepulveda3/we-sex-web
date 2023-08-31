import { createContext, useContext, Context } from 'react'
import useFirebaseAuth from '../hooks/useFirebaseAuth';

const authUserContext = createContext({
    authUser: null,
    loading: true,
    user: null,
    isSubscribed: false,
    signInWithEmailAndPassword: async () => {},
    signInWithGoogle: async () => {},
    signInWithApple: async () => {},
    createUserWithEmailAndPassword: async () => {},
    emailIsInUse: async () => {},
    signOutAndClear: async () => {},
    submitVerificationCode: async () => {},
    sendResetPasswordEmail: async () => {},
});

export function AuthUserProvider({ children }) {
    const auth = useFirebaseAuth();
    return <authUserContext.Provider value={auth}>{children}</authUserContext.Provider>;
}

export const useAuth = () => useContext(authUserContext);