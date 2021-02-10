import axios from "axios";
import { useState } from "react";
import Alert from "../components/Alert";
import PostPage from "../components/PostPage";

export default function Post() {
  const [newPostId, setNewPostId] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  // const [croppedImage, setCroppedImage] = useState(null);

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

  // function isValidImage(imageData) {
  //   return imageData ? true : false;
  // }

  // function collectImageData(imageData) {
  //   setCroppedImage(imageData);
  // }

  async function handleSubmit(data) {
    setIsSubmitting(true);

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

    window.scroll({
      top: 0,
      left: 0,
      behavior: "smooth",
    });

    setIsSubmitting(false);
  }

  return (
    <>
      {errorMessage ? (
        <Alert
          heading="Sorry ! We could not perform the operation"
          text={errorMessage}
          purpose="warning"
        />
      ) : newPostId ? (
        <Alert
          heading="Well done!"
          text={`Your iNeed poster has been successfully advertised.<span class="d-block mb-1"> </span>As soon as a seller contacts us about your poster, we will email you their contact info and you two take it from there.`}
          purpose="success"
          redirectionText={"You can see your iNeed poster here: "}
          redirectionButtonText="View poster"
          redirectionLink={`/item?id=${newPostId}`}
        />
      ) : (
        <PostPage isSubmitting={isSubmitting} onSubmit={handleSubmit} />
      )}
    </>
  );
}
