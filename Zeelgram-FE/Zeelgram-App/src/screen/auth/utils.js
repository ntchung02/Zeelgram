import * as yup from "yup";

export const loginInitialValue = {
  username: "",
  password: "",
};

export const loginValidationSchema = yup.object().shape({
  username: yup.string().required("Username is required"),
  password: yup.string().required("Password is required"),
});

export const signupInitialValue = {
  username: "",
  name: "",
  email: "",
  password: "",
};

export const signupValidationSchema = yup.object().shape({
  username: yup
    .string()
    .min(3, ({ min }) => `${"username must be"} ${min} ${"character"}`)
    .required("Username is required"),
  name: yup
    .string()
    .min(3, ({ min }) => `${"name  must be"} ${min} ${"character"}`)
    .required("Name is required"),
  email: yup
    .string()
    .min(3, ({ min }) => `${"email must be"} ${min} ${"character"}`)
    .required("Email is required")
    .matches(/^[^\s@]+@[^\s@]+\.[^\s@]+$/, "email should be valid"),
  password: yup
    .string()
    .min(6, ({ min }) => `${"password must be"} ${min} ${"character"}`)
    .required("Password is required"),
});

// export const signupValidationSchema = yup.object().shape({
//     number: yup
//       .string()
//       .min(
//         10,
//         ({min}) =>
//           `${'Mobile number must be'} ${min} ${'character'}`,
//       )
//       .required('Mobile Number is required')
//       .matches(/^[789]\d{9}$/, 'Mobile number should be start from 7,8,9'),
//   });
