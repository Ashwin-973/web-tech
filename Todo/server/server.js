const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const dotenv = require("dotenv");

const todoRoutes = require("./routes/todoRoutes");

dotenv.config();

const app = express();

const PORT = process.env.PORT || 5000;

/*
    Middleware
*/

app.use(cors());
app.use(express.json());

/*
    Routes
*/

app.use("/api/todos", todoRoutes);

/*
    Health check
*/

app.get("/", (req, res) => {
  res.json({
    message: "MERN Todo API is running",
  });
});

/*
    Connect MongoDB and start server
*/

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("MongoDB connected successfully");

    app.listen(PORT, () => {
      console.log(`Server running on http://localhost:${PORT}`);
    });
  })
  .catch((error) => {
    console.error("MongoDB connection failed:");
    console.error(error);
  });