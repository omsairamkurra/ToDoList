const { Todo } = require("../models/TodoModel");

const getToDo = async (req, res) => {
  try {
    const todos = await Todo.find();
    res.send(todos);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch Todos" });
  }
};

const saveToDo = async (req, res) => {
  try {
    const { text } = req.body;
    if (!text) {
      return res.status(400).json({ error: "Text field is required" });
    }
    const newTodo = await Todo.create({ text });
    return res.status(201).json(newTodo);
  } catch (error) {
    return res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateToDo = async (req, res) => {
  try {
    const { _id, text } = req.body;
    await Todo.findByIdAndUpdate(_id, { text });
    res.send("Updated Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to update Todo" });
  }
};

const deleteToDo = async (req, res) => {
  try {
    const { _id } = req.body;
    await Todo.findOneAndDelete(_id);
    res.send("Deleted Successfully");
  } catch (error) {
    console.log(error);
    res.status(500).json({ error: "Failed to delete Todo" });
  }
};

module.exports = {
  getToDo,
  saveToDo,
  updateToDo,
  deleteToDo,
};
