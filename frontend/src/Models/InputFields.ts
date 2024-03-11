export interface InputFields {
    type:         string
    isNumber:     boolean
    name:         string
    placeholder?: string
    label:        string
    value:        string
    validations:  Validation[]
    options?:     Option[]
}

export interface Option {
    id:    number
    label: string
}

export interface Validation {
    type:   "required" | "minLength" | "email" | "numbers"
    value?: number
}

export interface Actions {
    class: string;
    buttons: {
        type: "submit" | "reset" | "button"
        text: string;
    }[];
}