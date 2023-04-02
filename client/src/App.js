import { useContext, useEffect } from 'react';
import './components/Styles.css';

import NavBar from './components/NavBar';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';

import { AppContext } from './context/AppContext';
import { Route, Routes } from 'react-router-dom';
import EditTodo from './components/EditTodo';




function App() {

  const {fetchTodos,flag} = useContext(AppContext);


  useEffect( ()=>{
    fetchTodos();
  },[flag]);

  return (

    <div className="App">
      
      <NavBar></NavBar>
      <Routes>
        <Route path="/" element={<Todos></Todos>}></Route>
        <Route path='/add-todo' element={<AddTodo></AddTodo>}></Route>
        <Route path='/edit-todo/:id' element={<EditTodo></EditTodo>}></Route>
      </Routes>

    </div>
  );
}

export default App;
