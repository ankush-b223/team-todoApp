const todoModel = require('../models/toDo');





const getAllTasks = (req,res)=>{

    try{

        todoModel.find().then( (task)=>{
            res.status(201).json(task);
        } ).catch((error)=>{
            res.status(404).json({ message: "Tasks not found", error: error.message })
        })



    }catch(error){
        res.status(404).json({ message: "Tasks not found", error: error.message })
    }

}




const createTask = (req,res)=>{

    try{

        let data = req.body;

        todoModel.create(data).then( (dataObj)=>{
            res.status(201).json({ message:"Task added successfully",dataObj});
        } ).catch((error)=>{
            res.status(404).json({ message: "Bad Request", error: error.message })

        })



    }catch(error){
        res.status(404).json({ message: "Bad request check again" , error: error.message });
    }

}



//test this method before pushing to prod
const updateTask = (req,res)=>{

    try{

        const id = req.params.id;
        const data = req.body;

        if(!id || !data){
            res.status(401).json({message:"Missing id or incomplete body"})
        }

        console.log(id,`is the id coming to backend for updation`);
        console.log(data,`data to be put`);

        todoModel.findByIdAndUpdate(id,data,{new:true}).then( (returning) =>{
            res.json({ message: "Task updated successfully" , returning });
            console.log(`id returned ${returning._id}`);
            console.log(`object returned-> `,returning);

        }).catch((error)=>{
            res.status(404).json({ message: "Bad Request", error: error.message })

        })

        


    }catch(error){
        res.status(404).json({ message: "Bad request check again" , error: error.message });
    }


    
}




const deleteTask = (req,res)=>{

    try{

        let id = req.params.id;

        if(!id){
            res.status(401).json({message:"id not provided"})
        }

        todoModel.findByIdAndRemove(id).then( (dataObj)=>{
            res.json({message:"Task deleted successfully",dataObj});
        }).catch((error)=>{
            res.status(404).json({ message: "Bad Request", error: error.message })

        })

        

    }catch(error){
        res.status(404).json({ message: "Bad request check again" , error: error.message });
    }

}





module.exports = {
    getAllTasks,
    createTask,
    updateTask,
    deleteTask,
}
