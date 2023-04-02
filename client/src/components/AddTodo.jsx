import React, { useContext, useState } from 'react'
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';

import './Styles.css';

const AddTodo = () => {

    const navigate = useNavigate();

    const{setNewObj} = useContext(AppContext);

    const[obj , setObj ] = useState({title:"",description:""});

    const changeHandler = (event)=>{
        let {name,value} = event.target;

        setObj( (prevState)=>({
            ...prevState,
            [name]:value

        })
        )
    }

    const submitHandler = (event)=>{
        event.preventDefault();

        setNewObj(obj);
        console.log("New data obj is sent ",obj);

        setObj({title:"",description:""});
        navigate('/');


    }

  
    return (

    <div className='form-container'>
        <form onSubmit={submitHandler} className='form'>

            <label className='field'> Title: 
                <input className='input' type='text' name='title' onChange={changeHandler} value={obj.title} placeholder='To-do Title'></input>
            </label>

            <label className='field'>Desc:
                <input className='input' type='text' name='description' onChange={changeHandler} value={obj.description} placeholder='To-do Description'></input>
            </label>

            <input className='submit-bttn' type='submit'></input>

        </form>

    </div>

  )
}

export default AddTodo