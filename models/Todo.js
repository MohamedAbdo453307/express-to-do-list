const mongoose = require("mongoose");
const { Schema } = mongoose;
const joi = require("joi");
const toDoSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
    },
    completed: {
      type: Boolean,
      default: false,
    },
  },
  { timestamps: true }
);
const Task = mongoose.model("Task", toDoSchema);
function validateAddNewTask(obj) {
  const Schema = joi.object({
    title: joi.string().trim().required(),
    completed: joi.boolean().default(false),
  });
  return Schema.validate(obj);
}
module.exports = { Task, validateAddNewTask };
