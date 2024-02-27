import { InputFields } from '@/Models/InputFields'
import * as Yup from 'yup'

export const RULES_TYPE = {
    MIN_LENGTH: 'minLength',
    REQUIRED: 'required',
    EMAIL: 'email'
}

export const GET_PROPS_FORMS = (formJson:InputFields[]) =>{
    const initialValues: { [key: string]: any } = {}
    const requiredFields: { [key: string]: any } = {}

    for (const input of formJson) {
        initialValues[ input.name ] = input.value

        if ( !input.validations ) continue

        let schema = Yup.string()

        for (const rule of input.validations ) {
            if ( rule.type === RULES_TYPE.REQUIRED ) {
                schema = schema.required('Este campo es requerido')
            }

            if ( rule.type === RULES_TYPE.MIN_LENGTH ) {
                schema = schema.min( (rule as any).value || 2, `Mínimo de ${ (rule as any).value || 2 } caracteres`)
            }

            if ( rule.type === RULES_TYPE.EMAIL ) {
                schema = schema.email( `Revise el formato del email`)
            }

            // ... otras reglas
        }

        requiredFields[input.name] = schema
    }

    const validationSchema = Yup.object({ ...requiredFields })
    return {
        initialValues,
        validationSchema
    }
}

