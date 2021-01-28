import { useCallback, useEffect, useState } from "react";
import Cropper from "react-easy-crop";
import getCroppedImg from "../utils/cropImage";

export default function ImageCropper({ file, handleCroppedImage }) {
  const [imageSrc, setImageSrc] = useState(null);
  const [crop, setCrop] = useState({ x: 0, y: 0 });
  const [rotation, setRotation] = useState(0);
  const [zoom, setZoom] = useState(1);
  const [croppedAreaPixels, setCroppedAreaPixels] = useState(null);
  const [croppedImage, setCroppedImage] = useState(null);

  const onCropComplete = useCallback((croppedArea, croppedAreaPixels) => {
    setCroppedAreaPixels(croppedAreaPixels);
  });

  useEffect(() => {
    readFile(file).then((imageSrc) => {
      setImageSrc(imageSrc);
    });
  }, []);

  const handleValidate = useCallback(async () => {
    try {
      const croppedImage = await getCroppedImg(
        imageSrc,
        croppedAreaPixels,
        rotation
      );
      handleCroppedImage(croppedImage);
    } catch (error) {
      console.log(error);
    }
  });

  return (
    <div>
      <div className="position-relative w-100" style={{ height: "256px" }}>
        <Cropper
          image={imageSrc}
          crop={crop}
          rotation={rotation}
          zoom={zoom}
          aspect={150 / 200}
          onCropChange={setCrop}
          onRotationChange={setRotation}
          onCropComplete={onCropComplete}
          onZoomChange={setZoom}
        />
      </div>
      <span className="d-block mb-3"></span>
      <div>
        <div className="row">
          <div className="col-12 col-md-6">
            <div>
              <label htmlFor="customRange1" className="form-label">
                Zoom
              </label>
              <input
                type="range"
                min={1}
                max={3}
                step={0.1}
                className="form-range"
                id="customRange1"
                value={zoom}
                onChange={(e) => setZoom(e.target.value)}
              />
            </div>
          </div>
          <div className="col-12 col-md-6">
            <div>
              <label htmlFor="customRange2" className="form-label">
                Rotation
              </label>
              <input
                type="range"
                min={0}
                max={360}
                step={1}
                className="form-range"
                id="customRange2"
                value={rotation}
                onChange={(e) => setRotation(e.target.value)}
              />
            </div>
          </div>
        </div>
        <span className="d-block mb-3"></span>
        <div className="text-end">
          <button
            className="btn btn-primary"
            onClick={handleValidate}
            type="button"
          >
            Crop
          </button>
        </div>
      </div>
    </div>
  );
}

function readFile(file) {
  return new Promise((resolve) => {
    const reader = new FileReader();
    reader.addEventListener("load", () => resolve(reader.result));
    reader.readAsDataURL(file);
  });
}
