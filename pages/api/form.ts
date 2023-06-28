import { IFormData } from "@/interfaces/form-interfaces";
import { updateFormData } from "@/services/form-service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await updateFormData(JSON.parse(req.body) as IFormData)
    return res.status(200).json({ status: 'Form submitted' });
  }
  
  res.status(405).json({ error: "Method not supported"});
}