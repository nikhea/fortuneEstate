import * as yup from "yup";

export const registerSchema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  role: yup.string().required(),
  password: yup.string().min(6).max(15).required(),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
});

export const SignInSchema = yup.object().shape({
  email: yup.string().email().required(),
  // password: yup.string().min(6).max(15).required(),
  password: yup
    .string()
    .min(
      8,
      "password must contain 8 or more characters with at least one of each: uppercase, lowercase, number and special"
    )
    .lowercase()
    .uppercase()
    .max(15)
    .required(),
  // .symbols()
});
const schema = yup.object().shape({
  email: yup.string().email().required(),
  username: yup.string().required(),
  firstname: yup.string().required(),
  lastname: yup.string().required(),
  role: yup.string().required(),
  // age: yup.number().required(),
  password: yup.string().min(6).max(15).required(),
  // password: yup.string().min(6).max(15).required(),
  confirmpassword: yup
    .string()
    .oneOf([yup.ref("password"), null])
    .required(),
  // usertype: yup.string().required(),
});
