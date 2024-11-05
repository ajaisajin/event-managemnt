import { Request, Response } from "express";
import { createUserService } from "../services/userServices.ts";

export const register = async (req: Request, res: Response) => {
  try {
    const registerUser = await createUserService(req.body);
    res.status(200).json(registerUser);
  } catch (error) {
    const err = error as Error;
    res.status(500).json({ error: err.message });
  }
};
