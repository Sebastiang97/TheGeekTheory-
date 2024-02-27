import { InputFields } from '@/Models/InputFields'
import { Formik, Form } from 'formik'
import { GET_PROPS_FORMS } from './Forms.constants'
import { MySelect, MyTextInput } from '.'

interface Props {
  inputFields: InputFields[]
}

export const FormDinamic = ({ inputFields,  }: Props) => {

  return (
    <div>
      <Formik
        initialValues={GET_PROPS_FORMS(inputFields).initialValues}
        validationSchema={GET_PROPS_FORMS(inputFields).validationSchema}
        onSubmit={(values) => {
          console.log(values)
        }}
      >
        {() => (
          <Form noValidate>
            {inputFields.map(({ type, name, placeholder, label, options }) => {

              if (type === 'input' || type === 'password' || type === 'email') {
                return <MyTextInput
                  key={name}
                  type={(type as any)}
                  name={name}
                  label={label}
                  placeholder={placeholder} />

              } else if (type === 'select') {
                return (
                  <MySelect
                    key={name}
                    label={label}
                    name={name}
                  >
                    <option value="">Select an option</option>
                    {
                      options?.map(({ id, label }) => (
                        <option key={id} value={id}>{label}</option>
                      ))
                    }
                  </MySelect>
                )
              }


              throw new Error(`El type: ${type}, no es soportado`);
            })}




            <button type="submit">Submit</button>

          </Form>
        )}

      </Formik>
    </div>
  )
}
