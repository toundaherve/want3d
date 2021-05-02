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
    itemName,
    itemCategory,
    itemDescription,
    buyerBudget,
    buyerCurrency,
    buyerCountry,
    buyerCity,
    createdAt,
  } = data;

  return (
    <Layout>
      <Helmet>
        <title>{`I need ${itemName}`}</title>
        <meta name="description" content={`I need ${itemName}. ${itemDescription}`} />
        <link rel="canonical" href={`https://www.bonvih.com/item/${id}`} />
      </Helmet>
      <span className="d-block mb-2"></span>
      <div className="container post-form-width ">
        <span className="d-block mb-3"></span>
        <div className="d-none d-md-block">
          <Breadcrumb current={itemName} />
          <span className="d-block mb-3"></span>
        </div>
        <div>
          <Section>
            <div className="">
              <h1 className="h4 mb-0 fw-bold text-primary">
                {/* <span className="text-dark">I need </span> */}
                {`${itemName} - ${getCurrencySymbol(buyerCurrency)}${buyerBudget}`}
              </h1>
              <Divider />
              <div className="row">
                <div className="col-12">
                  <div className="h5 mb-0">Item details</div>
                  <span className="d-block mb-2"></span>
                  <div className="d-flex flex-column">
                    <Field name="Item name" value={itemName} />
                    <Field name="Item category" value={itemCategory} />
                  </div>
                </div>
                <div className="col-12 ">
                  <Divider />
                </div>
                <div className="col-12">
                  <div className="h5 mb-0">Buyer's requirements</div>
                  <span className="d-block mb-2"></span>
                  <p className="mb-0">{itemDescription}</p>
                </div>
                <div className="col-12 ">
                  <Divider />
                </div>
                <div className="col-12">
                  <div className="h5 mb-0">Buyer details</div>
                  <span className="d-block mb-2"></span>
                  <div className="d-flex flex-column">
                    <Field
                      name="Buyer's budget"
                      value={getCurrencySymbol(buyerCurrency) + buyerBudget}
                    />
                    <Field name="Buyer's city" value={buyerCity} />
                    <Field name="Buyer's country" value={buyerCountry} />
                    <Field name="Date published" value={createdAt} />
                  </div>
                </div>
              </div>
            </div>
          </Section>
          <span className="d-block mb-3"></span>
          <Button className="d-inline-block" purpose="secondary" link={`/contact?postid=${id}`}>Contact buyer</Button>
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
