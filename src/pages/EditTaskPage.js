import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { getTaskById, updateTask } from "../services/api";
import TaskForm from "../components/TaskForm";

const EditTaskPage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [task, setTask] = useState(null);

  useEffect(() => {
    const fetchTask = async () => {
      const data = await getTaskById(id);
      setTask(data);
    };
    fetchTask();
  }, [id]);

  const handleUpdate = async (updatedTask) => {
    await updateTask(id, updatedTask);
    navigate("/");
  };

  if (!task) return <p>Loading...</p>;

  return (
    <div>
      <h1>Edit Task</h1>
      <TaskForm initialValues={task} onSubmit={handleUpdate} />
    </div>
  );
};

export default EditTaskPage;
