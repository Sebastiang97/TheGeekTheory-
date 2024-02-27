export interface InputFields {
    type:         string
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
    type:   "required" | "minLength" | "email" 
    value?: number
}
