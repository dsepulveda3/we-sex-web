import React, { useEffect } from 'react';
import { useRegisterContext } from '../../context/registerContext';
import StepOne from './stepOne';
import StepTwo from './stepTwo';

const RegisterForm = () => {
  const { stepOneCompleted, formData } = useRegisterContext();

  useEffect(() => {
    console.log("data:", formData);
    console.log(stepOneCompleted);
  }, [formData]);

  return (
    <div>
      {/* {stepOneCompleted ? <StepTwo /> : <StepOne />} */}
      <StepTwo />
    </div>
  );
};

export default RegisterForm;
