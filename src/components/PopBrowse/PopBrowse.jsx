import React, { useState, useEffect } from 'react';
import { useModal } from '../../context/ModalContext';
import Calendar from '../Calendar/Calendar';
import {
  PopBrowseContainer,
  PopBrowseOverlay,
  PopBrowseBlock,
  PopBrowseContent,
  PopBrowseTopBlock,
  PopBrowseTitle,
  CategoryBadge,
  StatusSection,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  PopBrowseWrap,
  PopBrowseForm,
  FormBrowseBlock,
  FormBrowseTextarea,
  ThemeDownCategories,
  PopBrowseButtons,
  ButtonGroup,
  BrowseButton,
  CloseButton
} from './PopBrowse.styled';

function PopBrowse() {
  const { isBrowseModalOpen, selectedCard, closeBrowseModal } = useModal();
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Нужно сделать');

  useEffect(() => {
    if (selectedCard) {
      setDescription('Описание задачи будет здесь...'); // Здесь нужно получить описание из карточки
      setSelectedStatus(selectedCard.status || 'Нужно сделать');
    }
  }, [selectedCard]);

  const handleClose = (e) => {
    if (e) e.preventDefault();
    setIsEditMode(false);
    closeBrowseModal();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // Здесь будет логика сохранения изменений
    console.log('Сохраняем изменения:', {
      id: selectedCard.id,
      description,
      status: selectedStatus
    });
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    // Восстановить оригинальные значения
    if (selectedCard) {
      setDescription('Описание задачи будет здесь...');
      setSelectedStatus(selectedCard.status || 'Нужно сделать');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      // Здесь будет логика удаления задачи
      console.log('Удаляем задачу:', selectedCard.id);
      closeBrowseModal();
    }
  };

  if (!isBrowseModalOpen || !selectedCard) return null;

  const statusOptions = [
    'Без статуса',
    'Нужно сделать', 
    'В работе',
    'Тестирование',
    'Готово'
  ];

  return (
    <PopBrowseContainer>
      <PopBrowseOverlay onClick={handleOverlayClick} />
      <PopBrowseBlock>
        <PopBrowseContent>
          <PopBrowseTopBlock>
            <PopBrowseTitle>{selectedCard.title}</PopBrowseTitle>
            <CategoryBadge $category={selectedCard.category.toLowerCase().replace(' ', '')}>
              <p>{selectedCard.category}</p>
            </CategoryBadge>
          </PopBrowseTopBlock>
          
          <StatusSection>
            <StatusTitle className="subttl">
              Статус
            </StatusTitle>
            <StatusThemes>
              {statusOptions.map((status) => (
                <StatusTheme 
                  key={status}
                  $active={selectedStatus === status}
                  $disabled={!isEditMode}
                  onClick={() => isEditMode && setSelectedStatus(status)}
                >
                  <p>{status}</p>
                </StatusTheme>
              ))}
            </StatusThemes>
          </StatusSection>
          
          <PopBrowseWrap>
            <PopBrowseForm>
              <FormBrowseBlock>
                <label htmlFor="textArea01" className="subttl">
                  Описание задачи
                </label>
                <FormBrowseTextarea
                  name="text"
                  id="textArea01"
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  readOnly={!isEditMode}
                />
              </FormBrowseBlock>
            </PopBrowseForm>
            <Calendar />
          </PopBrowseWrap>
          
          <ThemeDownCategories className="theme-down">
            <p className="categories__p subttl">Категория</p>
            <CategoryBadge $category={selectedCard.category.toLowerCase().replace(' ', '')}>
              <p>{selectedCard.category}</p>
            </CategoryBadge>
          </ThemeDownCategories>
          
          {!isEditMode ? (
            <PopBrowseButtons className="pop-browse__btn-browse">
              <ButtonGroup>
                <BrowseButton 
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={handleEdit}
                >
                  Редактировать задачу
                </BrowseButton>
                <BrowseButton 
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  Удалить задачу
                </BrowseButton>
              </ButtonGroup>
              <CloseButton 
                className="btn-browse__close _btn-bg _hover01"
                onClick={handleClose}
              >
                Закрыть
              </CloseButton>
            </PopBrowseButtons>
          ) : (
            <PopBrowseButtons className="pop-browse__btn-edit">
              <ButtonGroup>
                <BrowseButton 
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleSave}
                >
                  Сохранить
                </BrowseButton>
                <BrowseButton 
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleCancel}
                >
                  Отменить
                </BrowseButton>
                <BrowseButton 
                  className="btn-edit__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  Удалить задачу
                </BrowseButton>
              </ButtonGroup>
              <CloseButton 
                className="btn-edit__close _btn-bg _hover01"
                onClick={handleClose}
              >
                Закрыть
              </CloseButton>
            </PopBrowseButtons>
          )}
        </PopBrowseContent>
      </PopBrowseBlock>
    </PopBrowseContainer>
  );
}

export default PopBrowse;