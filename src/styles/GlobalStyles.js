import { createGlobalStyle } from 'styled-components';

const GlobalStyles = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  *:before,
  *:after {
    box-sizing: border-box;
  }

  html,
  body {
    width: 100%;
    height: 100%;
    font-family: ${({ theme }) => theme.fonts.primary};
    color: ${({ theme }) => theme.colors.textPrimary};
  }

  body.modal-open {
    overflow: hidden;
  }

  #root {
    margin: 0 auto;
  }

  .wrapper {
    max-width: 100%;
    width: 100vw;
    min-height: 100vh;
    overflow: hidden;
    background-color: ${({ theme }) => theme.colors.backgroundMain};
  }

  .container {
    max-width: ${({ theme }) => theme.sizes.container};
    width: 100%;
    margin: 0 auto;
    padding: 0 30px;

    @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
      padding: 0 16px;
    }
  }

  a,
  a:visited {
    text-decoration: none;
    cursor: pointer;
  }

  button,
  ._btn {
    cursor: pointer;
    outline: none;
  }

  ul li {
    list-style: none;
  }

  @keyframes card-animation {
    0% {
      height: 0;
      opacity: 0;
    }
    100% {
      height: auto;
      opacity: 1;
    }
  }

  // Ховер эффекты
  ._hover01:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover} !important;
  }

  ._hover02:hover {
    color: ${({ theme }) => theme.colors.primaryHover} !important;
  }
  
  ._hover02:hover::after {
    border-left-color: ${({ theme }) => theme.colors.primaryHover} !important;
    border-bottom-color: ${({ theme }) => theme.colors.primaryHover} !important;
  }

  ._hover03:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover} !important;
    color: ${({ theme }) => theme.colors.textLight} !important;
    
    a {
      color: ${({ theme }) => theme.colors.textLight} !important;
    }
  }

  // Утилитарные классы для категорий
  ._orange {
    background-color: ${({ theme }) => theme.colors.category.orange.background} !important;
    color: ${({ theme }) => theme.colors.category.orange.text} !important;
  }

  ._green {
    background-color: ${({ theme }) => theme.colors.category.green.background} !important;
    color: ${({ theme }) => theme.colors.category.green.text} !important;
  }

  ._purple {
    background-color: ${({ theme }) => theme.colors.category.purple.background} !important;
    color: ${({ theme }) => theme.colors.category.purple.text} !important;
  }

  ._gray {
    background: ${({ theme }) => theme.colors.category.gray.background} !important;
    color: ${({ theme }) => theme.colors.category.gray.text} !important;
  }

  // Активная категория
  ._active-category {
    opacity: 1 !important;
  }

  // Кнопки
  ._btn-bor {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
    border: 0.7px solid ${({ theme }) => theme.colors.primary};
    outline: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.primary};
    
    a {
      color: ${({ theme }) => theme.colors.primary};
    }
  }

  ._btn-bg {
    border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
    background: ${({ theme }) => theme.colors.primary};
    border: none;
    outline: none;
    color: ${({ theme }) => theme.colors.textLight};
    
    a {
      color: ${({ theme }) => theme.colors.textLight};
    }
  }

  // Вспомогательные классы
  ._hide {
    display: none !important;
  }

  .subttl {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    line-height: 1;
  }

  // Стили для календаря (можно оставить в компоненте, но для совместимости)
  ._other-month {
    opacity: 0;
  }

  ._cell-day:hover {
    color: ${({ theme }) => theme.colors.textSecondary};
    background-color: ${({ theme }) => theme.colors.backgroundGray};
  }

  ._active-day {
    background-color: ${({ theme }) => theme.colors.textSecondary};
    color: ${({ theme }) => theme.colors.textLight};
  }

  ._current {
    font-weight: ${({ theme }) => theme.fonts.weights.bold};
  }

  .-weekend- {
    color: ${({ theme }) => theme.colors.weekend};
  }
`;

export default GlobalStyles;