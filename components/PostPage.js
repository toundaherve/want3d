import { useState } from "react";
import { useForm } from "react-hook-form";
import ImageCropper from "./ImageCropper";
import Layout from "./Layout";
import LoadingButton from "./LoadingButton";

export default function PostPage({
  onSubmit,
  isSubmitting,
  handleImageCropped,
}) {
  const [hasCroppedImage, setHasCroppedImage] = useState(false);
  const [croppedImage, setCroppedImage] = useState(null);
  const { register, handleSubmit, errors, watch, getValues } = useForm();
  const showCropImage = watch("image", false);

  function handleCroppedImage(croppedImage) {
    setCroppedImage(croppedImage);
    setHasCroppedImage(true);
    handleImageCropped(croppedImage);
  }

  return (
    <Layout>
      <span className="d-block w-100 text-white">.</span>

      <div style={{ maxWidth: "762px", margin: "0 auto" }}>
        <h5>Post your wanted item</h5>

        <span className="d-block mb-3"></span>

        <form
          className="d-flex flex-column validated rounded"
          onSubmit={handleSubmit(onSubmit)}
        >
          {/* Image */}
          <div className="border rounded p-3 p-md-4-5">
            <div>
              <label
                htmlFor="exampleFormControlInputImg"
                className="form-label"
              >
                Item image
              </label>

              <input
                type="file"
                accept="image/*"
                className={`form-control ${errors.image && "invalid-input"}`}
                id="exampleFormControlInputImg"
                name="image"
                ref={register({ required: true })}
                disabled={hasCroppedImage}
              />

              <span className="d-block mb-2"></span>

              {errors.image && (
                <div className="d-block invalid-feedback">
                  Please provide an image of the item.
                </div>
              )}

              <span className="d-block mb-3"></span>

              {!hasCroppedImage && showCropImage && (
                <>
                  <ImageCropper
                    file={getValues().image[0]}
                    handleCroppedImage={handleCroppedImage}
                  />
                </>
              )}

              {hasCroppedImage && (
                <>
                  <div className="row">
                    <div className="col-4">
                      <div className="border rounded">
                        <img src={croppedImage} className="img-fluid" />
                      </div>
                    </div>
                  </div>
                </>
              )}
            </div>
          </div>

          <span className="d-block mb-3"></span>

          <div className="border rounded p-3 p-md-4-5">
            {/* Item name */}
            <div>
              <label htmlFor="exampleFormControlInput1" className="form-label">
                Item name
              </label>

              <input
                type="text"
                className={`form-control ${errors.name && "invalid-input"}`}
                id="exampleFormControlInput1"
                name="name"
                ref={register({ required: true })}
              />

              {errors.name && (
                <div className="d-block invalid-feedback">
                  Please provide the name of the item.
                </div>
              )}
            </div>

            <span className="d-block mb-3"></span>

            {/* Item reward */}
            <div>
              <label
                htmlFor="exampleFormControlInput2"
                className="d-block form-label"
              >
                Reward
              </label>

              <div className="d-flex">
                <select
                  className="form-select flex-grow-0 w-auto me-2"
                  aria-label="Default select example"
                  id="exampleSelect"
                  name="currency"
                  ref={register}
                >
                  <option defaultValue>GBP</option>
                  <option value="EUR">EUR</option>
                  <option value="USD">USD</option>
                </select>

                <input
                  type="number"
                  className={`flex-grow-1 form-control ${
                    errors.reward && "invalid-input"
                  }`}
                  id="exampleFormControlInput2"
                  name="reward"
                  ref={register({ required: true })}
                />
              </div>

              {errors.reward && (
                <div className="d-block invalid-feedback">
                  Please provide a reward.
                </div>
              )}
            </div>

            <span className="d-block mb-3"></span>

            {/* Description */}
            <div>
              <label
                htmlFor="exampleFormControlTextarea1"
                className="form-label"
              >
                Description
              </label>

              <textarea
                className="form-control"
                id="exampleFormControlTextarea1"
                rows="3"
                name="description"
                ref={register}
              ></textarea>
            </div>

            <span className="d-block mb-3"></span>

            {/* Category */}
            <div>
              <label htmlFor="exampleSelectCategory" className="form-label">
                Category
              </label>

              <select
                className={`form-select ${errors.category && "invalid-input"}`}
                aria-label="Default select example"
                id="exampleSelectCategory"
                name="category"
                ref={register({ required: true })}
              >
                <option value="" defaultValue>
                  Select a Category
                </option>
                <option value="Automobiles">Automobiles</option>
                <option value="Phones">Phones</option>
                <option value="Clothing">Clothing</option>
              </select>

              {errors.category && (
                <div className="d-block invalid-feedback">
                  Please provide a category.
                </div>
              )}
            </div>

            <span className="d-block mb-3"></span>

            {/* Location */}
            <div>
              <label htmlFor="exampleFormControlInput3" className="form-label">
                City / Location
              </label>

              <input
                type="text"
                className={`form-control ${errors.location && "invalid-input"}`}
                id="exampleFormControlInput3"
                name="location"
                ref={register({ required: true })}
              />

              {errors.location && (
                <div className="d-block invalid-feedback">
                  Please provide a city or country.
                </div>
              )}
            </div>

            <span className="d-block mb-3"></span>

            {/* Email */}
            <div>
              <label htmlFor="exampleFormControlInput4" className="form-label">
                Email
              </label>

              <input
                type="email"
                className={`form-control ${errors.email && "invalid-input"}`}
                id="exampleFormControlInput4"
                name="email"
                ref={register({ required: true })}
              />

              {errors.email && (
                <div className="d-block invalid-feedback">
                  Please provide your email.
                </div>
              )}

              <div id="emailHelp" className="form-text">
                We'll never share your email with anyone else.
              </div>
            </div>
          </div>

          <span className="d-block mb-3"></span>

          <div className="py-3 align-self-md-end">
            <LoadingButton isLoading={false} />
          </div>
        </form>
      </div>
      <span className="d-block w-100 text-white">.</span>
    </Layout>
  );
}
