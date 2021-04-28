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
  const [ID, setID] = useState("");
  const { register, errors, handleSubmit, watch } = useForm();
  const { post, response, loading, error } = useFetch(url);

  const country = watch("country", false)
  const cities = country ? countries[country] : []

  async function onSubmit(data) {
    const ID = await post("/api/need", data);
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
          message="Well done! your need has beed succesfully created."
          context="success"
        />
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
                <Label htmlFor="name-field">Name</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="name-field"
                  type="text"
                  name="name"
                  placeholder="Name of the item"
                  register={register}
                  isInvalid={errors.name}
                />
                {errors.name && (
                  <ErrorMessage>
                    Please provide the name of the item.
                  </ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="category-field">Category</Label>
                <span className="d-block mb-1"></span>
                <Select
                  name="category"
                  type="Select a category"
                  options={["Automobile", "Phones", "Clothing"]}
                  register={() => register({ required: true })}
                  isInvalid={errors.category}
                />
                {errors.category && (
                  <ErrorMessage>
                    Please select a category for the item.
                  </ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="reward-field">Budget</Label>
                <span className="d-block mb-1"></span>
                <div className="d-flex align-items-start">
                  <div className="d-flex flex-column">
                    <Select
                      className="form-select flex-grow-0 w-auto"
                      id="curency-field"
                      name="currency"
                      register={() => register({ required: true })}
                      type="Currency"
                      options={["GBP", "EUR", "USD"]}
                      isInvalid={errors.currency}
                    />
                    {errors.currency && (
                      <ErrorMessage>Please select a currency.</ErrorMessage>
                    )}
                  </div>
                  <span className="d-block mb-3 ms-2"></span>
                  <div className="flex-grow-1">
                    <Input
                      id="budget-field"
                      type="number"
                      name="budget"
                      register={() => register({ required: true })}
                      isInvalid={errors.budget}
                    />
                    {errors.budget && (
                      <ErrorMessage>Please provide your budget.</ErrorMessage>
                    )}
                  </div>
                </div>
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="description-field">Note to sellers</Label>
                <span className="d-block mb-1"></span>
                <TextArea
                  id="description-field"
                  rows="3"
                  name="description"
                  register={register}
                ></TextArea>
              </div>
            </Section>
            <span className="d-block mb-3"></span>
            <Section>
              <div>
                <Label htmlFor="location-field">Country</Label>
                <span className="d-block mb-1"></span>
                <Select
                  className="form-select flex-grow-0 w-auto"
                  id="country-field"
                  name="country"
                  register={() => register({ required: true })}
                  type=""
                  options={Object.keys(countries)}
                  isInvalid={errors.country}
                />
                {errors.country && (
                  <ErrorMessage>Please select a country.</ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="location-field">City</Label>
                <span className="d-block mb-1"></span>
                <Select
                  className="form-select flex-grow-0 w-auto"
                  id="city-field"
                  name="city"
                  register={() => register({ required: true })}
                  type=""
                  options={cities}
                  isInvalid={errors.city}
                  disabled={!country}
                />
                {errors.city && (
                  <ErrorMessage>Please select a city.</ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
              <div>
                <Label htmlFor="email-field">Email</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="email-field"
                  type="email"
                  name="email"
                  register={() => register({ required: true })}
                  error={errors.email}
                />
                {errors.email && (
                  <ErrorMessage>Please provide your email.</ErrorMessage>
                )}
                <div className="form-text">
                  We will never share your email with anyone.
                </div>
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