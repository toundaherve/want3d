import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import useSWR from 'swr'
import {useRouter} from "next/router"
import { Helmet } from "react-helmet";
import Alert from "../components/Alert";
import Layout from "../components/Layout";
import {
  Input,
  Label,
  Section,
  TextArea,
  Select,
  Form,
  ErrorMessage,
} from "../components/Form";

import countries from "../countries-json/countries.min.json"

export default function Contact(props) {
  const router = useRouter()
  const url = makeURL(process.env)
  const [ID, setID] = useState("");
  const [sellerEmail, setSellerEmail] = useState("")
  const { register, errors, handleSubmit, watch } = useForm();
  const { post, response, loading, error } = useFetch(url);

  const country = watch("sellerCountry", false)
  const cities = country ? countries[country] : []

  async function onSubmit(data) {
    const ID = await post("/api/notification", {...data, postID: router.query.postid});
    if (response.ok) {
      setID(ID)
      setSellerEmail(data.sellerEmail)
    };
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <Layout>
        <Alert context="danger" heading="Sorry, the operation failed!">
          <p className="mb-0">We are working on it and we'll get it fixed as soon as we can.</p>
          <hr/>
          <p className="mb-0">
            Retry later!
          </p>
        </Alert>
      </Layout>
    )
  }

  if (response.ok) {
    return (
      <Layout>
        <Alert heading="Well done!" context="success">
          <p className="mb-0">
            The buyer has been notified of your interest and will contact you at <strong><em>{sellerEmail}</em></strong>.
          </p>
          <hr/>
          <p className="mb-0">
            You can now leave or search for other buyers.
          </p>
        </Alert>
      </Layout>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>Contact the buyer</title>
        <meta name="description" content="Contact the buyer of your item" />
        <link rel="stylesheet" href="https://www.bonvih.com/contact" />
      </Helmet>
      <span className="d-block mb-3"></span>
        <div className="container post-form-width p-0">
          <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
            <h1 className="h4 mb-0 ms-3 ms-md-0">Contact buyer</h1>
            <span className="d-block mb-3"></span>
            <Section>
              <div>
                <Label htmlFor="email-field">Photos of the item</Label>
                <span className="d-block mb-1"></span>
                <Input type="file" className="form-control" id="images"  />
                <span className="d-block mb-2"></span>
                <small>Maximum 4 photos</small>
                <span className="d-block mb-3"></span>
                <ul className="list-unstyled mb-0 thumbnail-list">
                  {[1,2,3].map(n => (
                    <li key={n} className="thumbnail-item">
                      <span className="thumbnail-close">
                        <span className="badge bg-dark">X</span>
                      </span>
                      <img className="img-thumbnail w-100 bg-primary" style={{height: "94px"}} src="blob:https://www.shpock.com/ebb32852-65ff-4cfc-afa6-26e4c113359f" /> 
                    </li>
                  ))}
                </ul>
                <span className="d-block mb-2"></span>
                <small>You can drag and drop to change the order they will appear in.</small>
              </div>
            </Section> 
            <span className="d-block mb-3"></span>
            <Section>
              <div>
                <Label htmlFor="email-field">Your name</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="sellerName-field"
                  type="text"
                  name="sellerName"
                  register={() => register({ required: true })}
                  isInvalid={errors.sellerName}
                />
                {errors.sellerName && (
                  <ErrorMessage>Please provide your name</ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="email-field">Your Email</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="email-field"
                  type="email"
                  name="sellerEmail"
                  register={() => register({ required: true })}
                  isInvalid={errors.sellerEmail}
                />
                {errors.email && (
                  <ErrorMessage>Please provide your the email</ErrorMessage>
                )}
                <div className="form-text">
                  We will never share your email with anyone except this buyer.
                </div>
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="location-field">Your country</Label>
                <span className="d-block mb-1"></span>
                <Select
                  className="form-select flex-grow-0 w-auto"
                  id="country-field"
                  name="sellerCountry"
                  register={() => register({ required: true })}
                  type=""
                  options={Object.keys(countries)}
                  isInvalid={errors.sellerCountry}
                />
                {errors.sellerCountry && (
                  <ErrorMessage>Please select your country.</ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="location-field">Your city</Label>
                <span className="d-block mb-1"></span>
                <Select
                  className="form-select flex-grow-0 w-auto"
                  id="city-field"
                  name="sellerCity"
                  register={() => register({ required: true })}
                  type=""
                  options={cities}
                  isInvalid={errors.sellerCity}
                  disabled={!country}
                />
                {errors.sellerCity && (
                  <ErrorMessage>Please select your city.</ErrorMessage>
                )}
              </div>
            </Section>
          </Form>
        </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function makeURL(env) {
  const {API_HOST, API_PORT, ENVIRONMENT} = env
  let URL = ''
  if (ENVIRONMENT === "production") { 
    URL = `https://${API_HOST}`
  } else {
    URL = `http://${API_HOST}:${API_PORT}`
  }
}