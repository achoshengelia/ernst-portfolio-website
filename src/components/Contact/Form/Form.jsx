import React, { useRef, useState } from 'react';
import { ErrorMessage, Formik } from 'formik';
import { useTranslation } from 'gatsby-plugin-react-i18next';
import emailjs from '@emailjs/browser';
import { TextStyled } from 'components/Global';
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
  ResponseWrapperStyled,
  SubmitButtonStyled,
  TextWrapperStyled,
  TopWrapperStyled
} from './FormStyles';

const Form = () => {
  const { t } = useTranslation('contact');
  const formRef = useRef(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState(false);

  const handleSubmit = async () => {
    try {
      setLoading(true);

      await emailjs.sendForm(
        'service_coah31a',
        'template_c1fd41a',
        formRef.current,
        'HXNTQACDJw4gJFlFz'
      );

      setSuccess(true);
    } catch (error) {
      setError(true);
    } finally {
      setLoading(false);
    }
  };

  const handleReset = () => {
    setLoading(false);
    setSuccess(false);
    setError(false);
  };

  return (
    <Formik
      validateOnChange={false}
      initialValues={initialValues}
      validate={values => validateForm(values)}
      onSubmit={handleSubmit}
    >
      {({ handleBlur, handleChange }) =>
        success || error ? (
          <Response error={error} handleReset={handleReset} />
        ) : (
          <FormStyled id="contactForm" ref={formRef}>
            <TopWrapperStyled>
              <FieldWrapperStyled>
                <FieldStyled
                  type="text"
                  name="name"
                  placeholder={t('form.nameField')}
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                  disabled={loading}
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
                    disabled={loading}
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

              <SubmitButtonStyled type="submit" isUppercase isLoading={loading}>
                {t(`form.${loading ? 'loading' : 'send'}Button`)}
              </SubmitButtonStyled>
            </BottomWrapperStyled>
          </FormStyled>
        )
      }
    </Formik>
  );
};

export default Form;

const Response = ({ error, handleReset }) => {
  const { t } = useTranslation('contact');

  return (
    <ResponseWrapperStyled>
      <TextWrapperStyled error={error}>
        <TextStyled>
          {t(`form.responses.${error ? 'error' : 'success'}.message`)}
        </TextStyled>
      </TextWrapperStyled>
      <SubmitButtonStyled isUppercase onClick={handleReset}>
        {t(`form.responses.${error ? 'error' : 'success'}.button`)}
      </SubmitButtonStyled>
    </ResponseWrapperStyled>
  );
};
