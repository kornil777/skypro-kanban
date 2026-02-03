import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { useAuth } from '../../context/AuthContext';
import Calendar from '../../components/Calendar/Calendar';
import {
  PageContainer,
  PageContent,
  CardDetailContainer,
  CardDetailBlock,
  CardDetailTitle,
  CardDetailHeader,
  CategoryBadge,
  StatusSection,
  StatusTitle,
  StatusThemes,
  StatusTheme,
  DetailWrap,
  DetailForm,
  FormBlock,
  FormTextarea,
  ActionButtons,
  ButtonGroup,
  ActionButton,
  BackButton
} from './CardDetailPage.styled';

const CardDetailPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Нужно сделать');
  const [cardData, setCardData] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    // Имитация загрузки данных карточки
    const loadCard = async () => {
      setLoading(true);
      try {
        // Имитация API запроса
        await new Promise(resolve => setTimeout(resolve, 500));
        
        // Импортируем данные (имитация API запроса)
        const { cardList } = await import('../../data');
        
        const foundCard = cardList.find(card => card.id === parseInt(id));
        
        if (foundCard) {
          setCardData(foundCard);
          setDescription(`Описание для задачи "${foundCard.title}"`);
          setSelectedStatus(foundCard.status || 'Нужно сделать');
        } else {
          navigate('/404');
        }
      } catch (error) {
        console.error('Ошибка загрузки карточки:', error);
        navigate('/404');
      } finally {
        setLoading(false);
      }
    };

    loadCard();
  }, [id, navigate]);

  const handleBack = () => {
    navigate('/');
  };

  const handleEdit = () => {
    setIsEditMode(true);
  };

  const handleSave = () => {
    // Здесь будет логика сохранения изменений
    console.log('Сохранение карточки:', {
      id,
      description,
      status: selectedStatus
    });
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    // Восстановить оригинальные значения
    if (cardData) {
      setDescription(`Описание для задачи "${cardData.title}"`);
      setSelectedStatus(cardData.status || 'Нужно сделать');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      // Здесь будет логика удаления задачи
      console.log('Удаление карточки:', id);
      navigate('/');
    }
  };

  const statusOptions = [
    'Без статуса',
    'Нужно сделать', 
    'В работе',
    'Тестирование',
    'Готово'
  ];

  if (loading) {
    return (
      <PageContainer>
        <PageContent>
          <div style={{ textAlign: 'center', padding: '50px' }}>
            Загрузка карточки...
          </div>
        </PageContent>
      </PageContainer>
    );
  }

  if (!cardData) {
    return null;
  }

  return (
    <PageContainer>
      <PageContent>
        <BackButton onClick={handleBack} className="_hover01">
          ← Назад к доске
        </BackButton>
        
        <CardDetailContainer>
          <CardDetailBlock>
            <CardDetailHeader>
              <CardDetailTitle>
                {cardData.title} (ID: {id})
              </CardDetailTitle>
              <CategoryBadge $category={cardData.theme.toLowerCase().replace(' ', '')}>
                <p>{cardData.theme}</p>
              </CategoryBadge>
            </CardDetailHeader>
            
            <StatusSection>
              <StatusTitle>Статус</StatusTitle>
              <StatusThemes>
                {statusOptions.map((status) => (
                  <StatusTheme 
                    key={status}
                    $active={selectedStatus === status}
                    $disabled={!isEditMode}
                    onClick={() => isEditMode && setSelectedStatus(status)}
                  >
                    {status}
                  </StatusTheme>
                ))}
              </StatusThemes>
            </StatusSection>
            
            <DetailWrap>
              <DetailForm>
                <FormBlock>
                  <label htmlFor="description">Описание задачи</label>
                  <FormTextarea
                    id="description"
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                    readOnly={!isEditMode}
                    placeholder="Описание задачи..."
                  />
                </FormBlock>
              </DetailForm>
              
              <div style={{ flex: '0 0 auto' }}>
                <Calendar />
                <div style={{ marginTop: '20px', color: '#94A6BE', fontSize: '12px' }}>
                  Дата создания: {cardData.date}
                </div>
                <div style={{ marginTop: '10px', color: '#94A6BE', fontSize: '12px' }}>
                  Последнее изменение: сегодня
                </div>
              </div>
            </DetailWrap>
            
            <ActionButtons>
              {!isEditMode ? (
                <>
                  <ButtonGroup>
                    <ActionButton 
                      type="button" 
                      className="_btn-bor _hover03"
                      onClick={handleEdit}
                    >
                      Редактировать задачу
                    </ActionButton>
                    <ActionButton 
                      type="button" 
                      className="_btn-bor _hover03"
                      onClick={handleDelete}
                    >
                      Удалить задачу
                    </ActionButton>
                  </ButtonGroup>
                  <ActionButton 
                    type="button" 
                    className="_btn-bg _hover01"
                    onClick={handleBack}
                  >
                    Закрыть
                  </ActionButton>
                </>
              ) : (
                <>
                  <ButtonGroup>
                    <ActionButton 
                      type="button" 
                      className="_btn-bg _hover01"
                      onClick={handleSave}
                    >
                      Сохранить
                    </ActionButton>
                    <ActionButton 
                      type="button" 
                      className="_btn-bor _hover03"
                      onClick={handleCancel}
                    >
                      Отменить
                    </ActionButton>
                    <ActionButton 
                      type="button" 
                      className="_btn-bor _hover03"
                      onClick={handleDelete}
                    >
                      Удалить задачу
                    </ActionButton>
                  </ButtonGroup>
                  <ActionButton 
                    type="button" 
                    className="_btn-bg _hover01"
                    onClick={handleBack}
                  >
                    Закрыть
                  </ActionButton>
                </>
              )}
            </ActionButtons>
          </CardDetailBlock>
        </CardDetailContainer>
      </PageContent>
    </PageContainer>
  );
};

export default CardDetailPage;