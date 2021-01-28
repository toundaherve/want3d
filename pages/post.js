import axios from "axios";
import { useState } from "react";
import Alert from "../components/Alert";
import PostPage from "../components/PostPage";

export default function Post() {
  const [newPostId, setNewPostId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [croppedImage, setCroppedImage] = useState(null);

  function handleError(error) {
    let errorMessage;

    if (typeof error === "String") {
      errorMessage = error;
    }

    if (error instanceof Error) {
      errorMessage = error.message;
    }

    setErrorMessage(errorMessage);
  }

  function validImage(imageData) {
    return imageData ? true : false;
  }

  function collectImageData(imageData) {
    setCroppedImage(imageData);
  }

  async function onSubmit(newPost) {
    setIsSubmitting(true);

    if (!validImage(croppedImage)) {
      handleError("Invalid image");
    } else {
      const data = {
        ...newPost,
        image: croppedImage,
      };

      let response;
      try {
        response = await axios.post("http://192.168.1.68:3000/api/post", data);

        if (response.data.error) {
          handleError(response.data.errorMessage);
        } else {
          setNewPostId(response.data.newPostId);
        }
      } catch (error) {
        handleError(error);
      }
    }

    setIsSubmitting(false);
  }

  return (
    <>
      {errorMessage && (
        <Alert
          heading="Sorry ! We could not perform the operation"
          message={errorMessage}
          type="danger"
        />
      )}
      {newPostId && (
        <Alert
          heading="Well done!"
          message="You wanted poster has been successfully created"
          type="success"
          nextMessage={"You can see your wanted poster here: "}
          nextButtonText="View poster"
          nextLink={`/item?id=${newPostId}`}
        />
      )}
      {!errorMessage && !newPostId && (
        <PostPage
          isSubmitting={isSubmitting}
          onSubmit={onSubmit}
          handleImageCropped={collectImageData}
        />
      )}
    </>
  );
}
