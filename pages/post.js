import { Button, Form, FormGroup, FormText, Input, Label } from "reactstrap";
import Layout from "../components/Layout";

export default function Post() {
  return (
    <Layout>
      <div style={{ maxWidth: "762px", margin: "0 auto" }}>
        <h3>Post your wanted item</h3>
        <span className="d-block mb-2"></span>
        <Form className="d-flex flex-column">
          {/* Item name */}
          <FormGroup>
            <Label for="exampleItemName">Item name</Label>
            <span className="d-block mb-2"></span>
            <Input
              type="text"
              name="itemName"
              id="exampleItemName"
              placeholder="with a placeholder"
            />
          </FormGroup>
          <span className="d-block mb-3"></span>
          {/* Item reward */}
          <Label for="exampleItemName">Reward</Label>
          <span className="d-block mb-2"></span>
          <div className="input-group mb-3">
            <button type="button" className="btn btn-outline-secondary">
              GBP
            </button>
            <button
              type="button"
              className="btn btn-outline-secondary dropdown-toggle dropdown-toggle-split"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <span className="visually-hidden">Select currency</span>
            </button>
            <ul className="dropdown-menu">
              <li>
                <a className="dropdown-item" href="#">
                  GBP
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  USD
                </a>
              </li>
              <li>
                <a className="dropdown-item" href="#">
                  EUR
                </a>
              </li>
            </ul>
            <input
              type="text"
              className="form-control"
              aria-label="Text input with segmented dropdown button"
            />
          </div>
          {/* <span className="d-block mb-3"></span> */}
          {/* Description */}
          <FormGroup>
            <Label for="exampleText">Description</Label>
            <span className="d-block mb-2"></span>
            <Input type="textarea" name="text" id="exampleText" />
          </FormGroup>
          <span className="d-block mb-3"></span>
          {/* Category */}
          <Label for="exampleText">Category</Label>
          <span className="d-block mb-2"></span>
          <select className="form-select" aria-label="Default select example">
            <option defaultValue>Select a category</option>
            <option value="1">Phones</option>
            <option value="2">Automobiles</option>
            <option value="3">Clothing</option>
          </select>
          <span className="d-block mb-3"></span>
          {/* Location */}
          <FormGroup>
            <Label for="exampleLocation">Your location</Label>
            <span className="d-block mb-2"></span>
            <Input type="text" name="location" id="exampleLocation" />
          </FormGroup>
          <span className="d-block mb-3"></span>
          <FormGroup>
            <Label for="exampleEmail">Your email</Label>
            <span className="d-block mb-2"></span>
            <Input type="email" name="email" id="exampleEmail" />
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </FormGroup>
          <span className="d-block mb-3"></span>
          <div className="py-3 align-self-md-end">
            <Button className="w-100" color="success">
              Submit
            </Button>
          </div>
        </Form>
      </div>
    </Layout>
  );
}
