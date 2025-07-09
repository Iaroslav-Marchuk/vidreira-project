import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations.js";

import Button from "../Button/Button.jsx";

import { useDispatch } from "react-redux";

import css from "./RegistrationForm.module.css";

const RegistrationForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
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
        <label className={css.label}>
          Nome
          <Field className={css.input} type="text" name="name" />
        </label>

        <label className={css.label}>
          Cargo
          <Field className={css.input} as="select" name="role">
            <option value="" disabled>
              Escolha o seu cargo
            </option>
            <option value="corte">Corte</option>
            <option value="duplo">Duplo</option>
            <option value="visitante">Visitante</option>
          </Field>
        </label>

        <label className={css.label}>
          Palavra passe
          <Field className={css.input} type="password" name="password" />
        </label>

        <Button type="submit">Registar</Button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
