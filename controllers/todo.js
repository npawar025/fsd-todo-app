import ToDoModel from "../models/todoModel.js";

//get all do from database
const getToDo = async (req, res) => {
  try {
    const todo = await ToDoModel.find();
    res.status(200).send(todo);
  } catch (error) {
    res.status(500).send("An error occurred while fetching todos.");
  }
};

//create new in to data base
const saveToDo = async (req, res) => {
  try {
    const { text } = req.body;

    const createdTodo = await ToDoModel.create({ text });

    // console.log("Added Successfully...");
    // console.log(createdTodo);

    res.status(201).send(createdTodo);
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while creating the todo.");
  }
};

//update the existing todo
const updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;

    await ToDoModel.findByIdAndUpdate(_id, { text });

    res.status(200).send("Updated Successfully...");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while updating the todo.");
  }
};

//delete the todo
const deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;

    // console.log("id ---> ", _id);

    await ToDoModel.findByIdAndDelete(_id);

    res.status(200).send("Deleted Successfully...");
  } catch (error) {
    console.error(error);
    res.status(500).send("An error occurred while deleting the todo.");
  }
};


export { getToDo, saveToDo, updateToDo, deleteToDo };
