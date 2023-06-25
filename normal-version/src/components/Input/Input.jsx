import { Field } from "formik";

function Input({ name, type, placeholder }) {
  return (
    <Field
      type={type}
      className="from__input"
      placeholder={placeholder}
      name={name}
      id={name}
    />
  );
}

export default Input;
