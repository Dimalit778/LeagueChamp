import isEmail from 'validator/es/lib/isEmail';

export const checkFormFields = (
  email: string,
  password: string
): string | boolean => {
  if (!email || !password) {
    return 'Please enter all fields';
  }

  if (!isEmail(email)) {
    return 'Email not valid';
  }

  return true;
};
