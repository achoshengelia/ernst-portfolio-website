import styled from 'styled-components';
import { pxToEm } from 'utils/fns';
import { CenterWrapperStyled } from '../../styles/utils';

export const ContainerStyled = styled.section`
  margin-top: auto;
  background-color: ${props => props.theme.colors.background.main};

  & ${CenterWrapperStyled} {
    display: flex;
    justify-content: center;
    min-height: 50rem;
    padding-top: 7rem;
    padding-bottom: 10rem;

    @media only screen and (max-width: ${pxToEm(850)}) {
      flex-direction: column;
    }
  }
`;
