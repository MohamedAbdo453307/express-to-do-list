const mongoose = require("mongoose");
function connectDB() {
  mongoose
    .connect(process.env.DB_URL)
    .then(() => {
      console.log("Connected To MongoDB");
    })
    .catch((error) => {
      console.log("DB Connection Error:", error.message);
    });
}

module.exports = connectDB;
