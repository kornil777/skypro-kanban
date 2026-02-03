import React from 'react';
import { Link } from 'react-router-dom';
import {
  NotFoundContainer,
  NotFoundContent,
  NotFoundTitle,
  NotFoundText,
  NotFoundButton
} from './NotFoundPage.styled';

const NotFoundPage = () => {
  return (
    <NotFoundContainer>
      <NotFoundContent>
        <NotFoundTitle>404</NotFoundTitle>
        <NotFoundText>Страница не найдена</NotFoundText>
        <NotFoundButton as={Link} to="/" className="_hover01">
          Вернуться на главную
        </NotFoundButton>
      </NotFoundContent>
    </NotFoundContainer>
  );
};

export default NotFoundPage;