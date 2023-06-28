import { IField } from "@/interfaces/form-interfaces";
import { MenuItem, TextField } from "@mui/material";

interface SelectFieldInputProps extends IField {
  value: number
}
export default function SelectFieldInput(props: SelectFieldInputProps) {
  return (
    <TextField
      id="filled-select-currency"
      select
      label="Select"
      variant="filled"
      value={props.value}
    >
      {props.options!.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  )
}