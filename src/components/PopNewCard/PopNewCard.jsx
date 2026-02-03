import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import Calendar from '../Calendar/Calendar';
import {
  PopNewCardContainer,
  PopNewCardOverlay,
  PopNewCardBlock,
  PopNewCardContent,
  PopNewCardTitle,
  PopNewCardClose,
  PopNewCardWrap,
  PopNewCardForm,
  FormNewBlock,
  FormNewInput,
  FormNewTextarea,
  FormNewCreateButton,
  Categories,
  CategoriesTitle,
  CategoriesThemes,
  CategoryTheme
} from './PopNewCard.styled';

function PopNewCard() {
  const { isNewCardModalOpen, closeNewCardModal } = useModal();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  const handleClose = (e) => {
    if (e) e.preventDefault();
    closeNewCardModal();
    resetForm();
  };

  const resetForm = () => {
    setTitle('');
    setDescription('');
    setSelectedCategory('Web Design');
  };

  const handleCreateTask = (e) => {
    e.preventDefault();
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }

    // Здесь будет логика создания задачи
    console.log('Создаем задачу:', {
      title,
      description,
      category: selectedCategory
    });

    closeNewCardModal();
    resetForm();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  if (!isNewCardModalOpen) return null;

  return (
    <PopNewCardContainer>
      <PopNewCardOverlay onClick={handleOverlayClick} />
      <PopNewCardBlock>
        <PopNewCardContent>
          <PopNewCardTitle>
            <h3>Создание задачи</h3>
          </PopNewCardTitle>
          <PopNewCardClose onClick={handleClose}>&#10006;</PopNewCardClose>
          <PopNewCardWrap>
            <PopNewCardForm onSubmit={handleCreateTask}>
              <FormNewBlock>
                <label htmlFor="formTitle" className="subttl">
                  Название задачи
                </label>
                <FormNewInput
                  type="text"
                  name="name"
                  id="formTitle"
                  placeholder="Введите название задачи..."
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus
                  required
                />
              </FormNewBlock>
              <FormNewBlock>
                <label htmlFor="textArea" className="subttl">
                  Описание задачи
                </label>
                <FormNewTextarea
                  name="text"
                  id="textArea"
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </FormNewBlock>
            </PopNewCardForm>
            <Calendar />
          </PopNewCardWrap>
          
          <Categories>
            <CategoriesTitle className="subttl">
              Категория
            </CategoriesTitle>
            <CategoriesThemes>
              <CategoryTheme 
                $category="orange" 
                $active={selectedCategory === 'Web Design'}
                onClick={() => setSelectedCategory('Web Design')}
              >
                <p>Web Design</p>
              </CategoryTheme>
              <CategoryTheme 
                $category="green" 
                $active={selectedCategory === 'Research'}
                onClick={() => setSelectedCategory('Research')}
              >
                <p>Research</p>
              </CategoryTheme>
              <CategoryTheme 
                $category="purple" 
                $active={selectedCategory === 'Copywriting'}
                onClick={() => setSelectedCategory('Copywriting')}
              >
                <p>Copywriting</p>
              </CategoryTheme>
            </CategoriesThemes>
          </Categories>
          
          <FormNewCreateButton 
            type="button" 
            onClick={handleCreateTask}
            className="_hover01" 
            id="btnCreate"
          >
            Создать задачу
          </FormNewCreateButton>
        </PopNewCardContent>
      </PopNewCardBlock>
    </PopNewCardContainer>
  );
}

export default PopNewCard;