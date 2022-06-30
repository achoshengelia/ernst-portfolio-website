import styled from 'styled-components';
import { pxToEm } from 'utils/fns';
import { HeadingStyled } from '../../styles/utils';

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

export const ContainerStyled = styled.section``;
