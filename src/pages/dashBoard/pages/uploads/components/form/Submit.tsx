import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
// import ToasFormMessage from "./ToasFormMessage";

interface SubmiteProps {
  register: any;
  nextStep: any;
  prevStep: any;
  SubmitForm: any;
  step: any;
  setStep: any;
  errors: any;
  // notify: () => void;
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
  let navigate = useNavigate();

  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };

  const handleSubmitButton = () => {
    SubmitForm();

    // return navigate("/upload");
    
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
{
  /* <ToasFormMessage errors={errors} /> */
}
