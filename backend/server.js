const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const app = express();
const PORT = process.env.port || 4000;
require("dotenv").config();
const routes = require("./routes/ToDoRouter");
app.use(express.json());
app.use(
  cors({
    origin: "http://localhost:3000",
  })
);

mongoose
  .connect(process.env.MONGODB_URI)
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

app.use(routes);

app.listen(PORT, () => {
  console.log(`Server is running on port: ${PORT}`);
});
