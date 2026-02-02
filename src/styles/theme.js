// src/styles/theme.js
export const theme = {
  colors: {
    // Основные цвета
    primary: '#565EEF',
    primaryHover: '#33399b',
    secondary: '#FFFFFF',
    
    // Фоны
    backgroundMain: '#F1F1F1',
    backgroundLight: '#FFFFFF',
    backgroundGray: '#EAEEF6',
    
    // Текст
    textPrimary: '#000000',
    textSecondary: '#94A6BE',
    textLight: '#FFFFFF',
    
    // Границы
    border: '#D4DBE5',
    borderLight: 'rgba(148, 166, 190, 0.4)',
    
    // Категории задач
    category: {
      orange: {
        background: '#FFE4C2',
        text: '#FF6D00'
      },
      green: {
        background: '#B4FDD1',
        text: '#06B16E'
      },
      purple: {
        background: '#E9D4FF',
        text: '#9A48F1'
      },
      gray: {
        background: '#94A6BE',
        text: '#FFFFFF'
      }
    },
    
    // Состояния
    error: '#FF6D6D',
    weekend: '#FF6D6D',
    success: '#06B16E',
    
    // Тени и оверлеи
    overlay: 'rgba(0, 0, 0, 0.4)',
    shadow: '0px 10px 39px 0px rgba(26, 56, 101, 0.21)'
  },
  
  // Размеры
  sizes: {
    container: '1260px',
    card: {
      width: '220px',
      height: '130px'
    },
    borderRadius: {
      small: '4px',
      medium: '8px',
      large: '10px',
      pill: '18px'
    }
  },
  
  // Шрифты
  fonts: {
    primary: '"Roboto", Arial, Helvetica, sans-serif',
    sizes: {
      xs: '10px',
      sm: '12px',
      md: '14px',
      lg: '18px',
      xl: '20px'
    },
    weights: {
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700
    }
  },
  
  // Анимации
  animations: {
    transition: '300ms',
    cardAnimation: '500ms'
  },
  
  // Брейкпоинты как строки для использования в медиа-запросах
  breakpoints: {
    xs: '375px',
    sm: '495px',
    md: '660px',
    lg: '768px',
    xl: '1200px'
  }
};

export default theme;