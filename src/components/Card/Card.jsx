import React from 'react';
import { useDrag } from 'react-dnd';
import { ItemTypes } from '../../constants/dndTypes';
import {
  CardsItem,
  CardsCard,
  CardGroup,
  CardTheme,
  CardThemeText,
  CardBtn,
  CardBtnDot,
  CardTitle,
  CardContent,
  CardDate,
  CardDateText
} from './Card.styled';

function Card({ id, title, category, date, status, description }) {
  const isDone = status === 'Готово';
  const [{ isDragging }, dragRef] = useDrag(() => ({
    type: ItemTypes.CARD,
    item: { 
      id, 
      title, 
      category, 
      date, 
      status, 
      description,
      topic: category 
    },
    collect: (monitor) => ({
      isDragging: monitor.isDragging(),
    }),
  }));

  const formatDate = (dateString) => {
    if (!dateString) return '30.10.23';
    const date = new Date(dateString);
    if (isNaN(date.getTime())) return '30.10.23';
    return date.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).replace(/\//g, '.');
  };

  const formattedDate = formatDate(date);

  return (
    <CardsItem
      ref={dragRef}
      onClick={() => window.location.assign(`/card/${id}`)}
      style={{
        opacity: isDragging ? 0.5 : 1,
        cursor: 'grab',
      }}
    >
      <CardsCard>
        <CardGroup>
          <CardTheme $category={category}>
            <CardThemeText>{category}</CardThemeText>
          </CardTheme>
          <CardBtn onClick={(e) => e.stopPropagation()}>
            <CardBtnDot />
            <CardBtnDot />
            <CardBtnDot />
          </CardBtn>
        </CardGroup>
        <CardContent>
          <CardTitle $isDone={isDone}>{title}</CardTitle>
          <CardDate>
            <svg xmlns="http://www.w3.org/2000/svg" width="13" height="13" viewBox="0 0 13 13" fill="none">
              <g clipPath="url(#clip0_1_415)">
                <path d="M10.5625 2.03125H2.4375C1.7644 2.03125 1.21875 2.5769 1.21875 3.25V10.5625C1.21875 11.2356 1.7644 11.7812 2.4375 11.7812H10.5625C11.2356 11.7812 11.7812 11.2356 11.7812 10.5625V3.25C11.7812 2.5769 11.2356 2.03125 10.5625 2.03125Z" strokeWidth="0.8" strokeLinejoin="round" />
                <path d="M11.7812 4.0625H1.21875M3.25 1.21875V2.03125V1.21875ZM9.75 1.21875V2.03125V1.21875Z" strokeWidth="0.8" strokeLinecap="round" strokeLinejoin="round" />
              </g>
              <defs>
                <clipPath id="clip0_1_415">
                  <rect width="13" height="13" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <CardDateText>{formattedDate}</CardDateText>
          </CardDate>
        </CardContent>
      </CardsCard>
    </CardsItem>
  );
}

export default Card;