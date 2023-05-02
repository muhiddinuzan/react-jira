import "./App.css";
import TaskCreate from "./components/TaskCreate";
import TaskList from "./components/TaskList";
import { useEffect, useState } from "react";
import axios from "axios";

function App() {
  const [tasks, setTasks] = useState([]);
  const createTask = async (title, content) => {
    const response = await axios.post("http://localhost:3000/tasks", {
      title,
      content,
    });
    const createdTask = [...tasks, response.data];
    setTasks(createdTask);
  };
  const fetchTasks = async () => {
    const response = await axios.get("http://localhost:3000/tasks");
    setTasks(response.data);
  };
  useEffect(() => {
    fetchTasks();
  }, []);
  const deleteTaskId = async (id) => {
    axios.delete(`http://localhost:3000/tasks/${id}`);
    const afterDeleteTask = tasks.filter((task) => {
      return task.id !== id;
    });
    setTasks(afterDeleteTask);
  };
  const editTaskbyId = async (id, Updatetitle, Updatecontent) => {
    await axios.put(`http://localhost:3000/tasks/${id}`,{
      title:Updatetitle,
      content:Updatecontent
    });
    const updatedTask = tasks.map((task) => {
      if (task.id === id) {
        return { id, title: Updatetitle, content: Updatecontent };
      } else {
        return task;
      }
    });
    setTasks(updatedTask);
  };
  return (
    <div className="App">
      <TaskCreate onCreate={createTask} />
      <h1>Tasks</h1>
      <TaskList tasks={tasks} onDelete={deleteTaskId} onUpdate={editTaskbyId} />
    </div>
  );
}

export default App;
