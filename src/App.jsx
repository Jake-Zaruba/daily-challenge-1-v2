import { useState } from "react";
import "./App.css";
import Todo from "./components/Todo";

function App() {
  const [newTask, setNewTask] = useState("");
  const [taskList, setTaskList] = useState([]);

  function addTask() {
    const task = {
      id: Math.floor(Math.random() * 100),
      title: newTask,
    };
    setTaskList((prev) => [...prev, task]);
    setNewTask("");
  }

  function deleteTask(id) {
    const newArr = taskList.filter((item) => item.id !== id);
    setTaskList(newArr);
  }

  return (
    <div className="App">
      <h1>Tasks</h1>
      <input
        type="text"
        placeholder="Add Task"
        value={newTask}
        onChange={(e) => {
          setNewTask(e.target.value);
        }}
      />
      <button onClick={() => addTask()}>Add</button>

      <ul>
        {taskList.map((item) => {
          return (
            <li key={item.id}>
              {<Todo id={item.id} deleteTask={deleteTask} title={item.title} />}
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default App;
