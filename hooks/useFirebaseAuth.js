import { useState, useEffect } from 'react';
import Router, { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { 
  getAuth, 
  signInWithRedirect,
  signInWithPopup,
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import firebase from '../config/firebase';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    accessToken: user.accessToken
});

const auth = getAuth(firebase);

export default function useFirebaseAuth() {
    const router = useRouter();
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        console.log(formattedUser);
        setAuthUser(formattedUser);
        setLoading(false);
    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
    };

    const signInWithCredentials = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success('Bienvenido de nuevo!');
        })
        .catch((error) => {
            const errorCode = error.code;
            if (errorCode === 'auth/wrong-password'){
              toast.error('Contraseña incorrecta');
            }
            else if (errorCode === 'auth/user-not-found'){
              toast.error('No existe una cuenta con este correo');
            } else {
              toast.error('Hubo un error al iniciar sesión');
            }
        });

    const createUserWithCredentials = (email, password) =>
        createUserWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                console.log("Registered")
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorMessage)
            });

    const signOutAndClear = () =>
        signOut(auth).then(() => {
            toast.success('Cierre de sesión exitoso');
            clear();
        }).catch((error) => {
            toast.error('Hubo un error al cerrar sesión');
        });

    const signInWithGoogle = async () => {
      const provider = new GoogleAuthProvider();
      signInWithPopup(auth, provider)
      .then(() => {
        toast.success('Bienvenido de nuevo!');
        })
        .catch((error) => {
            console.log(error);
            toast.error('Hubo un error al iniciar sesión');
        });
    };

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        loading,
        signInWithCredentials,
        signInWithGoogle,
        createUserWithCredentials,
        signOutAndClear
    };
}