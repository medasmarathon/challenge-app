'use client'

import { IField } from "@/interfaces/form";
import { TextField, debounce } from "@mui/material";
import { useState } from "react";

export interface TextFieldInputProps extends IField {
  value: string
  onInputChange: (input: TextFieldInputProps) => void
}

export default function TextFieldInput(props: TextFieldInputProps) {
  const [inputValue, setInputValue] = useState(props.value);
  const debouncedInputChange = debounce(props.onInputChange, 500);

  const setInput = (value: string) => {
    setInputValue(value);
    debouncedInputChange({
      ...props,
      value: value
    });
  }

  return (
    <TextField
      id="filled-basic"
      label={props.name} variant="outlined"
      value={inputValue}
      color="primary"
      onChange={(e) => setInput(e.target.value)} />
  )
}