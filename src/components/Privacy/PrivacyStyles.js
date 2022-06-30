import styled from 'styled-components';
import { pxToEm } from 'utils/fns';
import { HeadingStyled, Text } from '../../styles/utils';

export const ParagraphStyled = styled(Text)`
  margin: 4rem 2rem 0 0;
  line-height: 24px;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 1.3rem;
  }
`;

export const ListStyled = styled.ul`
  margin: 2rem 0 0 0;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }

  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 1.3rem;
  }
`;

export const ListItemStyled = styled.li`
  display: list-item;
  margin: 1.5rem 0 1.5rem 2rem;
  list-style: disc;
  list-style-type: disc;
`;

export const SectionWrapperStyled = styled.div`
  max-width: 90rem;
`;

export const SubSubHeadingStyled = styled(HeadingStyled)`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 3rem 0 0 0;
  text-transform: none;
  white-space: normal;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.5rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;

export const SubHeadingStyled = styled(HeadingStyled)`
  font-size: 2rem;
  font-weight: 500;
  margin: 4rem 0 0 0;
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
  @media only screen and (max-width: ${pxToEm(350)}) {
    font-size: 2rem;
    white-space: pre-wrap;
  }

  @media only screen and (max-width: ${pxToEm(370)}) {
    font-size: 2.2rem;
    font-weight: 500;
    white-space: pre-wrap;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.8rem;
  }
`;

export const ContainerStyled = styled.section`
  margin: 7rem 0 10rem 0;
`;
