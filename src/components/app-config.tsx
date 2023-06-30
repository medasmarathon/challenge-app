'use client'

import { IField, IFieldResult, IFormConfig, IFormData } from "@/interfaces/form";
import { Box, Button, Container, Stack, TextField } from "@mui/material";
import GenericFieldInput, { FieldInputProps } from "./field-input/generic-field-input";
import { FormEventHandler, useEffect, useState } from "react";
import dayjs from "dayjs";
import { API } from "@/api";
import { useSnackbar } from "notistack";
import { postApi } from "@/utils/request-api";
import ConfigInput, { ConfigInputProps } from "./config-input";

export default function AppForm({ config }: { config: IFormConfig }) {

  const { enqueueSnackbar } = useSnackbar();
  const [name, setName] = useState(config.formName);
  const [configInputs, setConfigInputs] = useState<ConfigInputProps[]>([]);
  useEffect(() => {
    let presetConfig = config.fields.map(c => ({
      ...c
    } as ConfigInputProps))

    setConfigInputs(presetConfig);
  }, []);

  const setFormFieldInput = (input: ConfigInputProps) => {
    let newInputData = [...configInputs];
    newInputData[newInputData.findIndex(config => config.id == input.id)] = input;
    setConfigInputs(newInputData);
  };

  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    let request: IFormConfig = {
      id: 1,
      formName: name,
      fields: configInputs.map(c => ({
        id: c.id,
        name: c.name,
        type: c.type,
        options: c.options
      } as IField))
    };

    enqueueSnackbar("Submitting configuration...", { variant: "info" });
    let result = await postApi<never>(API.CONFIG, request);

    if (result.status === "success")
      enqueueSnackbar(result.message, { variant: "success" });
    else
      enqueueSnackbar(result.message, { variant: "error" });
  }

  if (configInputs.length == 0)
    return <Container></Container>
  else
    return (
      <Container sx={{ height: '100%' }}>
        <Box padding={2} component="form" onSubmit={submitForm}>
          <Stack spacing={2}>
            <TextField
              label="Name" variant="outlined"
              value={name}
              color="primary"
              onChange={(e) => setName(e.target.value)} />
            {
              configInputs.map(fieldConfig => (
                <ConfigInput key={fieldConfig.id} {...fieldConfig} onInputChange={setFormFieldInput}></ConfigInput>
              ))
            }
            <Button variant="outlined" type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    )
}
