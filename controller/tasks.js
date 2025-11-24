const { Task } = require("../models/Todo");
const asyncHandler = require("express-async-handler");
const { validateAddNewTask } = require("../models/Todo");
const mongoose = require("mongoose");
const getAllTask = asyncHandler(async (req, res) => {
  const tasks = await Task.find();
  if (tasks.length === 0)
    return res.status(200).json({ message: "No Tasks", tasks });
  res.status(200).json({ tasks });
});
const getTaskById = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid task ID format" });
  }
  const task = await Task.findById(id);
  if (!task)
    return res.status(404).json({ message: "The task does not exist" });
  res.status(200).json({ task });
});
const createTask = asyncHandler(async (req, res) => {
  const { error } = validateAddNewTask(req.body);
  if (error) return res.status(400).json({ message: error.details[0].message });
  const { title, completed } = req.body;
  const task = await Task.create({ title, completed });
  res
    .status(201)
    .json({ message: "The task has been added successfully", task });
});
const updatedTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid task ID format" });
  }

  const allowedUpdate = ["title", "completed"];
  const update = {};
  allowedUpdate.forEach((ele) => {
    if (req.body[ele] !== undefined) {
      update[ele] = req.body[ele];
    }
  });

  const updatedTask = await Task.findByIdAndUpdate(id, update, {
    new: true,
  });
  if (!updatedTask) {
    return res.status(404).json({ message: "The task does not exist" });
  }
  res.status(201).json({ updatedTask });
});
const deleteTask = asyncHandler(async (req, res) => {
  const { id } = req.params;
  if (!mongoose.isValidObjectId(id)) {
    return res.status(400).json({ message: "Invalid task ID format" });
  }
  const deletedTask = await Task.findByIdAndDelete(id);
  if (!deletedTask) {
    return res.status(404).json({ message: "The task does not exist" });
  }
  res.status(200).json({ message: "Deleted successfully" });
});
module.exports = {
  getAllTask,
  getTaskById,
  createTask,
  updatedTask,
  deleteTask,
};
