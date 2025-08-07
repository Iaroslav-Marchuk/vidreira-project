import { Field, Form, Formik, ErrorMessage } from "formik";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations.js";

import Button from "../Button/Button.jsx";

import { useDispatch } from "react-redux";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    console.log("Submitting:", values);
    if (!values.name) {
      toast.error("Fill all fields, please");
      actions.setSubmitting(false);
      return;
    }

    try {
      await dispatch(register(values)).unwrap();
      toast.success("Registered successfully!");
      actions.resetForm();
    } catch (error) {
      toast.error("Failed to register." + error);
    }
  };

  return (
    <Formik
      initialValues={{ name: "", role: "", password: "" }}
      onSubmit={handleSubmit}
    >
      <Form className={css.form}>
        <div className={css.formGroup}>
          <Field
            className={css.formInput}
            type="text"
            name="name"
            id="name"
            placeholder=" "
          />
          <label className={css.formLabel} htmlFor="name">
            Nome
          </label>
          <ErrorMessage name="name" component="div" className={css.error} />
        </div>

        <div className={css.formGroup}>
          <Field className={css.formInput} as="select" name="role">
            <option value="" disabled>
              Escolha o seu cargo
            </option>
            <option value="corte">Corte</option>
            <option value="duplo">Duplo</option>
            <option value="guest">Visitante</option>
          </Field>
        </div>

        <div className={css.formGroup}>
          <Field
            className={css.formInput}
            type="password"
            name="password"
            id="password"
            placeholder=" "
          />
          <label className={css.formLabel} htmlFor="password">
            Palvra passe
          </label>
          <ErrorMessage name="password" component="div" className={css.error} />
        </div>

        <Button type="submit">Registar</Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
