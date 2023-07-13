import express from "express";
import http from "http";
import mongoose from "mongoose";
import dotenv from "dotenv";
import cors from "cors";
import bodyParser from "body-parser";
import { errorHandler as bodyErrorHandler } from "bodymen";
import api from "./src/api/index.js";
const app = express();

const server = http.createServer(app);
dotenv.config();
app.use(express.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use("", api);
app.use(bodyErrorHandler());
mongoose.set("strictQuery", true); // for avoiding the deprecation msg

mongoose.connect(
  process.env.MONGODB_URI_DEV,
  (error) => {
    if (error) console.log(error);
    console.log("database connected");
  }
);

server.listen(4000, () => {
  console.log("server start and running");
});
