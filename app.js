const express = require("express");
const app = express();
app.use(express.static("public"));
app.use(express.json());
const { notFount, errorHandler } = require("./middleware/Error");
const connectDB = require("./config/db");
connectDB();
app.use(express.urlencoded({ extended: false }));
app.use("/tasks", require("./routes/tasks"));
app.use(notFount);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("SERVER IS DONING ");
});
