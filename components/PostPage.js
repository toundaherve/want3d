import { useForm } from "react-hook-form";
import Button from "./Button";
import Layout from "./Layout";
import {Helmet} from "react-helmet"

export default function PostPage({ onSubmit, isSubmitting }) {
  const { register, errors, handleSubmit } = useForm();
  return (
    <Layout>
      <Helmet>
        <title>Say what you need here</title>
        <meta name="description" content="Let the world know what you need"/>
        <link rel="stylesheet" href="https://www.ineed.com/post"/>
      </Helmet>
      <span className="d-block mb-3"></span>
      <div className="container post-form-width p-0">
        <form onSubmit={handleSubmit(onSubmit)}>
          <h1 className="h4 mb-0 ms-3 ms-md-0">Say what you need</h1>
          <span className="d-block mb-3"></span>
          {/* <FormSection>
            <ImageField />
          </FormSection>
          <span className="d-block mb-3"></span> */}
          <FormSection>
            <FormField>
              <Label htmlFor="name-field">I need</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="name-field"
                type="text"
                name="name"
                placeholder="Name of the item"
                register={register}
                error={errors.name && "Please provide the name of the item."}
              />
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="category-field">Category</Label>
              <span className="d-block mb-1"></span>
              <Select
                name="category"
                selector="Select a category"
                options={["Automobile", "Phones", "Clothing"]}
                register={register}
                error={
                  errors.category && "Please select a category for the item."
                }
              />
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="reward-field">My budget</Label>
              <span className="d-block mb-1"></span>
              <div className="d-flex align-items-start">
                <select
                  className="form-select flex-grow-0 w-auto"
                  id="curency-field"
                  name="currency"
                  ref={register()}
                >
                  <option defaultValue>GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>
                <span className="d-block mb-3 ms-2"></span>
                <div className="flex-grow-1">
                  <Input
                    id="reward-field"
                    type="number"
                    name="reward"
                    register={register}
                    error={
                      errors.reward && "Please provide a reward for the item."
                    }
                  />
                </div>
              </div>
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="description-field">Note to sellers</Label>
              <span className="d-block mb-1"></span>
              <TextArea
                id="description-field"
                rows="3"
                name="description"
                register={register}
              ></TextArea>
            </FormField>
          </FormSection>
          <span className="d-block mb-3"></span>
          <FormSection>
            <FormField>
              <Label htmlFor="location-field">City / Country</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="location-field"
                type="text"
                name="location"
                register={register}
                error={errors.location && "Please state your city or country."}
              />
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="email-field">My Email</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="email-field"
                type="email"
                name="email"
                register={register}
                error={errors.email && "Please provide your email."}
              />
              <div className="form-text">
                We will never share your email with anyone.
              </div>
            </FormField>
          </FormSection>
          <span className="d-block mb-3"></span>
          <Submit isSubmitting={isSubmitting}>SEND</Submit>
        </form>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function ImageField() {
  return (
    <FormField>
      <Label htmlFor="image-field">Image</Label>
      <span className="d-block mb-2"></span>
      <Input name="image" id="image-field" type="file" />
    </FormField>
  );
}

export function Submit({ isSubmitting, children }) {
  return (
    <div className="p-3 p-md-0">
      <div className="d-grid d-md-block text-end">
        <Button loading={isSubmitting} type="submit" purpose="primary">
          {children}
        </Button>
      </div>
      <span className="d-block mb-3"></span>
    </div>
  );
}

export function FormSection({ children }) {
  return (
    <div className="p-3 p-md-32px bg-white border rounded">
      {children}
    </div>
  );
}

export function FormField({ children }) {
  return <div>{children}</div>;
}

export function Label({ children, ...rest }) {
  return (
    <label className="form-label m-0 p-0 d-block" {...rest}>
      {children}
    </label>
  );
}

export function Input({ register, error, ...rest }) {
  return (
    <>
      <input
        {...rest}
        ref={register ? register({ required: true }) : null}
        className={`form-control ${error ? "invalid-input" : ""}`}
      />
      <InputError>{error}</InputError>
    </>
  );
}

export function Select({ register, error, selector, options = [], ...rest }) {
  return (
    <>
      <select
        {...rest}
        className={`form-select ${error ? "invalid-input" : ""}`}
        ref={register({ required: true })}
      >
        <option value={""} defaultValue>
          {selector}
        </option>
        {options.map((option, idx) => (
          <option key={idx} value={option}>
            {option}
          </option>
        ))}
      </select>
      <InputError>{error}</InputError>
    </>
  );
}

export function TextArea({ register, ...rest }) {
  return <textarea {...rest} ref={register} className="form-control" />;
}

export function InputError({ children }) {
  return <div className="invalid-feedback d-block">{children}</div>;
}
