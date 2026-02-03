import styled from 'styled-components';

export const PopBrowseContainer = styled.div`
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

export const PopBrowseOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: ${({ theme }) => theme.colors.overlay};
  backdrop-filter: blur(4px);
`;

export const PopBrowseBlock = styled.div`
  display: block;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  max-width: 630px;
  width: 100%;
  padding: 40px 30px 38px;
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

export const PopBrowseContent = styled.div`
  display: block;
  text-align: left;
`;

export const PopBrowseTopBlock = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 18px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: flex-start;
    gap: 10px;
  }
`;

export const PopBrowseTitle = styled.h3`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.xl};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 24px;
  margin: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    font-size: ${({ theme }) => theme.fonts.sizes.lg};
  }
`;

export const CategoryBadge = styled.div`
  display: inline-block;
  width: auto;
  height: 30px;
  padding: 8px 20px;
  border-radius: 24px;
  opacity: 1;
  background-color: ${({ theme, $category }) => {
    switch($category) {
      case 'webdesign': return theme.colors.category.orange.background;
      case 'research': return theme.colors.category.green.background;
      case 'copywriting': return theme.colors.category.purple.background;
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
        case 'webdesign': return theme.colors.category.orange.text;
        case 'research': return theme.colors.category.green.text;
        case 'copywriting': return theme.colors.category.purple.text;
        default: return theme.colors.category.gray.text;
      }
    }};
  }
`;

export const StatusSection = styled.div`
  margin-bottom: 11px;
`;

export const StatusTitle = styled.p`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  line-height: 1;
  margin-bottom: 14px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: flex-start;
  gap: 7px;
`;

export const StatusTheme = styled.div`
  border-radius: 24px;
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  color: ${({ theme, $active }) => $active ? theme.colors.textLight : theme.colors.textSecondary};
  padding: 11px 14px 10px;
  cursor: ${({ $disabled }) => $disabled ? 'default' : 'pointer'};
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.textSecondary : 'transparent'};
  transition: all ${({ theme }) => theme.animations.transition};

  p {
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    line-height: 1;
    letter-spacing: -0.14px;
  }

  &:hover {
    background-color: ${({ theme, $disabled, $active }) => 
      $disabled || $active ? 'inherit' : theme.colors.backgroundGray};
  }
`;

export const PopBrowseWrap = styled.div`
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

export const PopBrowseForm = styled.form`
  max-width: 370px;
  width: 100%;
  display: block;
  margin-bottom: 0;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const FormBrowseBlock = styled.div`
  display: flex;
  flex-direction: column;
`;

export const FormBrowseTextarea = styled.textarea`
  max-width: 370px;
  width: 100%;
  outline: none;
  padding: 14px;
  background: ${({ theme, readOnly }) => 
    readOnly ? theme.colors.backgroundGray : theme.colors.backgroundLight};
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1.5;
  letter-spacing: -0.14px;
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-top: 14px;
  height: 200px;
  resize: ${({ readOnly }) => readOnly ? 'none' : 'vertical'};
  cursor: ${({ readOnly }) => readOnly ? 'default' : 'text'};

  &::placeholder {
    font-weight: ${({ theme }) => theme.fonts.weights.normal};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    color: ${({ theme }) => theme.colors.textSecondary};
    letter-spacing: -0.14px;
  }

  &:focus {
    border-color: ${({ theme, readOnly }) => 
      readOnly ? theme.colors.borderLight : theme.colors.primary};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    max-width: 100%;
  }
`;

export const ThemeDownCategories = styled.div`
  margin-bottom: 20px;
`;

export const PopBrowseButtons = styled.div`
  display: flex;
  flex-wrap: wrap;
  align-items: flex-start;
  justify-content: space-between;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 10px;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
  }
`;

export const BrowseButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  border: 0.7px solid ${({ theme }) => theme.colors.primary};
  outline: none;
  background: transparent;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1;
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.transition};

  &.btn-edit__edit._btn-bg {
    background: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
    border: none;
  }

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
    color: ${({ theme }) => theme.colors.textLight};
    border-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex: 1;
    min-width: 150px;
  }
`;

export const CloseButton = styled.button`
  height: 30px;
  margin-bottom: 10px;
  padding: 0 14px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  background: ${({ theme }) => theme.colors.primary};
  border: none;
  outline: none;
  color: ${({ theme }) => theme.colors.textLight};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1;
  cursor: pointer;
  transition: background-color ${({ theme }) => theme.animations.transition};

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
  
  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 100%;
    height: 40px;
  }
`;