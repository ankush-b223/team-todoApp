import React, { useContext } from 'react'
import { AppContext } from '../context/AppContext'
import Card from './Card';
import Spinner from './Spinner';

import { useNavigate } from "react-router-dom";

import './Styles.css';


const Todos = () => {

  const {todos,loader} = useContext(AppContext);

  const navigate = useNavigate();

  const AddTodoClickHandler = (event)=>{
      event.preventDefault();
      navigate('/add-todo');
  }


  return (
    <div>

      <div className='cards'>

        { loader ? <Spinner></Spinner> : 
          (
            todos.map( (todo)=>{
            return <Card key={todo._id} data={todo} ></Card>
          })
        )
        }

        




      </div>

      <button className='add-bttn' onClick={AddTodoClickHandler}>Add a TODO!</button>


  </div>
  )
}

export default Todos