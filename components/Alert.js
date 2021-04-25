
export default function Alert({
message = "",
context = "success"
}) {
  return (
    <>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="post-form-width m-auto">
          <div className={`alert alert-${context}`} role="alert">
           {message}
          </div>
        </div>
      </div>
    </>
  );
}

