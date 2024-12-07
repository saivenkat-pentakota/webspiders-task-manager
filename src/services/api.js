import axios from "axios";

const API_BASE_URL = "http://localhost:5000/tasks";

export const getTasks = async (params = {}) => {
  const response = await axios.get(API_BASE_URL, { params });
  return response.data;
};

export const getTaskById = async (id) => {
  const response = await axios.get(`${API_BASE_URL}/${id}`);
  return response.data;
};

export const createTask = async (task) => {
  const response = await axios.post(API_BASE_URL, task);
  return response.data;
};

export const updateTask = async (id, task) => {
  const response = await axios.put(`${API_BASE_URL}/${id}`, task);
  return response.data;
};

export const deleteTask = async (id) => {
  await axios.delete(`${API_BASE_URL}/${id}`);
};
