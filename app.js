import * as dotenv from "dotenv";
import express from "express";
import connectDB from "./db/connect.js";
import router from "./routes/todoRoute.js"
import cors from 'cors'
import path from "path";
import { fileURLToPath } from "url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.static(path.resolve(__dirname, "./client/dist")));

app.use(express.json());
app.use(cors());

app.use(router);

const start = async () => {
  try {
    await connectDB(process.env.MONGO_URI);
    app.listen(port, () =>
      console.log(`Server is listening on port ${port}...`)
    );
  } catch (error) {
    console.log(error);
  }
};

start();