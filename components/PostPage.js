import { useForm } from "react-hook-form";
import { Button, Form, FormGroup, Input, Label } from "reactstrap";
import Layout from "./Layout";

export default function PostPage({ onSubmit }) {
  const { register, handleSubmit, errors } = useForm();

  return (
    <Layout>
      <span className="d-block w-100 text-white">.</span>
      <div style={{ maxWidth: "762px", margin: "0 auto" }}>
        <h5>Post your wanted item</h5>
        <span className="d-block mb-3"></span>
        <form
          className="d-flex flex-column border p-3 p-md-4-5 validated"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Item name */}
          <div>
            <label htmlFor="exampleFormControlInput1" className="form-label">
              Item name
            </label>
            <input
              type="text"
              className={`form-control ${errors.name && "invalid-input"}`}
              id="exampleFormControlInput1"
              name="name"
              ref={register({ required: true })}
            />
            {errors.name && (
              <div className="d-block invalid-feedback">
                Please provide the name of the item.
              </div>
            )}
          </div>
          <span className="d-block mb-3"></span>
          {/* Item reward */}
          <div>
            <label
              htmlFor="exampleFormControlInput2"
              className="d-block form-label"
            >
              Reward
            </label>
            <div className="d-flex">
              <select
                className="form-select flex-grow-0 w-auto me-2"
                aria-label="Default select example"
                id="exampleSelect"
                name="currency"
                ref={register}
              >
                <option defaultValue>GBP</option>
                <option value="1">EUR</option>
                <option value="2">USD</option>
              </select>
              <input
                type="number"
                className={`flex-grow-1 form-control ${
                  errors.reward && "invalid-input"
                }`}
                id="exampleFormControlInput2"
                name="reward"
                ref={register({ required: true })}
              />
            </div>
            {errors.reward && (
              <div className="d-block invalid-feedback">
                Please provide a reward.
              </div>
            )}
          </div>
          <span className="d-block mb-3"></span>
          {/* Description */}
          <div>
            <label htmlFor="exampleFormControlTextarea1" className="form-label">
              Description
            </label>
            <textarea
              className="form-control"
              id="exampleFormControlTextarea1"
              rows="3"
              name="description"
              ref={register}
            ></textarea>
          </div>
          <span className="d-block mb-3"></span>
          {/* Category */}
          <div>
            <label htmlFor="exampleSelectCategory" className="form-label">
              Category
            </label>
            <select
              className={`form-select ${errors.category && "invalid-input"}`}
              aria-label="Default select example"
              id="exampleSelectCategory"
              name="category"
              ref={register({ required: true })}
            >
              <option value="" defaultValue>
                Select a Category
              </option>
              <option value="Automobiles">Automobiles</option>
              <option value="Phone">Phones</option>
              <option value="Clothing">Clothing</option>
            </select>
            {errors.category && (
              <div className="d-block invalid-feedback">
                Please provide a category.
              </div>
            )}
          </div>
          <span className="d-block mb-3"></span>
          {/* Location */}
          <div>
            <label htmlFor="exampleFormControlInput3" className="form-label">
              City / Location
            </label>
            <input
              type="text"
              className={`form-control ${errors.location && "invalid-input"}`}
              id="exampleFormControlInput3"
              name="location"
              ref={register({ required: true })}
            />
            {errors.location && (
              <div className="d-block invalid-feedback">
                Please provide a city or country.
              </div>
            )}
          </div>
          <span className="d-block mb-3"></span>
          {/* Email */}
          <div>
            <label htmlFor="exampleFormControlInput4" className="form-label">
              Email
            </label>
            <input
              type="email"
              className={`form-control ${errors.email && "invalid-input"}`}
              id="exampleFormControlInput4"
              name="email"
              ref={register({ required: true })}
            />
            {errors.email && (
              <div className="d-block invalid-feedback">
                Please provide your email.
              </div>
            )}
            <div id="emailHelp" className="form-text">
              We'll never share your email with anyone else.
            </div>
          </div>
          <span className="d-block mb-3"></span>
          <div className="py-3 align-self-md-end">
            <Button className="w-100" color="success">
              Submit
            </Button>
          </div>
        </form>
      </div>
    </Layout>
  );
}
