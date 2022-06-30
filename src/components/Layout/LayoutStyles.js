import styled from 'styled-components';
import { pxToEm } from 'utils/fns';

export const MainWrapperStyled = styled.main`
  & > * + * {
    margin-top: 10rem;
  }

  & > :first-child {
    margin-top: 7rem;
  }

  @media ${props => props.theme.breakpoints.md} {
    & > * + * {
      margin-top: 7rem;
    }

    & > :first-child {
      margin-top: 5rem;
    }
  }

  @media only screen and (max-width: ${pxToEm(400)}) {
    & > * + * {
      margin-top: 5rem;
    }

    & > :first-child {
      margin-top: 3rem;
    }
  }
`;
