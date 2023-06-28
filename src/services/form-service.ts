import path from "path";
import { promises as fs } from 'fs';
import { IFormConfig, IFormData } from "@/interfaces/form";

const jsonDirectory = path.join(process.cwd(), 'json');

const getFormConfig = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/config.json', 'utf8');
  return JSON.parse(fileContents) as IFormConfig;
}

const getFormData = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  return JSON.parse(fileContents) as IFormData;
}

const updateFormData = async function (request: IFormData) {
  await fs.writeFile(jsonDirectory + '/data.json', JSON.stringify(request, null, 4))
}

export { getFormConfig, getFormData, updateFormData };