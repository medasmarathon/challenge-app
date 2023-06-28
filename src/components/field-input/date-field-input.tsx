import { IField } from "@/interfaces/form";
import { debounce } from "@mui/material";
import { DatePicker } from "@mui/x-date-pickers";
import dayjs, { Dayjs } from "dayjs";
import { useState } from "react";
export interface DateFieldInputProps extends IField {
  value: string
  onInputChange: (input: DateFieldInputProps) => void
}
export default function DateFieldInput(props: DateFieldInputProps) {
  const [inputValue, setInputValue] = useState(dayjs(props.value));
  const debouncedInputChange = debounce(props.onInputChange, 500);

  const setInput = (value: Dayjs | undefined | null) => {
    if (!value) return;
    setInputValue(dayjs(value));
    debouncedInputChange({
      ...props,
      value: value.format("MM/DD/YYYY")
    });
  }
  return (
    <DatePicker
      label={props.name}
      value={inputValue}
      onChange={(newValue) => setInput(newValue)} />
  )
}