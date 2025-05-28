import { Formik, Form, Field, FieldArray } from "formik";
import { nanoid } from "nanoid";

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
    id: `id-${nanoid()}`,
    EP: "",
    cliente: "",
    units: [
      {
        type: "",
        temper: false,
        sizeX: 0,
        sizeY: 0,
        sizeZ: 0,
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
        <Form>
          <fieldset>
            <legend>Local Info</legend>
            <label>Linha</label>
            <Field as="select" name="order.local.zona">
              <option value="" disabled>
                --
              </option>
              <option value="L1">L1</option>
              <option value="L2">L2</option>
              <option value="L3">L3</option>
            </Field>
            <label>Operador</label>
            <Field type="text" name="order.local.operator" />
          </fieldset>

          <fieldset>
            <legend>Encomenda</legend>
            <label>EP</label>
            <Field type="number" name="order.EP" />
            <label>Cliente</label>
            <Field type="text" name="order.cliente" />
          </fieldset>

          <fieldset>
            <legend>Vidro</legend>

            <FieldArray name="order.units">
              {({ insert, remove, push }) => (
                <>
                  {values.order.units.map((unit, index) => (
                    <div className="row" key={index}>
                      <div className="col">
                        <label>Tipo de Vidro</label>
                        <Field as="select" name={`order.units[${index}].type`}>
                          <option value="" disabled>
                            --
                          </option>
                          <option value="vfc">Incolor</option>
                          <option value="vfb">Bronze</option>
                          <option value="vfg">Gris</option>
                        </Field>
                        <label htmlFor={`temper-${index}`}>Temperado</label>
                        <Field
                          id={`temper-${index}`}
                          type="checkbox"
                          name={`order.units[${index}].temper`}
                        />

                        <label>x</label>
                        <Field
                          type="number"
                          name={`order.units[${index}].sizeX`}
                        />

                        <label>y</label>
                        <Field
                          type="number"
                          name={`order.units[${index}].sizeY`}
                        />

                        <label>z</label>
                        <Field as="select" name={`order.units[${index}].sizeZ`}>
                          <option value="" disabled>
                            --
                          </option>
                          <option value="4">4</option>
                          <option value="5">5</option>
                          <option value="6">6</option>
                          <option value="8">8</option>
                          <option value="10">10</option>
                        </Field>

                        <label>Quantidade</label>
                        <Field
                          type="number"
                          name={`order.units[${index}].quantity`}
                          min={1}
                        />

                        <label>Observações</label>
                        <Field
                          type="text"
                          name={`order.units[${index}].reason`}
                        />
                      </div>

                      <button type="button" onClick={() => remove(index)}>
                        delete
                      </button>
                    </div>
                  ))}
                  <button
                    type="button"
                    onClick={() =>
                      push({
                        type: "",
                        temper: false,
                        sizeX: 0,
                        sizeY: 0,
                        sizeZ: 0,
                        quantity: 1,
                        reason: "",
                      })
                    }
                  >
                    add
                  </button>
                </>
              )}
            </FieldArray>
          </fieldset>
          <button type="submit">Submit</button>
        </Form>
      )}
    </Formik>
  );
};

export default FormSection;
