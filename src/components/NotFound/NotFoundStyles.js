import styled from 'styled-components';
import {
  ButtonStyled,
  CenterWrapperStyled,
  HeadingStyled
} from 'components/Global';

export const ContainerStyled = styled.section`
  background-color: ${props => props.theme.colors.primary.main};
  height: 100vh;

  & > ${CenterWrapperStyled} {
    display: flex;
    align-items: center;
    flex-direction: column;
    padding-top: 20rem;

    & > ${HeadingStyled}:first-child {
      margin-bottom: 3rem;
    }

    & > ${ButtonStyled} {
      margin-top: 8rem;
      max-width: 34.8rem;
    }

    @media ${props => props.theme.breakpoints.md} {
      padding-top: 15rem;

      & > ${HeadingStyled} {
        &:nth-child(2) {
          font-size: 2.5rem;
        }
      }
    }

    @media ${props => props.theme.breakpoints.sm} {
      padding-top: 12rem;

      & > ${HeadingStyled} {
        font-size: 4rem;
        text-align: center;

        &:nth-child(2) {
          font-size: 2.2rem;
        }
      }
    }
  }
`;
