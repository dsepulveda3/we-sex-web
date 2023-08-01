import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import { toast } from 'react-toastify';
import { 
  getAuth,
  fetchSignInMethodsForEmail,
  signInWithPopup,
  GoogleAuthProvider, 
  signInWithEmailAndPassword, 
  createUserWithEmailAndPassword,
  signOut
} from 'firebase/auth';
import firebase from '../config/firebase';
import {
    registerUser,
    sendSocialAuthUser,
    submitConfirmationCode,
    sendConfirmationCode,
    getUser
} from '../requests/authService';

const formatAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    accessToken: user.accessToken,
});

const formatSocialAuthUser = (user) => ({
    uid: user.uid,
    email: user.email,
    firstName: user.displayName.split(' ')[0],
    lastName: user.displayName.split(' ')[1],
});

const auth = getAuth(firebase);

export default function useFirebaseAuth() {
    const [authUser, setAuthUser] = useState(null);
    const [loading, setLoading] = useState(true);
    const [user, setUser] = useState(null);
    const router = useRouter();

    const authStateChanged = async (authState) => {
        if (!authState) {
            setLoading(false)
            return;
        }
        setLoading(true)
        var formattedUser = formatAuthUser(authState);
        setAuthUser(formattedUser);
        await fetchUserFromDB();
        setLoading(false);
    };

    const fetchUserFromDB = async () => {
        const response = await getUser();
        if (response.data) {
            setUser(response.data);
        }
    };

    const clear = () => {
        setAuthUser(null);
        setLoading(true);
        setUser(null);
    };

    const signInWithCredentials = async (email, password) => 
        fetchSignInMethodsForEmail(auth, email).then((signInMethods) => {
            if (signInMethods.includes('password')) {
                ExecuteSignInWithCredentials(email, password);
            } else {
                toast.error('No existe una cuenta registrada por este metodo con este correo');
            }
        });

    const ExecuteSignInWithCredentials = async (email, password) =>
        signInWithEmailAndPassword(auth, email, password)
        .then(() => {
            toast.success('Bienvenido de nuevo!');
            router.push('/');
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

    const signInWithGoogle = async () => {
        const provider = new GoogleAuthProvider();
        signInWithPopup(auth, provider)
            .then((result) => {
                handleSocialAuth(result.user);
            })
            .catch((error) => {
                toast.error('Hubo un error al iniciar sesión');
            });
    };

    const handleSocialAuth = async (user) => {
        const userData = formatSocialAuthUser(user);
        const response = await sendSocialAuthUser(userData);
        if (response.status === 200) {
            toast.success('Bienvenido de nuevo!');
            router.push('/');
        } else {
            toast.error('Hubo un error al iniciar sesión');
        }
    };

    const sendResetPasswordEmail = (email) => {
        sendPasswordResetEmail(auth, email).then(() => {
            toast.success('Se ha enviado un correo para restablecer tu contraseña');
        }).catch((error) => {
            errorCode = error.code;
            if (errorCode === 'auth/user-not-found'){
                toast.error('No existe una cuenta con este correo');
            }
            else if (errorCode === 'auth/invalid-email'){
                toast.error('Correo invalido');
            }
            else {
                toast.error('Hubo un error al enviar el correo');
            }
        }); 
    };

    const registerUserWithFormData = (formData) => 
        fetchSignInMethodsForEmail(auth, formData.email).then((signInMethods) => {
            if (signInMethods.length > 0) {
                toast.error('Ya existe una cuenta registrada con este correo');
            } else {
                executeCreateUserWithCredentials(formData);
            }
        }).catch((error) => {
            toast.error('Hubo un error al crear la cuenta');
        });

    const executeCreateUserWithCredentials = (formData) =>
        createUserWithEmailAndPassword(auth, formData.email, formData.password)
            .then((userCredential) => {
                createUserInBackend({...formData, firebaseId: userCredential.user.uid});
            })
            .catch((error) => {
                const errorCode = error.code;
                const errorMessage = error.message;
                console.log("error", errorMessage)
        });
    
    const createUserInBackend = async (formData) => {
        registerUser(formData).then((response) => {
            if (response.status === 201) {
                toast.success('Cuenta creada exitosamente');
                router.push('/');
            }
        }).catch((error) => {
            toast.error('Hubo un error al crear la cuenta');
            auth.currentUser.delete()
                .then(() => {
                    signOut(auth);
                    clear();
                }
            ).catch((error) => {
                console.log("error", error)
            });
        }
    )
    };

    const emailIsInUse = (email) =>
        fetchSignInMethodsForEmail(auth, email).then((signInMethods) => {
            if (signInMethods.length > 0) {
                return true;
            } else {
                return false;
            }
        }).catch((error) => {
            return true;
        });

    const signOutAndClear = () =>
        signOut(auth).then(() => {
            toast.success('Cierre de sesión exitoso');
            clear();
        }).catch((error) => {
            toast.error('Hubo un error al cerrar sesión');
        });

    useEffect(() => {
        const unsubscribe = auth.onAuthStateChanged(authStateChanged);
        return () => unsubscribe();
    }, []);

    return {
        authUser,
        user,
        loading,
        signInWithCredentials,
        signInWithGoogle,
        registerUserWithFormData,
        signOutAndClear,
        emailIsInUse
    };
}