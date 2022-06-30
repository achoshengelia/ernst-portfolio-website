import styled from 'styled-components';
import { pxToEm } from 'utils/fns';

export const ArrowWrapperStyled = styled.span`
  display: inline-block;
  transition: transform 0.2s ease;
`;

export const FooterListItemStyled = styled.li`
  cursor: ${({ isFirstChild }) => (isFirstChild ? 'default' : 'pointer')};
  font-size: 1.4rem;
  margin-left: ${({ isFirstChild }) => (isFirstChild ? null : '5rem')};

  &:hover {
    ${ArrowWrapperStyled} {
      transform: translateY(-15%);
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    margin-left: ${({ isFirstChild }) => (isFirstChild ? null : '3rem')};
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 1.2rem;
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    margin-top: ${({ isFirstChild }) => (isFirstChild ? '1.5rem' : null)};
  }
`;

export const FooterListStyled = styled.ul`
  display: flex;
  margin-left: ${({ isMainList }) => (isMainList ? null : 'auto')};

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: ${({ isMainList }) =>
      isMainList ? 'row-reverse' : 'column'};

    justify-content: ${({ isMainList }) =>
      isMainList ? 'space-between' : null};

    align-items: ${({ isMainList }) => (isMainList ? 'flex-end' : null)};

    margin-left: 0;

    & > * + * {
      margin-top: 1.5rem;
    }
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    flex-direction: ${({ isMainList }) =>
      isMainList ? 'column-reverse' : null};

    align-items: ${({ isMainList }) => (isMainList ? 'flex-start' : null)};
  }
`;

export const ContainerStyled = styled.footer`
  display: flex;
  align-items: center;
  margin-top: auto;
  background-color: ${props => props.theme.colors.background.main};
  color: ${props => props.theme.colors.text.light};
  min-height: 10rem;
  padding: 3rem 0;
`;
