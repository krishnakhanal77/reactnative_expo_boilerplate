import * as Yup from "yup";

export const validationSchema = Yup.object().shape({
  email: Yup.string()
    .email("Please enter valid email")
    .required("Email is required")
    .label("Email"),
  password: Yup.string()
    .matches(/\w*[a-z]\w*/, "Password must have a small letter")
    .matches(/\w*[A-Z]\w*/, "Password must have a capital letter")
    .matches(
      /\w*[!@#\$%\^\&*\)\(+=._-]\w*/,
      "Password must have a special character"
    )
    .matches(/\d/, "Password must have a number")
    .min(6, ({ min }) => `Password must be at least ${min} characters`)
    .required("Password is required")
    .label("Password"),
  // checkbox: Yup.boolean().oneOf(
  //   [true],
  //   "You must accept the terms and conditions"
  // ),
});
