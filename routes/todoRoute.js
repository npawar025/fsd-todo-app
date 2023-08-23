import express from "express";
import {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
} from "../controllers/todo.js";

const router = express.Router();

router.get("/", getToDo);

router.post("/save", saveToDo);

router.patch("/update", updateToDo);

router.post("/delete", deleteToDo);


export default router;

