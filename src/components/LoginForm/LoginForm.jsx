import { Field, Form, Formik } from "formik";
import toast from "react-hot-toast";
import { useDispatch } from "react-redux";

import Button from "../Button/Button.jsx";

import { login } from "../../redux/auth/operations.js";

import css from "./LoginForm.module.css";

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = async (values, actions) => {
    if (!values.name || !values.password) {
      toast.error("Fill all fields, please");
      actions.setSubmitting(false);
      return;
    }

    try {
      await dispatch(login(values)).unwrap();
      toast.success("Logged in successfully!");
      actions.resetForm();
    } catch (error) {
      toast.error("Failed to log in." + error);
    }
  };

  return (
    <Formik initialValues={{ name: "", password: "" }} onSubmit={handleSubmit}>
      <Form className={css.form} autoComplete="off">
        <label className={css.label}>
          Nome
          <Field className={css.input} type="text" name="name" />
        </label>

        <label className={css.label}>
          Palavra passe
          <Field className={css.input} type="password" name="password" />
        </label>

        <Button>Entrar</Button>
      </Form>
    </Formik>
  );
};

export default LoginForm;
