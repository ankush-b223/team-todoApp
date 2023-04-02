import { createContext, useState } from "react";
import { useUpdateEffect } from 'react-use';
import { toast } from "react-toast";

import axios from "axios";



export const AppContext = createContext();



export default function AppContextProvider( {children} ){

    const [loader,setLoader] = useState(true);
    const [todos,setTodos] = useState([]);
    const [newObj,setNewObj]=useState({});
    const [flag,setFlag] = useState(false);
    const [deleteObj , setDeleteObj] = useState({_id:""});
    const [edit,setEdit] = useState({_id:"" , title:"" , description:"" });





    const fetchTodos = async() =>{

        try{
            setLoader(true);

            const response = await axios.get("http://localhost:8060/api/todo");
            let output = response.data;
            setTodos(output);
            console.log("got todos",response.data);

            setLoader(false);



        }catch(error){
            console.log(`Error in fetching todos`,error);
        }


    }   

    const postTodo = async()=>{

        try{
            setLoader(true);

            const response = await axios.post("http://localhost:8060/api/todo",newObj);
            console.log(`posting a new todo`,response.data);


            setLoader(false);
            setFlag(!flag);
            toast.success("ToDo Added!!")

        }catch(error){
            console.log(`Error in posting todo` , error);
        }


    }

    const deleteTodo = async()=>{
        try{    

            setLoader(true);

            const response = await axios.delete(`http://localhost:8060/api/todo/${deleteObj._id}`);
            console.log("deleted a todo",response.data);

            setLoader(false);

            setFlag(!flag);
            toast.success("ToDo deleted!!")



        }catch(error){
            console.log(`Error in delete call`,error);
        }
    }




    const editTodo = async()=>{

        const id = edit._id;

        const obj = {
            title:edit.title,
            description:edit.description
        }

        try{    

            setLoader(true);

            const response = await axios.put(`http://localhost:8060/api/todo/${id}`,obj);
            console.log("edited a todo",response.data);
            setFlag(!flag);
            setLoader(false);

            toast.success("ToDo edited");

        }catch(error){
            console.log(error,`error in update call`);
        }
    }

    
    
    useUpdateEffect( ()=>{
    
        postTodo();

        
    },[newObj])



    useUpdateEffect( ()=>{
        deleteTodo();
    },[deleteObj]);


    useUpdateEffect( ()=>{
        editTodo();
    },[edit])



    const values = {
        loader,
        todos,
        fetchTodos,
        setNewObj,
        newObj,
        flag,
        setFlag,
        setDeleteObj,
        setEdit
    }



    return <AppContext.Provider value={values}> {children} </AppContext.Provider>
}