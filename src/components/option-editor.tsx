import { IFieldOption } from "@/interfaces/form"
import { Stack, TextField, debounce } from "@mui/material"
import { useEffect, useState } from "react";

export interface OptionEditorProps extends IFieldOption {
  type: "new" | "edit"
  onOptionChange: (option: OptionEditorProps) => void
}

export default function OptionEditor(props: OptionEditorProps) {
  const [name, setName] = useState<string>(props.name);
  const [value, setValue] = useState<number>(props.value);
  const debouncedOptionChange = debounce(props.onOptionChange, 500);

  useEffect(() => {
    debouncedOptionChange({ ...props, name, value });
  }, [name, value]);

  return (
    <Stack spacing={1}>

      <TextField
        disabled={props.type === "edit"}
        label="Value"
        variant="outlined"
        color="primary"
        value={value}
        onChange={(e) => setValue(Number(e.target.value))}
      >
      </TextField>
      <TextField
        label="Name" variant="outlined"
        value={name}
        color="primary"
        InputLabelProps={{ shrink: !!name }}
        onChange={(e) => setName(e.target.value)} >
      </TextField>
    </Stack>
  );
}