import { useState, useEffect, FC } from "react";
import { FormData } from "./formInterface";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { uploadSchema } from "./uploadSchema";
import BasicDetails from "./form/BasicDetails";
import AddressMap from "./form/AddressMap";
import Image from "./form/image";
import WebsiteDetails from "./form/websiteDetails";
import Submit from "./form/Submit";
import FormHeader from "./form/FormHeader";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./notify";
import { createProperties } from "../../../../../services/api/agent";
import { queryKeys } from "../../../../../utils/queryKey";

const ComponentSwitch: FC = () => {
  const queryClient = useQueryClient();
  const { mutateAsync, status } = useMutation(createProperties, {
    onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries(queryKeys.properties);
    },
  });
  console.log("status", status);
  const [image, setImage] = useState("");
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState([
    "basic details",
    "address map",
    "images upload",
    "website details",
    // "features",
    "submit",
  ]);
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
    handleSubmit,
    watch,
    reset,
    setValue,
    formState: { errors },
  } = methods;
  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });
  let WatchErrors = watch();
  const addProperties = async (formData: any) => {
    await mutateAsync(formData);
  };

  const submitForm = (formData: any) => {
    if (formData) {
      // console.log("submitForm DATA main => ", formData);
      // addProperties(formData);
      // reset();
      // setStep(0);
    }
    notify(WatchErrors);
  };
  if (status === "success") {
    toast.success("Property Created Successfully");
  }
  if (status === "loading") {
    toast.warning("submmiting");
  }

  return (
    <FormProvider {...methods}>
      <FormHeader
        step={step}
        setStep={setStep}
        stepTitle={title}
        setStepTitle={setTitle}
      />

      <form onSubmit={handleSubmit(submitForm)}>
        {(() => {
          switch (step) {
            case 0:
              return (
                <BasicDetails
                  // register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 1:
              return (
                <AddressMap
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 2:
              return (
                <Image
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                  imageOutput={image}
                />
              );
            case 3:
              return (
                <WebsiteDetails
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
                  SubmitForm={submitForm}
                  step={step}
                  setStep={setStep}
                  errors={errors}
                />
              );
            case 4:
              return (
                <Submit
                  register={register}
                  nextStep={nextStep}
                  prevStep={prevStep}
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
      <ToastContainer />
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
