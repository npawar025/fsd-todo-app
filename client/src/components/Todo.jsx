import React from "react";
import { BiEdit } from "react-icons/bi";
import { AiFillDelete } from "react-icons/ai";

const Todo = ({ text, updateMode, deleteToDo }) => {
  return (
    <div className="singleTodo">
      <div className="item">{text}</div>
      <div className="icons">
        <BiEdit className="icon-1" onClick={updateMode} />
        <AiFillDelete className="icon-2" onClick={deleteToDo} />
      </div>
    </div>
  );
};

export default Todo;
