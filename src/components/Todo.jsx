import React from "react";

const Todo = ({ title, deleteTask, id }) => {
  return (
    <>
      <h1>{title}</h1>
      <button onClick={() => deleteTask(id)}>X</button>
    </>
  );
};

export default Todo;
