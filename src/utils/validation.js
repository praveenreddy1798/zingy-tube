export const validateName = (name) => /[a-zA-Z]+(?:\s[a-zA-Z]+)*/.test(name);

export const validatePassword = (password) => password.length >= 8;

export const validateEmail = (email) =>
  /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(
    email
  );
