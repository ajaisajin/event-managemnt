import express, { Request, Response } from "express";
import { register } from "../controllers/userController.ts";

const router = express.Router();

router.post("/register", register);

export default router;
