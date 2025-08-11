import * as Yup from "yup";

import UserForm from "../../components/UserForm/UserForm";

export default function LoginPage() {
  const FeedbackLoginSchema = Yup.object().shape({
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(10, "Too long")
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
    />
  );
}
