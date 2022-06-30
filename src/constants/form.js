export const minLengthName = 2;
export const maxLengthName = 100;
export const minLengthMessage = 40;
export const minLengthPhone = 5;

export const initialValues = {
  name: '',
  email: '',
  phone: '',
  message: '',
  agreeToTerms: false
};

export const validateForm = values => {
  const { name, email, phone, message, agreeToTerms } = values;
  const phoneToString = phone.toString();
  const errors = {};

  if (!name) {
    errors.name = 'isRequired';
  } else if (!/[\p{Letter}\p{Mark}]+/gu.test(name)) {
    errors.name = 'checkLatin';
  } else if (name.length < minLengthName) {
    errors.name = `minLength`;
  } else if (name.length > maxLengthName) {
    errors.name = `maxLength`;
  }

  if (!email) {
    errors.email = 'isRequired';
  } else if (
    !/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
      email
    )
  ) {
    errors.email = 'email';
  }

  if (phoneToString && !/^[0-9]*[+]*$/.test(phoneToString)) {
    errors.phone = 'checkPhone';
  } else if (phoneToString && phoneToString.length < minLengthPhone) {
    errors.phone = `minLength`;
  }

  if (!message) {
    errors.message = 'isRequired';
  } else if (message.length < minLengthMessage) {
    errors.message = `minLength`;
  }

  if (!agreeToTerms) {
    errors.agreeToTerms = 'mustAgree';
  }

  return errors;
};
