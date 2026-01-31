import styled from 'styled-components';

export const CardsItem = styled.div`
  padding: 5px;
  animation-name: card-animation;
  animation-duration: 500ms;
  animation-timing-function: linear;
`;

export const CardsCard = styled.div`
  width: 220px;
  height: 130px;
  background-color: #FFFFFF;
  border-radius: 10px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: stretch;
  padding: 15px 13px 19px;
`;

export const CardGroup = styled.div`
  width: 100%;
  height: 20px;
  margin-bottom: 12px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardTheme = styled.div`
  width: auto;
  height: 20px;
  padding: 5px 14px;
  border-radius: 18px;
  background-color: ${props => {
    switch(props.$category) {  // Используем $ префикс
      case 'Web Design': return '#FFE4C2';
      case 'Research': return '#B4FDD1';
      case 'Copywriting': return '#E9D4FF';
      default: return '#94A6BE';
    }
  }};
  color: ${props => {
    switch(props.$category) {  // Используем $ префикс
      case 'Web Design': return '#FF6D00';
      case 'Research': return '#06B16E';
      case 'Copywriting': return '#9A48F1';
      default: return '#FFFFFF';
    }
  }};
`;

export const CardThemeText = styled.p`
  font-size: 10px;
  font-weight: 600;
  line-height: 10px;
  color: inherit;
`;

export const CardBtn = styled.div`
  width: 24px;
  height: 24px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  padding: 2px;
`;

export const CardBtnDot = styled.div`
  width: 4px;
  height: 4px;
  border-radius: 50%;
  background-color: #94A6BE;
`;

export const CardTitle = styled.h3`
  font-size: 14px;
  font-weight: 500;
  line-height: 18px;
  color: #000000;
  margin-bottom: 10px;
  
  a {
    color: inherit;
    text-decoration: none;
    
    &:hover {
      color: #565EEF;
    }
  }
`;

export const CardContent = styled.div`
  height: 64px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
`;

export const CardDate = styled.div`
  display: flex;
  align-items: center;
  justify-content: flex-start;
  
  svg {
    width: 13px;
    
    path {
      stroke: #94A6BE;
    }
  }
`;

export const CardDateText = styled.p`
  margin-left: 6px;
  font-size: 10px;
  line-height: 13px;
  color: #94A6BE;
  letter-spacing: 0.2px;
`;

// Создаем ключевые кадры для анимации
export const cardAnimation = `
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
`;