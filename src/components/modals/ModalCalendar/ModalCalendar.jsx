import React, { useState, useEffect } from 'react';

const ModalCalendar = ({ selectedDate, onDateSelect, type = 'new' }) => {
  const [currentMonth, setCurrentMonth] = useState(new Date());
  const [days, setDays] = useState([]);

  const monthNames = [
    'Январь', 'Февраль', 'Март', 'Апрель', 'Май', 'Июнь',
    'Июль', 'Август', 'Сентябрь', 'Октябрь', 'Ноябрь', 'Декабрь'
  ];

  // Генерация массива дней для текущего месяца
  useEffect(() => {
    const year = currentMonth.getFullYear();
    const month = currentMonth.getMonth();

    const firstDay = new Date(year, month, 1);
    // Определяем偏移: понедельник = 1, воскресенье = 7
    let startOffset = firstDay.getDay() === 0 ? 6 : firstDay.getDay() - 1;

    const prevMonthLastDay = new Date(year, month, 0).getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    const daysArray = [];

    // Дни предыдущего месяца
    for (let i = startOffset; i > 0; i--) {
      daysArray.push({
        day: prevMonthLastDay - i + 1,
        month: 'prev',
      });
    }

    // Дни текущего месяца
    for (let i = 1; i <= daysInMonth; i++) {
      daysArray.push({
        day: i,
        month: 'current',
      });
    }

    // Дни следующего месяца для заполнения сетки (42 ячейки)
    const totalCells = 42;
    const remaining = totalCells - daysArray.length;
    for (let i = 1; i <= remaining; i++) {
      daysArray.push({
        day: i,
        month: 'next',
      });
    }

    setDays(daysArray);
  }, [currentMonth]);

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(currentMonth.getFullYear(), currentMonth.getMonth() + 1, 1));
  };

  const getDayClass = (dayObj) => {
    let className = 'calendar__cell';

    if (dayObj.month !== 'current') {
      className += ' _other-month';
    } else {
      className += ' _cell-day';
    }

    // Проверка на выходные
    const date = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayObj.day);
    const dayOfWeek = date.getDay();
    if (dayOfWeek === 0 || dayOfWeek === 6) {
      className += ' _weekend';
    }

    // Сегодня
    const today = new Date();
    if (
      dayObj.month === 'current' &&
      dayObj.day === today.getDate() &&
      currentMonth.getMonth() === today.getMonth() &&
      currentMonth.getFullYear() === today.getFullYear()
    ) {
      className += ' _current';
    }

    // Выбранный день
    if (selectedDate) {
      const selected = new Date(selectedDate);
      if (
        dayObj.month === 'current' &&
        dayObj.day === selected.getDate() &&
        currentMonth.getMonth() === selected.getMonth() &&
        currentMonth.getFullYear() === selected.getFullYear()
      ) {
        className += ' _active-day';
      }
    }

    return className;
  };

  const handleDateClick = (dayObj) => {
    if (dayObj.month !== 'current') return;
    const selected = new Date(currentMonth.getFullYear(), currentMonth.getMonth(), dayObj.day);
    const isoString = selected.toISOString();
    const formatted = selected.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).replace(/\//g, '.');
    onDateSelect(isoString, formatted);
  };

  const formatDisplayDate = (dateString) => {
    if (!dateString) return '';
    const d = new Date(dateString);
    return d.toLocaleDateString('ru-RU', {
      day: '2-digit',
      month: '2-digit',
      year: '2-digit'
    }).replace(/\//g, '.');
  };

  const displayDate = selectedDate ? formatDisplayDate(selectedDate) : '';

  return (
    <div className="pop-new-card__calendar calendar">
      <p className="calendar__ttl subttl">Даты</p>
      <div className="calendar__block">
        <div className="calendar__nav">
          <div className="calendar__month">
            {monthNames[currentMonth.getMonth()]} {currentMonth.getFullYear()}
          </div>
          <div className="nav__actions">
            <div className="nav__action" onClick={handlePrevMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M5.72945 1.95273C6.09018 1.62041 6.09018 1.0833 5.72945 0.750969C5.36622 0.416344 4.7754 0.416344 4.41218 0.750969L0.528487 4.32883C-0.176162 4.97799 -0.176162 6.02201 0.528487 6.67117L4.41217 10.249C4.7754 10.5837 5.36622 10.5837 5.72945 10.249C6.09018 9.9167 6.09018 9.37959 5.72945 9.04727L1.87897 5.5L5.72945 1.95273Z" />
              </svg>
            </div>
            <div className="nav__action" onClick={handleNextMonth}>
              <svg xmlns="http://www.w3.org/2000/svg" width="6" height="11" viewBox="0 0 6 11">
                <path d="M0.27055 9.04727C-0.0901833 9.37959 -0.0901832 9.9167 0.27055 10.249C0.633779 10.5837 1.2246 10.5837 1.58783 10.249L5.47151 6.67117C6.17616 6.02201 6.17616 4.97799 5.47151 4.32883L1.58782 0.75097C1.2246 0.416344 0.633778 0.416344 0.270549 0.75097C-0.0901831 1.0833 -0.090184 1.62041 0.270549 1.95273L4.12103 5.5L0.27055 9.04727Z" />
              </svg>
            </div>
          </div>
        </div>
        <div className="calendar__content">
          <div className="calendar__days-names">
            <div className="calendar__day-name">пн</div>
            <div className="calendar__day-name">вт</div>
            <div className="calendar__day-name">ср</div>
            <div className="calendar__day-name">чт</div>
            <div className="calendar__day-name">пт</div>
            <div className="calendar__day-name -weekend-">сб</div>
            <div className="calendar__day-name -weekend-">вс</div>
          </div>
          <div className="calendar__cells">
            {days.map((dayObj, index) => (
              <div
                key={index}
                className={getDayClass(dayObj)}
                onClick={() => handleDateClick(dayObj)}
              >
                {dayObj.day}
              </div>
            ))}
          </div>
        </div>
        <input type="hidden" id="datepick_value" defaultValue="" />
        <div className="calendar__period">
          {type === 'new' ? (
            <p className="calendar__p date-end">
              {displayDate ? `Срок исполнения: ${displayDate}` : 'Выберите срок исполнения'}
            </p>
          ) : (
            <p className="calendar__p date-end">
              Срок исполнения: <span className="date-control">{displayDate || 'не выбран'}</span>
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default ModalCalendar;