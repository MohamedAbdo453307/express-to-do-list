const express = require("express");
const router = express.Router();
const {Task} = require("./models/Todo");
const asyncHandler = require("express-async-handler");
const data = require("./data");
/**
 * @route   POST /tasks
 * @desc    Insert all tasks to the database
 * @access  Public
 */
router.post(
  "/",
  asyncHandler(async (req, res) => {
    const tasks = await Task.insertMany(data);
    res.status(201).json({ message: "Done", tasks });
  })
);
/**
 * @route   DELETE /tasks
 * @desc    Delete all tasks from the database
 * @access  Public
 */
router.delete(
  "/",
  asyncHandler(async (req, res) => {
    await Task.deleteMany({});
    res.status(200).json({ message: "All tasks has been deleted" });
  })
);
module.exports = router;
