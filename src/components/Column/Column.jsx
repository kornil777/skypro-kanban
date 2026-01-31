import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnTitleText,
  CardsContainer
} from './Column.styled';

function Column({ title, cards }) {
  return (
    <ColumnContainer className="column">
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <CardsContainer className="cards">
        {cards.map((card) => (
          <Card 
            key={card.id}
            id={card.id}
            title={card.title} 
            category={card.theme} 
            date={card.date} 
          />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;