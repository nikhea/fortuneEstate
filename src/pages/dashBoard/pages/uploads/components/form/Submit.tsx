import { FC } from "react";
import { useNavigate } from "react-router-dom";

import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
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
};
const Submit: FC<SubmiteProps> = ({
  register,
  nextStep,
  prevStep,
  SubmitForm,
  step,
  setStep,
  errors,
}) => {
  let navigate = useNavigate();

  const previous = (e: any) => {
    e.preventDefault();
    prevStep();
  };
  const handleSubmitButton = () => {
    SubmitForm();
    // return navigate("/upload");
    // setStep(1);
  };
  return (
    <div>
      <h1>Submit Step</h1>
      <Button types="submit" onClick={handleSubmitButton}>
        Submit properties
      </Button>
      <Button onClick={previous}>Pre</Button>
    </div>
  );
};

export default Submit;
