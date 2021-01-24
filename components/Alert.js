import Link from "next/link";
import { Button } from "reactstrap";
import Layout from "./Layout";

export default function Alert({
  type = "success",
  heading = "Well done!",
  message = "",
  nextMessage = "",
  nextLink = "/",
  nextButtonText = "",
}) {
  return (
    <Layout>
      <span className="d-block mb-3"></span>
      <div
        style={{ maxWidth: "762px", margin: "0 auto", marginBottom: "45vh" }}
      >
        <div className={`alert alert-${type}`} role="alert">
          <h5 className="alert-heading">{heading}</h5>
          <p>{message}</p>
          <hr />
          {nextMessage && (
            <p className="mb-0">
              {nextMessage}
              <span className="d-block mb-2"></span>
              <Link href={nextLink}>
                <Button>{nextButtonText}</Button>
              </Link>
            </p>
          )}
        </div>
      </div>
    </Layout>
  );
}
