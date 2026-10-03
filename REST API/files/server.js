import express from "express";
import mongoose from "mongoose";
import cors from "cors";
import "dotenv/config";
import taskRoutes from "./routes/tasks.js";

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/tasks", taskRoutes);

mongoose
  .connect(process.env.MONGO_URI || "mongodb://127.0.0.1:27017/taskdb")
  .then(() => {
    const PORT = process.env.PORT || 5000;
    app.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}`));
  })
  .catch((err) => console.error("MongoDB connection error:", err.message));
