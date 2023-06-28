'use client'

import { IField } from "@/interfaces/form-interfaces";
import { TextField } from "@mui/material";

export default function TextFieldInput(props: IField) {
  return (
    <TextField id="filled-basic" label="Filled" variant="filled" />
  )
}