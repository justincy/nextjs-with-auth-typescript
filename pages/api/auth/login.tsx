import { sampleUserData } from "../../../utils/sample-users";
import { NextApiRequest, NextApiResponse } from "next";

export default (req: NextApiRequest, res: NextApiResponse) => {
  if (req.body && req.body.username && req.body.password) {
    const { username, password } = req.body;
    const user = sampleUserData.find((u) => {
      return username === u.username && password === u.password;
    });
    if (user) {
      res.setHeader(
        "Set-Cookie",
        `session=${user.id}; Max-Age=86400; SameSite=Strict; HttpOnly`
      );
      res.status(200).json(user);
      return;
    }
  }
  res.status(400).end();
};
