import React from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import { ButtonStyled } from 'components/Global';
import {
  initialValues,
  maxLengthName,
  minLengthMessage,
  minLengthName,
  minLengthPhone,
  validateForm
} from 'constants/form';
import {
  BottomWrapperStyled,
  ErrorMessageStyled,
  FieldStyled,
  FieldWrapperStyled,
  FormStyled,
  LabelStyled,
  RadioWrapperStyled,
  TopWrapperStyled
} from './FormStyles';

const Form = () => {
  const { t } = useTranslation('contact');

  return (
    <Formik
      validateOnChange={false}
      initialValues={initialValues}
      validate={values => validateForm(values)}
      onSubmit={values => console.log(values)}
    >
      {({ handleBlur, handleChange }) => (
        <FormStyled id="contactForm">
          <TopWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                type="text"
                name="name"
                placeholder={t('form.nameField')}
              />
              <ErrorMessage
                name="name"
                render={id => (
                  <ErrorMessageStyled>
                    {t(`form.errors.${id}`, {
                      minLength: minLengthName,
                      maxLength: maxLengthName
                    })}
                  </ErrorMessageStyled>
                )}
              />
            </FieldWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                type="email"
                name="email"
                placeholder={t('form.emailField')}
              />
              <ErrorMessage
                name="email"
                render={id => (
                  <ErrorMessageStyled>
                    {t(`form.errors.${id}`)}
                  </ErrorMessageStyled>
                )}
              />
            </FieldWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                type="number"
                name="phone"
                placeholder={t('form.phoneField')}
              />
              <ErrorMessage
                name="phone"
                render={id => (
                  <ErrorMessageStyled>
                    {t(`form.errors.${id}`, { minLength: minLengthPhone })}
                  </ErrorMessageStyled>
                )}
              />
            </FieldWrapperStyled>
            <FieldWrapperStyled>
              <FieldStyled
                as="textarea"
                name="message"
                placeholder={t('form.messageField')}
                onBlur={handleBlur}
                onChange={handleChange}
              />
              <ErrorMessage
                name="message"
                render={id => (
                  <ErrorMessageStyled>
                    {t(`form.errors.${id}`, { minLength: minLengthMessage })}
                  </ErrorMessageStyled>
                )}
              />
            </FieldWrapperStyled>
          </TopWrapperStyled>
          <BottomWrapperStyled>
            <FieldWrapperStyled>
              <RadioWrapperStyled>
                <FieldStyled
                  type="checkbox"
                  name="agreeToTerms"
                  id="agreeToTerms"
                />
                <LabelStyled htmlFor="agreeToTerms" />
              </RadioWrapperStyled>
              <LabelStyled htmlFor="agreeToTerms">
                {t('form.agreement')}
                <ErrorMessage
                  name="agreeToTerms"
                  render={id => (
                    <ErrorMessageStyled>
                      {t(`form.errors.${id}`)}
                    </ErrorMessageStyled>
                  )}
                />
                <br /> <br /> {t('form.required')}{' '}
              </LabelStyled>
            </FieldWrapperStyled>

            <ButtonStyled type="submit" isUppercase>
              {t('form.sendButton')}
            </ButtonStyled>
          </BottomWrapperStyled>
        </FormStyled>
      )}
    </Formik>
  );
};

export default Form;
