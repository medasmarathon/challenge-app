'use client'

import { IField } from "@/interfaces/form-interfaces";
import { TextField } from "@mui/material";

interface TextFieldInputProps extends IField {
  value: string
}

export default function TextFieldInput(props: TextFieldInputProps) {
  return (
    <TextField id="filled-basic" label="Filled" variant="filled" />
  )
}