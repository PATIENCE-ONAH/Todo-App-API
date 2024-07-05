const { BadRequest } = require("../errorHandler/error");
const Todo = require("../model/todo-model");

class TodoController{
    createTodo = async (req, res, next) => {
       try{
        const payload = req.body;

        const todo = new Todo(payload);
        await todo.save();
        res.status(201).json({ success: true, todo });
       } catch(error){
        next(error)
       }
    };

    getAllTodos = async (req, res, next) => {
        try{
            const todos = await Todo.find();
            res.status(200).json({
                message: "Todos retrieved successfully",
                success: true,
                todos,
              });
        } catch(error){
            next(error)
        }
    };

    getTodo = async (req, res, next) => {
        try{
            const todoId = req.params.id;

            const todo = await Todo.findById(todoId);
            if (!todo){
                throw new BadRequest('Todo not found')
            }
            res.status(200).json({
                message: "Todo retrieved successfully",
                success: true,
                todo,
              });
        } catch(error){
            next(error)
        }
    };

   updateTodo = async (req, res, next) => {
        try{
            const todoId = req.params.id;
            const payload = req.body;
    
            const updatedTodo = await Todo.findByIdAndUpdate(
                todoId, 
                payload, 
                { new: true, runValidators: true }
            );
            if (!updatedTodo){
                throw new BadRequest('Todo not found')
            }
            res.status(200).json({
                message: "Todo updated successfully",
                success: true,
                updatedTodo,
              });
        } catch(error){
            next(error)
        }
    };

    deleteTodo = async (req, res, next) => {
        try{
            const todoId = req.params.id;
            const deletedTodo = await Todo.findByIdAndDelete(todoId);
            res.status(200).json({
                message: "Todo deleted successfully",
                success: true,
                deletedTodo,
              });
        } catch(error){
            next(error)
        }
    };

}

module.exports = TodoController 