import { IField } from "@/interfaces/form-interfaces";
import DateFieldInput from "./date-field-input";
import NumberFieldInput from "./number-field-input";
import TextFieldInput from "./text-field-input";
import SelectFieldInput from "./select-field-input";

export default function FieldInput(props: IField) {
  switch (props.type) {
    case "date":
      return (<DateFieldInput {...props}></DateFieldInput>);
    case "number":
      return (<NumberFieldInput {...props}></NumberFieldInput>);
    case "text":
      return (<TextFieldInput {...props}></TextFieldInput>);
    case "select":
      return (<SelectFieldInput {...props}></SelectFieldInput>);
  }
}