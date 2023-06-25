import { Field } from "formik";

function Input({ name, type, placeholder, onChange, value }) {
  return (
    <Field
      type={type}
      className="from__input"
      placeholder={placeholder}
      // onChange={onChange}
      // value={value}
      name={name}
      id={name}
    />
  );
}

export default Input;
