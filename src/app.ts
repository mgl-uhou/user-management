import express from "express";
import cors from "cors";
import swaggerUI from "swagger-ui-express";
import apiDocs from "../docs/swagger.json";
import router from "./routes";
import dotenv from "dotenv";
dotenv.config();

const app = express();

app.use(express.json());
app.use(cors());
app.use(express.urlencoded({ extended: true }));

app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(apiDocs));
app.use(router);

export default app;
