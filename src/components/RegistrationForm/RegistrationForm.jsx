import { Field, Form, Formik } from "formik";
import css from "./RegistrationForm.module.css";
import toast from "react-hot-toast";
import { register } from "../../redux/auth/operations.js";
import { useDispatch } from "react-redux";

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
          Name
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
          <Field className={css.input} type="password" name="password" />
        </label>

        <button className={css.btn} type="submit">
          Register
        </button>
      </Form>
    </Formik>
  );
};

export default RegistrationForm;
