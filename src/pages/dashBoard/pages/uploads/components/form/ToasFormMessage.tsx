import { FC } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
interface ToasFormMessageProps {
  errors: any;
}
const ToasFormMessage: FC<ToasFormMessageProps> = ({ errors }) => {
  // const notify = () => {
  //   if (errors.images.message) {
  //     toast.error(errors.images.message);
  //   }
  //   if (errors.title.message) {
  //     toast.error(errors.title.message);
  //   }
  // };
  return (
    <div>
      <button onClick={notify}>Notify!</button>
      <ToastContainer />
    </div>
  );
};

export default ToasFormMessage;
