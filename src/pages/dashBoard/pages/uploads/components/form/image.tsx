import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface ImageProps {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
  imageOutput: string;
}
const style = {
  errors: `block `,
};
const Image: FC<ImageProps> = ({
  register,
  nextStep,
  prevStep,
  SubmitForm,
  step,
  setStep,
  imageOutput,
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
  const onChange = (e: any) => {
    const file = e.target.files[0];
    return file.name;
  };
  return (
    <div>
      <h1>Image</h1>
      {/* {imageOutput ? <img src={imageOutput} width="450" /> : null} */}
      <span>
        <Input
          type="file"
          name="images"
          placeholder="images*"
          inputFull
          required
          onChange={onChange}
          rounded
          errors={errors}
          inputRef={register("images", { required: true })}
          multipleFile="multiple"
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
