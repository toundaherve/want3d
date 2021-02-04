import { useForm } from "react-hook-form";
import Layout from "./Layout";
import {
  FormField,
  Input,
  Label,
  TextArea,
  FormSection,
  Submit,
} from "./PostPage";
import TopAd from "./TopAd";

export default function ItemPage({ data }) {
  return (
    <Layout>
      <span className="d-block mb-2"></span>
      <div className="container post-form-width ">
        <TopAd />
        <span className="d-block mb-3"></span>
        {/* <div className="d-none d-md-block">
          <Breadcrumb />
          <span className="d-block mb-3"></span>
        </div> */}
        <div>
          <Item {...data} />
          <Contact />
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function Item({
  name,
  reward,
  currency,
  location,
  category,
  createdAt,
  description,
}) {
  return (
    <div className="bg-white p-3 p-md-32px card shadow">
      <h4 className="mb-0 fw-bold text-primary">
        <span className="text-dark fw-normal">Needed: </span>
        {name}, {getCurrencySymbol(currency) + reward}
      </h4>
      <Divider />
      <div className="row">
        <div className="col-12 col-md-6">
          <h5 className="mb-0">Details</h5>
          <span className="d-block mb-2"></span>
          <div className="d-flex flex-column">
            <Detail name="Name" value={name} />
            <Detail name="Category" value={category} />
            <Detail
              name="Budget"
              value={getCurrencySymbol(currency) + reward}
            />
            <Detail name="Currency" value={currency} />
            <Detail name="City / Country" value={location} />
            <Detail name="Date published" value={createdAt} />
          </div>
        </div>
        <div className="col-12 d-md-none">
          <Divider />
        </div>
        <div className="col-12 col-md-6">
          <h5 className="mb-0">Note for sellers</h5>
          <span className="d-block mb-2"></span>
          <p className="mb-0">{description}</p>
        </div>
      </div>
    </div>
  );
}

function Detail({ name, value }) {
  return (
    <div>
      <span className="d-inline-block">{name}:&nbsp;</span>
      <span className="d-inline-block fw-bold">{value}</span>
    </div>
  );
}

function Divider() {
  return <span className="item-divider d-block my-3 divider-bg"></span>;
}

function Contact() {
  const { register, errors, handleSubmit } = useForm();
  return (
    <form
      className="pt-3"
      onSubmit={handleSubmit((data) => alert(JSON.stringify(data)))}
    >
      <FormSection>
        <h4 className="mb-0">Contact the buyer</h4>
        <span className="d-block mb-3"></span>
        <FormField>
          <Label htmlFor="email-field">Your Email</Label>
          <span className="d-block mb-1"></span>
          <Input
            id="email-field"
            type="email"
            name="email"
            register={register}
            error={errors.email && "Please provide your the email."}
          />
          <div className="form-text">
            We will never share your email with anyone except this buyer.
          </div>
        </FormField>
        <span className="d-block mb-3"></span>
        <FormField>
          <Label htmlFor="message-field">Your Message</Label>
          <span className="d-block mb-1"></span>
          <TextArea
            id="message-field"
            rows="3"
            name="message"
            register={register}
          ></TextArea>
        </FormField>
        <span className="d-block mb-3"></span>
        <Submit>Send now</Submit>
      </FormSection>
    </form>
  );
}

function getCurrencySymbol(currency) {
  const symbolsTable = {
    GBP: "£",
    USD: "$",
    EUR: "€",
  };

  return symbolsTable[currency];
}
