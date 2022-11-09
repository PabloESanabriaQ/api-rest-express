const Task = require("../database/Task");
//const taskModel = require("../models/taskModel").default;

const getAllTasks = (filterParams) => {
  try {
    const allTasks = Task.getAllTasks(filterParams);
    return allTasks;
  } catch (error) {
    throw error;
  }
};

const getOneTask = (taskId) => {
  try {
    const task = Task.getOneTask(taskId);
    return task;
  } catch (error) {
    throw error;
  }
};

const createNewTask = (newTask) => {
  const taskToInsert = {
    ...newTask,
    id: uuid(),
    createdAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
  };
  try {
    const createdTask = Task.createNewTask(taskToInsert);
    return createdTask;
  } catch (error) {
    throw error;
  }
};

const updateOneTask = (taskId, changes) => {
  try {
    const updatedTask = Task.updateOneTask(taskId, changes);
    return updatedTask;
  } catch (error) {
    throw error;
  }
};

const deleteOneTask = (taskId) => {
  try {
    Task.deleteOneTask(taskId);
  } catch (error) {
    throw error;
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateOneTask,
  deleteOneTask,
};
