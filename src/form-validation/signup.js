import { validateEmail, validateName, validatePassword } from "../utils";

export const validateSignupForm = (values) => {
  let errors = {};
  const { firstName, lastName, email, password, confirmPassword } = values;
  if (!firstName?.trim()) {
    errors.firstName = "Please enter your first name";
  } else if (!validateName(firstName)) {
    errors.firstName = "Please enter a valid first name";
  }
  if (!lastName?.trim()) {
    errors.lastName = "Please enter your last name";
  } else if (!validateName(lastName)) {
    errors.lastName = "Please enter a valid last name";
  }
  if (!email?.trim()) {
    errors.email = "Please enter your email";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email";
  }
  if (!password?.trim()) {
    errors.password = "Please enter your password";
  } else if (!validatePassword(password)) {
    errors.password = "Password must contain minimum 8 character";
  }
  if (!confirmPassword?.trim()) {
    errors.confirmPassword = "Please re-enter your password";
  } else if (!(password === confirmPassword)) {
    errors.confirmPassword = "Password doesn't match";
  }
  return errors;
};
