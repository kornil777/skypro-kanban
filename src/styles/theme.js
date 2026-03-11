export const lightTheme = {
  colors: {
    primary: '#565EEF',
    primaryHover: '#33399b',
    secondary: '#FFFFFF',
    backgroundMain: '#F1F1F1',
    backgroundLight: '#FFFFFF',
    backgroundGray: '#EAEEF6',
    textPrimary: '#000000',
    textSecondary: '#94A6BE',
    textLight: '#FFFFFF',
    border: '#D4DBE5',
    borderLight: 'rgba(148, 166, 190, 0.4)',
    category: {
      orange: { background: '#FFE4C2', text: '#FF6D00' },
      green: { background: '#B4FDD1', text: '#06B16E' },
      purple: { background: '#E9D4FF', text: '#9A48F1' },
      gray: { background: '#94A6BE', text: '#FFFFFF' },
    },
    error: '#FF6D6D',
    weekend: '#FF6D6D',
    success: '#06B16E',
    overlay: 'rgba(0, 0, 0, 0.4)',
    shadow: '0px 10px 39px 0px rgba(26, 56, 101, 0.21)',
    logoutButtonColor: '#565EEF',   // синий (primary)
    checkboxBackground: '#EAEEF6',   // светло-серый (backgroundGray)
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

export const darkTheme = {
  ...lightTheme, // наследуем все размеры, шрифты и т.д.
  colors: {
    ...lightTheme.colors,
    // переопределяем нужные цвета
    primary: '#565EEF', // можно оставить, или сделать темнее/светлее
    primaryHover: '#33399b',
    secondary: '#20202C', // или rgba(32,32,44,1)
    backgroundMain: '#151419', // rgba(21,20,25,1)
    backgroundLight: '#20202C', // rgba(32,32,44,1)
    backgroundGray: '#20202C', // для модалок тоже
    textPrimary: '#FFFFFF', // белый вместо черного
    textSecondary: '#94A6BE', // оставляем серый
    textLight: '#FFFFFF',
    border: '#D4DBE5', // можно оставить или затемнить
    borderLight: 'rgba(148, 166, 190, 0.4)',
    overlay: 'rgba(0, 0, 0, 0.4)',
    shadow: '0px 10px 39px 0px rgba(0, 0, 0, 0.5)',
    // категории можно оставить те же
     logoutButtonColor: '#FFFFFF',    // белый
    checkboxBackground: '#FFFFFF',    // белый
  },
};
