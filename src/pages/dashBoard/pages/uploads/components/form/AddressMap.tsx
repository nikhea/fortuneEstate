import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface AddressMap {
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
const AddressMap: FC<AddressMap> = ({
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
      <h1>AddressMap</h1>
      <span>
        <Input
          type="text"
          name=" country"
          placeholder="country*"
          inputFull
          required
          rounded
          errors={errors}
          inputRef={register("country", { required: true })}
        />
        <p className={style.errors}>
          {errors.country?.message && <p>{errors.country?.message}</p>}
        </p>
      </span>
      <span>
        <Input
          type="text"
          name="street"
          placeholder="street*"
          inputFull
          required
          rounded
          errors={errors}
          inputRef={register("street", { required: true })}
        />
        <p className={style.errors}>
          {errors.street?.message && <p>{errors.street?.message}</p>}
        </p>
      </span>
      <span>
        <Input
          type="text"
          name="city"
          placeholder="city*"
          inputFull
          required
          rounded
          errors={errors}
          inputRef={register("city", { required: true })}
        />
        <p className={style.errors}>
          {errors.city?.message && <p>{errors.city?.message}</p>}
        </p>
      </span>
      <div>
        <Button onClick={continues}>Continue</Button>
        <Button onClick={previous}>Pre</Button>
      </div>
    </div>
  );
};

export default AddressMap;
