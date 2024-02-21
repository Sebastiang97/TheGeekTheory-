import { InputFields } from "@/Models/InputFields";

export const inputAdminFields:InputFields[] =[
    {
        type: "input",
        name: "name",
        placeholder: "Nombre",
        label: "Nombre Producto",
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
        name: "price",
        placeholder: "precio",
        label: "Precio",
        value: "",
        validations: [
            {
                type: "required"
            }
        ]
    }
]
