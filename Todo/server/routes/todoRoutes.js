const express = require("express");
const Todo = require("../models/Todo");

const router = express.Router();

/*
    GET /api/todos

    Fetch all todos
*/
router.get("/", async (req, res) => {
  try {
    const todos = await Todo.find().sort({ createdAt: -1 });

    res.status(200).json(todos);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to fetch todos",
    });
  }
});

/*
    POST /api/todos

    Create a new todo
*/
router.post("/", async (req, res) => {
  try {
    const { task } = req.body;

    if (!task || !task.trim()) {
      return res.status(400).json({
        message: "Task is required",
      });
    }

    const todo = await Todo.create({
      task: task.trim(),
      completed: false,
    });

    res.status(201).json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to create todo",
    });
  }
});

/*
    PATCH /api/todos/:id

    Update completed status
*/
router.patch("/:id", async (req, res) => {
  try {
    const { completed } = req.body;

    const todo = await Todo.findByIdAndUpdate(
      req.params.id,
      { completed },
      { new: true }
    );

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json(todo);
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to update todo",
    });
  }
});

/*
    DELETE /api/todos/:id

    Delete a todo
*/
router.delete("/:id", async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);

    if (!todo) {
      return res.status(404).json({
        message: "Todo not found",
      });
    }

    res.status(200).json({
      message: "Todo deleted",
      todo,
    });
  } catch (error) {
    console.error(error);

    res.status(500).json({
      message: "Failed to delete todo",
    });
  }
});

module.exports = router;