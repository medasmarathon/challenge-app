import { IField } from "@/interfaces/form-interfaces";
import { TextField } from "@mui/material";
interface NumberFieldInputProps extends IField {
  value: number
}
export default function NumberFieldInput(props: NumberFieldInputProps) {
  return (
    <TextField id="filled-number" label="Filled" variant="filled" inputProps={{ inputMode: 'numeric', pattern: '[0-9]*' }} value={props.value} />
  )
}