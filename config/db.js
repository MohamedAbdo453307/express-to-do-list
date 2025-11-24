const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect("mongodb://localhost/todolist")
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((error) => {
      console.log("DB Connection Error:", error);
    });
}

module.exports = connectDB;
