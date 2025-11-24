const { Task } = require("./models/Todo");
const asyncHandler = require("express-async-handler");
const data = require("./data");
const connectDB = require("./config/db");
connectDB();
/**
 * @desc    Insert all tasks to the database
 * @access  Public
 */
const importAllTasks = async function () {
  try {
    await Task.insertMany(data);
    console.log("All Tasks Is Imported ..");
  } catch (error) {
    console.log(error.message);
  }
};

/**
 * @desc    Delete all tasks from the database
 * @access  Public
 */
const deleteAllTask = async function () {
  try {
    await Task.deleteMany({});
    console.log("All tasks has been deleted");
  } catch (error) {
    console.log(error.message);
  }
};

if (process.argv[2] === "-import") {
  importAllTasks();
} else if (process.argv[2] === "-remove") {
  deleteAllTask();
}
