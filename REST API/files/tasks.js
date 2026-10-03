import { Router } from "express";
import Task from "../models/Task.js";

const router = Router();

// GET all tasks
router.get("/", async (req, res) => {
  const tasks = await Task.find().sort({ _id: -1 });
  res.json(tasks);
});

// POST create a task
router.post("/", async (req, res) => {
  const task = await Task.create({ text: req.body.text });
  res.status(201).json(task);
});

// PUT update a task (e.g. toggle done, edit text)
router.put("/:id", async (req, res) => {
  const task = await Task.findByIdAndUpdate(req.params.id, req.body, { new: true });
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json(task);
});

// DELETE a task
router.delete("/:id", async (req, res) => {
  const task = await Task.findByIdAndDelete(req.params.id);
  if (!task) return res.status(404).json({ error: "Task not found" });
  res.json({ success: true });
});

export default router;
