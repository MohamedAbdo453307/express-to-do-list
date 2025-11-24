const express = require("express");
const app = express();
app.use(express.json());
const { notFount, errorHandler } = require("./middleware/Error");
const methodOverride = require("method-override");
const connectDB = require("./config/db");
app.use(methodOverride("_method"));
connectDB();
app.set("view engine", "ejs");
app.use(express.urlencoded({ extended: false }));

app.use("/tasks", require("./routes/tasks"));
app.use("/seeder", require("./seeder"));
app.use(notFount);
app.use(errorHandler);
app.listen(3000, () => {
  console.log("SERVER IS DONING ");
});
