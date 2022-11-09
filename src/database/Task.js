//Cambiar según la base de datos que tengamos:
const DB = require("./dbTask.json");

//const { saveToDatabase } = require("./utils");


const getAllTasks = (filterParams) => {
  try {
    let tasks = DB.tasks;
    if (filterParams.name) {
      return DB.tasks.filter((task) =>
        task.name.toLowerCase().includes(filterParams.name)
      );
    }
    return tasks;
  } catch (error) {
    throw { status: 500, message: error };
  }
};

const getOneTask = (taskId) => {
  try {
    const task = DB.tasks.find((task) => task.id === taskId);

    if (!task) {
      throw {
        status: 400,
        message: `Can't find task with the id '${taskId}'`,
      };
    }

    return task;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const createNewTask = (newTask) => {
  try {
    const isAlreadyAdded =
      DB.workouts.findIndex((task) => task.name === newTask.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Task with the name '${newTask.name}' already exists`,
      };
    }

    DB.tasks.push(newTask);
    saveToDatabase(DB);

    return newTask;
  } catch (error) {
    throw { status: 500, message: error?.message || error };
  }
};

const updateOneTask = (taskId, changes) => {
  try {
    const isAlreadyAdded =
      DB.tasks.findIndex((task) => task.name === changes.name) > -1;

    if (isAlreadyAdded) {
      throw {
        status: 400,
        message: `Task with the name '${changes.name}' already exists`,
      };
    }

    const indexForUpdate = DB.tasks.findIndex(
      (task) => task.id === taskId
    );

    if (indexForUpdate === -1) {
      throw {
        status: 400,
        message: `Can't find task with the id '${taskId}'`,
      };
    }

    const updatedTask = {
      ...DB.tasks[indexForUpdate],
      ...changes,
      updatedAt: new Date().toLocaleString("en-US", { timeZone: "UTC" }),
    };

    DB.tasks[indexForUpdate] = updatedTask;
    saveToDatabase(DB);

    return updatedTask;
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

const deleteOneTask = (taskId) => {
  try {
    const indexForDeletion = DB.tasks.findIndex(
      (task) => task.id === taskId
    );
    if (indexForDeletion === -1) {
      throw {
        status: 400,
        message: `Can't find task with the id '${taskId}'`,
      };
    }
    DB.tasks.splice(indexForDeletion, 1);
    saveToDatabase(DB);
  } catch (error) {
    throw { status: error?.status || 500, message: error?.message || error };
  }
};

module.exports = {
  getAllTasks,
  getOneTask,
  createNewTask,
  updateOneTask,
  deleteOneTask
};