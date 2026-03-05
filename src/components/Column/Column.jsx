import React from 'react';
import { useDrop } from 'react-dnd';
import { ItemTypes } from '../../constants/dndTypes';
import { useTasks } from '../../context/TasksContext';
import Card from '../Card/Card';
import {
  ColumnContainer,
  ColumnTitle,
  ColumnTitleText,
  CardsContainer
} from './Column.styled';

function Column({ title, cards }) {
  const { updateTask } = useTasks();

  const [{ isOver }, dropRef] = useDrop(() => ({
    accept: ItemTypes.CARD,
    drop: (item) => {
      if (item.status !== title) {
        const updatedTask = {
          ...item,
          status: title,
        };
        updateTask(item.id, updatedTask);
      }
    },
    collect: (monitor) => ({
      isOver: monitor.isOver(),
    }),
  }));

  return (
    <ColumnContainer ref={dropRef}>
      <ColumnTitle>
        <ColumnTitleText>{title}</ColumnTitleText>
      </ColumnTitle>
      <CardsContainer>
        {cards.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            title={card.title}
            category={card.theme}
            date={card.date}
            status={card.status}
            description={card.description}
          />
        ))}
      </CardsContainer>
    </ColumnContainer>
  );
}

export default Column;