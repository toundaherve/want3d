import { useForm } from "react-hook-form";
import Button from "./Button";
import Layout from "./Layout";

export default function PostPage() {
  const { register, errors, handleSubmit } = useForm();
  return (
    <Layout>
      <span className="d-block mb-3"></span>
      <div className="container post-form-width p-0">
        <form onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}>
          <h4 className="mb-0 ms-3 ms-md-0">Make a poster</h4>
          <span className="d-block mb-3"></span>
          {/* <FormSection>
            <ImageField />
          </FormSection>
          <span className="d-block mb-3"></span> */}
          <FormSection>
            <FormField>
              <Label htmlFor="name-field">Item name</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="name-field"
                type="text"
                placeholder="The name of the item"
                name="name"
                register={register}
                error={errors.name && "Please provide the name of the item."}
              />
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="reward-field">Reward</Label>
              <span className="d-block mb-1"></span>
              <div className="d-flex align-items-start">
                <select
                  className="form-select flex-grow-0 w-auto"
                  id="curency-field"
                  name="currency"
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
                    placeholder="How much you pay for it?"
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
              <Label htmlFor="description-field">Description</Label>
              <span className="d-block mb-1"></span>
              <TextArea
                id="description-field"
                rows="3"
                name="description"
                placeholder="More information about the item"
                register={register}
              ></TextArea>
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
          </FormSection>
          <span className="d-block mb-3"></span>
          <FormSection>
            <FormField>
              <Label htmlFor="location-field">City / Country</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="location-field"
                type="text"
                placeholder=""
                name="location"
                register={register}
                error={errors.location && "Please state your city or country."}
              />
            </FormField>
            <span className="d-block mb-3"></span>
            <FormField>
              <Label htmlFor="email-field">Email</Label>
              <span className="d-block mb-1"></span>
              <Input
                id="email-field"
                type="email"
                placeholder="Your email"
                name="email"
                register={register}
                error={errors.email && "Please provide your email."}
              />
            </FormField>
          </FormSection>
          <span className="d-block mb-3"></span>
          <Submit>Post now</Submit>
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

export function Submit({ children }) {
  return (
    <div className="p-3 p-md-0">
      <div className="d-grid d-md-block text-end">
        <Button type="submit" purpose="success">
          {children}
        </Button>
      </div>
      <span className="d-block mb-3"></span>
    </div>
  );
}

export function FormSection({ children }) {
  return (
    <div className="p-3 p-md-32px bg-white border rounded shadow">
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
