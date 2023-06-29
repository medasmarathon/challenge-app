import { IFormConfig } from "@/interfaces/form";
import { updateFormConfig } from "@/services/form-service";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    await updateFormConfig(req.body as IFormConfig)
    return res.status(200).json({ status: 'Form Config updated' });
  }
  
  res.status(405).json({ error: "Method not supported"});
}