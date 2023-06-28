'use client'

import { IFormConfig, IFormData } from "@/interfaces/form-interfaces";
import { getFormConfig, getFormData } from "@/services/form-service";
import { TextField } from "@mui/material";

export default async function AppForm({ config, data }: { config: IFormConfig, data: IFormData }) {
  return (
    <TextField id="filled-basic" label="Filled" variant="filled" />
  )
}
