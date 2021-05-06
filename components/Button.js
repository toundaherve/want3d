export default function Button({
  type = "button",
  purpose = "primary",
  textWrappable = true,
  outlined = false,
  size = "",
  disabled = false,
  children,
  link = "",
  loading = false,
  onClick = () => {}
}) {
  return link ? (
    <a
      href={link}
      className={`btn btn-${outlined ? "outline-" : ""}${purpose} ${
        !textWrappable ? "text-nowrap" : ""
      } ${size && "btn-" + size}`}
      role="button"
      disabled={disabled}
      onClick={onClick}
    >
      {children}
    </a>
  ) : (
    <button
      className={`btn btn-${outlined ? "outline-" : ""}${purpose} ${
        !textWrappable ? "text-nowrap" : ""
      } ${size && "btn-" + size}`}
      type={type}
      disabled={disabled}
      onClick={onClick}
    >
      {!loading ? children : <Spinner />}
    </button>
  );
}

function Spinner() {
  return (
    <div className="spinner-border text-light" role="status">
      <span className="visually-hidden">Loading...</span>
    </div>
  );
}
