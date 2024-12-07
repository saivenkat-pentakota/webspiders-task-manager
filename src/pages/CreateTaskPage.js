import React from "react";
import { useNavigate } from "react-router-dom";
import { createTask } from "../services/api";
import TaskForm from "../components/TaskForm";

const CreateTaskPage = () => {
  const navigate = useNavigate();

  const handleCreate = async (task) => {
    await createTask(task);
    navigate("/");
  };

  return (
    <div>
      <h1>Create Task</h1>
      <TaskForm onSubmit={handleCreate} />
    </div>
  );
};

export default CreateTaskPage;
