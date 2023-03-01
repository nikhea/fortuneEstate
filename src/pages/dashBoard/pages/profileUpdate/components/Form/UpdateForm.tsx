import { useState, useEffect, FC } from "react";
import { FormData } from "./formInterface";
import { useMutation, useQueryClient, useQuery } from "react-query";
import { useForm, FormProvider } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { updateSchema } from "./updateSchema";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {} from "../../../../../../services/api/agent";
import { queryKeys } from "../../../../../../utils/queryKey";
import { DevTool } from "@hookform/devtools";
// import { notify } from "./../../notify";
const UpdateForm = () => {
  const queryClient = useQueryClient();
  const methods = useForm<FormData>({
    resolver: yupResolver(updateSchema),
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
  const {
    mutateAsync,
    status,
    data: UserData,
  } = useMutation(, {
    onMutate: () => {},
    onSettled: () => {     
       // @ts-ignore
      // queryClient.invalidateQueries();
      queryClient.invalidateQueries("auth-user");
    
    },
  });
  return <div>UpdateForm</div>;
};

export default UpdateForm;
