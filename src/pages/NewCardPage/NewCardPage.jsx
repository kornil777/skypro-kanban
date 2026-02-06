import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Calendar from '../../components/Calendar/Calendar';
import {
  PageContainer,
  PageContent,
  NewCardContainer,
  NewCardBlock,
  NewCardTitle,
  NewCardForm,
  FormBlock,
  FormInput,
  FormTextarea,
  CategoriesSection,
  CategoriesTitle,
  CategoriesGrid,
  CategoryCard,
  CategoryIcon,
  CategoryName,
  CalendarSection,
  ActionButtons,
  CreateButton,
  CancelButton
} from './NewCardPage.styled';

const NewCardPage = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  const categories = [
    { id: 'webdesign', name: 'Web Design', color: 'orange', icon: '💻' },
    { id: 'research', name: 'Research', color: 'green', icon: '🔬' },
    { id: 'copywriting', name: 'Copywriting', color: 'purple', icon: '✍️' },
    { id: 'other', name: 'Другое', color: 'gray', icon: '📝' }
  ];

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }

    // Здесь будет логика создания задачи
    console.log('Создание новой задачи:', {
      title,
      description,
      category: selectedCategory,
      createdBy: user?.email,
      date: new Date().toLocaleDateString('ru-RU')
    });

    // Перенаправляем на главную страницу
    navigate('/');
  };

  const handleCancel = () => {
    navigate('/');
  };

  return (
    <PageContainer>
      <PageContent>
        <NewCardContainer>
          <NewCardBlock>
            <NewCardTitle>Создание новой задачи</NewCardTitle>
            
            <NewCardForm onSubmit={handleSubmit}>
              <FormBlock>
                <label htmlFor="title">Название задачи *</label>
                <FormInput
                  type="text"
                  id="title"
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  placeholder="Введите название задачи..."
                  required
                  autoFocus
                />
              </FormBlock>

              <FormBlock>
                <label htmlFor="description">Описание задачи</label>
                <FormTextarea
                  id="description"
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  placeholder="Введите описание задачи..."
                  rows="8"
                />
              </FormBlock>

              <CategoriesSection>
                <CategoriesTitle>Выберите категорию</CategoriesTitle>
                <CategoriesGrid>
                  {categories.map((category) => (
                    <CategoryCard
                      key={category.id}
                      $color={category.color}
                      $selected={selectedCategory === category.name}
                      onClick={() => setSelectedCategory(category.name)}
                    >
                      <CategoryIcon>{category.icon}</CategoryIcon>
                      <CategoryName>{category.name}</CategoryName>
                    </CategoryCard>
                  ))}
                </CategoriesGrid>
              </CategoriesSection>

              <CalendarSection>
                <CategoriesTitle>Выберите срок исполнения</CategoriesTitle>
                <Calendar />
              </CalendarSection>

              <ActionButtons>
                <CreateButton type="submit" className="_hover01">
                  Создать задачу
                </CreateButton>
                <CancelButton 
                  type="button" 
                  className="_btn-bor _hover03"
                  onClick={handleCancel}
                >
                  Отменить
                </CancelButton>
              </ActionButtons>
            </NewCardForm>
          </NewCardBlock>
        </NewCardContainer>
      </PageContent>
    </PageContainer>
  );
};

export default NewCardPage;