function Button({ className, loading, onClick, label, conditional }) {
  return (
    <button
      type="button"
      className={conditional ? conditional : className}
      onClick={onClick}
      disabled={loading}
    >
      {label}
    </button>
  );
}

export default Button;
