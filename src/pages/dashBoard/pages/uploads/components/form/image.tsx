import { useEffect, useRef, useState, FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Button from "../../../../../../components/UI/FormElement/Button";
import { useFormContext, useController } from "react-hook-form";
import ImageCard from "./ImageCard";
import SlideBottons from "./slideBottons/slideBottons";

const style = {
  items: `bg-[#E5E5E5]  my-10 shadow-xl flex justify-between items-end`,
};
const image: FC<ImageComponentProps> = ({ nextStep, prevStep, errors }) => {
  const { setValue, register, watch } = useFormContext();
  const FormWatch = watch();
  console.log(FormWatch, `Image Watch`);

  const [images, setImages] = useState<any[]>([
    {
      secure_url: `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
      
    },
    {
      secure_url: `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      secure_url: `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    },
    {
      secure_url: `https://images.unsplash.com/photo-1559705421-4ae9bf6fabb5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OXx8dGh1bWJuYWlsfGVufDB8fDB8fA%3D%3D&auto=format&fit=crop&w=500&q=60`,
    },
  ]);

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
    <div key={index} className={style.items}>
      <ImageCard images={image} removeImage={removeImage} />
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
