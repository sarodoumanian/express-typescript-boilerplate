import { Response, RequestHandler } from "express";

export const test: RequestHandler = (_, res: Response): Response => {
  return res.status(200).json({ msg: "hey" });
};
