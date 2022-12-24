import { useState, useEffect, FC } from "react";
import { FormData } from "./formInterface";
import { useMutation, useQueryClient, useQuery } from "react-query";
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
import { toast } from "react-toastify";
import { notify } from "./notify";
import { createProperties } from "../../../../../services/api/agent";
import { queryKeys } from "../../../../../utils/queryKey";
import { getAllCountry } from "../../../../../services/api/shared";

const ComponentSwitch: FC = () => {
  const queryClient = useQueryClient();
  const { data: countries } = useQuery([queryKeys.countries], getAllCountry);

  const { mutateAsync, status } = useMutation(createProperties, {
    onSuccess: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries(queryKeys.properties);
    },
  });
  const [step, setStep] = useState(0);
  const [title, setTitle] = useState([
    "basic details",
    "address map",
    "images upload",
    "website details",
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
    // console.log("submitForm DATA main => ", formData);
    if (formData) {
      console.log("submitForm DATA main => ", formData);
      addProperties(formData);
      if (status === "loading") {
        toast.warning("submmiting");
      }
      if (status === "success") {
        toast.success("Property Created Successfully");
        // reset();
        // localStorage.removeItem("propertiesImage")
        // propertyImages
        setStep(0);
      }
      
    }    notify(WatchErrors);
  };

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
                  countries={countries}
                />
              );
            case 2:
              return (
                <Image
                  nextStep={nextStep}
                  prevStep={prevStep}
                  errors={errors}
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
      </form>
    </FormProvider>
  );
};

export default ComponentSwitch;
