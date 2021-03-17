import { useState } from "react";
import "./App.css";
import "./components/Header";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
function App() {
  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Lanch with friends",
      day: "1th of January",
      reminder: true,
    },
    {
      id: 2,
      text: "Going to dinner",
      day: "6th of March",
      reminder: true,
    },
    {
      id: 3,
      text: "Shopping to dinner",
      day: "7th of July",
      reminder: false,
    },
  ]);

  const addTask = (task) => {
    const id = Math.floor(Math.random() * 1000) + 1;

    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };
  const handleDelete = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const handleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };
  return (
    <div className="container">
      <Header />
      <AddTask onAdd={addTask} />
      {tasks.length > 0 ? (
        <Tasks
          tasks={tasks}
          onDelete={handleDelete}
          onToggle={handleReminder}
        />
      ) : (
        "No tasks to show"
      )}
    </div>
  );
}

export default App;
