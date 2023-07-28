import React, { createContext, useContext, useState } from 'react';

const RegisterContext = createContext();

export function useRegisterContext() {
  return useContext(RegisterContext);
}

export function RegisterProvider({ children }) {
  const [formData, setFormData] = useState({
    email: '',
    password: '',
    confirmPassword: '',
  });

  const [stepOneCompleted, setStepOneCompleted] = useState(false);

  const updateFormData = (data) => {
    setFormData((prevData) => ({ ...prevData, ...data }));
  };

  return (
    <RegisterContext.Provider value={{ formData, updateFormData, stepOneCompleted, setStepOneCompleted }}>
      {children}
    </RegisterContext.Provider>
  );
}
