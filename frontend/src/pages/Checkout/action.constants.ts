import { Actions, InputFields } from "@/Models/InputFields";

export const inputCheckoutFields:InputFields[] =[
    {
        type: "input",
        name: "name",
        placeholder: "Nombre Completo",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "input",
        name: "address",
        placeholder: "Address",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "input",
        name: "detail",
        placeholder: "Bloque, apto, n. casa",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "input",
        name: "city",
        placeholder: "Ciudad - Departamento",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "input",
        name: "email",
        placeholder: "Correo Electrónico",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "input",
        name: "phone",
        placeholder: "Teléfono",
        label: "",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
    {
        type: "checkbox",
        name: "save",
        placeholder: "",
        label: "Guarda tu información",
        value: "",
        validations: [
            {
                type: "required"
            },
            {
                type: "minLength",
                value: 2
            }
        ]
    },
]


export const actions: Actions = {
    class:"actions end",
    buttons:[
        {
            type: "submit",
            text: "Iniciar sesión"
        }
    ]
}