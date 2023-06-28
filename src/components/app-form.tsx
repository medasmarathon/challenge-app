'use client'

import { IFieldResult, IFormConfig, IFormData } from "@/interfaces/form-interfaces";
import { getFormConfig, getFormData } from "@/services/form-service";
import { Box, Button, Container, FormControl, Stack, TextField } from "@mui/material";
import FieldInput, { FieldInputProps } from "./field-input/field-input";
import { FormEventHandler, useEffect, useState } from "react";
import dayjs from "dayjs";

export default function AppForm({ config, data }: { config: IFormConfig, data: IFormData }) {

  const [inputData, setInputData] = useState<FieldInputProps[]>([]);
  useEffect(() => {
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
    let result = await fetch('/api/form', {
      method: "POST",
      body: JSON.stringify(request)
    }).then(r => r.json());
    console.log(result);
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
                <FieldInput key={fieldInput.id} {...fieldInput} onInputChange={setFormFieldInput}></FieldInput>
              ))
            }
            <Button variant="outlined" type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    )
}
