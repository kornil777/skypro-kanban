import { createGlobalStyle } from 'styled-components';

export const ModalStyles = createGlobalStyle`
  /* Стили для затемнения фона при открытом модальном окне */
  .modal-open {
    overflow: hidden;
  }

  /* Общие стили для всех модальных окон */
  .popup-overlay {
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.4);
    /* backdrop-filter: blur(4px); */
    z-index: 1000;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 20px;
  }

  .popup-container {
    display: block;
    margin: 0 auto;
    background-color: #FFFFFF;
    border-radius: 10px;
    border: 0.7px solid #D4DBE5;
    box-shadow: 0px 4px 67px -12px rgba(0, 0, 0, 0.13);
    position: relative;
    z-index: 1001;
    animation: popup-fade-in 0.3s ease-out;
  }

  @keyframes popup-fade-in {
    from {
      opacity: 0;
      transform: translateY(-20px);
    }
    to {
      opacity: 1;
      transform: translateY(0);
    }
  }

  /* Стили для PopNewCard (создание задачи) */
  .pop-new-card {
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 48px;
  }

  .pop-new-card__content {
    display: block;
    text-align: left;
  }

  .pop-new-card__ttl {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
    margin-bottom: 20px;
  }

  .pop-new-card__close {
    position: absolute;
    top: 20px;
    right: 30px;
    color: #94A6BE;
    cursor: pointer;
    font-size: 24px;
    line-height: 1;
    background: none;
    border: none;
    padding: 0;
  }

  .pop-new-card__close:hover {
    color: #000000;
  }

  .pop-new-card__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 20px;
  }

  .pop-new-card__form {
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  .form-new__block {
    display: flex;
    flex-direction: column;
  }

  .form-new__input, .form-new__area {
    width: 100%;
    outline: none;
    padding: 14px;
    background: transparent;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
    color: #000000;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  .form-new__input::-moz-placeholder, .form-new__area::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  .form-new__input::placeholder, .form-new__area::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  .form-new__input {
    margin: 20px 0;
  }

  .form-new__area {
    max-width: 370px;
    margin-top: 14px;
    height: 200px;
    resize: vertical;
  }

  .form-new__create {
    width: 132px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: 0;
    outline: none;
    font-size: 14px;
    font-weight: 500;
    line-height: 1;
    color: #FFFFFF;
    float: right;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .form-new__create:hover {
    background-color: #33399b;
  }

  .categories {
    margin-bottom: 20px;
  }

  .categories__themes {
    display: flex;
    flex-wrap: nowrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .categories__p {
    margin-bottom: 14px;
  }

  .categories__theme {
    display: inline-block;
    width: auto;
    height: 30px;
    padding: 8px 20px;
    border-radius: 24px;
    margin-right: 7px;
    opacity: 0.4;
    cursor: pointer;
    transition: opacity 0.3s;
  }

  .categories__theme p {
    font-size: 14px;
    font-weight: 600;
    line-height: 14px;
    white-space: nowrap;
  }

  .categories__theme._active-category {
    opacity: 1 !important;
  }

  /* Стили для PopBrowse (просмотр задачи) */
  .pop-browse {
    max-width: 630px;
    width: 100%;
    padding: 40px 30px 38px;
  }

  .pop-browse__content {
    display: block;
    text-align: left;
  }

  .pop-browse__content .categories__theme {
    opacity: 1;
  }

  .pop-browse__content .theme-down {
    display: none;
    margin-bottom: 20px;
  }

  .pop-browse__content .theme-top {
    display: block;
  }

  .pop-browse__top-block {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 18px;
  }

  .pop-browse__ttl {
    color: #000;
    font-size: 20px;
    font-weight: 600;
    line-height: 24px;
  }

  .pop-browse__wrap {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    gap: 30px;
    margin-bottom: 20px;
  }

  .pop-browse__form {
    max-width: 370px;
    width: 100%;
    display: block;
    margin-bottom: 20px;
  }

  .pop-browse__btn-browse, .pop-browse__btn-edit {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: space-between;
  }

  .pop-browse__btn-browse button, .pop-browse__btn-edit button {
    height: 30px;
    margin-bottom: 10px;
    padding: 0 14px;
  }

  .pop-browse__btn-browse .btn-group button, .pop-browse__btn-edit .btn-group button {
    margin-right: 8px;
  }

  .form-browse__block {
    display: flex;
    flex-direction: column;
  }

  .form-browse__area {
    max-width: 370px;
    width: 100%;
    outline: none;
    padding: 14px;
    background: #EAEEF6;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    border-radius: 8px;
    font-size: 14px;
    line-height: 1.5;
    letter-spacing: -0.14px;
    margin-top: 14px;
    height: 200px;
    resize: none;
    font-family: "Roboto", Arial, Helvetica, sans-serif;
  }

  .form-browse__area::-moz-placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  .form-browse__area::placeholder {
    font-weight: 400;
    font-size: 14px;
    line-height: 1px;
    color: #94A6BE;
    letter-spacing: -0.14px;
  }

  .status {
    margin-bottom: 11px;
  }

  .status__p {
    margin-bottom: 14px;
  }

  .status__themes {
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start;
    justify-content: flex-start;
  }

  .status__theme {
    border-radius: 24px;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
    color: #94A6BE;
    padding: 11px 14px 10px;
    margin-right: 7px;
    margin-bottom: 7px;
    cursor: pointer;
  }

  .status__theme p {
    font-size: 14px;
    line-height: 1;
    letter-spacing: -0.14px;
  }

  /* Стили для PopExit (выход) */
  .pop-exit {
    max-width: 370px;
    width: 100%;
    padding: 50px 60px;
  }

  .pop-exit__ttl h2 {
    text-align: center;
    font-size: 20px;
    font-weight: 700;
    line-height: 30px;
    letter-spacing: -0.4px;
    margin-bottom: 20px;
  }

  .pop-exit__form-group {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .pop-exit__exit-yes {
    width: 153px;
    height: 30px;
    background-color: #565EEF;
    border-radius: 4px;
    border: none;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #FFFFFF;
    margin-right: 10px;
    cursor: pointer;
    transition: background-color 0.3s;
  }

  .pop-exit__exit-yes:hover {
    background-color: #33399b;
  }

  .pop-exit__exit-no {
    width: 153px;
    height: 30px;
    background-color: transparent;
    border-radius: 4px;
    border: 0.7px solid #565EEF;
    outline: none;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    line-height: 21px;
    font-weight: 500;
    letter-spacing: -0.14px;
    color: #565EEF;
    cursor: pointer;
    transition: all 0.3s;
  }

  .pop-exit__exit-no:hover {
    background-color: #565EEF;
    color: #FFFFFF;
  }

  /* Адаптивность */
  @media (max-width: 660px) {
    .popup-container {
      max-width: 95% !important;
      padding: 30px 20px !important;
    }
    
    .pop-new-card__wrap,
    .pop-browse__wrap {
      flex-direction: column;
    }
    
    .form-new__area,
    .form-browse__area {
      max-width: 100%;
    }
    
    .pop-browse__btn-browse,
    .pop-browse__btn-edit {
      flex-direction: column;
    }
    
    .pop-browse__btn-browse .btn-group,
    .pop-browse__btn-edit .btn-group {
      width: 100%;
      margin-bottom: 10px;
    }
    
    .pop-browse__btn-browse button,
    .pop-browse__btn-edit button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
    
    .pop-exit__form-group {
      flex-direction: column;
    }
    
    .pop-exit__exit-yes,
    .pop-exit__exit-no {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
/* Стили для календаря */
  .calendar {
    width: 182px;
    margin-bottom: 20px;
  }

  .calendar__ttl {
    margin-bottom: 14px;
    padding: 0 7px;
    color: #000;
    font-size: 14px;
    font-weight: 600;
    line-height: 1;
  }

  .calendar__p {
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
  }

  .calendar__p span {
    color: #000000;
  }

  .calendar__block {
    display: block;
  }

  .calendar__month {
    color: #94A6BE;
    font-size: 14px;
    line-height: 25px;
    font-weight: 600;
  }

  .calendar__content {
    margin-bottom: 12px;
  }

  .calendar__days-names {
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: space-between;
    margin: 7px 0;
    padding: 0 7px;
  }

  .calendar__day-name {
    color: #94A6BE;
    font-size: 10px;
    font-weight: 500;
    line-height: normal;
    letter-spacing: -0.2px;
  }

  .calendar__cells {
    width: 182px;
    height: 126px;
    display: flex;
    flex-wrap: wrap;
  }

  .calendar__cell {
    width: 22px;
    height: 22px;
    margin: 2px;
    border-radius: 50%;
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: center;
    color: #94A6BE;
    font-size: 10px;
    line-height: 1;
    letter-spacing: -0.2px;
    cursor: pointer;
  }

  .calendar__nav {
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-top: 14px;
    padding: 0 7px;
  }

  .calendar__period {
    padding: 0 7px;
  }

  .nav__actions {
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .nav__action {
    width: 18px;
    height: 25px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .nav__action svg {
    fill: #94A6BE;
  }

  ._other-month {
    opacity: 0;
  }

  ._cell-day:hover {
    color: #94A6BE;
    background-color: #EAEEF6;
  }

  ._active-day {
    background-color: #94A6BE;
    color: #FFFFFF;
  }

  ._current {
    font-weight: 700;
  }

  .-weekend- {
    color: #FF6D6D;
  }

  @media (max-width: 660px) {
    .calendar {
      width: 100%;
    }
    
    .calendar__cells {
      width: 100%;
      height: auto;
      justify-content: center;
    }
    
    .calendar__cell {
      width: 36px;
      height: 36px;
      font-size: 14px;
    }
    
    .calendar__days-names .calendar__day-name {
      font-size: 12px;
    }
    /* Стили для статусов в режиме редактирования */
  .status__theme._active-day {
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
    border-color: #94A6BE !important;
  }

  .status__theme._gray:not(._active-day) {
    background-color: transparent !important;
    color: #94A6BE !important;
    border: 0.7px solid rgba(148, 166, 190, 0.4);
  }

  /* Стили для текстового поля в режиме редактирования */
  .form-browse__area[readonly] {
    background-color: #EAEEF6 !important;
    cursor: default !important;
  }

  .form-browse__area:not([readonly]) {
    background-color: #FFFFFF !important;
    cursor: text !important;
  }

  /* Адаптивность для статусов */
  @media (max-width: 660px) {
    .status__themes {
      flex-direction: column;
      gap: 10px;
    }
    
    .status__theme {
      width: 100%;
      text-align: center;
      margin-right: 0 !important;
    }
  }
  /* Стили для статусов в режиме редактирования */
  .status__theme.edit-mode {
    display: inline-block !important;
    cursor: pointer;
    transition: all 0.3s ease;
  }

  .status__theme.edit-selected {
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
    border-color: #94A6BE !important;
    border: 0.7px solid #94A6BE !important;
  }

  .status__theme.edit-unselected {
    background-color: #FFFFFF !important;
    color: #94A6BE !important;
    border: 0.7px solid #000000 !important;
  }

  /* При наведении на невыбранный статус в режиме редактирования */
  .status__theme.edit-unselected:hover {
    background-color: #F5F5F5 !important;
    border-color: #333333 !important;
  }

  /* Стили для статусов в режиме просмотра */
  .status__theme.view-mode {
    border: 0.7px solid rgba(148, 166, 190, 0.4) !important;
  }

  .status__theme.view-mode._orange {
    background-color: #FFE4C2 !important;
    color: #FF6D00 !important;
    border-color: #FFE4C2 !important;
  }

  .status__theme.view-mode._green {
    background-color: #B4FDD1 !important;
    color: #06B16E !important;
    border-color: #B4FDD1 !important;
  }

  .status__theme.view-mode._purple {
    background-color: #E9D4FF !important;
    color: #9A48F1 !important;
    border-color: #E9D4FF !important;
  }

  .status__theme.view-mode._gray {
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
    border-color: #94A6BE !important;
  }

  /* Стили для текстового поля в режиме редактирования */
  .form-browse__area[readonly] {
    background-color: #EAEEF6 !important;
    cursor: default !important;
  }

  .form-browse__area:not([readonly]) {
    background-color: #FFFFFF !important;
    cursor: text !important;
    border-color: rgba(148, 166, 190, 0.4) !important;
  }

  /* Улучшенные стили для календаря */
  .calendar__cell._active-day {
    background-color: #94A6BE !important;
    color: #FFFFFF !important;
  }

  .calendar__cell._current {
    font-weight: 700 !important;
  }

  .calendar__cell._weekend {
    color: #FF6D6D !important;
  }

  .calendar__cell._cell-day:hover {
    background-color: #EAEEF6 !important;
  }

  /* Адаптивность для статусов */
  @media (max-width: 660px) {
    .status__themes {
      flex-direction: column;
      gap: 10px;
    }
    
    .status__theme {
      width: 100%;
      text-align: center;
      margin-right: 0 !important;
      margin-bottom: 10px !important;
    }
    
    .pop-browse__btn-browse,
    .pop-browse__btn-edit {
      flex-direction: column;
    }
    
    .pop-browse__btn-browse .btn-group,
    .pop-browse__btn-edit .btn-group {
      width: 100%;
      margin-bottom: 10px;
    }
    
    .pop-browse__btn-browse button,
    .pop-browse__btn-edit button {
      width: 100%;
      margin-right: 0;
      margin-bottom: 10px;
    }
  }
  }
`;