import dotenv from "dotenv";
import express, { Application } from "express";

import testRouter from "./routes";

dotenv.config();

const app: Application = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/api", testRouter);

const port = process.env.PORT || 5000;

app.listen(process.env.PORT, () => {
  console.log(`Server running on port ${port}`);
});
