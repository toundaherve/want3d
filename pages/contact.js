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

export default function Post(props) {
  const router = useRouter()
  const url = makeURL(process.env)
  const [ID, setID] = useState("");
  const { register, errors, handleSubmit, watch } = useForm();
  const { post, response, loading, error } = useFetch(url);

  const country = watch("sellerCountry", false)
  const cities = country ? countries[country] : []

  async function onSubmit(data) {
    const ID = await post("/api/notification", {...data, postID: router.query.postid});
    if (response.ok) setID(ID);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <Layout>
        <Alert
          message="Sorry! the operation failed ! Retry later"
          context="danger"
        />
      </Layout>
    )
  }

  if (response.ok) {
    return (
      <Layout>
        <Alert
          message="Well done! The buyer has successfully been contacted via email."
          context="success"
        />
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