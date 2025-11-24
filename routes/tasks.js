const express = require("express");
const router = express.Router();
const {
  getAllTask,
  getTaskById,
  createTask,
  updatedTask,
  deleteTask,
} = require("../controller/tasks");
router.route("/").get(getAllTask).post(createTask);
router.route("/:id").get(getTaskById).put(updatedTask).delete(deleteTask);
module.exports = router;
