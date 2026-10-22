import express from "express";
import cors from "cors";
import studentRoutes from "./routes/studentRoutes.js";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

app.use("/api/students", studentRoutes);

// 404 handler for unknown routes
app.use((req, res) => {
  res.status(404).json({ message: "Route not found." });
});

// Error handler (e.g. malformed JSON -> 400, anything else -> 500)
app.use((err, req, res, next) => {
  const status = err.status || 500;
  res.status(status).json({ message: status === 500 ? "Internal server error." : err.message });
});

app.listen(PORT, () => console.log(`Server running at http://localhost:${PORT}`));
