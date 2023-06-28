import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  console.log("Hello Form");
  res.status(200).json({ status: 'Form submitted' });
}