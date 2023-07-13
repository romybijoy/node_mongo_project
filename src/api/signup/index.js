import { Router } from "express";
import Signup, { schema } from "./model.js";
import { middleware as query } from "querymen";
import { create, index, update } from "./controller.js";
import { middleware as body } from "bodymen";

const router = new Router();
const { fullName, userName, email, password, date } = schema.tree;

router.post(
  "/",
  body({
    fullName,
    email,
    password,
    userName,
    date,
  }),
  create
);

router.get("/", 
query(
  { userName: String }
  ), 
index);

router.put("/:id",
body({
fullName,
userName,
email,
password,
date
}), 
update)

export default router;
