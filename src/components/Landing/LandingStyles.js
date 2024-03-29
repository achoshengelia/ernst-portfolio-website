import styled, { css } from 'styled-components';
import { ButtonStyled } from 'components/Global';
import { CenterWrapperStyled, TextStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';
import { slideDown, slideUp } from 'styles/animations';
import bgImg from 'assets/images/landing-bg.jpg';

const slideUpMixin = css`
  animation: ${slideUp} 0.5s forwards;
`;

const slideDownMixin = css`
  animation: ${slideDown} 0.5s forwards;
`;

export const OverlayStyled = styled.div`
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  z-index: -1;
  background: linear-gradient(
      0deg,
      rgba(140, 189, 158, 0.85),
      rgba(140, 189, 158, 0.85)
    ),
    url(${bgImg}) no-repeat;
  background-size: cover;
`;

export const ParagraphStyled = styled(TextStyled)`
  max-width: 90rem;
  text-align: center;
  line-height: 5rem;

  @media only screen and (max-width: ${pxToEm(900)}) {
    max-width: 70rem;
    padding: 0 4rem;
    font-size: 2.8rem;
  }

  @media ${props => props.theme.breakpoints.sm} {
    max-width: 60rem;
    font-size: 2.5rem;
  }

  @media only screen and (max-width: ${pxToEm(480)}) {
    max-width: none;
  }

  @media only screen and (max-width: ${pxToEm(440)}) {
    font-size: 2rem;
    padding: 0;
  }

  @media ${props => props.theme.breakpoints.xs} {
    font-size: 1.8rem;
  }
`;

export const ContainerStyled = styled.section`
  & > ${CenterWrapperStyled} {
    display: flex;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    height: ${({ showLanding, isInitialRender }) =>
      showLanding && isInitialRender ? '100vh' : '0'};
    overflow: hidden;
    ${({ showLanding, isInitialRender }) =>
      isInitialRender ? null : showLanding ? slideDownMixin : slideUpMixin};

    & > ${OverlayStyled} {
      height: ${({ showLanding }) => (showLanding ? '100vh' : '0')};
      transition: height 0.5s ease;
    }

    & > ${ButtonStyled} {
      margin-top: 12rem;
      max-width: 35rem;
      font-size: 2.2rem;
      border-width: 0.2rem;
    }

    @media only screen and (max-width: ${pxToEm(480)}) {
      & > ${ButtonStyled} {
        margin-top: 6rem;
      }
    }

    @media only screen and (max-width: ${pxToEm(440)}) {
      & > ${ButtonStyled} {
        font-size: 2rem;
      }
    }

    @media only screen and (max-width: ${pxToEm(400)}) {
      padding-bottom: ${({ showLanding }) => (showLanding ? '10rem' : null)};

      & > ${ButtonStyled} {
        margin-top: 3rem;
      }
    }

    @media ${props => props.theme.breakpoints.xs} {
      padding-bottom: ${({ showLanding }) => (showLanding ? '15rem' : null)};

      & > ${ButtonStyled} {
        font-size: 1.8rem;
      }
    }

    @media only screen and (max-width: ${pxToEm(280)}) {
      padding-bottom: ${({ showLanding }) => (showLanding ? '17rem' : null)};
    }
  }
`;
