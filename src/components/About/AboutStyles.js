import styled from 'styled-components';
import { pxToEm } from 'utils/fns';
import {
  CenterWrapperStyled,
  HeadingStyled,
  TextStyled
} from 'components/Global';

export const ImageWrapperStyled = styled.div`
  max-height: 50rem;
  margin-left: 4rem;

  & .gatsby-image-wrapper {
    width: 100%;
    height: 100%;
  }

  @media only screen and (max-width: ${pxToEm(800)}) {
    margin: 5rem 0 0 0;

    & .gatsby-image {
      background-position: center;
      object-fit: contain;
      width: 100%;
      height: 100%;
    }
  }
`;

export const ParagraphStyled = styled(TextStyled)`
  line-height: 24px;
`;

export const SectionWrapperStyled = styled.div`
  max-height: 50rem;

  & > * + * {
    margin-top: 4rem;
  }

  @media only screen and (max-width: ${pxToEm(1005)}) {
    max-height: none;
  }
`;

export const MainHeadingStyled = styled(HeadingStyled)`
  margin-bottom: 5rem;
  font-size: 3rem;

  @media only screen and (max-width: ${pxToEm(400)}) {
    font-size: 2.6rem;
  }

  @media only screen and (max-width: ${pxToEm(340)}) {
    font-size: 2.2rem;
  }
`;

export const ContainerStyled = styled.section`
  & > ${CenterWrapperStyled} {
    display: grid;
    grid-template-columns: 1fr 1fr;

    @media only screen and (max-width: ${pxToEm(1200)}) {
      grid-template-columns: 1.25fr 1fr;
    }

    @media only screen and (max-width: ${pxToEm(1120)}) {
      grid-template-columns: 1.45fr 1fr;
    }

    @media only screen and (max-width: ${pxToEm(1050)}) {
      grid-template-columns: 1.68fr 1fr;
    }

    @media only screen and (max-width: ${pxToEm(1005)}) {
      grid-template-columns: 2fr 1fr;
    }

    @media only screen and (max-width: ${pxToEm(800)}) {
      grid-template-columns: 1fr;
    }
  }
`;
