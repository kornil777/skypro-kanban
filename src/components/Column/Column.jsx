import React from 'react';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnTitleText
} from './Column.styled.js';

function Column({ title, cards }) {
  return (
    <ColumnContainer>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <div className="cards">
        {cards.map((card) => (
          <Card 
            key={card.id}
            id={card.id}
            title={card.title} 
            category={card.theme} 
            date={card.date} 
          />
        ))}
      </div>
    </ColumnContainer>
  );
}

export default Column;