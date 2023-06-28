import { IField } from "@/interfaces/form-interfaces";
import { MenuItem, TextField } from "@mui/material";

export default function SelectFieldInput(props: IField) {
  return (
    <TextField
      id="filled-select-currency"
      select
      label="Select"
      variant="filled"
    >
      {props.options!.map((option) => (
        <MenuItem key={option.value} value={option.value}>
          {option.name}
        </MenuItem>
      ))}
    </TextField>
  )
}