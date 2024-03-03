import * as yup from "yup";

export const formRequestchema = yup.object().shape({
  fullName: yup.string().required("full name is required"),
  email: yup.string().email().required("email is required"),
  phoneNumber: yup.number().required("phone number is required"),
  Date: yup.date().required("date is required"),
  message: yup.string().required("message is required"),
});
