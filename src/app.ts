import express, { Application, Request, Response } from "express";
import userRoutes from "./routes/userRoutes.ts";

const app: Application = express();

app.use(express.json());

app.use("/api/users", userRoutes);

app.get("/", (req: Request, res: Response) => {
  res.send("Hello from the Express app");
});

export default app;
