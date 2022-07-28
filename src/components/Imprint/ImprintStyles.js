import styled from 'styled-components';
import { pxToEm } from 'utils/fns';
import { HeadingStyled, TextStyled } from 'components/Global';

export const ParagraphStyled = styled(TextStyled)`
  margin: 4rem 2rem 0rem 0;
  line-height: 24px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 1.3rem;
  }
`;

export const ListStyled = styled.ul`
  margin: 2rem 0;

  & > * + * {
    margin-top: 0.5rem;
  }
`;

export const ListItemStyled = styled.li`
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 1.3rem;
  }
`;

export const SectionWrapperStyled = styled.div`
  max-height: 50rem;
  margin-bottom: 4rem;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media only screen and (max-width: ${pxToEm(800)}) {
    grid-template-columns: 1fr;
  }

  @media only screen and (max-width: ${pxToEm(1005)}) {
    max-height: none;
  }
`;

export const SubHeadingStyled = styled(HeadingStyled)`
  font-size: 2rem;
  font-weight: 500;
  margin: 4rem 3rem 0 0;
  text-transform: none;
  white-space: normal;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.8rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.6rem;
  }
`;

export const MainHeadingStyled = styled(HeadingStyled)`
  @media ${props => props.theme.breakpoints.sm} {
    font-size: 2.4rem;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 2.2rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 2rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.8rem;
  }
`;

export const ContainerStyled = styled.section`
  margin: 7rem 0 10rem 0;
`;
