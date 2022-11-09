const taskService = require("../services/taskService");

const getAllTasks = (req, res) => {
  const { mode } = req.query;
  try {
    const allTasks = taskService.getAllTasks({ mode });
    res.send({ status: "OK", data: allTasks });
  } catch (error) {
    res
      .status(error?.status || 500)
      .send({ status: "FAILED", data: { error: error?.message || error } });
  }
}

const getOneTask = (req, res) => {
    const {
      params: { taskId },
    } = req;
  
    if (!taskId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':taskId' can not be empty" },
      });
      return;
    }
  
    try {
      const task = taskService.getOneTask(taskId);
      res.send({ status: "OK", data: workout });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const createNewTask = (req, res) => {
    const { body } = req;
  
    if (
      !body.id ||
      !body.name ||
      !body.story
    ) {
      res.status(400).send({
        status: "FAILED",
        data: {
          error:
            "One of the following keys is missing or is empty in request body: 'name', 'mode', 'equipment', 'exercises', 'trainerTips'",
        },
      });
    }
  
    const newTask = {
      id: body.id,
      name: body.name,
      story: body.story
      //Faltan los que son opcionales
    };
  
    try {
      const createdTask = taskService.createNewTask(newTask);
      res.status(201).send({ status: "OK", data: createdTask });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const updateOneTask = (req, res) => {
    const {
      body,
      params: { taskId },
    } = req;
  
    if (!taskId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':taskId' can not be empty" },
      });
    }
  
    try {
      const updatedTask = taskService.updateOneTask(taskId, body);
      res.send({ status: "OK", data: updatedTask });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  const deleteOneTask= (req, res) => {
    const {
      params: { taskId },
    } = req;
  
    if (!taskId) {
      res.status(400).send({
        status: "FAILED",
        data: { error: "Parameter ':taskId' can not be empty" },
      });
    }
  
    try {
      taskService.deleteOneTask(taskId);
      res.status(204).send({ status: "OK" });
    } catch (error) {
      res
        .status(error?.status || 500)
        .send({ status: "FAILED", data: { error: error?.message || error } });
    }
  };
  
  module.exports = {
    getAllTasks,
    getOneTask,
    createNewTask,
    updateOneTask,
    deleteOneTask,
  };
  
