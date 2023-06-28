import path from "path";
import { promises as fs } from 'fs';
import { IFormConfig, IFormData } from "@/interfaces/form-interfaces";

const jsonDirectory = path.join(process.cwd(), 'json');

const getFormConfig = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/config.json', 'utf8');
  return JSON.parse(fileContents) as IFormConfig;
}

const getFormData = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  return JSON.parse(fileContents) as IFormData;
}

export { getFormConfig, getFormData };