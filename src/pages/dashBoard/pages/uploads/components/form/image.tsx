import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface ImageProps {
  register: any;
  nextStep: any;
  prevStep: any;
  handleCategoryChange: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
const style = {
  errors: `block `,
};
const Image: FC<ImageProps> = ({
  register,
  nextStep,
  prevStep,
  handleCategoryChange,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  const continues = (e: any) => {
    e.preventDefault();
    nextStep();
  };
  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };
  return (
    <div>
      <h1>Image</h1>
      <span>
        <Input
          type="file"
          name="images"
          placeholder="images*"
          inputFull
          // required
          rounded
          errors={errors}
          inputRef={register("images", { required: true })}
        />
        <p className={style.errors}>
          {errors.images?.message && <p>{errors.images?.message}</p>}
        </p>
      </span>

      <Button onClick={continues}>Continue</Button>
      <Button onClick={previous}>Pre</Button>
    </div>
  );
};

export default Image;
