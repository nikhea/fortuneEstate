import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";

import { useFormContext } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { uploadSchema } from "../uploadSchema";
interface BasicDetailsProps {
  // register: any;
  nextStep: any;
  prevStep: any;
  handleCategoryChange: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
const style = {
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
  errors: `block `,
};
const BasicDetails: FC<BasicDetailsProps> = ({
  // register,
  nextStep,
  prevStep,
  handleCategoryChange,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  const {
    register,
    // formState: { errors },
    handleSubmit,
  } = useFormContext();
  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };

  const submitForm = (data: any) => {
    console.log(handleSubmit);

    if (data) {
      console.log(data, "data");
    }
    if (!data) console.log(data, "no data");

    // reset();
  };
  return (
    <div>
      <h1>BasicDetails</h1>

      <span>
        <h1 className={style.inputTitle}>property title</h1>
        <Input
          type="text"
          name="title"
          placeholder="property title*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("title", { required: true })}
        />
        <p className={style.errors}>
          {errors.title?.message && <p>{errors.title?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>property pageTitle</h1>

        <Input
          type="text"
          name="pageTitle"
          placeholder="property pageTitle*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("pageTitle", { required: true })}
        />
        <p className={style.errors}>
          {errors.pageTitle?.message && <p>{errors.pageTitle?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>property description</h1>
        <Input
          type="text"
          name="description"
          placeholder="property description*"
          inputFull
          isWhiteBg
          required
          rounded
          errors={errors}
          inputRef={register("description", { required: true })}
        />
        <p className={style.errors}>
          {errors.description?.message && <p>{errors.description?.message}</p>}
        </p>
      </span>
      <Button onClick={continues}>Continue</Button>
    </div>
  );
};

export default BasicDetails;
