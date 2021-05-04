import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
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

export default function Post() {
  const url = makeURL(process.env)
  const [buyerEmail, setBuyerEmail] = useState("")
  const { register, errors, handleSubmit, watch } = useForm();
  const { post, response, loading, error } = useFetch(url);

  const buyerCountry = watch("buyerCountry", false)
  const cities = buyerCountry ? countries[buyerCountry] : []

  async function onSubmit(data) {
    await post("/api/need", data);
    if (response.ok) setBuyerEmail(data.buyerEmail);
    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });
  }

  if (error) {
    return (
      <Layout>
        <Alert context="danger" heading="Sorry, there is an error!">
          <div className="mb-0">We are working on it and we'll get it fixed as soon as we can.</div>
        </Alert>
      </Layout>
    )
  }

  if (response.ok) {
    return (
      <Layout>
        <Alert heading="Well done!" context="success">
          <p className="mb-0">
            Your post has beed succesfully created. We will contact you at <strong><em>{buyerEmail}</em></strong> &nbsp;when there is an offer.
          </p>
        </Alert>
      </Layout>
    )
  }

  return (
    <Layout>
      <Helmet>
        <title>Say what you need here</title>
        <meta name="description" content="Let the world know what you need" />
        <link rel="stylesheet" href="https://www.bonvih.com/post" />
      </Helmet>
      <span className="d-block mb-3"></span>
        <div className="container post-form-width p-0">
          <Form onSubmit={handleSubmit(onSubmit)} loading={loading}>
            <h1 className="h4 mb-0 ms-3 ms-md-0">Say what you need</h1>
            <span className="d-block mb-3"></span>
            <Section>
              <div>
                <Label htmlFor="name-field">What is the name of the item?</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="name-field"
                  type="text"
                  name="itemName"
                  register={register}
                  isInvalid={errors.itemName}
                />
                {errors.itemName && (
                  <ErrorMessage>
                    Please provide the name of the item.
                  </ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="category-field">Select the category of the item</Label>
                <span className="d-block mb-1"></span>
                <Select
                  name="itemCategory"
                  type=""
                  options={["Automobile", "Phones", "Clothing"]}
                  register={() => register({ required: true })}
                  isInvalid={errors.itemCategory}
                />
                {errors.itemCategory && (
                  <ErrorMessage>
                    Please select the category of the item.
                  </ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="description-field">What are your requirements for the item?</Label>
                <span className="d-block mb-1"></span>
                <TextArea
                  id="description-field"
                  rows="3"
                  name="itemDescription"
                  placeholder="color, quality, year, etc"
                  register={register}
                ></TextArea>
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="reward-field">What is your budget?</Label>
                <span className="d-block mb-1"></span>
                <div className="d-flex align-items-start">
                  <div className="d-flex flex-column">
                    <Select
                      className="form-select flex-grow-0 w-auto"
                      id="curency-field"
                      name="buyerCurrency"
                      register={() => register({ required: true })}
                      type="Currency"
                      options={["GBP", "EUR", "USD"]}
                      isInvalid={errors.buyerCurrency}
                    />
                    {errors.buyerCurrency && (
                      <ErrorMessage>Please select a currency.</ErrorMessage>
                    )}
                  </div>
                  <span className="d-block mb-3 ms-2"></span>
                  <div className="flex-grow-1">
                    <Input
                      id="budget-field"
                      type="number"
                      name="buyerBudget"
                      register={() => register({ required: true })}
                      isInvalid={errors.buyerCurrency}
                    />
                    {errors.buyerCurrency && (
                      <ErrorMessage>Please provide your budget.</ErrorMessage>
                    )}
                  </div>
                </div>
              </div>
              
            </Section>
            <span className="d-block mb-3"></span>
            <Section>
              <div>
                <Label htmlFor="name-field">Your name</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="name-field"
                  type="text"
                  name="buyerName"
                  register={register}
                  isInvalid={errors.buyerName}
                />
                {errors.buyerName && (
                  <ErrorMessage>
                    Please provide your name.
                  </ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="email-field">Your email</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="email-field"
                  type="email"
                  name="buyerEmail"
                  register={() => register({ required: true })}
                  error={errors.buyerEmail}
                />
                {errors.buyerEmail && (
                  <ErrorMessage>Please provide your email.</ErrorMessage>
                )}
                <div className="form-text">
                  We will never share your email with anyone.
                </div>
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="location-field">Your country</Label>
                <span className="d-block mb-1"></span>
                <Select
                  className="form-select flex-grow-0 w-auto"
                  id="country-field"
                  name="buyerCountry"
                  register={() => register({ required: true })}
                  type=""
                  options={Object.keys(countries)}
                  isInvalid={errors.buyerCountry}
                />
                {errors.buyerCountry && (
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
                  name="buyerCity"
                  register={() => register({ required: true })}
                  type=""
                  options={cities}
                  isInvalid={errors.buyerCity}
                  disabled={!buyerCountry}
                />
                {errors.buyerCity && (
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