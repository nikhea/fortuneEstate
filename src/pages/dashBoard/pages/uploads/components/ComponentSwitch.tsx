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
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { notify } from "./notify";
import { createProperties } from "../../../../../services/api/agent";
import { queryKeys } from "../../../../../utils/queryKey";
import { getAllCountry } from "../../../../../services/api/shared";
import { useParams } from "react-router-dom";
import { DevTool } from "@hookform/devtools";
const ComponentSwitch: FC = () => {
  const methods = useForm<FormData>({
    resolver: yupResolver(uploadSchema),
    mode: "onChange",
  });
  const {
    register,
    handleSubmit,
    watch,
    control,
    reset,
    setValue,
    getValues,
    formState: { errors },
  } = methods;
  const FormWatch = watch();
  // useEffect(() => {
  //   const intervalId = setInterval(() => {
  //     const getLink = async () => {
  //       watch();
  //       getValues();
  //       setValue();
  //     };

  //     getLink();
  //   }, 1000);

  //   return () => clearInterval(intervalId);
  // }, [setValue, watch]);

  const queryClient = useQueryClient();
  const { data: countries } = useQuery([queryKeys.countries], getAllCountry);

  const {
    mutateAsync,
    status,
    data: createPropertiesData,
  } = useMutation(createProperties, {
    onMutate: () => {},
    onSettled: () => {
      //invalidate cached properties query and refresh
      // @ts-ignore
      queryClient.invalidateQueries();
      queryClient.invalidateQueries(queryKeys.properties);
      // [queryKeys.properties, countryName],
    },
    onError: (_error, _hero, context) => {
      // queryClient.setQueryData("", context.previouse);
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

  // const {
  //   register,
  //   handleSubmit,
  //   watch,
  //   reset,
  //   setValue,
  //   formState: { errors },
  // } = methods;
  useFormPersist("storageKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });

  const addProperties = async (formData: any) => {
    await mutateAsync(formData);
  };

  const submitForm = async (formData: any) => {
    if (formData) {
      await addProperties(formData);
      if (status === "loading") {
        toast.warning("submmiting");
      }
      if (createPropertiesData?.status === 200) {
        setTimeout(() => {
          setStep(0);
        }, 1000);
        // reset();
        // localStorage.removeItem("propertiesImage")
        // propertyImages
      }
      // console.log(createPropertiesData?.status);
    }
    notify(FormWatch);
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
      <DevTool control={control} /> {/* set up the dev tool */}
    </FormProvider>
  );
};

export default ComponentSwitch;
