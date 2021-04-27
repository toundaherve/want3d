import { useState } from "react";
import { useForm } from "react-hook-form";
import useFetch from "use-http";
import useSWR from 'swr'
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

export default function Post() {
  const url = makeURL(process.env)
  const [ID, setID] = useState("");
  const { register, errors, handleSubmit } = useForm();
  const { post, response, loading, error } = useFetch(url);

  async function onSubmit(data) {
    const ID = await post("/api/contact", data);
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
          message="Well done! your email has beed succesfully sent to the buyer."
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
                <Label htmlFor="email-field">Your Email</Label>
                <span className="d-block mb-1"></span>
                <Input
                  id="email-field"
                  type="email"
                  name="email"
                  register={() => register({ required: true })}
                  isInvalid={errors.email}
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
                <Label htmlFor="message-field">Your Message</Label>
                <span className="d-block mb-1"></span>
                <TextArea
                  id="message-field"
                  rows="3"
                  name="message"
                  register={register}
                ></TextArea>
                {errors.message && (
                  <ErrorMessage>Please provide a message.</ErrorMessage>
                )}
              </div>
              <span className="d-block mb-3"></span>
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