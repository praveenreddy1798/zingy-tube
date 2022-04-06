export const TextArea = ({
  name,
  value,
  label,
  error,
  handleChange,
  isSubmitting = false,
}) => {
  return (
    <div key={name} className="mg-t-sm">
      <label for={name} className="flex regular-dark black-color mg-b-xxsm">
        {label}
      </label>
      <textarea
        className="input text-area border-radius-sm"
        id={name}
        name={name}
        value={value}
        onChange={handleChange}
      />
      {error && isSubmitting && (
        <h4 className="flex regular-dark danger-color mg-t-xxsm">{error}</h4>
      )}
    </div>
  );
};
