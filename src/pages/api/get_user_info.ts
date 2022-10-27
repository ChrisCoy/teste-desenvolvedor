import type { NextApiRequest, NextApiResponse } from "next";

interface UserData {
  name?: string;
  address?: string;
  phone?: string;
}

export default function handler(req: NextApiRequest, res: NextApiResponse<UserData>) {
  if (req.query.userid && req.query.userid == "42") {
    return res.status(200).json({
      name: "Annette Black",
      address: "4140 Parker Rd. Allentown, New Mexico 31134",
      phone: "",
    });
  }else{
    return res.status(404);
  }
}
