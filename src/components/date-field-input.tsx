import { IField } from "@/interfaces/form-interfaces";
export interface DateFieldInputProps extends IField {
  value: Date
  onInputChange: (input: DateFieldInputProps) => void
}
export default function DateFieldInput(props: DateFieldInputProps) {
  return (
    <input></input>
  )
}