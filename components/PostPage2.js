import { useForm } from "react-hook-form";
import Button from "./Button";
import Layout from "./Layout";
import { Helmet } from "react-helmet";
import Breadcrumb from "./Breadcrumb";

export default function PostPage2({ onSubmit, isSubmitting }) {
  const { register, errors, handleSubmit } = useForm();
  return (
    <Layout>
      <Helmet>
        <title>Say what you need here</title>
        <meta name="description" content="Let the world know what you need" />
        <link rel="stylesheet" href="https://www.ineed.com/post" />
      </Helmet>
      <span className="d-block mb-3"></span>
      <div className="container">
        <Breadcrumb />
        <span className="d-block mb-3"></span>
        <h1 className="h4 mb-0">New Post</h1>
        <span className="d-block mb-1"></span>
        <p className="p-0 m-0">
          Say what you need in the form below. <br />
          Give details such as:{" "}
          <strong>
            <em>name of item</em>
          </strong>
          ,{" "}
          <strong>
            <em>your budget</em>
          </strong>
          ,{" "}
          <strong>
            <em>prefered color</em>
          </strong>
          ,{" "}
          <strong>
            <em>condition</em>
          </strong>
          , ...
        </p>
        <span className="d-block mb-3"></span>
        <div className="bg-light">
          <div className="w-100 post-content-container d-flex flex-column justify-content-center align-items-center">
            <div className="post-form-container">
              <PostForm />
            </div>
          </div>
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function PostForm() {
  return (
    <form className="card">
      <div className="p-3">
        <input
          type="text"
          placeholder="Title"
          className="d-block form-control border-0 post-input-title"
        />
        <span className="d-block mb-3"></span>
        <textarea
          name="descrition"
          id="description-id"
          cols="30"
          rows="2"
          className="d-block form-control border-0"
          placeholder="Your text here"
        />
        <span className="d-block mb-3"></span>
        <input
          type="text"
          placeholder="#tags"
          className="d-block form-control border-0"
        />
        <span className="d-block mb-3"></span>
        <input
          type="email"
          placeholder="Your email"
          className="d-block form-control border-0"
        />
        <span className="d-block mb-3"></span>
        <input
          type="text"
          placeholder="Your location"
          className="d-block form-control border-0"
        />
      </div>
      <div className="d-flex justify-content-end p-3 border-top">
        <Button>Post</Button>
      </div>
    </form>
  );
}
