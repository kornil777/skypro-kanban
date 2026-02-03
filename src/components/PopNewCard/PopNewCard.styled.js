import styled from 'styled-components';

export const PopNewCardContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  min-width: 375px;
  min-height: 100vh;
  z-index: 1000;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 20px;
`;

export const PopNewCardOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(4px);
`;

export const PopNewCardBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 48px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 0.7px solid ${({ theme }) => theme.colors.border};
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  position: relative;
  z-index: 1001;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 30px 20px;
    max-width: 95%;
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    padding: 20px 15px;
  }
`;

export const PopNewCardContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopNewCardTitle = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 24px;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const PopNewCardClose = styled.button`
  position: absolute;
  top: 20px;
  right: 30px;
  color: ${({ theme }) => theme.colors.textSecondary};
  cursor: pointer;
  background: none;
  border: none;
  font-size: 24px;
  line-height: 1;
  padding: 0;
  transition: color ${({ theme }) => theme.animations.transition};

  &:hover {
    color: ${({ theme }) => theme.colors.textPrimary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    top: 15px;
    right: 15px;
    font-size: 20px;
  }
`;

export const PopNewCardWrap = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
  margin-bottom: 20px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const PopNewCardForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const FormNewBlock = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 20px;
`;

export const FormNewInput = styled.input`
  width: 100%;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin: 10px 0;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fonts.weights.normal};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const FormNewTextarea = styled.textarea`
  width: 100%;
  max-width: 370px;
  outline: none;
  padding: 14px;
  background: transparent;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1.5;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 10px;
  height: 200px;
  resize: vertical;

  &::placeholder {
    font-weight: ${({ theme }) => theme.fonts.weights.normal};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  &:focus {
    border-color: ${({ theme }) => theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const FormNewCreateButton = styled.button`
  width: 132px;
  height: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  border: 0;
  outline: none;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  line-height: 1;
  color: ${({ theme }) => theme.colors.textLight};
  float: right;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animations.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 40px;
    float: none;
    margin-top: 20px;
  }
`;

export const Categories = styled.div`
  margin-bottom: 30px;
`;

export const CategoriesTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 1;
  margin-bottom: 14px;
`;

export const CategoriesThemes = styled.div`
  display: flex;
  flex-wrap: nowrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-wrap: wrap;
  }
`;

export const CategoryTheme = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  cursor: pointer;
  opacity: ${({ $active }) => $active ? '1' : '0.4'};
  transition: opacity ${({ theme }) => theme.animations.transition};
  background-color: ${({ theme, $category }) => {
    switch($category) {
      case 'orange': return theme.colors.category.orange.background;
      case 'green': return theme.colors.category.green.background;
      case 'purple': return theme.colors.category.purple.background;
      default: return theme.colors.category.gray.background;
    }
  }};
  
  p {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    line-height: 14px;
    white-space: nowrap;
    color: ${({ theme, $category }) => {
      switch($category) {
        case 'orange': return theme.colors.category.orange.text;
        case 'green': return theme.colors.category.green.text;
        case 'purple': return theme.colors.category.purple.text;
        default: return theme.colors.category.gray.text;
      }
    }};
  }

  &:hover {
    opacity: 0.8;
  }
`;