import styled, { keyframes } from 'styled-components';

// Анимация спиннера
const spin = keyframes`
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
`;

// Анимация карточки из App.css
const cardAnimation = keyframes`
  0% {
    height: 0;
    opacity: 0;
  }
  100% {
    height: auto;
    opacity: 1;
  }
`;

// Основные стили
export const MainContainer = styled.main`
  width: 100%;
  background-color: #EAEEF6;
`;

export const MainBlock = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 22px 0 49px;
`;

export const MainContent = styled.div`
  width: 100%;
  display: flex;

  @media screen and (max-width: 1200px) {
    display: block;
  }
`;

export const Column = styled.div`
  width: 20%;
  margin: 0 auto;
  display: block;

  @media screen and (max-width: 1200px) {
    width: 100%;
    margin: 0 auto;
    display: block;
  }
`;

export const ColumnTitle = styled.div`
  padding: 0 10px;
  margin: 15px 0;
`;

export const ColumnTitleText = styled.p`
  color: #94A6BE;
  font-size: 14px;
  font-weight: 600;
  line-height: 1;
  text-transform: uppercase;
`;

export const CardsContainer = styled.div`
  width: 100%;
  display: block;
  position: relative;

  @media screen and (max-width: 1200px) {
    width: 100%;
    display: flex;
    overflow-y: auto;
  }
`;

// Стили для состояния загрузки и ошибки
export const LoadingContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
`;

export const LoadingSpinner = styled.div`
  width: 50px;
  height: 50px;
  border: 4px solid #f3f3f3;
  border-top: 4px solid #565eef;
  border-radius: 50%;
  animation: ${spin} 1s linear infinite;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    border-width: 3px;
  }
`;

export const LoadingText = styled.p`
  font-size: 18px;
  color: #94a6be;
  font-weight: 500;
  text-align: center;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const ErrorContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 60vh;
  width: 100%;
  padding: 20px;
  text-align: center;
`;

export const ErrorText = styled.p`
  font-size: 18px;
  color: #ff6d6d;
  font-weight: 500;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

export const RetryButton = styled.button`
  background-color: #565eef;
  color: white;
  border: none;
  border-radius: 4px;
  padding: 12px 24px;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #4a52d4;
  }

  @media (max-width: 768px) {
    padding: 10px 20px;
    font-size: 13px;
  }
`;

// Глобальный контейнер из App.css
export const Container = styled.div`
  max-width: 1260px;
  width: 100%;
  margin: 0 auto;
  padding: 0 30px;

  @media screen and (max-width: 495px) {
    width: 100%;
    padding: 0 16px;
  }
`;