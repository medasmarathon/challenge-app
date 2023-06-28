import { IField } from "@/interfaces/form-interfaces";
import { TextField } from "@mui/material";

export default function NumberFieldInput(props: IField) {
  return (
    <TextField id="filled-number" label="Filled" variant="filled" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} />
  )
}