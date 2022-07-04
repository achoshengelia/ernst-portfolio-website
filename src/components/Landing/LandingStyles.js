import styled, { css } from 'styled-components';
import { ButtonStyled } from 'components/Global';
import { CenterWrapperStyled, TextStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';
import { slideDown, slideUp } from 'styles/animations';

const slideUpMixin = css`
  animation: ${slideUp} 0.5s forwards;
`;

const slideDownMixin = css`
  animation: ${slideDown} 0.5s forwards;
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
`;

export const ContainerStyled = styled.section`
  background-color: ${props => props.theme.colors.primary.main};

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

    & > ${ButtonStyled} {
      margin-top: 12rem;
      max-width: 35rem;
      font-size: 2.2rem;
      border-width: 0.2rem;
    }
  }
`;