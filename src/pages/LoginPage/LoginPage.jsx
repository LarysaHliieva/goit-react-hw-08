import { useDispatch } from "react-redux";

import { login } from "../../redux/auth/operations";

import * as Yup from "yup";

import UserForm from "../../components/UserForm/UserForm";

export default function LoginPage() {
  const dispatch = useDispatch();

  const loginSubmit = (values) => {
    dispatch(login(values));
  };

  const FeedbackLoginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(7, "Too short")
      .max(20, "Too long")
      .required("Required"),
  });

  const formLoginConfig = [
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
  ];

  const initialLoginValues = { email: "", password: "" };
  return (
    <UserForm
      formConfig={formLoginConfig}
      initialValues={initialLoginValues}
      FeedbackSchema={FeedbackLoginSchema}
      textButton="Log in"
      handleSubmit={loginSubmit}
    />
  );
}
