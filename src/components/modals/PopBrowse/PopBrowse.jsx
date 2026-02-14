import React, { useState, useEffect, useRef } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { useTasks } from '../../../context/TasksContext';
import ModalCalendar from '../ModalCalendar/ModalCalendar';

const PopBrowse = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { getTaskById, updateTask, deleteTask } = useTasks();
  const [isEditMode, setIsEditMode] = useState(false);
  const [description, setDescription] = useState('');
  const [selectedStatus, setSelectedStatus] = useState('');
  const [taskData, setTaskData] = useState(null);
  const [originalStatus, setOriginalStatus] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState('');
  const isMounted = useRef(true);
  const isDeleted = useRef(false);

  useEffect(() => {
  const abortController = new AbortController();
  let isActive = true;

  const loadTask = async () => {
    try {
      const task = await getTaskById(id, { signal: abortController.signal });
      if (!isActive) return;

      if (task) {
        setTaskData(task);
        setDescription(task.description || '');
        setSelectedStatus(task.status || 'Без статуса');
        setOriginalStatus(task.status || 'Без статуса');
      } else {
        // Задача не найдена (404) — перенаправляем на главную
        navigate('/');
      }
    } catch (err) {
      if (err.name === 'AbortError' || !isActive) return;
      console.error('Error loading task:', err);
      setError('Не удалось загрузить задачу');
    } finally {
      if (isActive) setIsLoading(false);
    }
  };

  loadTask();

  return () => {
    isActive = false;
    abortController.abort();
  };
}, [id, getTaskById, navigate]);

const handleDelete = async () => {
  if (!window.confirm('Вы уверены?')) return;
  setIsSubmitting(true);
  try {
    const success = await deleteTask(id);
    if (success) {
      navigate('/', { replace: true });
    } else {
      setError('Ошибка при удалении');
    }
  } catch (err) {
    setError('Не удалось удалить задачу');
  } finally {
    setIsSubmitting(false);
  }
};

  const handleClose = () => {
    navigate(-1);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) handleClose();
  };

  const handleEdit = () => setIsEditMode(true);

  const handleSave = async () => {
    setIsSubmitting(true);
    setError('');
    try {
      const updatedData = {
        title: taskData.title,
        topic: taskData.topic,
        status: selectedStatus,
        description,
        date: taskData.date,
      };
      const success = await updateTask(id, updatedData);
      if (success) {
        setOriginalStatus(selectedStatus);
        setIsEditMode(false);
      } else {
        setError('Ошибка при сохранении');
      }
    } catch (err) {
      setError('Не удалось сохранить изменения');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleCancel = () => {
    setIsEditMode(false);
    setSelectedStatus(originalStatus);
    setDescription(taskData?.description || '');
  };

 

  const statusOptions = ['Без статуса', 'Нужно сделать', 'В работе', 'Тестирование', 'Готово'];

  if (isLoading) {
    return (
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-container pop-browse">
          <div style={{ textAlign: 'center', padding: '40px' }}>Загрузка...</div>
        </div>
      </div>
    );
  }

  if (!taskData) {
    return (
      <div className="popup-overlay" onClick={handleOverlayClick}>
        <div className="popup-container pop-browse">
          <div style={{ textAlign: 'center', padding: '40px' }}>Задача не найдена</div>
        </div>
      </div>
    );
  }

  const getCategoryClass = (category) => {
    switch (category) {
      case 'Web Design': return '_orange';
      case 'Research': return '_green';
      case 'Copywriting': return '_purple';
      default: return '_gray';
    }
  };

  const getStatusClasses = (status) => {
    if (isEditMode) {
      return status === selectedStatus
        ? 'status__theme edit-mode edit-selected'
        : 'status__theme edit-mode edit-unselected';
    } else {
      return status === selectedStatus
        ? `status__theme view-mode ${getCategoryClass(taskData.topic)}`
        : 'status__theme _hide';
    }
  };

  return (
    <div className="popup-overlay" onClick={handleOverlayClick}>
      <div className="popup-container pop-browse">
        <div className="pop-browse__content">
          {error && <div style={{ color: 'red', marginBottom: '15px' }}>{error}</div>}
          <div className="pop-browse__top-block">
            <h3 className="pop-browse__ttl">{taskData.title}</h3>
            <div className={`categories__theme theme-top ${getCategoryClass(taskData.topic)} _active-category`}>
              <p>{taskData.topic}</p>
            </div>
          </div>

          <div className="pop-browse__status status">
            <p className="status__p subttl">Статус</p>
            <div className="status__themes">
              {statusOptions.map((status) => (
                <div
                  key={status}
                  className={getStatusClasses(status)}
                  onClick={() => isEditMode && setSelectedStatus(status)}
                  style={{ cursor: isEditMode ? 'pointer' : 'default' }}
                >
                  <p>{status}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="pop-browse__wrap">
            <form className="pop-browse__form form-browse">
              <div className="form-browse__block">
                <label htmlFor="textArea01" className="subttl">Описание задачи</label>
                <textarea
                  className="form-browse__area"
                  id="textArea01"
                  value={description}
                  onChange={(e) => isEditMode && setDescription(e.target.value)}
                  readOnly={!isEditMode}
                  disabled={isSubmitting}
                />
              </div>
            </form>
            <ModalCalendar type="browse" date={new Date(taskData.date).toLocaleDateString('ru-RU')} />
          </div>

          <div className="theme-down__categories theme-down">
            <p className="categories__p subttl">Категория</p>
            <div className={`categories__theme ${getCategoryClass(taskData.topic)} _active-category`}>
              <p>{taskData.topic}</p>
            </div>
          </div>

          {!isEditMode ? (
            <div className="pop-browse__btn-browse">
              <div className="btn-group">
                <button className="btn-browse__edit _btn-bor _hover03" onClick={handleEdit} disabled={isSubmitting}>
                  Редактировать задачу
                </button>
                <button className="btn-browse__delete _btn-bor _hover03" onClick={handleDelete} disabled={isSubmitting}>
                  Удалить задачу
                </button>
              </div>
              <button className="btn-browse__close _btn-bg _hover01" onClick={handleClose} disabled={isSubmitting}>
                Закрыть
              </button>
            </div>
          ) : (
            <div className="pop-browse__btn-edit">
              <div className="btn-group">
                <button className="btn-edit__edit _btn-bg _hover01" onClick={handleSave} disabled={isSubmitting}>
                  {isSubmitting ? 'Сохранение...' : 'Сохранить'}
                </button>
                <button className="btn-edit__edit _btn-bor _hover03" onClick={handleCancel} disabled={isSubmitting}>
                  Отменить
                </button>
                <button className="btn-edit__delete _btn-bor _hover03" onClick={handleDelete} disabled={isSubmitting}>
                  Удалить задачу
                </button>
              </div>
              <button className="btn-edit__close _btn-bg _hover01" onClick={handleClose} disabled={isSubmitting}>
                Закрыть
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PopBrowse;