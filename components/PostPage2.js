import { useForm } from "react-hook-form";
import Button from "./Button";
import Layout from "./Layout";
import { Helmet } from "react-helmet";

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
      <div className="container bg-light">
        <div className="w-100 post-page-container d-flex justify-content-center align-items-center">
          <PostForm />
        </div>
      </div>
      <span className="d-block mb-3"></span>
    </Layout>
  );
}

function PostForm() {
  return (
    <form className="card post-card-container">
      <div>
        <span className="d-block mb-12px"></span>
        <div className="px-md-4">
          <input
            type="text"
            placeholder="Title"
            className="d-block form-control border-0 post-input-title"
          />
          <span className="d-block mb-12px"></span>
          <textarea
            name="descrition"
            id="description-id"
            cols="30"
            rows="4"
            className="d-block form-control border-0"
            placeholder="Your text here"
          />
          <span className="d-block mb-12px"></span>
          <input
            type="text"
            placeholder="#tags"
            className="d-block form-control border-0"
          />
          <span className="d-block mb-12px"></span>
          <input
            type="email"
            placeholder="Your email"
            className="d-block form-control border-0"
          />
          <span className="d-block mb-12px"></span>
          <input
            type="text"
            placeholder="Your location"
            className="d-block form-control border-0"
          />
          <span className="d-block mb-12px"></span>
        </div>
      </div>
      <div className="d-flex justify-content-end px-12px px-md-4 py-3 border-top">
        <Button>Post</Button>
      </div>
    </form>
  );
}

// contained

// container width fixed

// container height min-fixed

// bg colored

//

//87.5

//
