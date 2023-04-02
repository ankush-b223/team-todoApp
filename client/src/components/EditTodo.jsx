import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate, useParams } from 'react-router-dom';

import './Styles.css';

const EditTodo = () => {

    const navigate = useNavigate();

    const {id} = useParams();

    const{setEdit} = useContext(AppContext);

    const[editObj , setEditObj ] = useState({_id:id ,title:"",description:""});

    const changeHandler = (event)=>{
        let {name,value} = event.target;

        setEditObj( (prevState)=>({
            ...prevState,
            [name]:value

        })
        )
    }

    const editSubmitHandler = (event)=>{
        event.preventDefault();

        setEdit(editObj);

        console.log("edit data obj is sent ",editObj);

        setEditObj({title:"",description:""});
        navigate('/');

    } 

  
    return (

    <div className='form-container'>
        <form onSubmit={editSubmitHandler} className='form'>

            <label className='field'> Title: 
                <input className='input' type='text' name='title' onChange={changeHandler} value={editObj.title} placeholder='To-do Title'></input>
            </label>

            <label className='field'>Desc:
                <input className='input' type='text' name='description' onChange={changeHandler} value={editObj.description} placeholder='To-do Description'></input>
            </label>

            <input className='submit-bttn' type='submit'></input>

        </form>

    </div>

  )
}

export default EditTodo;