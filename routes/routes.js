// User model

// name: String,
//   email: Number,
//   password: String,
//   birthday: Number,

import express from "express";
import { UserModel } from "../models/UserModel.js";
const userRouter = express.Router();

const app = express();

app.use(express.json());


app.get("/user/", async (req, res) => {
  try {
    console.log("Teste GET");
    const user = "Teste";
    res.send(user);
  } catch (error) {
    res.status(500).send(error);
  }
});


export { userRouter };
