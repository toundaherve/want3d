import { useState } from "react";
import Alert from "../components/Alert";
import PostPage from "../components/PostPage";

export default function Post() {
  const [hasResponse, setHasResponse] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [error, setError] = useState("");

  const onSubmit = (data) => {
    console.log(data);
  };

  return hasResponse ? (
    hasError ? (
      <Alert
        heading="Sorry ! We could not perform the operation"
        message={error}
        type="danger"
      />
    ) : (
      <Alert
        heading="Well done!"
        message="You wanted poster has been successfully created"
        type="success"
        nextMessage={"You can see your wanted poster here: "}
        nextButtonText="View poster"
        nextLink="/item"
      />
    )
  ) : (
    <PostPage isLoading={isLoading} onSubmit={onSubmit} />
  );
}
