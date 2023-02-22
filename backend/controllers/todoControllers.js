const Todo = require("../models/todo.schema")

exports.home = (req, res) =>{
    res.send("Welcome to ToDo Application");
}

exports.createTodo= async (req,res) =>{
try {
    const {title, tasks} = req.body;
    const todo = await Todo.create({title,tasks});
    res.status(201).json({
        success:true,
        message:"ToDo Created Successfulyy",
        todo,
    })
} catch (error) {
    console.log(error);
}
};

exports.getTodos = async (req,res)=>{
    try{
        const todos = await Todo.find();
        res.status(200).json({
            success:true,
            todos,
        });
    }catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
      message: error.message,
        })
    }
}

// Get Todos By date
exports.getTodosByDate = async (req,res)=>{
    try{
        const todos = await Todo.findById(req.params.date, req.body);
        res.status(200).json({
            success:true,
            todos,
        });
    }catch(error){
        console.log(error);
        res.status(401).json({
            success: false,
      message: error.message,
        })
    }
}


exports.editTodo = async (req, res) => {
    try{
        const todo = await Todo.findByIdAndUpdate(req.params.id, req.body);
        res.status(200).json({
            success:true,
            message:"Todo updated Successfully",
        });
    }catch(error){
        console.log(error);
        res.status(401).json({
            success:false,
            message:error.message,
        })
    }
};

exports.deleteTodo = async (req, res) => {
    try{
        const todoId =req.params.id;
        const todo = await Todo.findByIdAndDelete(todoId);
        res.status(200).json({
            success:true,
            message:"Todo Deleted Successfully"
        });
    }catch (error){
        console.log(error)
        res.status(401).json({
            success:false,
            message:error.message,
        });
    }
}


  

