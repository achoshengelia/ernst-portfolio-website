import styled from 'styled-components';
import { Form, Field } from 'formik';
import { ButtonStyled } from 'components/Global';
import { pxToEm } from 'utils/fns';
import { popIn } from '../../../styles/animations';

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

  & > ${ButtonStyled} {
    max-height: 5rem;

    @media only screen and (max-width: ${pxToEm(450)}) {
      margin-bottom: 3rem;
      font-size: 1.6rem;
    }

    @media only screen and (max-width: ${pxToEm(330)}) {
      max-width: none;
    }
  }

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

  @media only screen and (max-width: ${pxToEm(1000)}) {
    margin-left: 3rem;
  }

  @media only screen and (max-width: ${pxToEm(850)}) {
    margin-left: 0;
    margin-right: 0;
    max-width: none;
  }
`;
