import "dotenv/config";
import express from "express";
import { router } from "./http/routes";
import path from "path";

const app = express();

app.use(express.json());
app.use(router);
app.use("/files", express.static(path.resolve(__dirname, "..", "uploads")));

const PORT = process.env.PORT;

app.listen(PORT, () => console.log(`App is running on ${PORT} port`));
