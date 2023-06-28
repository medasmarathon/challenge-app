import { IField } from "@/interfaces/form-interfaces";
interface DateFieldInputProps extends IField {
  value: Date
}
export default function DateFieldInput(props: IField) {
  return (
    <input></input>
  )
}