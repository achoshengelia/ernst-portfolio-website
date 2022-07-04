import styled from 'styled-components';
import { HeadingStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';

export const ListItemStyled = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  padding-top: 2rem;
  list-style-type: disc;
  height: max-content;

  @media only screen and (max-width: ${pxToEm(950)}) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: ${pxToEm(800)}) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: ${pxToEm(550)}) {
    font-size: 1.6rem;
  }
`;

export const ListStyled = styled.ul`
  padding: 2rem;
  flex-basis: 100%;

  @media only screen and (max-width: ${pxToEm(950)}) {
    padding: 1rem 1rem 1rem 2rem;
  }

  @media only screen and (max-width: ${pxToEm(800)}) {
    padding: 0 2rem;
  }
`;

export const ListContainer = styled.div`
  display: flex;

  & > * + * {
    margin-left: 4rem;
  }

  @media only screen and (max-width: ${pxToEm(950)}) {
    & > * + * {
      margin-left: 2rem;
    }
  }

  @media only screen and (max-width: ${pxToEm(800)}) {
    flex-direction: column;

    & > * + * {
      margin-left: 0rem;
    }
  }
`;

export const MainWrapperStyled = styled.div``;

export const ContainerStyled = styled.section`
  margin: 15rem 0 10rem 0;

  & ${MainWrapperStyled} {
    border-radius: 0.5rem;
    padding: 4rem 2rem 3.5rem 2rem;
    max-width: 140rem;
    background-color: ${props => props.theme.colors.background.dark};
  }

  @media only screen and (max-width: ${pxToEm(950)}) {
    & ${MainWrapperStyled} {
      padding: 3.5rem 2rem 3rem 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.md} {
    & ${HeadingStyled} {
      padding: 0.5rem 0 1rem 0;
      font-weight: 500;
    }
  }

  @media only screen and (max-width: ${pxToEm(550)}) {
    & ${HeadingStyled} {
      font-size: 2rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    margin-top: 8rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    margin-top: 5rem;

    & ${MainWrapperStyled} {
      padding: 2.5rem 1rem 2.5rem 1rem;
    }
  }
`;
