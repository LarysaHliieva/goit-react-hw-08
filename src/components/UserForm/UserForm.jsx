import { Formik, Form, Field, ErrorMessage } from "formik";

import Button from "../Button/Button";

import styles from "./UserForm.module.css";

export default function UserForm({
  formConfig,
  initialValues,
  FeedbackSchema,
  textButton,
}) {
  const handleSubmit = (values, action) => {
    console.log(values);
  };

  return (
    <Formik
      initialValues={initialValues}
      onSubmit={handleSubmit}
      validationSchema={FeedbackSchema}
    >
      {({ submitCount }) => (
        <Form>
          {formConfig.map(({ name, type }) => (
            <div key={name} className={styles.inputWrap}>
              <Field
                type={type}
                name={name}
                className={styles.input}
                placeholder={name}
              />
              {submitCount > 0 && (
                <ErrorMessage
                  name={name}
                  component="div"
                  style={{ color: "red" }}
                />
              )}
            </div>
          ))}

          <Button type="submit" text={textButton} className={styles.btnForm} />
        </Form>
      )}
    </Formik>
  );
}
