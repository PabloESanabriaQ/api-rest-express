const express = require("express");
const router = express.Router();
const taskController = require("../../controllers/taskController");

router
  .get("/", taskController.getAllTasks)
  .get("/:taskId", taskController.getOneTask)
  .post("/", taskController.createNewTask)
  .patch("/:taskId", taskController.updateOneTask)
  .delete("/:taskId", taskController.deleteOneTask);

module.exports = router;