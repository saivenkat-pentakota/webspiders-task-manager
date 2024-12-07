import React, { useState, useEffect } from "react";
import { getTasks, deleteTask } from "../services/api";
import { Link } from "react-router-dom";

const TaskList = () => {
  const [tasks, setTasks] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchTasks = async () => {
    setLoading(true);
    const data = await getTasks();
    setTasks(data);
    setLoading(false);
  };

  const handleDelete = async (id) => {
    if (window.confirm("Are you sure you want to delete this task?")) {
      await deleteTask(id);
      fetchTasks();
    }
  };

  useEffect(() => {
    fetchTasks();
  }, []);

  if (loading) return <p>Loading tasks...</p>;

  return (
    <div>
      <h1>Task List</h1>
      <Link to="/create">Create New Task</Link>
      <ul>
        {tasks.map((task) => (
          <li key={task._id}>
            <h3>{task.title}</h3>
            <p>{task.description}</p>
            <p>Status: {task.status}</p>
            <p>Priority: {task.priority}</p>
            <Link to={`/edit/${task._id}`}>Edit</Link>
            <button onClick={() => handleDelete(task._id)}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
