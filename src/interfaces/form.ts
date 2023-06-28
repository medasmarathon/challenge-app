export interface IFieldOption {
  name: string,
  value: number
}

export interface IField {
  id: number,
  name: string,
  type: "text" | "date" | "number" | "select",
  options?: IFieldOption[] 
}

export interface IFormConfig {
  id: number,
  formName: string,
  fields: IField[]
}


export interface IFieldResult {
  fieldId: number,
  value: number | string
}
export interface IFormData {
  dateSaved: string,
  data: IFieldResult[]
}