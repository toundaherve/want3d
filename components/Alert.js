import Link from "next/link";
import Button from "./Button";
import Layout from "./Layout";

export default function Alert({
  purpose = "success",
  heading = "Well done!",
  text = "",
  redirectionLink = "",
  redirectionText = "",
  redirectionButtonText = "Go home",
}) {
  return (
    <Layout>
      <span className="d-block mb-3"></span>
      <div className="container">
        <div className="post-form-width m-auto">
          <div className={`alert alert-${purpose}`} role="alert">
            <h5 className="alert-heading">{heading}</h5>
            <p dangerouslySetInnerHTML={{ __html: text }} />
            <hr />
            {redirectionLink && (
              <>
                <p className="mb-0">
                  {redirectionText}
                  <span className="d-block mb-2"></span>
                  <a href={redirectionLink}>
                    <Button>{redirectionButtonText}</Button>
                  </a>
                </p>
              </>
            )}
          </div>
        </div>
      </div>
    </Layout>
  );
}

// innerhtml set  from javascript

// code exposed to XSS

// dangerousety reminded
