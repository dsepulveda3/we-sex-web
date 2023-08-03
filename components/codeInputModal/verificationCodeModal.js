import React, { useState, useEffect } from 'react';
import CodeInputModal from './components/codeInputModal';
import { useAuth } from '../../context/authUserContext';

const VerificationCodeModal = () => {
  const [showModal, setShowModal] = useState(false);
  const { loading, authUser, user } = useAuth();

  useEffect(() => {
    if (user){
      if (!user.emailConfirm.confirmed && user.emailConfirm.required){
        setShowModal(true);
      }
    }
  }, [user])

  return (
    <>
      {showModal && (
        <>
          <CodeInputModal setModalStatus={setShowModal}/>
        </>
      )}
    </>
  );
};

export default VerificationCodeModal;