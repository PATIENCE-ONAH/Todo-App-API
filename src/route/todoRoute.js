var express = require("express");
const TodoController = require("../controller/todo-controller");

var router = express.Router();

const todoController = new TodoController();

router.post("/todo", todoController.createTodo);

router.get("/", todoController.getAllTodos);

router.get("/:id", todoController.getTodo);

router.put("/:id", todoController.updateTodo);

router.delete("/:id", todoController.deleteTodo);

module.exports = router;
