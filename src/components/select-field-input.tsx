import { IField } from "@/interfaces/form-interfaces";
import { MenuItem, TextField, debounce } from "@mui/material";
import { useState } from "react";

export interface SelectFieldInputProps extends IField {
  value: number
  onInputChange: (input: SelectFieldInputProps) => void
}
export default function SelectFieldInput(props: SelectFieldInputProps) {
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
      id="filled-select-currency"
      select
      label={props.name}
      variant="filled"
      value={inputValue}
      onChange={(e) => setInput(Number(e.target.value))}
    >
      {props.options!.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  )
}