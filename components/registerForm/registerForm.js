import React, { useEffect } from 'react';
import { useRegisterContext } from '../../context/registerContext';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

const RegisterForm = () => {
  const { stepOneCompleted } = useRegisterContext();

  return (
    <div>
      {stepOneCompleted ? <StepTwo /> : <StepOne />}
    </div>
  );
};

export default RegisterForm;
