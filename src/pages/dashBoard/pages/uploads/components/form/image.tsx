import { useEffect, useRef, useState, FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Button from "../../../../../../components/UI/FormElement/Button";
import { useFormContext } from "react-hook-form";
import ImageCard from "./ImageCard";
import SlideBottons from "./slideBottons/slideBottons";
import { GiCloudUpload } from "react-icons/gi";
import Tippy from "@tippyjs/react";
import "tippy.js/dist/tippy.css";

const style = {
  items: `bg-[#E5E5E5]  my-10 shadow-xl flex justify-between items-end w-[100%] m-auto`,
  uploadImage: `border-4 border-dashed flex items-center justify-center h-[50vh] w-[40vw] m-auto mb-10 `,
  icon: ` cursor-pointer text-[#E5E5E5]  hover:text-[#0D304A]`,
};

const image: FC<ImageComponentProps> = ({ nextStep, prevStep, errors }) => {
  let displayPropertiesImages;
  const { setValue, register, watch } = useFormContext();
  const FormWatch = watch();

  const [images, setImages] = useState<any[]>([]);

  const cloudinaryRef = useRef();
  const widgetRef = useRef();
  useEffect(() => {
    const loadedImages = async () => {
      if (localStorage.getItem("propertiesImage")) {
        const ParsedImages = localStorage.getItem("propertiesImage");
        const localImage = JSON.parse(ParsedImages!);

        for (const file of localImage) {
          setImages((image) => [...image, file]);
        }
      }
    };

    loadedImages();
    // setValue("propertyImages", localImage);
  }, [setValue, image]);
  useEffect(() => {
    //@ts-ignore
    cloudinaryRef.current = window?.cloudinary; //@ts-ignore
    widgetRef.current = cloudinaryRef.current.createUploadWidget(
      {
        cloudName: import.meta.env.VITE_REACT_APP_CLOUDINARY_CLOUD_NAME,
        uploadPreset: import.meta.env.VITE_REACT_APP_CLOUDINARY_UPLOAD_PRESET,
        folder: `reactUploadProperties/${FormWatch.title}-${Date.now()}`,
        // clientAllowedFormats: ["images"],
        // showPoweredBy: false,
        // maxFileSize: 1500000,
        maxFiles: 3,
        // maxImageFileSize: 1500000,
        max_files: 3,
      },
      function (error: any, result: any) {
        if (!error && result && result.event === "success") {
          return "please add an image";
        } else {
          if (
            result?.data?.info?.files[0]?.uploadInfo !== null ||
            result?.data?.info?.files[0]?.uploadInfo !== undefined
          ) {
            let images = result?.data?.info?.files;
            if (images !== undefined || images.length >= 0 || images !== null) {
              const uploadInfoArray = [];
              for (let i = 0; i < images.length; i++) {
                const uploadInfo = images[i].uploadInfo;
                uploadInfoArray.push(uploadInfo);
              }
              localStorage.setItem(
                "propertiesImage",
                JSON.stringify(uploadInfoArray)
              );
              setValue("propertyImages", uploadInfoArray);
            }
          }
        }
      }
    );
  }, []);

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
  if (images) {
    displayPropertiesImages = images?.map((image: Props, index: any) => (
      <div key={index} className={style.items}>
        <ImageCard images={image} removeImage={removeImage} />
      </div>
    ));
  }
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
      {!images || images.length === 0 ? (
        <div className={style.uploadImage}>
          <Tippy content="upload property images">
            <p className={style.icon} onClick={openWidget}>
              <GiCloudUpload
                size={109}
                style={{ marginRight: "5px", cursor: "pointer" }}
              />
            </p>
          </Tippy>
        </div>
      ) : (
        <>
          <div onClick={openWidget}>upload</div>
          {images ? displayPropertiesImages : null}
          <SlideBottons previous={previous} continues={continues} />
        </>
      )}
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
  url: string;
  original_filename: string;
}
