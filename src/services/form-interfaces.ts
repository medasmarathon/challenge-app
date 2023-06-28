export interface FieldOption {
  name: string,
  value: number
}

export interface Field {
  id: number,
  name: string,
  type: "text" | "date" | "number" | "select",
  options?: FieldOption[] 
}

export interface FormConfig {
  id: number,
  formName: string,
  fields: Field[]
}


export interface FieldResult {
  fieldId: number,
  value: number | string
}
export interface FormData {
  dateSaved: Date,
  data: FieldResult[]
}