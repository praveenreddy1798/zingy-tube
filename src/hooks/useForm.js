import { useState, useEffect } from "react";
export const useForm = (callback, validate) => {
  const [values, setValues] = useState({});
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleChange = (event) =>
    setValues((values) => ({
      ...values,
      [event.target.name]: event.target.value,
    }));

  const handleSubmit = (event) => {
    event.preventDefault();
    setIsSubmitting(true);
    setErrors(() => validate(values));
  };

  useEffect(() => {
    if (Object.keys(errors).length === 0 && isSubmitting) {
      callback(values);
      setIsSubmitting(false);
    }
  }, [callback, errors, isSubmitting, values]);

  return {
    handleChange,
    handleSubmit,
    values,
    errors,
    isSubmitting,
    setValues,
    setErrors,
  };
};
