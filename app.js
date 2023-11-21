import dotenv from "dotenv";
import express from "express";
import cors from "cors";
import root from "./discountRouter.js";
dotenv.config();
const port = process.env.PORT;
const app = express();
app.use(express.json());
app.use(cors());

const start = async () => {
  try {
    app.use("/api", root);
    app.listen(port, () => {
      console.log(`Server is working on PORT ${port}`);
    });
  } catch (e) {
    console.log(e.message || e);
  }
};

start();
