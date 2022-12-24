import { useEffect, useRef, useState, FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Button from "../../../../../../components/UI/FormElement/Button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { useFormContext, useController } from "react-hook-form";
import SlideBottons from "./slideBottons/slideBottons";
const style = {
  imgContainer: ` flex h-full w-full  w-[100vw] m-auto overflow-hidden`,
  image: ` w-[50%] rounded`,
};
const image: FC<ImageComponentProps> = ({ nextStep, prevStep, errors }) => {
  const { setValue, register, watch } = useFormContext();
  const FormWatch = watch();
  console.log(FormWatch, `Image Watch`);

  const [images, setImages] = useState<any[]>([]);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();

  // useEffect(() => {
  const loadedImages = async () => {
    if (localStorage.getItem("propertiesImage")) {
      const ParsedImages = localStorage.getItem("propertiesImage");
      const localImage = JSON.parse(ParsedImages!);
      for (const file of localImage) {
        setImages((image) => [...image, file]);
      }
      setValue("propertyImages", images);
    }
    console.log("loading localImage", images);
  };

  // }, []);
  useEffect(() => {
    //@ts-ignore
    cloudinaryRef.current = window?.cloudinary; //@ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: process.env.REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: process.env.REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        folder: `reactUploadProperties/${FormWatch.title}-${Date.now()}`,
        clientAllowedFormats: ["webp", "png", "jpeg"],
        showPoweredBy: false,
        maxFileSize: 1500000,
        multiple: true,
        maxFiles: 5,
        maxImageFileSize: 1500000,
        max_files: 5,
      },
      function (error: any, result: any) {
        if (!error && result && result.event === "success") {
          console.log(result.data);
          
          // if (!result?.data?.info?.files) {
          return "please add an image";
        } else {
          for (const file of result?.data?.info?.files) {
            const { uploadInfo } = file;
            localStorage.setItem(
              "propertiesImage",
              JSON.stringify([uploadInfo])
            );
          }
          loadedImages();
        }
      }
      // }
    );
  }, []);

  // console.log(images, "images");

  const openWidget = () => {
    //@ts-ignore
    widgetRef.current.open();
  };
  const removeImage = (id: string) => {};
  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };
  const displayproperties = images?.map((image: Props, index: any) => (
    <div key={index}>
      <LazyLoadImage
        alt={image.original_filename}
        effect="blur"
        src={image.secure_url}
        className={style.image}
      />
      <Button onClick={removeImage(image.public_id)}>Delete</Button>
    </div>
  ));
  return (
    <div>
      <span style={{ display: "none" }}>
        <Input
          type="file"
          name="propertyImages"
          placeholder="images*"
          inputRef={register("propertyImages", { required: true })}
        />
      </span>
      <Button onClick={openWidget}>upload</Button>
      {displayproperties}
      <SlideBottons previous={previous} continues={continues} />
    </div>
  );
};

export default image;

interface ImageComponentProps {
  nextStep: any;
  prevStep: any;
  errors: any;
}
interface Props {
  public_id: string;
  thumbnail_url: string;
  secure_url: string;
  original_filename: string;
}
