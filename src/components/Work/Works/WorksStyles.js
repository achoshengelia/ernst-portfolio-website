import styled from 'styled-components';
import { HeadingStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';

export const ButtonStyled = styled.button`
  background: none;
  cursor: pointer;
  margin-left: 2rem;
`;

export const ListItemStyled = styled.li`
  font-size: 1.8rem;
  font-weight: 400;
  margin-top: 2rem;
  list-style-type: disc;
  margin-left: 2rem;

  @media only screen and (max-width: ${pxToEm(950)}) {
    font-size: 1.7rem;
  }

  @media only screen and (max-width: ${pxToEm(800)}) {
    font-size: 1.8rem;
  }

  @media only screen and (max-width: ${pxToEm(550)}) {
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${pxToEm(500)}) {
    font-size: 1.4rem;
  }
`;

export const ListStyled = styled.ul``;

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

export const AccordionContainerStyled = styled.div`
  cursor: pointer;
  background-color: ${props => props.theme.colors.background.dark};
  padding: 2.5rem;
  border-radius: 0.5rem;

  & ${ListStyled} {
    transition: all ${({ isOpen }) => (isOpen ? '1s' : '.5s')} ease;
    max-height: ${({ isOpen }) => (isOpen ? '70rem' : '0')};
    overflow: hidden;
  }

  & ${ButtonStyled} {
    transition: transform ${({ isOpen }) => (isOpen ? '.3s' : '.6s')} ease;
    transform: ${({ isOpen }) =>
      isOpen ? 'rotate(.5turn)' : 'rotate(.125turn)'};

    @media only screen and (max-width: ${pxToEm(500)}) {
      transform: ${({ isOpen }) =>
        isOpen ? 'rotate(.5turn) scale(.8)' : 'rotate(.125turn) scale(.8)'};
    }
  }

  & ${HeadingStyled} {
    @media only screen and (max-width: ${pxToEm(750)}) {
      font-size: 1.9rem;
    }

    @media only screen and (max-width: ${pxToEm(550)}) {
      font-size: 1.8rem;
    }

    @media only screen and (max-width: ${pxToEm(500)}) {
      font-size: 1.6rem;
    }
  }

  @media ${props => props.theme.breakpoints.sm} {
    padding: 1.8rem;
  }
`;

export const ContainerStyled = styled.div`
  margin-bottom: 2.5rem;

  & > * + * {
    margin-top: 1rem;
  }
`;
