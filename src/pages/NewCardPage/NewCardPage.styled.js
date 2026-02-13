import styled from 'styled-components';

export const PageContainer = styled.div`
  width: 100%;
  min-height: 100vh;
  /* background-color: ${({ theme }) => theme.colors.backgroundGray}; */
  padding: 20px;
`;

export const PageContent = styled.div`
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
  width: 100%;
`;

export const NewCardContainer = styled.div`
  background-color: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 1px solid ${({ theme }) => theme.colors.border};
  padding: 40px;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.1);

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    padding: 20px;
  }
`;

export const NewCardBlock = styled.div``;

export const NewCardTitle = styled.h1`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: 28px;
  font-weight: ${({ theme }) => theme.fonts.weights.bold};
  margin-bottom: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.md}) {
    font-size: 24px;
  }
`;

export const NewCardForm = styled.form`
  display: flex;
  flex-direction: column;
  gap: 30px;
`;

export const FormBlock = styled.div`
  display: flex;
  flex-direction: column;

  label {
    color: ${({ theme }) => theme.colors.textPrimary};
    font-size: ${({ theme }) => theme.fonts.sizes.md};
    font-weight: ${({ theme }) => theme.fonts.weights.semibold};
    margin-bottom: 10px;
    
    &::after {
      content: ${({ required }) => required ? '" *"' : '""'};
      color: #ff6d6d;
    }
  }
`;

export const FormInput = styled.input`
  padding: 15px 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const FormTextarea = styled.textarea`
  padding: 15px 20px;
  border: 1px solid ${({ theme }) => theme.colors.borderLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
  line-height: 1.6;
  resize: vertical;
  transition: border-color 0.3s;

  &:focus {
    outline: none;
    border-color: ${({ theme }) => theme.colors.primary};
  }

  &::placeholder {
    color: ${({ theme }) => theme.colors.textSecondary};
  }
`;

export const CategoriesSection = styled.div``;

export const CategoriesTitle = styled.h2`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.lg};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  margin-bottom: 20px;
`;

export const CategoriesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  gap: 20px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    grid-template-columns: 1fr 1fr;
  }
`;

export const CategoryCard = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 25px 15px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.large};
  border: 2px solid ${({ theme, $color, $selected }) => 
    $selected ? theme.colors.textPrimary : 'transparent'};
  background-color: ${({ theme, $color }) => {
    switch($color) {
      case 'orange': return theme.colors.category.orange.background;
      case 'green': return theme.colors.category.green.background;
      case 'purple': return theme.colors.category.purple.background;
      default: return theme.colors.category.gray.background;
    }
  }};
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
  }
`;

export const CategoryIcon = styled.div`
  font-size: 32px;
  margin-bottom: 10px;
`;

export const CategoryName = styled.div`
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  text-align: center;
`;

export const CalendarSection = styled.div`
  margin-top: 20px;
`;

export const ActionButtons = styled.div`
  display: flex;
  gap: 20px;
  margin-top: 30px;

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    flex-direction: column;
  }
`;

export const CreateButton = styled.button`
  padding: 15px 30px;
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  cursor: pointer;
  transition: background-color 0.3s;
  flex: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }
`;

export const CancelButton = styled.button`
  padding: 15px 30px;
  background-color: transparent;
  color: ${({ theme }) => theme.colors.primary};
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.semibold};
  cursor: pointer;
  transition: all 0.3s;
  flex: 1;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;