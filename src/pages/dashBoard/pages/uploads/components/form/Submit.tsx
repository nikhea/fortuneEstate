import { FC } from "react";
import Input from "../../../../../../components/UI/FormElement/input/input";
import Select from "../../../../../../components/UI/FormElement/select/select";
import Button from "../../../../../../components/UI/FormElement/Button";
interface SubmiteProps {
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
const Submit: FC<SubmiteProps> = ({
  register,
  nextStep,
  prevStep,
  handleCategoryChange,
  SubmitForm,
  step,
  setStep,
  errors,
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
      <h1>Submit Step</h1>
      <Button types="submit" onClick={handleSubmitButton}>
        Submit properties
      </Button>
      <Button onClick={previous}>Pre</Button>
    </div>
  );
};

export default Submit;
