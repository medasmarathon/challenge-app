import { IField } from "@/interfaces/form-interfaces";
import { TextField, debounce } from "@mui/material";
import { useState } from "react";
export interface NumberFieldInputProps extends IField {
  value: number
  onInputChange: (input: NumberFieldInputProps) => void
}
export default function NumberFieldInput(props: NumberFieldInputProps) {
  let [inputValue, setInputValue] = useState(props.value);
  const debouncedInputChange = debounce(props.onInputChange, 500);

  const setInput = (value: number) => {
    setInputValue(value);
    debouncedInputChange({
      ...props,
      value: value
    });
  }

  return (
    <TextField
      id="filled-number"
      label={props.name} variant="filled"
      inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }}
      value={inputValue}
      onChange={(e) => setInput(Number(e.target.value))} />
  )
}