import { IFormData } from "@/interfaces/form-interfaces";
import { updateFormData } from "@/services/form-service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  await updateFormData(JSON.parse(req.body) as IFormData)
  res.status(200).json({ status: 'Form submitted' });
}