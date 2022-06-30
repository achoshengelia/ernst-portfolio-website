import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from '../../styles/utils';
import { HamburgerWrapperStyled } from './Hamburger/HamburgerStyles';

export const LangLinkStyled = styled(Link)`
  text-transform: uppercase;
`;

export const NavListItemStyled = styled.li`
  transition: transform 0.2s ease-in-out;
  font-weight: ${({ isMain }) => (isMain ? '600' : null)};
  font-size: ${({ isMain }) => (isMain ? '1.8rem' : null)};
  cursor: pointer;
  text-transform: capitalize;
  position: relative;
  width: max-content;

  &::after {
    content: '';
    position: absolute;
    width: 100%;
    height: 0.08em;
    border-radius: 0.2rem;
    background: ${props => props.theme.colors.text.main};
    left: 0;
    bottom: -0.1rem;
    transform: scale(0);
    transform-origin: right;
    transition: transform 0.3s ease-in-out;
  }

  &:hover {
    &::after {
      transform: ${({ isMain }) => (isMain ? null : 'scale(1)')};
      transform-origin: ${({ isMain }) => (isMain ? null : 'left')};
    }
  }

  &:first-child {
    margin-right: auto;
  }

  &::selection {
    color: inherit;
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: ${({ isMain }) => (isMain ? '1.7rem' : null)};
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({ isMain }) => (isMain ? '1.6rem' : null)};
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: ${({ isMain }) => (isMain ? '1.5rem' : null)};
  }
`;

export const NavListStyled = styled.ul`
  display: flex;
  justify-content: space-between;
  align-items: center;

  & > * + * {
    margin-left: 8rem;
  }

  & ${HamburgerWrapperStyled} {
    margin-left: auto;
  }

  @media ${props => props.theme.breakpoints.lg} {
    & > * + * {
      margin-left: 5rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & > * + * {
      margin-left: 4rem;
    }
  }
`;

export const ContainerNavStyled = styled(CenterWrapperStyled)``;

export const ContainerHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${props => props.theme.colors.background.light};
  width: 100%;
  min-height: 7rem;
  z-index: 9999;
`;
