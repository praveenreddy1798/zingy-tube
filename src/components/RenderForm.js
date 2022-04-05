import { Input, Select, TextArea } from ".";

const renderFields = ({
  values,
  errors,
  handleChange,
  isSubmitting,
  name,
  type,
  inputType,
  label,
  optionData,
}) => {
  if (inputType === "input") {
    return (
      <Input
        name={name}
        value={values?.[name]}
        error={errors?.[name]}
        label={label}
        type={type}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
      />
    );
  } else if (inputType === "textarea") {
    return (
      <TextArea
        name={name}
        value={values?.[name]}
        error={errors?.[name]}
        label={label}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
      />
    );
  } else if (inputType === "select") {
    return (
      <Select
        name={name}
        value={values?.[name]}
        error={errors?.[name]}
        label={label}
        isSubmitting={isSubmitting}
        handleChange={handleChange}
        optionData={optionData}
      />
    );
  }
};

export const RenderForm = ({
  values,
  errors,
  handleChange,
  isSubmitting,
  formFieldsData,
}) => {
  return formFieldsData.map(({ name, label, type, inputType, optionData }) =>
    renderFields({
      values,
      errors,
      handleChange,
      isSubmitting,
      name,
      type,
      inputType,
      label,
      optionData,
    })
  );
};
