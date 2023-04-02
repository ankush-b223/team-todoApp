const mongoose = require("mongoose");

const toDoSchema = new mongoose.Schema({

    title:{
        type:"String",
        required:true,
    },

    description:{
        type:"String"
    },

})


const todoModel = mongoose.model("toDo",toDoSchema);

module.exports = todoModel;