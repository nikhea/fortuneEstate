import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface AddressMap {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
}
const style = {
  errors: `block `,
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
  buttonContainer: `flex justify-between items-center`,
};
const AddressMap: FC<AddressMap> = ({
  register,
  nextStep,
  prevStep,
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
      {/* <h1>AddressMap</h1> */}
      <span>
        <h1 className={style.inputTitle}>country</h1>

        <Input
          type="text"
          name=" country"
          placeholder="country*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("country", { required: true })}
        />
        <p className={style.errors}>
          {errors.country?.message && <p>{errors.country?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>street</h1>

        <Input
          type="text"
          name="street"
          placeholder="street*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("street", { required: true })}
        />
        <p className={style.errors}>
          {errors.street?.message && <p>{errors.street?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>city</h1>

        <Input
          type="text"
          name="city"
          placeholder="city*"
          inputFull
          required
          isWhiteBg
          rounded
          errors={errors}
          inputRef={register("city", { required: true })}
        />
        <p className={style.errors}>
          {errors.city?.message && <p>{errors.city?.message}</p>}
        </p>
      </span>
      <div className={style.buttonContainer}>
        <Button rounded primary Color="#8392A5" onClick={previous}>
          Pre
        </Button>
        <Button rounded primary Color="#8392A5" onClick={continues}>
          Continue
        </Button>
      </div>
    </div>
  );
};

export default AddressMap;
