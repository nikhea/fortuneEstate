import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface WebsiteDetailsProps {
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
const WebsiteDetails: FC<WebsiteDetailsProps> = ({
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
      <h1>Website Details</h1>
      <span>
        <Input
          type="text"
          name=" webSiteName"
          placeholder=" webSiteName*"
          inputFull
          required
          rounded
          errors={errors}
          inputRef={register("webSiteName", { required: true })}
        />
        <p className={style.errors}>
          {errors.webSiteName?.message && <p>{errors.webSiteName?.message}</p>}
        </p>
      </span>
      <span>
        <Input
          type="text"
          name="webSiteURL"
          placeholder=" webSiteURL*"
          inputFull
          required
          rounded
          errors={errors}
          inputRef={register("webSiteURL", { required: true })}
        />
        <p className={style.errors}>
          {errors.webSiteURL?.message && <p>{errors.webSiteURL?.message}</p>}
        </p>
      </span>

      <div>
        <Button onClick={continues}>Continue</Button>
        <Button onClick={previous}>Pre</Button>
      </div>
    </div>
  );
};

export default WebsiteDetails;
