import React from 'react';
import RegisterForm from '../../components/registerForm';
import { RegisterProvider } from '../../context/registerContext';



function Register(){
    return (
        <RegisterProvider>
            <RegisterForm />
        </RegisterProvider>
    )
}

export default Register;