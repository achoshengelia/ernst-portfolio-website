import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ButtonStyled, TextStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';
import { popIn } from '../../../styles/animations';

export const SubmitButtonStyled = styled(ButtonStyled)`
  max-height: ${({ isLoading }) => (isLoading ? `0` : '5rem')};
  padding: ${({ isLoading }) => (isLoading ? `.7rem 0` : null)};
  animation: ${({ isLoading }) => (isLoading ? `exit 2.2s infinite` : null)};
  pointer-events: ${({ isLoading }) => (isLoading ? 'none' : null)};

  &::after {
    animation: ${({ isLoading }) =>
      isLoading ? `exitAfter 2.2s infinite` : null};
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    margin-bottom: 3rem;
    font-size: 1.6rem;
  }

  @media only screen and (max-width: ${pxToEm(330)}) {
    max-width: none;
  }

  @keyframes exit {
    75% {
      transform: scale(1);
    }
    85% {
      transform: scale(1.05);
    }
    95% {
      transform: scale(0.95);
    }
    100% {
      transform: scale(1);
      color: ${props => props.theme.colors.primary.dark};
    }
  }

  @keyframes exitAfter {
    0% {
      width: 0;
      left: 0;
    }
    100% {
      left: 0;
      width: 100%;
    }
  }
`;

export const TextWrapperStyled = styled.div`
  border: 1px solid ${props => props.theme.colors.background.form};
  border-color: ${({ error, theme }) =>
    error ? theme.colors.response.error : null};
  max-width: 70rem;
  min-height: 18rem;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.5rem;

  padding: 2rem 4rem;

  & ${TextStyled} {
    color: ${({ error, theme }) =>
      error ? theme.colors.response.error : theme.colors.text.light};
    line-height: 5rem;
  }
`;

export const ResponseWrapperStyled = styled.div`
  margin-left: 8rem;
  margin-top: 5rem;
  animation: ${popIn} 0.2s ease-in;

  & ${SubmitButtonStyled} {
    margin-top: 2rem;
    max-width: 27rem;
    margin-left: auto;
  }

  @media only screen and (max-width: ${pxToEm(850)}) {
    margin-left: 0;

    & ${TextWrapperStyled} {
      max-width: none;
    }
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    margin-left: 0;

    & ${TextWrapperStyled} {
      padding: 1rem 2rem;

      & ${TextStyled} {
        font-size: 1.6rem;
      }
    }

    & ${SubmitButtonStyled} {
      margin-top: 2rem;
      max-width: none;
      width: 100%;
      margin-left: auto;
    }
  }
`;

export const ErrorMessageStyled = styled.div`
  padding-left: 2rem;
  margin-bottom: 2rem;
  font-size: 1.2rem;
  color: ${props => props.theme.colors.response.error};
  animation: ${popIn} 0.2s ease-in;
`;

export const LabelStyled = styled.label`
  width: 80%;
  font-size: 1.4rem;
  font-weight: 300;
`;

export const FieldStyled = styled(Field)`
  font-family: inherit;
  resize: none;
  width: 100%;
  background: none;
  border: none;
  padding: 1.8rem 2rem;
  min-height: 5rem;
  color: ${props => props.theme.colors.text.light};

  &::placeholder {
    color: white;
    font-style: italic;
  }

  &::-webkit-outer-spin-button,
  &::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }

  &[type='number'] {
    -moz-appearance: textfield;
  }

  &:-webkit-autofill,
  &:-webkit-autofill:hover,
  &:-webkit-autofill:focus,
  &:-webkit-autofill:active {
    -webkit-box-shadow: 0 0 0 30px #d9d9d9 inset;
    box-shadow: 0 0 0 30px #455d58 inset;
    border-radius: 0.5rem;
    color: red !important;
  }
`;

export const RadioWrapperStyled = styled.div`
  width: 2rem;
  position: relative;
  margin-right: 1rem;
  border: none;

  ${LabelStyled} {
    width: 2rem;
    height: 2rem;
    cursor: pointer;
    position: absolute;
    top: 0;
    left: 0;
    background: ${props => props.theme.colors.background.form};
    border-radius: 0.5rem;

    &:after {
      content: '';
      width: 1.3rem;
      height: 0.8rem;
      position: absolute;
      top: 0.4rem;
      left: 0.4rem;
      border: 0.3rem solid ${props => props.theme.colors.primary.dark};
      border-top: none;
      border-right: none;
      background: transparent;
      opacity: 0;
      transform: rotate(-45deg);
    }

    &:hover::after {
      opacity: 0.5;
    }
  }

  input[type='checkbox'] {
    visibility: hidden;

    &:checked + label:after {
      opacity: 1;
    }
  }
`;

export const FieldWrapperStyled = styled.div`
  border: 0.1rem solid ${props => props.theme.colors.background.form};

  & + & {
    border-top: 0;
  }

  & > textarea {
    min-height: 13rem;
  }
`;

export const BottomWrapperStyled = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 3rem 0rem 0 0rem;
  color: ${props => props.theme.colors.text.light};

  & > ${FieldWrapperStyled} {
    display: flex;
    border: none;

    & > ${FieldStyled} {
      margin-right: 0.5rem;
      min-height: 0;
      width: max-content;
    }

    & ${ErrorMessageStyled} {
      margin: 2rem 0 0 0;
      padding: 0;
    }
  }

  @media only screen and (max-width: ${pxToEm(450)}) {
    flex-direction: column-reverse;
  }
`;

export const TopWrapperStyled = styled.fieldset`
  border: none;

  & > *:first-child {
    border-radius: 0.5rem 0.5rem 0 0;
  }

  & > *:last-child {
    border-radius: 0 0 0.5rem 0.5rem;
  }
`;

export const FormStyled = styled(Form)`
  width: 100%;
  max-width: 70rem;
  height: max-content;
  margin: 6rem 1rem 0 9rem;
  animation: ${popIn} 0.2s ease-in;

  @media only screen and (max-width: ${pxToEm(1000)}) {
    margin-left: 3rem;
  }

  @media only screen and (max-width: ${pxToEm(850)}) {
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }
`;
