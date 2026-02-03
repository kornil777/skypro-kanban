import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../../../context/AuthContext';

const PopExit = () => {
  const navigate = useNavigate();
  const { logout } = useAuth();

  useEffect(() => {
    document.body.classList.add('modal-open');
    return () => {
      document.body.classList.remove('modal-open');
    };
  }, []);

  const handleExit = () => {
    logout();
    navigate('/login');
  };

  const handleCancel = () => {
    navigate(-1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      handleCancel();
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container pop-exit">
        <div className="pop-exit__ttl">
          <h2>Выйти из аккаунта?</h2>
        </div>
        <div className="pop-exit__form-group">
          <button 
            className="pop-exit__exit-yes _hover01" 
            id="exitYes"
            onClick={handleExit}
          >
            <span>Да, выйти</span>
          </button>
          <button 
            className="pop-exit__exit-no _hover03" 
            id="exitNo"
            onClick={handleCancel}
          >
            <span>Нет, остаться</span>
          </button>
        </div>
      </div>
    </div>
  );
};

export default PopExit;