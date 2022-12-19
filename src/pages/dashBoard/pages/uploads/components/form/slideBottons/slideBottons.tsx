import { FC } from "react";
import Button from "../../../../../../../components/UI/FormElement/Button";

const style = {
  buttonContainer: `flex justify-between items-center`,
};
interface Props {
  previous: any;
  continues: any;
}
const slideBottons: FC<Props> = ({ previous, continues }) => {
  return (
    <div className={style.buttonContainer}>
      <Button rounded primary Color="#8392A5" onClick={previous}>
        Back
      </Button>
      <Button rounded primary Color="#8392A5" onClick={continues}>
        Continue
      </Button>
    </div>
  );
};

export default slideBottons;
