import React, { useState, useEffect } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import ModalCalendar from '../ModalCalendar/ModalCalendar';

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { user } = useAuth();
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('Нужно сделать');
  const [cardData, setCardData] = useState(null);

  // Имитация данных карточки
  useEffect(() => {
    document.body.classList.add('modal-open');
    
    const loadCard = async () => {
      try {
        const { cardList } = await import('../../../data.js');
        const foundCard = cardList.find(card => card.id === parseInt(id));
        
        if (foundCard) {
          setCardData(foundCard);
          setDescription(`Это пример описания задачи. Здесь может быть подробная информация о задаче "${foundCard.title}".`);
          setSelectedStatus(foundCard.status || 'Нужно сделать');
        }
      } catch (error) {
        console.error('Ошибка загрузки карточки:', error);
      }
    };

    loadCard();

    return () => {
      document.body.classList.remove('modal-open');
    };
  }, [id]);

  const handleClose = () => {
    navigate(-1);
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
    console.log('Сохранение карточки:', {
      id,
      description,
      status: selectedStatus
    });
    setIsEditMode(false);
  };

  const handleCancel = () => {
    setIsEditMode(false);
    if (cardData) {
      setDescription(`Это пример описания задачи. Здесь может быть подробная информация о задаче "${cardData.title}".`);
      setSelectedStatus(cardData.status || 'Нужно сделать');
    }
  };

  const handleDelete = () => {
    if (window.confirm('Вы уверены, что хотите удалить эту задачу?')) {
      console.log('Удаление карточки:', id);
      handleClose();
    }
  };

  const statusOptions = [
    'Без статуса',
    'Нужно сделать', 
    'В работе',
    'Тестирование',
    'Готово'
  ];

  if (!cardData) {
    return (
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-container pop-browse">
          <div className="pop-browse__content">
            <div style={{ textAlign: 'center', padding: '40px' }}>
              Загрузка...
            </div>
          </div>
        </div>
      </div>
    );
  }

  const getCategoryClass = (category) => {
    switch(category) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_gray';
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container pop-browse">
        <div className="pop-browse__content">
          <div className="pop-browse__top-block">
            <h3 className="pop-browse__ttl">{cardData.title}</h3>
            <div className={`categories__theme theme-top ${getCategoryClass(cardData.theme)} _active-category`}>
              <p className={getCategoryClass(cardData.theme)}>{cardData.theme}</p>
            </div>
          </div>
          
          <div className="pop-browse__status status">
            <p className="status__p subttl">Статус</p>
            <div className="status__themes">
              {statusOptions.map((status) => (
                <div 
                  key={status}
                  className={`status__theme ${
                    selectedStatus === status ? getCategoryClass(cardData.theme) : '_hide'
                  }`}
                  onClick={() => isEditMode && setSelectedStatus(status)}
                  style={{ 
                    cursor: isEditMode ? 'pointer' : 'default',
                    display: selectedStatus === status ? 'inline-block' : 'none'
                  }}
                >
                  <p className={selectedStatus === status ? getCategoryClass(cardData.theme) : ''}>
                    {status}
                  </p>
                </div>
              ))}
            </div>
          </div>
          
          <div className="pop-browse__wrap">
            <form className="pop-browse__form form-browse" id="formBrowseCard">
              <div className="form-browse__block">
                <label htmlFor="textArea01" className="subttl">
                  Описание задачи
                </label>
                <textarea 
                  className="form-browse__area" 
                  name="text" 
                  id="textArea01" 
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => isEditMode && setDescription(e.target.value)}
                  readOnly={!isEditMode}
                />
              </div>
            </form>
            
            {/* Используем ModalCalendar для PopBrowse */}
            <ModalCalendar type="browse" date="09.09.23" />
          </div>
          
          <div className="theme-down__categories theme-down">
            <p className="categories__p subttl">Категория</p>
            <div className={`categories__theme ${getCategoryClass(cardData.theme)} _active-category`}>
              <p className={getCategoryClass(cardData.theme)}>{cardData.theme}</p>
            </div>
          </div>
          
          {!isEditMode ? (
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button 
                  className="btn-browse__edit _btn-bor _hover03"
                  onClick={handleEdit}
                >
                  <span>Редактировать задачу</span>
                </button>
                <button 
                  className="btn-browse__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  <span>Удалить задачу</span>
                </button>
              </div>
              <button 
                className="btn-browse__close _btn-bg _hover01"
                onClick={handleClose}
              >
                <span>Закрыть</span>
              </button>
            </div>
          ) : (
            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button 
                  className="btn-edit__edit _btn-bg _hover01"
                  onClick={handleSave}
                >
                  <span>Сохранить</span>
                </button>
                <button 
                  className="btn-edit__edit _btn-bor _hover03"
                  onClick={handleCancel}
                >
                  <span>Отменить</span>
                </button>
                <button 
                  className="btn-edit__delete _btn-bor _hover03"
                  onClick={handleDelete}
                >
                  <span>Удалить задачу</span>
                </button>
              </div>
              <button 
                className="btn-edit__close _btn-bg _hover01"
                onClick={handleClose}
              >
                <span>Закрыть</span>
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;