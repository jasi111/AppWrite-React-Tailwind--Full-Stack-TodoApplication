const express = require("express")
const router = express.Router();

const {home , createTodo, getTodos, editTodo, deleteTodo, getTodosByDate} = require("../controllers/todoControllers")

router.get("/",home)
router.post("/createTodo", createTodo)
router.get("/getTodos", getTodos)
router.put("/editTodo/:id", editTodo)
router.delete("/deleteTodo/:id", deleteTodo)
router.get("/getbydate/:date", getTodosByDate)





module.exports = router;
