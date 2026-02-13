import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';
import ModalCalendar from '../ModalCalendar/ModalCalendar';

const PopNewCard = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Web Design');

  const categories = [
    { id: 'webdesign', name: 'Web Design', className: '_orange' },
    { id: 'research', name: 'Research', className: '_green' },
    { id: 'copywriting', name: 'Copywriting', className: '_purple' }
  ];

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleClose = () => {
    navigate(-1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!title.trim()) {
      alert('Введите название задачи');
      return;
    }

    // Здесь будет логика создания задачи
    console.log('Создаем задачу:', {
      title,
      description,
      category: selectedCategory,
      createdBy: user?.email,
      date: new Date().toLocaleDateString('ru-RU')
    });

    handleClose();
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleClose();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container pop-new-card">
        <div className="pop-new-card__content">
          <h3 className="pop-new-card__ttl">Создание задачи</h3>
          <button 
            type="button" 
            className="pop-new-card__close" 
            onClick={handleClose}
            aria-label="Закрыть"
          >
            &#10006;
          </button>
          
          <div className="pop-new-card__wrap">
            <form className="pop-new-card__form form-new" onSubmit={handleSubmit}>
              <div className="form-new__block">
                <label htmlFor="formTitle" className="subttl">
                  Название задачи
                </label>
                <input 
                  className="form-new__input" 
                  type="text" 
                  name="name" 
                  id="formTitle" 
                  placeholder="Введите название задачи..." 
                  value={title}
                  onChange={(e) => setTitle(e.target.value)}
                  autoFocus 
                  required
                />
              </div>
              <div className="form-new__block">
                <label htmlFor="textArea" className="subttl">
                  Описание задачи
                </label>
                <textarea 
                  className="form-new__area" 
                  name="text" 
                  id="textArea" 
                  placeholder="Введите описание задачи..."
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                />
              </div>
            </form>
            
            {/* Используем ModalCalendar для PopNewCard */}
            <ModalCalendar type="new" />
          </div>
          
          <div className="pop-new-card__categories categories">
            <p className="categories__p subttl">Категория</p>
            <div className="categories__themes">
              {categories.map((category) => (
                <div 
                  key={category.id}
                  className={`categories__theme ${category.className} ${
                    selectedCategory === category.name ? '_active-category' : ''
                  }`}
                  onClick={() => setSelectedCategory(category.name)}
                >
                  <p className={category.className}>{category.name}</p>
                </div>
              ))}
            </div>
          </div>
          
          <button 
            type="button" 
            className="form-new__create _hover01" 
            id="btnCreate"
            onClick={handleSubmit}
          >
            Создать задачу
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopNewCard;