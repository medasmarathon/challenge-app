import { IField, IFieldOption } from "@/interfaces/form";
import { AddCircleOutline } from "@mui/icons-material";
import { Box, Card, Chip, MenuItem, Modal, Stack, TextField, debounce } from "@mui/material";
import { MutableRefObject, useEffect, useRef, useState } from "react";
import OptionEditor, { OptionEditorProps } from "./option-editor";

export interface ConfigInputProps extends IField {
  onInputChange: (input: ConfigInputProps) => void
}

export default function ConfigInput(props: ConfigInputProps) {
  const [name, setName] = useState<IField["name"]>(props.name);
  const [type, setType] = useState<IField["type"]>(props.type);
  const [options, setOptions] = useState<IFieldOption[] | undefined>(props.options);
  const [openOptionModal, setOpenOptionModal] = useState(false);

  console.log(type);

  const debouncedInputChange = debounce(props.onInputChange, 500);

  const addNewOption = () => {
    let newOption = { 
      name: "", 
      value: options !== undefined ? Math.max(...options.map(op => op.value)) + 1 : 1 
    };
    let newOptions = options ?? [];
    newOptions.push(newOption);
    setOptions([...newOptions]); 
    setOptionModalProps({
      ...optionModalProps,
      ...newOption,
      type: "new"
    });
    setOpenOptionModal(true);
  }
  const deleteOption = (optionValue: number) => {
    let newOptions = options!.filter(op => op.value != optionValue);
    setOptions([...newOptions]); 
  }
  const editingOption = (option: IFieldOption) => {
    setOptionModalProps({
      ...optionModalProps,
      ...option,
      type: "edit"
    });
    setOpenOptionModal(true);
  }
  const onOptionEdited = (option: OptionEditorProps) => {
    let newOptions = options!.filter(op => op.value != option.value);
    newOptions.push({ name: option.name, value: option.value } as IFieldOption);
    setOptions(newOptions.sort((a,b) => (a.value - b.value)));
  }
  const [optionModalProps, setOptionModalProps] = useState<OptionEditorProps>({
    value: (props.options == undefined) ? 0 : props.options.length,
    name: "",
    type: "new",
    onOptionChange: onOptionEdited
  });


  const closeOptionEditor = () => {
    setOpenOptionModal(false);
    setOptionModalProps({
      value: (props.options == undefined) ? 0 : props.options.length,
      name: "",
      type: "new",
      onOptionChange: onOptionEdited
    });
  }


  useEffect(() => {
    debouncedInputChange({
      ...props,
      name,
      type,
      options
    });
  }, [name, type, options]);


  return (
    <Box padding={1}>
      <Stack spacing={1}>
        <TextField
          label="Name" variant="outlined"
          value={name}
          color="primary"
          InputLabelProps={{ shrink: !!name }}
          onChange={(e) => setName(e.target.value)} />
        <TextField
          select
          label="Type"
          variant="outlined"
          color="primary"
          value={type}
          onChange={(e) => setType(e.target.value as IField["type"])}
        >
          <MenuItem value="text">
            Text
          </MenuItem>
          <MenuItem value="date">
            Date
          </MenuItem>
          <MenuItem value="number">
            Number
          </MenuItem>
          <MenuItem value="select">
            Select
          </MenuItem>
        </TextField>
        {
          (type === "select") && (
            <Card variant="outlined" sx={{ p: 2 }}>
              <Chip
                sx={{ m: 1 }}
                icon={<AddCircleOutline />}
                onClick={addNewOption}
                label="Add option"
                variant="filled"
                children={null} />
              {
                options?.map(op => (
                  <Chip 
                    sx={{ m: 1 }}
                    label={ op.value + ": " + op.name } 
                    onClick={() => editingOption(op)}
                    onDelete={() => deleteOption(op.value)}></Chip>
                ))
              }
            </Card>
          )
        }

        <Modal
          open={openOptionModal}
          onClose={closeOptionEditor}
        >
          <Box sx={{
            position: "absolute",
            top: '50%',
            left: '50%',
            transform: 'translate(-50%, -50%)',
            width: 400,
            bgcolor: 'background.paper',
            border: '2px solid #000',
            boxShadow: 24,
            p: 4,
          }} >
            <OptionEditor {...optionModalProps}></OptionEditor>
          </Box>
        </Modal>
      </Stack>
    </Box>
  )
}