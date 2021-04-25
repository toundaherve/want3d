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
}) {
  return link ? (
    <a
      href={link}
      className={`btn btn-${outlined ? "outline-" : ""}${purpose} ${
        !textWrappable ? "text-nowrap" : ""
      } ${size && "btn-" + size}`}
      role="button"
      disabled={disabled}
    >
      {children}
    </a>
  ) : (
    <button
      className={`btn btn-${outlined ? "outline-" : ""}${purpose} ${
        !textWrappable ? "text-nowrap" : ""
      } ${size && "btn-" + size}`}
      type={type}
      disabled={loading}
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
