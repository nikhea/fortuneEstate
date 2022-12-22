import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
import SlideBottons from "./slideBottons/slideBottons";
interface ImageProps {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
  imageOutput: string;
  addProperties: any;
}
const style = {
  errors: `block `,
  buttonContainer: `flex justify-between items-center`,
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
  addProperties,
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
    const file = e.target.files;
    console.log("lsjkhkdLZjs", file);
    // addProperties(file);
    return file;
    // return file.name;
  };
  return (
    <div>
      <h1>Image</h1>
      {/* {imageOutput ? <img src={imageOutput} width="450" /> : null} */}
      <span>
        <input
          type="file"
          name="propertyImages"
          placeholder="images*"
          onChange={onChange}
          // inputRef={register("propertyImages", { required: true })}
          multiple
        />
        <p className={style.errors}>
          {errors.images?.message && <p>{errors.images?.message}</p>}
        </p>
      </span>
      <SlideBottons previous={previous} continues={continues} />
    </div>
  );
};

export default Image;
{
  /* <Input
type="file"
name="propertyImages"
placeholder="images*"
inputFull
required
onChange={onChange}
rounded
errors={errors}
isWhiteBg
inputRef={register("propertyImages", { required: true })}
multipleFile="multiple"
/> */
}
