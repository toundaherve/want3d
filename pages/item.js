import { Button, Col, Form, FormGroup, Input, Label } from "reactstrap";
import Layout from "../components/Layout";

export default function Item() {
  return (
    <Layout>
      <div className="d-flex flex-wrap flex-grow-1">
        <div className="container">
          {/* Hidden */}
          <div></div>
          <div className="row">
            <div className="col-12 col-md-7">
              <div className="bg-secondary">
                {/* Poster */}
                <div
                  className="d-flex flex-column justify-content-between card p-2 border mx-auto"
                  style={{ width: "256px" }}
                >
                  <h1 className="text-center mb-0">WANTED</h1>
                  <div className="w-100" style={{ height: "256px" }}></div>
                  <div className="text-center">
                    <small className="h5">Reward</small>
                    <h1 className="text-center mb-0">£750</h1>
                  </div>
                </div>
              </div>
              {/* Details */}
              <div>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
                <h6 className="fw-bold">Item Details</h6>
                <div className="flex-wrap">
                  {[1, 2, 3].map((n, idx) => (
                    <div key={idx} className="flex-wrap">
                      <span>Detail{n}: </span>
                      <span className="fw-bold">Value{n}</span>
                    </div>
                  ))}
                </div>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
                <h6 className="fw-bold">Description</h6>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  Reprehenderit ad itaque hic quis error ipsum incidunt repellat
                  et dolorum cumque deleniti illo iusto, eaque quae!
                </p>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
              </div>
            </div>
            <div className="col-12 col-md-5">
              {/* Reply */}
              <div>
                <h4 className="mb-2">Interested ? Leave your details</h4>
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
