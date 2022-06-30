import styled from 'styled-components';
import { HeadingStyled, TextStyled } from 'styles/utils';
import { pxToEm } from 'utils/fns';

export const ParagraphStyled = styled(TextStyled)`
  font-size: 1.8rem;
  font-weight: 300;

  @media ${props => props.theme.breakpoints.sm} {
    font-size: 1.7rem;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.4rem;
  }
`;

export const LinkStyled = styled.a`
  margin-left: 2rem;

  @media ${props => props.theme.breakpoints.sm} {
    margin-left: 2rem;
    font-size: 1.6rem;
    font-weight: 300;
  }

  @media ${props => props.theme.breakpoints.xs} {
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 300;
  }
`;

export const MainHeadingStyled = styled(HeadingStyled)`
  font-size: 3rem;

  @media only screen and (max-width: ${pxToEm(400)}) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: ${pxToEm(340)}) {
    font-size: 2.2rem;
  }
`;

export const FieldWrapperStyled = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: fit-content;

  & > svg {
    margin-right: 2rem;
  }
`;

export const ContainerStyled = styled.div`
  max-width: 35rem;
  color: ${props => props.theme.colors.text.light};

  & > * + * {
    margin-top: 5rem;
  }

  @media only screen and (max-width: ${pxToEm(850)}) {
    max-width: 50rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    & > * + * {
      margin-top: 3rem;
    }
  }
`;
