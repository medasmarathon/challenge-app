'use client'

import { IFieldResult, IFormConfig, IFormData } from "@/interfaces/form";
import { Box, Button, Container, Stack } from "@mui/material";
import GenericFieldInput, { FieldInputProps } from "./field-input/generic-field-input";
import { FormEventHandler, useEffect, useState } from "react";
import dayjs from "dayjs";
import { API } from "@/api";
import { useSnackbar } from "notistack";
import { postApi } from "@/utils/request-api";

export default function AppForm({ config, data }: { config: IFormConfig, data: IFormData }) {

  const { enqueueSnackbar } = useSnackbar();
  const [inputData, setInputData] = useState<FieldInputProps[]>([]);
  useEffect(() => {
    if (!data || !config) return;
    let presetFields = data.data.map(fr => {
      let fieldConfig = config.fields.find(f => f.id == fr.fieldId);
      return {
        ...fieldConfig,
        value: fr.value
      } as FieldInputProps;
    });

    setInputData(presetFields);
  }, []);

  const setFormFieldInput = (input: FieldInputProps) => {
    let newInputData = [...inputData];
    newInputData[newInputData.findIndex(fv => fv.id == input.id)] = input;
    setInputData(newInputData);
  };

  const submitForm: FormEventHandler<HTMLFormElement> = async (e) => {
    e.preventDefault();
    let request: IFormData = {
      dateSaved: dayjs(new Date()).format("MM/DD/YYYY"),
      data: inputData.map(d => ({
        fieldId: d.id,
        value: d.value
      }) as IFieldResult)
    };

    enqueueSnackbar("Submitting form...", { variant: "info" });
    let result = await postApi<never>(API.FORM, request);

    if (result.status === "success")
      enqueueSnackbar(result.message, { variant: "success" });
    else
      enqueueSnackbar(result.message, { variant: "error" });
  }

  if (inputData.length == 0)
    return <Container></Container>
  else
    return (
      <Container sx={{ height: '100%' }}>
        <Box padding={2} component="form" onSubmit={submitForm}>
          <Stack spacing={2}>
            {
              inputData.map(fieldInput => (
                <GenericFieldInput key={fieldInput.id} {...fieldInput} onInputChange={setFormFieldInput}></GenericFieldInput>
              ))
            }
            <Button variant="outlined" type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    )
}
