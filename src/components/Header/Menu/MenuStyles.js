import styled from 'styled-components';
import { Link } from 'gatsby-plugin-react-i18next';
import { CenterWrapperStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';
import { popIn } from 'styles/animations';

export const LangLinkStyled = styled(Link)`
  text-transform: uppercase;
`;

export const ListItemStyled = styled.li`
  font-size: 6rem;
  cursor: pointer;
  position: relative;
  width: max-content;
  text-transform: capitalize;

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
    &:hover {
      &::after {
        transform: scale(1);
        transform-origin: left;
      }
    }
  }

  &::selection {
    color: inherit;
  }

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 5rem;
  }

  @media only screen and (max-width: ${pxToEm(460)}) {
    font-size: 4.5rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 4rem;
  }
`;

export const ContainerListStyled = styled(CenterWrapperStyled)`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & > * + * {
    margin-top: 4rem;
  }

  &:after {
    position: absolute;
    width: 100%;
    height: 0.12em;
    border-radius: 2px;
    background: red;
    left: 0;
    bottom: 0;
    transform: scale(0);
    transition: transform 0.5s ease-in-out;
    transform-origin: right;
  }

  @media (hover: hover) {
    &:hover:after {
      transform: scale(1);
      transform-origin: left;
    }
  }
`;

export const ContainerStyled = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: 999;
  height: 100vh;
  width: 100vw;
  padding-left: 8rem;
  background-color: ${props => props.theme.colors.background.light};
  align-items: center;
  animation: ${popIn} 0.1s ease-in;

  @media ${props => props.theme.breakpoints.sm} {
    padding-left: 6rem;
  }

  @media only screen and (max-width: ${pxToEm(460)}) {
    padding-left: 4rem;
  }

  @media only screen and (max-width: ${pxToEm(280)}) {
    padding-left: 2rem;
  }
`;
