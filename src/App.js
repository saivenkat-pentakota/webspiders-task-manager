import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import CreateTaskPage from "./pages/CreateTaskPage";
import EditTaskPage from "./pages/EditTaskPage";
import NotFoundPage from "./pages/NotFoundPage";
import TaskDetails from "./components/TaskDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/create" element={<CreateTaskPage />} />
        <Route path="/edit/:id" element={<EditTaskPage />} />
        <Route path="*" element={<NotFoundPage />} />
        <Route path="/task/:id" element={<TaskDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
