import { Formik, Form, Field, FieldArray } from "formik";

import css from "./FormSection.module.css";

const initialValues = {
  order: {
    local: {
      zona: "",
      operator: "",
      date: new Date().toLocaleString("pt-PT", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric",
        hour: "2-digit",
        minute: "2-digit",
      }),
    },

    EP: "",
    cliente: "",
    units: [
      {
        categoria: "",
        type: "",
        temper: false,
        sizeX: 0,
        sizeY: 0,
        sizeZ: "",
        quantity: 1,
        reason: "",
      },
    ],
  },
};

const FormSection = () => {
  return (
    <Formik
      initialValues={initialValues}
      onSubmit={(values) => console.log(values)}
    >
      {({ values }) => (
        <Form className={css.form}>
          <div className={css.wrapper}>
            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Local Info</legend>
              <label className={css.label}>
                Linha
                <Field
                  className={css.selectLocal}
                  as="select"
                  name="order.local.zona"
                >
                  <option value="" disabled>
                    --
                  </option>
                  <option value="L1">L1</option>
                  <option value="L2">L2</option>
                  <option value="L3">L3</option>
                </Field>
              </label>

              <label className={css.label}>
                Operador
                <Field className={css.inputLocal} name="order.local.operator" />
              </label>
            </fieldset>

            <fieldset className={css.fieldset}>
              <legend className={css.legend}>Encomenda</legend>
              <label className={css.label}>
                EP
                <Field
                  className={css.inputEncomenda}
                  type="text"
                  name="order.EP"
                />
              </label>

              <label className={css.label}>
                Cliente
                <Field
                  className={css.inputCliente}
                  type="text"
                  name="order.cliente"
                />
              </label>
            </fieldset>
          </div>
          <fieldset className={css.fieldsetArray}>
            <legend className={css.legend}>Vidro</legend>
            <FieldArray name="order.units">
              {({ remove, push }) => (
                <>
                  {values.order.units.map((unit, index) => (
                    <div className={css.row} key={index}>
                      <label className={css.label}>
                        Categoria
                        <Field
                          className={css.selectUnit}
                          as="select"
                          name={`order.units[${index}].categoria`}
                        >
                          <option value="" disabled>
                            --
                          </option>
                          <option value="simple">Liso</option>
                          <option value="capped">Capa</option>
                          <option value="laminated">Laminado</option>
                        </Field>
                      </label>
                      <label className={css.label}>
                        Tipo
                        <Field
                          className={css.selectUnit}
                          as="select"
                          name={`order.units[${index}].type`}
                          disabled={!unit.categoria}
                        >
                          {unit.categoria === "simple" && (
                            <>
                              <option value="" disabled>
                                --
                              </option>
                              <option value="vfc">Incolor</option>
                              <option value="vfb">Bronze</option>
                              <option value="vfg">Gris</option>
                            </>
                          )}

                          {unit.categoria === "capped" && (
                            <>
                              <option value="" disabled>
                                --
                              </option>
                              <option value="144">SKN144</option>
                              <option value="154">SKN154</option>
                              <option value="183">SKN183</option>
                            </>
                          )}

                          {unit.categoria === "laminated" && (
                            <>
                              <option value="" disabled>
                                --
                              </option>
                              <option value="lamc">Lamanado Claro</option>
                              <option value="lamopal">Opalino</option>
                              <option value="lamcapa">Lam Capa</option>
                            </>
                          )}
                        </Field>
                      </label>
                      <label className={css.label}>
                        Espressura
                        <Field
                          className={css.selectSizeZ}
                          as="select"
                          name={`order.units[${index}].sizeZ`}
                          disabled={!unit.categoria}
                        >
                          {(unit.categoria === "simple" ||
                            unit.categoria === "capped") && (
                            <>
                              <option value="" disabled>
                                --
                              </option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                              <option value="6">6</option>
                              <option value="8">8</option>
                              <option value="10">10</option>
                            </>
                          )}

                          {unit.categoria === "laminated" && (
                            <>
                              <option value="" disabled>
                                --
                              </option>
                              <option value="3.3">3.3</option>
                              <option value="4.4">4.4</option>
                              <option value="5.5">5.5</option>
                              <option value="6.6">6.6</option>
                            </>
                          )}
                        </Field>
                      </label>

                      <label className={css.label}>
                        Medida
                        <div className={css.inlineInputs}>
                          <Field
                            className={css.inputSize}
                            type="number"
                            name={`order.units[${index}].sizeX`}
                          />
                          <span className={css.multiply}>×</span>
                          <Field
                            className={css.inputSize}
                            type="number"
                            name={`order.units[${index}].sizeY`}
                          />
                        </div>
                      </label>

                      <label className={css.label} htmlFor={`temper-${index}`}>
                        Temper
                        <Field
                          className={css.checkbox}
                          id={`temper-${index}`}
                          type="checkbox"
                          name={`order.units[${index}].temper`}
                        />
                      </label>

                      <label className={css.label}>
                        Quantidade
                        <Field
                          className={css.inputQuantity}
                          type="number"
                          name={`order.units[${index}].quantity`}
                        />
                      </label>

                      <label className={css.label}>
                        Motivo{" "}
                        <Field
                          className={css.textarea}
                          type="text"
                          name={`order.units[${index}].reason`}
                        />
                      </label>

                      <button
                        className={`${css.button} ${css.buttonDelete}`}
                        type="button"
                        onClick={() => remove(index)}
                      >
                        delete
                      </button>
                    </div>
                  ))}
                  <div className={css.addWrapper}>
                    <button
                      className={`${css.button} ${css.buttonAdd}`}
                      type="button"
                      onClick={() =>
                        push({
                          categoria: "",
                          type: "",
                          temper: false,
                          sizeX: 0,
                          sizeY: 0,
                          sizeZ: "",
                          quantity: 1,
                          reason: "",
                        })
                      }
                    >
                      add
                    </button>
                  </div>
                </>
              )}
            </FieldArray>
          </fieldset>
          <button className={`${css.button} ${css.buttonSubmit}`} type="submit">
            Submit
          </button>
        </Form>
      )}
    </Formik>
  );
};

export default FormSection;
