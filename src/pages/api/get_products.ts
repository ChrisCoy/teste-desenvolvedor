// Next.js API route support: https://nextjs.org/docs/api-routes/introduction
import type { NextApiRequest, NextApiResponse } from "next";
import products from "./items.json";

export default function handler(req: NextApiRequest, res: NextApiResponse<Product[]>) {
  return res.status(200).json(products as Product[]);
}
