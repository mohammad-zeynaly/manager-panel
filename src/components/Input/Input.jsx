function Input({ type, placeholder, onChange, value }) {
  return (
      <div className="form-input">
        <input
          type={type}
          className="from__input"
          placeholder={placeholder}
          onChange={onChange}
          value={value}
          required
        />
      </div>
  );
}

export default Input;
