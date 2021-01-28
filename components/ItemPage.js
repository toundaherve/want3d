import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Layout from "./Layout";
import { currencySymbol } from "./ResultsPage";

export default function ItemPage({ data }) {
  return (
    <Layout>
      <span className="d-none d-md-block mb-3 w-100 text-white">.</span>
      <div className="d-flex flex-wrap flex-grow-1">
        <div className="container">
          {/* Hidden */}
          <div className="row">
            <div className="col-12 col-md-7 px-0 pe-md-5">
              <div
                className="bg-secondary w-100 position-relative"
                style={{ paddingTop: "56.25%" }}
              >
                <div className="position-absolute top-0 start-0 bottom-0 end-0">
                  {/* Poster */}
                  <div
                    className="d-flex flex-column justify-content-between card p-2 border mx-auto h-100"
                    style={{ width: "256px" }}
                  >
                    <h6 className="text-center mb-0">WANTED</h6>
                    <div className="w-100"></div>
                    <div className="text-center">
                      <small>Reward</small>
                      <h6 className="text-center mb-0">{`${currencySymbol(
                        data.currency
                      )} ${data.reward}`}</h6>
                    </div>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
                <h6 className="fw-bold">Item Details</h6>
                <div className="flex-wrap">
                  {Object.keys(data).map((key, idx) => {
                    if (
                      !["description", "email", "id", "image"].includes(key)
                    ) {
                      return (
                        <div key={idx} className="flex-wrap">
                          <span>{capitalize(key)}: </span>
                          <span className="fw-bold">
                            {Object.values(data)[idx]}
                          </span>
                        </div>
                      );
                    }
                  })}
                </div>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
                <h6 className="fw-bold">Description</h6>
                <p>{data.description}</p>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
              </div>
            </div>
            <div className="col-12 col-md-5 px-0">
              {/* Reply */}
              <div>
                <h6 className="mb-0">Interested ? Leave your details</h6>
                <span className="d-block mb-3"></span>
                <Form className="d-flex flex-column">
                  <FormGroup>
                    <Input
                      type="email"
                      name="email"
                      id="exampleEmail"
                      placeholder="Email"
                    />
                  </FormGroup>
                  <span className="d-block mb-3"></span>
                  <FormGroup>
                    <Input
                      type="text"
                      name="phone"
                      id="examplePhone"
                      placeholder="Phone"
                    />
                  </FormGroup>
                  <span className="d-block mb-3"></span>
                  <FormGroup>
                    <Input
                      type="textarea"
                      name="text"
                      id="exampleText"
                      placeholder="Message"
                    />
                  </FormGroup>
                  <span className="d-block mb-3"></span>
                  <Button color="success">Submit</Button>
                </Form>
              </div>
            </div>
          </div>
        </div>
        <span className="d-block mb-4"></span>
      </div>
    </Layout>
  );
}

function capitalize(word) {
  return word[0].toUpperCase() + word.substring(1).toLowerCase();
}
