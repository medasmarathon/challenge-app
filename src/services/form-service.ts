import path from "path";
import { promises as fs } from 'fs';

const jsonDirectory = path.join(process.cwd(), 'json');

const getFormConfig = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/config.json', 'utf8');
  console.log(fileContents);
}

const getData = async function () {
  const fileContents = await fs.readFile(jsonDirectory + '/data.json', 'utf8');
  console.log(fileContents);
}

export { getFormConfig };