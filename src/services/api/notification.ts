import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
export const notify = (status: number, message: string) => {
  if (status === 200) {
    toast.success(message);
  } else if (status === 201) {
    toast.success(message);
  } else if (status === 400) {
    toast.error(message);
  } else {
    // toast.error(message);
  }
};
