import { IField } from "@/interfaces/form-interfaces";
import DateFieldInput, { DateFieldInputProps } from "./date-field-input";
import NumberFieldInput, { NumberFieldInputProps } from "./number-field-input";
import TextFieldInput, { TextFieldInputProps } from "./text-field-input";
import SelectFieldInput, { SelectFieldInputProps } from "./select-field-input";

export type FieldInputProps = (DateFieldInputProps | NumberFieldInputProps | TextFieldInputProps | SelectFieldInputProps);
export default function FieldInput(props: FieldInputProps) {
  switch (props.type) {
    case "date":
      return (<DateFieldInput {...(props as DateFieldInputProps)}></DateFieldInput>);
    case "number":
      return (<NumberFieldInput {...(props as NumberFieldInputProps)}></NumberFieldInput>);
    case "text":
      return (<TextFieldInput {...(props as TextFieldInputProps)}></TextFieldInput>);
    case "select":
      return (<SelectFieldInput {...(props as SelectFieldInputProps)}></SelectFieldInput>);
  }
}