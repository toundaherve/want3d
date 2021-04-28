import { useForm } from "react-hook-form";
import { Helmet } from "react-helmet";
import needModel from "../db/Need";
import getCurrencySymbol from "../utils/getCurrencySymbol";
import Layout from "../components/Layout";
import Breadcrumb from "../components/Breadcrumb";
import {
  Input,
  Label,
  Section,
  TextArea,
  Form,
  ErrorMessage,
} from "../components/Form";
import Button from "../components/Button";

export default function Need({ data }) {
  const { register, errors, handleSubmit } = useForm();
  const {
    id,
    name,
    budget,
    currency,
    location,
    category,
    createdAt,
    description,
  } = data;

  return (
    <Layout>
      <Helmet>
        <title>{`I need ${name}`}</title>
        <meta name="description" content={`I need ${name}. ${description}`} />
        <link rel="canonical" href={`https://www.bonvih.com/item/${id}`} />
      </Helmet>
      <span className="d-block mb-2"></span>
      <div className="container post-form-width ">
        <span className="d-block mb-3"></span>
        <div className="d-none d-md-block">
          <Breadcrumb current={name} />
          <span className="d-block mb-3"></span>
        </div>
        <div>
          <Section>
            <div className="">
              <h1 className="h4 mb-0 fw-bold text-primary">
                {/* <span className="text-dark">I need </span> */}
                {`${name} - ${getCurrencySymbol(currency)}${budget}`}
              </h1>
              <Divider />
              <div className="row">
                <div className="col-12">
                  <div className="h5 mb-0">Details</div>
                  <span className="d-block mb-2"></span>
                  <div className="d-flex flex-column">
                    <Field name="Name" value={name} />
                    <Field name="Category" value={category} />
                    <Field
                      name="Budget"
                      value={getCurrencySymbol(currency) + budget}
                    />
                    <Field name="Currency" value={currency} />
                    <Field name="City / Country" value={location} />
                    <Field name="Date published" value={createdAt} />
                  </div>
                </div>
                <div className="col-12 ">
                  <Divider />
                </div>
                <div className="col-12">
                  <div className="h5 mb-0">Note for sellers</div>
                  <span className="d-block mb-2"></span>
                  <p className="mb-0">{description}</p>
                </div>
              </div>
            </div>
          </Section>
          <span className="d-block mb-3"></span>
          <Button className="d-inline-block" purpose="secondary" link="/contact">Contact buyer</Button>
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function Field({ name, value }) {
  return (
    <div>
      <span className="d-inline-block">{name}:&nbsp;</span>
      <span className="d-inline-block fw-bold">{value}</span>
    </div>
  );
}

function Divider() {
  return <span className="item-divider d-block mb-3"></span>;
}

export async function getServerSideProps(context) {
  const id = context.query.id;

  if (!id) {
    context.res.writeHead(400, { "Context-Type": "text/plain" });
    context.res.end("Missing Id");
    return {
      props: null,
    };
  }

  let need;
  try {
    need = await needModel.findOne(id);
    if (need === null) {
      context.res.writeHead(400, { "Context-Type": "text/plain" });
      context.res.end("Post not found");
      return {
        props: null,
      };
    }
  } catch (error) {
    context.res.writeHead(500, { "Context-Type": "text/plain" });
    context.res.end("Internal server error");
    return {
      props: null,
    };
  }

  return {
    props: {
      data: {
        ...need,
        createdAt: need.createdAt.toString(),
        updatedAt: need.updatedAt.toString(),
      },
    },
  };
}
