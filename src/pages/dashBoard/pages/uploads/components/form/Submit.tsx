import { FC } from "react";
import Button from "../../../../../../components/UI/FormElement/Button";

interface SubmiteProps {
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
};
const Submit: FC<SubmiteProps> = ({
  register,
  nextStep,
  prevStep,
  SubmitForm,
  step,
  setStep,
  errors,
  // notify,
}) => {
  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmitButton = () => {
    SubmitForm();
  };
  return (
    <div>
      <div className={style.buttonContainer}>
        <Button rounded primary Color="#8392A5" onClick={previous}>
          Pre
        </Button>
        <Button
          rounded
          primary
          Color="#8392A5"
          types="submit"
          onClick={handleSubmitButton}
        >
          Save
        </Button>
      </div>
    </div>
  );
};

export default Submit;
