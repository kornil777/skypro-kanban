import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  PopExitContainer,
  PopExitOverlay,
  PopExitBlock,
  PopExitTitle,
  PopExitForm,
  PopExitButton
} from './PopExit.styled';

function PopExit() {
  const { showExitModal, logout, closeExitModal } = useAuth();
  const navigate = useNavigate();

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  const handleCancel = () => {
    closeExitModal();
  };

  if (!showExitModal) return null;

  return (
    <PopExitContainer>
      <PopExitOverlay onClick={handleCancel} />
      <PopExitBlock>
        <PopExitTitle>
          <h2>Выйти из аккаунта?</h2>
        </PopExitTitle>
        <PopExitForm>
          <PopExitButton 
            type="button" 
            onClick={handleExit}
            className="_hover01" 
            id="exitYes"
          >
            Да, выйти
          </PopExitButton>
          <PopExitButton 
            type="button" 
            onClick={handleCancel}
            $secondary 
            className="_hover03" 
            id="exitNo"
          >
            Нет, остаться
          </PopExitButton>
        </PopExitForm>
      </PopExitBlock>
    </PopExitContainer>
  );
}

export default PopExit;