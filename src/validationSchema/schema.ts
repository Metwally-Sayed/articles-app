import * as yup from "yup";

export const loginSchema = yup
  .object()
  .shape({
    userName: yup.string().required(),
    password: yup
      .string()
      .min(8, "must be at least 8 characters long")
      .required(),
  })
  .required();

export const registrationSchema = yup.object().shape({
  userName: yup.string().min(3, "must be at least 3 characters").required(),
  email: yup.string().email().required(),
  password: yup
    .string()
    .min(8, "must be at least 8 characters long")
    .required(),
  passwordConfirmation: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords must match"),
});
