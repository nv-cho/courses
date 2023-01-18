import type { NextApiRequest, NextApiResponse } from "next";

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === "POST") {
    // save to db
    console.log(req.body);
    res.json({ message: "Success!" });
  }
}
