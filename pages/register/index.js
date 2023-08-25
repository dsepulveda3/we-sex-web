import React from 'react';
import RegisterForm from '../../components/registerForm';
import Layout from '../../components/general/Layout';
import { RegisterProvider } from '../../context/registerContext';



function Register(){
    return (
        <Layout>
            <RegisterProvider>
            <RegisterForm />
        </RegisterProvider>
        </Layout>
    )
}

export default Register;