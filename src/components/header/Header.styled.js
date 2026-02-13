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
  top: 50px;
  right: 0;
  width: 200px;
  background: ${({ theme }) => theme.colors.backgroundLight};
  border-radius: ${({ theme }) => theme.sizes.borderRadius.medium};
  border: 0.7px solid ${({ theme }) => theme.colors.borderLight};
  box-shadow: ${({ theme }) => theme.colors.shadow};
  padding: 15px;
  z-index: 1000;
`;

export const UserMenuItem = styled.div`
  padding: 10px 0;
  color: ${({ theme }) => theme.colors.textPrimary};
  font-size: ${({ theme }) => theme.fonts.sizes.md};
  cursor: pointer;
  border-bottom: 1px solid ${({ theme }) => theme.colors.borderLight};

  &:last-child {
    border-bottom: none;
  }

  &:hover {
    color: ${({ theme }) => theme.colors.primary};
  }
`;