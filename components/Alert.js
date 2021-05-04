import Button from "./Button";

export default function Alert({
context = "success",
heading = "",
children
}) {
  return (
    <>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="post-form-width m-auto">
          <div className={`alert alert-${context}`} role="alert">
            <h1 className="h4 mb-0 alert-heading">
              {heading}
            </h1>
            <span className="d-block mb-3"></span>
            {children}
          </div>
        </div>
      </div>
    </>
  );
}