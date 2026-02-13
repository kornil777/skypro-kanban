import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  background-color: ${({ theme }) => theme.colors.backgroundGray};
  padding: 20px;
`;

export const PageContent = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  width: 100%;
`;

export const BackButton = styled.button`
  background: none;
  border: none;
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  cursor: pointer;
  padding: 10px 0;
  margin-bottom: 20px;
  display: flex;
  align-items: center;
  gap: 5px;
  transition: color 0.3s;

  &:hover {
    color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const CardDetailContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const CardDetailBlock = styled.div``;

export const CardDetailHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    gap: 15px;
  }
`;

export const CardDetailTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin: 0;
  flex: 1;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const CategoryBadge = styled.div`
  display: inline-flex;
  padding: 8px 20px;
  border-radius: 24px;
  background-color: ${({ theme, $category }) => {
    switch($category) {
      case 'webdesign': return theme.colors.category.orange.background;
      case 'research': return theme.colors.category.green.background;
      case 'copywriting': return theme.colors.category.purple.background;
      default: return theme.colors.category.gray.background;
    }
  }};
  color: ${({ theme, $category }) => {
    switch($category) {
      case 'webdesign': return theme.colors.category.orange.text;
      case 'research': return theme.colors.category.green.text;
      case 'copywriting': return theme.colors.category.purple.text;
      default: return theme.colors.category.gray.text;
    }
  }};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
`;

export const StatusSection = styled.div`
  margin-bottom: 30px;
`;

export const StatusTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  margin-bottom: 15px;
`;

export const StatusThemes = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
`;

export const StatusTheme = styled.div`
  padding: 10px 20px;
  border-radius: 24px;
  border: 2px solid ${({ theme, $active }) => 
    $active ? theme.colors.primary : theme.colors.borderLight};
  background-color: ${({ theme, $active }) => 
    $active ? theme.colors.primary : 'transparent'};
  color: ${({ theme, $active }) => 
    $active ? theme.colors.textLight : theme.colors.textSecondary};
  cursor: ${({ $disabled }) => $disabled ? 'default' : 'pointer'};
  transition: all 0.3s;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};

  &:hover {
    background-color: ${({ theme, $disabled, $active }) => 
      $disabled || $active ? 'inherit' : theme.colors.backgroundGray};
    border-color: ${({ theme, $disabled, $active }) => 
      $disabled || $active ? 'inherit' : theme.colors.primary};
  }
`;

export const DetailWrap = styled.div`
  display: flex;
  gap: 40px;
  margin-bottom: 40px;

  @media (max-width: ${({ theme }) => theme.breakpoints.lg}) {
    flex-direction: column;
  }
`;

export const DetailForm = styled.form`
  flex: 1;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    margin-bottom: 10px;
  }
`;

export const FormTextarea = styled.textarea`
  width: 100%;
  min-height: 300px;
  padding: 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  background-color: ${({ theme, readOnly }) => 
    readOnly ? theme.colors.backgroundGray : theme.colors.backgroundLight};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.textPrimary};
  resize: vertical;
  cursor: ${({ readOnly }) => readOnly ? 'default' : 'text'};

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  flex-wrap: wrap;
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
    align-items: stretch;
  }
`;

export const ButtonGroup = styled.div`
  display: flex;
  gap: 15px;
  flex-wrap: wrap;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    justify-content: center;
  }
`;

export const ActionButton = styled.button`
  padding: 12px 24px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: all 0.3s;
  border: ${({ className }) => 
    className && className.includes('_btn-bor') ? '1px solid' : 'none'};
  border-color: ${({ theme }) => theme.colors.primary};
  background-color: ${({ theme, className }) => 
    className && className.includes('_btn-bg') ? theme.colors.primary : 'transparent'};
  color: ${({ theme, className }) => 
    className && className.includes('_btn-bg') ? theme.colors.textLight : theme.colors.primary};

  &:hover {
    background-color: ${({ theme, className }) => 
      className && className.includes('_btn-bg') ? theme.colors.primaryHover : theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;