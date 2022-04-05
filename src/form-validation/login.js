import { validateEmail, validatePassword } from "../utils";

export const validateLoginForm = (values) => {
  let errors = {};
  const { email, password } = values;
  if (!values?.email?.trim()) {
    errors.email = "Please enter your email";
  } else if (!validateEmail(email)) {
    errors.email = "Please enter a valid email";
  }
  if (!values?.password?.trim()) {
    errors.password = "Please enter your password";
  } else if (!validatePassword(password)) {
    errors.password = "Please enter a valid password";
  }
  return errors;
};
