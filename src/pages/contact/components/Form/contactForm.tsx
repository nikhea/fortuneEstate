import { FC } from "react";
import "./textEditor.scss";
import Input from "../../../../components/UI/FormElement/input/input";
import { useForm, FormProvider, useController } from "react-hook-form";
import useFormPersist from "react-hook-form-persist";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import Select from "../../../../components/UI/FormElement/select/select";
import Button from "../../../../components/UI/FormElement/Button";
import { DevTool } from "@hookform/devtools";

const style = {
  title: ` uppercase text-[2rem] text-[#7f7f7f] font-bold tracking-[1.1px]`,
  titleMessage: `text-[#7f7f7f] font-light tracking-[1.1px] text-justify`,
  form: ` w-full flex flex-col md:flex-row flex-wrap justify-between   m-auto `,
  inputContainer: `flex flex-col my-5 md:w-[45%]`,
  inputContainerFull: `flex flex-col my-5 w-[99%]`,
  containerForm: ` w-full md:grid grid-cols-1 md:grid-cols-2   m-0 p-0 `,
  label: `capitalize tracking-[1.1px] font-light`,
};

const contactForm: FC = () => {
  const methods = useForm<FormFilterData>({
    resolver: yupResolver(uploadSchema),
  });
  const {
    register,
    handleSubmit,
    watch,
    reset,
    setValue,
    control,
    formState: { errors },
  } = methods;
  useFormPersist("contactKey", {
    watch,
    setValue,
    storage: window.localStorage,
  });
  const onMessagenChange = (editorState: any) => {
    setValue("message", editorState);
  };
  const messageContent = watch("message");

  const submitForm = (formData: any) => {
    console.log(formData, "filter Data");

    console.log(FormData);
  };
  return (
    <div>
      <h1 className={style.title}>send a message</h1>
      <p className={style.titleMessage}>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Amet mollitia
        tempora quis sequi in itaque eos voluptate voluptatem dolor, nisi
        commodi pariatur id perferendis quibusdam repellat, molestias sunt, illo
        esse? Quo labore ea aliquam assumenda debitis consequuntur consequatur
        ullam qui, inventore, laboriosam tenetur similique quasi recusandae
        dignissimos corporis, odio incidunt ducimus.
      </p>
      {/* <div className={style.containerForm}> */}
      <FormProvider {...methods}>
        <form onSubmit={handleSubmit(submitForm)}>
          <div className={style.form}>
            <div className={style.inputContainer}>
              <label className={style.label}>name</label>
              <Input
                type="text"
                placeholder="Full Name"
                name="name"
                required
                // borderBottom
                rounded
                isWhiteBg
                errors={errors}
                Width="100%"
                inputRef={register("name")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>email address</label>
              <Input
                type="text"
                placeholder="Youremail@email.com"
                name="email"
                required
                // borderBottom
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("email")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>insterested in</label>
              <Input
                type="email"
                placeholder="What are you insterested in"
                name="insterested"
                required
                // borderBottom
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("insterested")}
              />
            </div>
            <div className={style.inputContainer}>
              <label className={style.label}>Phone Number</label>
              <Input
                type="number"
                placeholder="Mobile Number"
                name="phone"
                required
                // borderBottom
                rounded
                Width="100%"
                isWhiteBg
                errors={errors}
                inputRef={register("phone")}
              />
            </div>
            <div className={style.inputContainerFull}>
              <label className={style.label}>message</label>
              <ReactQuill
                theme="snow"
                value={messageContent}
                onChange={onMessagenChange}
                className="text-editor"
                placeholder="Your Message..."
              />
            </div>
          </div>
          <Button primary Color="#7f7f7f" uppercase rounded marginHorizontal>
            submit
          </Button>
        </form>
        {/* <DevTool control={control} />  */}
      </FormProvider>
    </div>
    // </div>
  );
};

export default contactForm;

interface FormFilterData {
  name: string;
  email: string;
  message: string;
  insterested: string;
  phone: number;
}
export const uploadSchema = yup.object().shape({
  name: yup.string(),
  email: yup.string(),
  message: yup.string(),
  insterested: yup.string(),
  phone: yup.number(),
});
