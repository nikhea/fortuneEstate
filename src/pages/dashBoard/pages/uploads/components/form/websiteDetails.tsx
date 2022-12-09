import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
import { Link } from "react-router-dom";


interface WebsiteDetailsProps {
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
  buttonContainer: `flex justify-between items-center`,
  inputTitle: `capitalize leading-4 tracking-wide my-4 ml-4`,
};
// const selectableCountries = [
//   { value: "USA", label: "United States of America" },
//   { value: "JPN", label: "Japan" },
//   { value: "ZAF", label: "South Africa" },
//   { value: "CHN", label: "China" },
// ];
const WebsiteDetails: FC<WebsiteDetailsProps> = ({
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
      {/* <h1>Website Details</h1> */}
      <span>
        <h1 className={style.inputTitle}>website name</h1>
        <Input
          type="text"
          name=" webSiteName"
          placeholder=" website name*"
          inputFull
          required
          rounded
          isWhiteBg
          errors={errors}
          inputRef={register("webSiteName", { required: true })}
        />

        <p className={style.errors}>
          {errors.webSiteName?.message && <p>{errors.webSiteName?.message}</p>}
        </p>
      </span>
      <span>
        <h1 className={style.inputTitle}>website url</h1>

        <Input
          type="text"
          name="webSiteURL"
          placeholder=" webSiteURL*"
          inputFull
          required
          rounded
          isWhiteBg
          errors={errors}
          inputRef={register("webSiteURL", { required: true })}
        />
        <p className={style.errors}>
          {errors.webSiteURL?.message && <p>{errors.webSiteURL?.message}</p>}
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

export default WebsiteDetails;
