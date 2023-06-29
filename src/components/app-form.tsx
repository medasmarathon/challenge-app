'use client'

import { IFieldResult, IFormConfig, IFormData } from "@/interfaces/form";
import { Box, Button, Container, FormControl, Stack, TextField } from "@mui/material";
import GenericFieldInput, { FieldInputProps } from "./field-input/generic-field-input";
import { FormEventHandler, useEffect, useState } from "react";
import dayjs from "dayjs";
import { API } from "@/api";

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
    let result = await fetch(API.FORM, {
      method: "POST",
      headers: {
        'Accept': 'application/json, text/plain, */*',
        'Content-Type': 'application/json'
      },
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
                <GenericFieldInput key={fieldInput.id} {...fieldInput} onInputChange={setFormFieldInput}></GenericFieldInput>
              ))
            }
            <Button variant="outlined" type="submit">Submit</Button>
          </Stack>
        </Box>
      </Container>
    )
}
