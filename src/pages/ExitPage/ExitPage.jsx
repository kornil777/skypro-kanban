import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import {
  PageContainer,
  PageContent,
  ExitContainer,
  ExitBlock,
  ExitTitle,
  ExitMessage,
  ExitButtons,
  ExitButton,
  ExitCancelButton
} from './ExitPage.styled';

const ExitPage = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <PageContent>
        <ExitContainer>
          <ExitBlock>
            <ExitTitle>Выйти из аккаунта?</ExitTitle>
            <ExitMessage>
              Вы уверены, что хотите выйти из своего аккаунта?
              <br />
              После выхода вам потребуется снова войти в систему.
            </ExitMessage>
            
            <ExitButtons>
              <ExitButton 
                type="button" 
                onClick={handleExit}
                className="_hover01"
              >
                Да, выйти
              </ExitButton>
              <ExitCancelButton 
                type="button" 
                onClick={handleCancel}
                className="_btn-bor _hover03"
              >
                Нет, остаться
              </ExitCancelButton>
            </ExitButtons>
          </ExitBlock>
        </ExitContainer>
      </PageContent>
    </PageContainer>
  );
};

export default ExitPage;