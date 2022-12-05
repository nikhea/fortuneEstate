import { useState, useEffect, FC } from "react";
import { FormData } from "./formInterface";
import { useForm, useController, FormProvider } from "react-hook-form";

import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { uploadSchema } from "./uploadSchema";
import BasicDetails from "./form/BasicDetails";
import AddressMap from "./form/AddressMap";
import Image from "./form/image";
import WebsiteDetails from "./form/websiteDetails";
import Submit from "./form/Submit";
const ComponentSwitch: FC = () => {
  const [image, setImage] = useState("");
  const [step, setStep] = useState(1);
  const nextStep = () => {
    setStep(step + 1);
  };
  const prevStep = () => {
    setStep(step - 1);
  };
  const methods = useForm<FormData>({
    resolver: yupResolver(uploadSchema),
  });

  const {
    register,
    control,
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;
  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage, // default window.sessionStorage
    exclude: ["baz"],
  });
  // const { field: category } = useController({ name: "category", control });
  // const { field } = useController({ name: "category", control });

  // console.log("watch input fields =>", watch());
  const conver2Base64 = () => {
    const formDataImages = watch();
    if (formDataImages.images.length > 0) {
      console.log(formDataImages.images);

      const files = formDataImages.images[0];
      const reader = new FileReader();
      reader.onloadend = () => {
        setImage(reader.result?.toString());
      };
      reader.readAsDataURL(files);
    }
  };
  (function () {
    // conver2Base64();
  })();
  const submitForm = (formData: any) => {
    console.log(errors, "errors errors");

    if (formData) {
      console.log("submitForm DATA main => ", formData);
    } else {
      console.log("could not submitForm DATA main => ", formData);
    }
    // if (formData.images.length > 0) {
    //   conver2Base64(formData.images[0]);
    // }
    // reset();
  };
  const handleCategoryChange = (option: any) => {
    // category.onChange(option.value);
    // return category.onChange(option.value);
  };
  return (
    <FormProvider {...methods}>
      <p>{step}/ 5</p>
      <form onSubmit={handleSubmit(submitForm)}>
        {(() => {
          switch (step) {
            case 1:
              return (
                <BasicDetails
                  // register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 2:
              return (
                <AddressMap
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 3:
              return (
                <Image
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                  imageOutput={image}
                />
              );
            case 4:
              return (
                <WebsiteDetails
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 5:
              return (
                <Submit
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );

            default:
              return (
                <BasicDetails
                  // register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  handleCategoryChange={handleCategoryChange}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
          }
        })()}
        {/* <button type="submit">submit</button> */}
      </form>
    </FormProvider>
  );
};

export default ComponentSwitch;

// onSubmit={handleSubmit((fm) => console.log("FM => ", fm))}
// const conver2Base64 = (files: any) => {
//   const reader = new FileReader();
//   reader.onloadend = () => {
//     setImage(reader.result?.toString());
//   };
//   reader.readAsDataURL(files);
// };
