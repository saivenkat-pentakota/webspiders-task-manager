import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getTaskById } from "../services/api";

const TaskDetails = () => {
  const { id } = useParams(); // Get the task ID from the route parameters
  const [task, setTask] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchTask = async () => {
      try {
        setLoading(true);
        const data = await getTaskById(id); // Fetch the task details using the ID
        setTask(data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching task details:", error);
        setLoading(false);
      }
    };

    fetchTask();
  }, [id]);

  if (loading) return <p>Loading task details...</p>;
  if (!task) return <p>Task not found.</p>;

  return (
    <div>
      <h1>Task Details</h1>
      <h2>{task.title}</h2>
      <p><strong>Description:</strong> {task.description}</p>
      <p><strong>Status:</strong> {task.status}</p>
      <p><strong>Priority:</strong> {task.priority}</p>
      <p><strong>Due Date:</strong> {task.dueDate ? new Date(task.dueDate).toLocaleDateString() : "No due date"}</p>
    </div>
  );
};

export default TaskDetails;
