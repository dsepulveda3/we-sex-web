import { useState, useEffect } from 'react'
import { getAuth, signInWithPopup, GoogleAuthProvider } from 'firebase/auth';
import firebase from '../config/firebase';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email
});

const auth = getAuth(firebase);

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        console.log(authState);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signInWithEmailAndPassword = (email, password) =>
        auth.signInWithEmailAndPassword(email, password);

    const createUserWithEmailAndPassword = (email, password) =>
        auth.createUserWithEmailAndPassword(email, password);

    const signOut = () =>
        auth.signOut().then(clear);

    const signInWithGoogle = async () => {
        try {
            const provider = new GoogleAuthProvider();
            await signInWithPopup(auth, provider);
        } catch (error) {
            console.error('Error signing in with Google:', error);
        }
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithEmailAndPassword,
        signInWithGoogle,
        createUserWithEmailAndPassword,
        signOut
    };
}