import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  return (
    <div>
      <Formik
        initialValues={{ name: "", role: "", password: "" }}
        // onSubmit={handleSubmit}
      >
        <Form className={css.form}>
          <label className={css.label}>
            UserName
            <Field className={css.input} type="text" name="name" />
          </label>

          <label className={css.label}>
            Role
            <Field className={css.input} as="select" name="role">
              <option value="" disabled>
                --
              </option>
              <option value="corte">Corte</option>
              <option value="duplo">Duplo</option>
              <option value="guest">Visitante</option>
            </Field>
          </label>

          <label className={css.label}>
            Palavra-passe
            <Field className={css.input} type="text" name="name" />
          </label>

          <button className={css.btn} type="submit">
            Register
          </button>
        </Form>
      </Formik>
    </div>
  );
};

export default RegistrationForm;
