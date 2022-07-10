import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from 'components/Global';
import { HamburgerWrapperStyled } from './Hamburger/HamburgerStyles';
import { pxToEm } from 'utils/fns';

export const LangLinkStyled = styled(Link)`
  text-transform: uppercase;
`;

export const NavListItemStyled = styled.li`
  transition: transform 0.2s ease-in-out, font-size 0.5s ease-in;
  font-weight: ${({ isMain }) => (isMain ? '600' : null)};
  font-size: ${({ isMain, showLanding }) =>
    isMain && showLanding
      ? '2.2rem'
      : !isMain && showLanding
      ? '2rem'
      : isMain
      ? '1.8rem'
      : '1.6rem'};
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

  @media (hover: hover) {
    &:hover::after {
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

  @media only screen and (max-width: ${pxToEm(1090)}) {
    font-size: ${({ isMain, showLanding }) =>
      isMain && showLanding
        ? '2rem'
        : !isMain && showLanding
        ? '1.8rem'
        : isMain
        ? '1.8rem'
        : '1.6rem'};
  }

  @media ${props => props.theme.breakpoints.lg} {
    font-size: ${({ isMain, showLanding }) =>
      isMain && showLanding
        ? '2rem'
        : !isMain && showLanding
        ? '1.8rem'
        : isMain
        ? '1.7rem'
        : '1.6rem'};
  }

  @media ${props => props.theme.breakpoints.md} {
    font-size: ${({ isMain }) => (isMain ? '1.6rem' : null)};
    font-size: ${({ isMain, showLanding }) =>
      isMain && showLanding
        ? '2rem'
        : !isMain && showLanding
        ? '1.8rem'
        : isMain
        ? '1.6rem'
        : '1.6rem'};
  }

  @media only screen and (max-width: ${pxToEm(500)}) {
    font-size: ${({ isMain, showLanding }) =>
      isMain && showLanding
        ? '1.8rem'
        : !isMain && showLanding
        ? '1.8rem'
        : isMain
        ? '1.6rem'
        : '1.6rem'};
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: ${({ isMain, showLanding }) =>
      isMain && showLanding
        ? '1.65rem'
        : !isMain && showLanding
        ? '1.8rem'
        : isMain
        ? '1.6rem'
        : '1.6rem'};
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
      margin-left: 4.2rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & > * + * {
      margin-left: 3.5rem;
    }
  }
`;

export const ContainerNavStyled = styled(CenterWrapperStyled)``;

export const ContainerHeaderStyled = styled.header`
  display: flex;
  align-items: center;
  position: sticky;
  top: 0;
  background-color: ${props =>
    props.showLanding ? 'transparent' : props.theme.colors.background.light};
  transition: background-color 1s ease;
  width: 100%;
  min-height: 7rem;
  z-index: 9999;
`;
