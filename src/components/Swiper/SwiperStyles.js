import styled from 'styled-components';
import { Swiper } from 'swiper/react';
import { pxToEm } from 'utils/fns';

export const SwiperStyled = styled(Swiper)`
  height: 100%;
  width: 100%;

  & .swiper-slide {
    background-position: center;
    background-size: cover;
  }

  & .gatsby-image {
    max-height: 60rem;

    @media only screen and (max-width: ${pxToEm(980)}) {
      max-height: 50rem;
    }

    @media only screen and (max-width: ${pxToEm(810)}) {
      max-height: 40rem;
    }

    @media only screen and (max-width: ${pxToEm(680)}) {
      max-height: 35rem;
    }

    @media only screen and (max-width: ${pxToEm(570)}) {
      max-height: 30rem;
    }

    @media only screen and (max-width: ${pxToEm(490)}) {
      max-height: 27rem;
    }

    @media only screen and (max-width: ${pxToEm(440)}) {
      max-height: 23rem;
    }

    @media only screen and (max-width: ${pxToEm(380)}) {
      max-height: 20rem;
    }

    @media only screen and (max-width: ${pxToEm(330)}) {
      max-height: 17rem;
    }
  }
`;
