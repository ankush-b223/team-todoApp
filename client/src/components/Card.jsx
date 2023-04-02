import React, { useContext } from 'react';
import { AiOutlineEdit } from "react-icons/ai";


import './Styles.css';
import { AppContext } from '../context/AppContext';
import { useNavigate } from 'react-router-dom';



const Card = ({data}) => {

  const navigate =  useNavigate();

  const {setDeleteObj} = useContext(AppContext);

  
  const clickHandler = ()=>{

    const obj = {_id:data._id};

    setDeleteObj(obj);


  }

  const editHandler = ()=>{

    let id = data._id;

    navigate(`/edit-todo/${id}`);

    
  }
  
  return (
    <div className='card'>

      <div className='edit'><AiOutlineEdit fontSize="1rem" onClick={editHandler}></AiOutlineEdit></div>

      <h3 className='card-title'>{data.title}</h3>

      <p className='card-desc'>
        {data.description}...
      </p>

      <button onClick={clickHandler} className='delete-bttn'>Delete this Todo</button>

    </div>
  )
}

export default Card;