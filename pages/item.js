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
            <div className="col-12 col-md-6">
              {/* Poster */}
              <div className="d-flex flex-column justify-content-between card p-2 border h-100">
                <h6 className="display-1 text-center mb-0">WANTED</h6>
                <div className="w-100" style={{ height: "96px" }}></div>
                <div className="text-center">
                  <small className="display-6">Reward</small>
                  <h6 className="text-center mb-0 display-1">£750</h6>
                </div>
              </div>
            </div>
            <div className="col-12 col-md-6">
              {/* About item */}
              <div className="d-block flex-wrap px-3">
                <span className="d-block flex-grow-1 flex-shrink-1 mb-3"></span>
                <h1>Iphone 6s</h1>
                <p className="h1">£750</p>
                <span className="d-block mb-2"></span>
                <div></div>
                <span className="d-block mb-2"></span>
                {/* CTA section */}
                <div className="d-none d-flex flex-nowrap">
                  <div className="w-100">
                    <div>
                      <div className="py-2 flex-wrap">
                        {[1, 2, 3].map((n, idx) => (
                          <div key={idx}>
                            <span className="d-block border-bottom border-1 border-secondary"></span>
                            <div className="d-flex justify-content-between flex-wrap align-items-center">
                              <div className="d-flex align-items-center flex-wrap py-2">
                                <span className="flex-shrink-0">{n}</span>
                                <span className="span d-block ms-2 mb-2 flex-grow-0 flex-shrink-1"></span>
                                <p className="mb-0">Lorem, ipsum dolor.</p>
                              </div>
                            </div>
                          </div>
                        ))}
                      </div>
                    </div>

                    <Button block color="success" className="w-100">
                      Contact
                    </Button>
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
                    Reprehenderit ad itaque hic quis error ipsum incidunt
                    repellat et dolorum cumque deleniti illo iusto, eaque quae!
                  </p>
                </div>
                <span className="d-block my-3 border-bottom border-1 border-light"></span>
                {/* Reply */}
                <div>
                  <h1 className="mb-2">Interested ? Leave your details</h1>
                  <span className="d-block mb-3"></span>
                  <Form className="d-none d-flex flex-column">
                    <FormGroup>
                      <Input
                        className="p-2"
                        type="textarea"
                        name="text"
                        id="exampleText"
                        placeholder={`Email: example@example.com\nPhone: 1111 11111`}
                      />
                    </FormGroup>
                    <span className="d-block mb-3"></span>
                    <Button className="align-self-end" color="success">
                      Submit
                    </Button>
                  </Form>
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
                    <Button className="align-self-end" color="success">
                      Submit
                    </Button>
                  </Form>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
}
