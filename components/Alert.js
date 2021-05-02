import Button from "./Button";

export default function Alert({
context = "success",
email = "",
}) {
  return (
    <>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="post-form-width m-auto">
          <div className={`alert alert-${context}`} role="alert">
            <h1 className="h4 mb-0 alert-heading">
              {context === "danger" && "Sorry, something went wrong."}
              {context === "success" && "Well done!"}
            </h1>
            <span className="d-block mb-3"></span>
            <p className="m-0 p-0">
              {context === "danger" && <ErrorMessage />}
              {context === "success" && <SuccessPostCreationMessage email={email} />}
            </p>
            <hr />
            <div className="d-flex">
            <a
              style={{color: "inherit !important"}}
              href="/post"
            >
              Create another post
            </a>
            <span className="d-block ms-3"></span>

            <a
              style={{color: "inherit !important"}}
              href="/"
            >
              Go home
            </a>
          </div>
          </div>
          <span className="d-block mb-3"></span>
          
        </div>
      </div>
    </>
  );
}

function SuccessPostCreationMessage({email = ""}) {
  return (
    <span>
      Your post has beed succesfully created. We will contact you at <strong><em>{email}</em></strong> &nbsp;when there is an offer.
    </span>
  )
}

function ErrorMessage() {
  return <span>We are working on it and we'll get it fixed as soon as we can.</span>
}