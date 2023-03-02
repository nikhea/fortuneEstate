import ReactQuill from "react-quill";
import "../../styles/updateForm.module.scss";
import "react-quill/dist/quill.snow.css";
import { useMutation, useQueryClient, useQuery } from "react-query";
import {
  useForm,
  FormProvider,
  Controller,
  useController,
} from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import useFormPersist from "react-hook-form-persist";
import { updateSchema } from "./updateSchema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { updateProfile } from "../../../../../../services/api/shared";
import { queryKeys } from "../../../../../../utils/queryKey";
import { DevTool } from "@hookform/devtools";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
import { genderOPtions } from "../../../uploads/optionsValue";
import { ThreeDots } from "react-loader-spinner";
// import Select from "react-select";
let profile = {
  gender: "male",
  country: "nigeria",
  dateOfBirth: "2022-01-31",
  phone: 8103244768,
  isVerified: false,
  uploadCount: 0,
  _id: "63ff88304283578b2c5b905a",
  createdAt: "2023-03-01T17:15:28.482Z",
  updatedAt: "2023-03-01T17:15:28.482Z",
};
// 2022-01-31
const UpdateForm = ({ user }: any) => {
  const queryClient = useQueryClient();
  const methods = useForm<FormData>({
    resolver: yupResolver(updateSchema),
    mode: "onChange",
    defaultValues: user?.profile,
    // defaultValues: profile,
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
  // const FormWatch = watch();
  // useFormPersist("UserProfile", {
  //   watch,
  //   setValue,
  //   storage: window.localStorage,
  // });
  const {
    mutateAsync,
    status,
    isLoading,
    data: ProfileData,
  } = useMutation(updateProfile, {
    onMutate: () => {},
    onSettled: () => {
      // @ts-ignore
      queryClient.invalidateQueries(queryKeys.agents);
      queryClient.invalidateQueries("auth-user");
    },
  });
  const submitForm = async (formData: FormData) => {
    console.log(formData);
    if (formData && !isLoading) {
      await mutateAsync(formData);
    }
    // if (ProfileData?.status === 200) {
    //   reset();
    // }
  };
  const { field: genderField } = useController({
    name: "gender",
    control,
  });
  const onMessagenChange = (editorState: any) => {
    setValue("bio", editorState);
  };
  const messageContent = watch("bio");
  const handleGenderChange = (option: any) => {
    genderField.onChange(option.value);

    return genderField.onChange(option.value);
  };
  return (
    <div>
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={style.form}>
            <div className={`${style.inputContainer} mb-3 md:mb-0 relative`}>
              <label className={style.label}>gender</label>
              <div className="mb-[20px] md:mb-[0px] lg:-mt-[2%]">
                <Select
                  inputFull
                  placeholder="Select Gender"
                  options={genderOPtions}
                  field={genderOPtions.find(
                    ({ value }) => value === genderField.value
                  )}
                  handleSelectChange={handleGenderChange}
                />
              </div>
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>date of birth</label>
              <Input
                type="date"
                placeholder="Date Of Birth"
                name="dateOfBirth"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("dateOfBirth")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>country</label>
              <Input
                type="text"
                placeholder="Country"
                name="country"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("country")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}> state</label>
              <Input
                type="text"
                placeholder="State"
                name="state"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("state")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>city</label>
              <Input
                type="text"
                placeholder="City"
                name="city"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("city")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>address</label>
              <Input
                type="text"
                placeholder="Home Address"
                name="address"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("address")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Post code</label>
              <Input
                type="postcode"
                placeholder="Post Code"
                name="postcode"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("postcode")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Phone Number</label>
              <Input
                type="tel"
                placeholder="Mobile Number"
                name="phone"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("phone")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>facebook</label>
              <Input
                type="text"
                placeholder="Enter Your Facebook Link"
                name="facebook"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("facebook")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>instagram</label>
              <Input
                type="text"
                placeholder="Enter Your Instagram Link"
                name="instagram"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("instagram")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Tiwtter</label>
              <Input
                type="text"
                placeholder="Enter Your Tiwtter Link"
                name="tiwtter"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("tiwtter")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Linkedin</label>
              <Input
                type="text"
                placeholder="Enter Your Linkedin Link"
                name="linkedin"
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("linkedin")}
              />
            </div>
            <div className={style.inputContainerFull}>
              <label className={style.label}>bio</label>
              <ReactQuill
                theme="snow"
                value={messageContent}
                onChange={onMessagenChange}
                className="text-editor"
                placeholder="Your Message..."
              />
            </div>
          </div>
          <div className="text-center">
            <Button
              // center
              primary
              Color="#7f7f7f"
              uppercase
              rounded
              marginHorizontal
            >
              {/* save */}
              {isLoading ? (
                <ThreeDots
                  height="10"
                  width="80"
                  radius="9"
                  color="#FFF"
                  wrapperClass="flex text-center cursor-not-allowed"
                  ariaLabel="three-dots-loading"
                  visible={true}
                />
              ) : (
                "save"
              )}
            </Button>
          </div>
        </form>
        {/* <DevTool control={control} /> */}
      </FormProvider>
    </div>
  );
};

export default UpdateForm;

const style = {
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-bold tracking-[1.1px]`,
  titleMessage: `text-[#7f7f7f] font-light tracking-[1.1px] text-justify`,
  form: ` w-full flex flex-wrap flex-col md:flex-row justify-between   m-auto `,
  inputContainer: `flex flex-col my-1 md:w-[45%]`,
  inputContainerFull: `flex flex-col my-5 w-[99%]`,
  containerForm: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  label: `capitalize tracking-[1.1px] font-light mx-3`,
};

export interface FormData {
  bio?: string;
  city?: string;
  gender?: string;
  state?: string;
  lga?: string;
  country?: string;
  address?: string;
  phone?: string;
  facebook?: string;
  instagram?: string;
  tiwtter?: string;
  linkedin?: string;
  postcode?: number;
  dateOfBirth?: string;
}

{
  /* <Controller
control={control}
name="myDate"
render={({ field }) => (
  <DatePicker
    dateFormat="yyyy-MM-dd"
    placeholderText="Select date"
    onChange={(date) => field.onChange(date)}
    selected={field.value}
  />
)}
/> */
}
