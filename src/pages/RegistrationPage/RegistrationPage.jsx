import * as Yup from "yup";

import UserForm from "../../components/UserForm/UserForm";

export default function RegistrationPage() {
  const FeedbackRegisterSchema = Yup.object().shape({
    name: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Must be a valid email!").required("Required"),
    password: Yup.string()
      .min(5, "Too short")
      .max(10, "Too long")
      .required("Required"),
  });

  const formRegisterConfig = [
    {
      name: "name",
      type: "text",
    },
    {
      name: "email",
      type: "email",
    },
    {
      name: "password",
      type: "password",
    },
  ];

  const initialRegisterValues = { name: "", email: "", password: "" };

  return (
    <UserForm
      formConfig={formRegisterConfig}
      initialValues={initialRegisterValues}
      FeedbackSchema={FeedbackRegisterSchema}
    />
  );
}
