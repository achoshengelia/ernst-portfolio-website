import styled from 'styled-components';
import {
  CenterWrapperStyled,
  HeadingStyled,
  TextStyled
} from 'components/Global';
import { pxToEm } from 'utils/fns';

export const ButtonStyled = styled.button`
  background: none;
  cursor: pointer;
  display: flex;
  justify-content: center;
  align-items: center;
  opacity: 0.7;

  @media (hover: hover) {
    &:hover {
      opacity: 1;
    }
  }
`;

export const ButtonsWrapperStyled = styled.div`
  display: flex;

  & > * + * {
    margin-left: 3rem;
  }
`;

export const InfoWrapperStyled = styled.div`
  display: flex;

  & > * + * {
    margin-left: 3rem;
  }

  & > ${TextStyled} {
    font-style: italic;
    text-align: center;
  }

  @media only screen and (max-width: ${pxToEm(850)}) {
    & > ${TextStyled}, > ${HeadingStyled} {
      font-size: 1.6rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & > * + * {
      margin-left: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    flex-direction: column-reverse;

    & > ${HeadingStyled} {
      text-align: center;
    }

    & > * + * {
      margin-left: 0;
      margin-bottom: 1.5rem;
    }
  }
`;

export const ContainerStyled = styled.div`
  background-color: ${props => props.theme.colors.background.dark};

  & > ${CenterWrapperStyled} {
    min-height: 7rem;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 2rem 3rem;

    & > * + * {
      margin-left: 2rem;
    }

    @media ${props => props.theme.breakpoints.md} {
      padding: 2rem 2rem;
    }

    @media ${props => props.theme.breakpoints.sm} {
      padding: 2rem 1.5rem;
      flex-direction: column;
      justify-content: center;

      & > * + * {
        margin-left: 0rem;
        margin-top: 1.5rem;
      }
    }
  }
`;
