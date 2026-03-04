import styled from 'styled-components';

export const HeaderContainer = styled.header`
  width: 100%;
  margin: 0 auto;
  background-color: ${({ theme }) => theme.colors.backgroundLight};
`;

export const HeaderBlock = styled.div`
  height: 70px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  position: relative;
  top: 0;
  left: 0;
  padding: 0 10px;
  max-width: ${({ theme }) => theme.sizes.container};
  margin: 0 auto;
`;

export const HeaderLogo = styled.div`
  img {
    width: 85px;
  }
`;

export const HeaderNav = styled.div`
  max-width: 290px;
  padding: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
`;

export const HeaderButton = styled.button`
  width: 178px;
  height: 30px;
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  background-color: ${({ theme }) => theme.colors.primary};
  color: ${({ theme }) => theme.colors.textLight};
  border: none;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 1;
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  margin-right: 20px;
  cursor: pointer;
  transition: background-color 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primaryHover};
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.sm}) {
    width: 140px;
    font-size: 12px;
    margin-right: 10px;
  }
`;

export const HeaderUser = styled.div`
  height: 20px;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: center;
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  line-height: 20px;
  color: ${({ theme }) => theme.colors.primary};
  cursor: pointer;
  position: relative;
  padding-right: 15px;

  &::after {
    content: "";
    display: block;
    width: 6px;
    height: 6px;
    border-radius: 1px;
    border-left: 1.9px solid ${({ theme }) => theme.colors.primary};
    border-bottom: 1.9px solid ${({ theme }) => theme.colors.primary};
    transform: rotate(-45deg);
    position: absolute;
    right: 0;
    top: 50%;
    margin-top: -3px;
  }
`;

export const UserMenu = styled.div`
  position: absolute;
  top: 61px;
  right: 0;
  width: 213px;
  height: 205px;
  border-radius: 10px;
  border: 0.7px solid rgba(148, 166, 190, 0.4);
  background: #fff;
  box-shadow: 0px 10px 39px 0px rgba(26, 56, 101, 0.21);
  padding: 34px;
  text-align: center;
  z-index: 2;
`;

export const UserMenuName = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  color: ${({ theme }) => theme.colors.textPrimary};
  margin-bottom: 4px;
  width: 100%;
`;

export const UserMenuEmail = styled.p`
  font-size: ${({ theme }) => theme.fonts.sizes.sm};
  color: ${({ theme }) => theme.colors.textSecondary};
  margin-bottom: 15px;
  width: 100%;
`;

export const UserMenuTheme = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  margin-bottom: 20px;
`;

export const UserMenuThemeLabel = styled.span`
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  color: ${({ theme }) => theme.colors.textPrimary};
`;

export const UserMenuThemeCheckbox = styled.input`
  position: relative;
  width: 36px;
  height: 20px;
  border-radius: 20px;
  background: ${({ theme }) => theme.colors.backgroundGray};
  outline: none;
  -webkit-appearance: none;
  appearance: none;
  cursor: pointer;

  &::before {
    content: "";
    position: absolute;
    top: 2px;
    left: 2px;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background-color: ${({ theme }) => theme.colors.primary};
    transition: transform 0.3s;
  }

  &:checked::before {
    transform: translateX(16px);
  }
`;

export const UserMenuLogoutButton = styled.button`
  width: 100%;
  height: 30px;
  background-color: transparent;
  border: 1px solid ${({ theme }) => theme.colors.primary};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.small};
  color: ${({ theme }) => theme.colors.primary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  font-weight: ${({ theme }) => theme.fonts.weights.medium};
  cursor: pointer;
  transition: all ${({ theme }) => theme.animations.transition};
  margin-top: 10px;

  &:hover {
    background-color: ${({ theme }) => theme.colors.primary};
    color: ${({ theme }) => theme.colors.textLight};
  }
`;