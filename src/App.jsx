import React, { useState } from 'react';

import './App.css';
import ToDoCard from './components/ToDoCard/ToDoCard';
import TodoApp from './components/ToDo/ToDoApp';


function App() {

  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState({ name: '', description: '' })

  const addToDo = () => {
    setTodos([...todos, newTodo]);
    setNewTodo({ name: '', description: '' })

  };


  return (
    <div className="App">
      <div className='container'>
        <div className='row rowgap'>
          <div className='col'>
            <input type='text' value={newTodo.name} onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}></input>
          </div>
          <div className='col'>
            <input type='text' value={newTodo.description} onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}></input>
          </div>
          <div className='col'>
            <button type='text' onClick={addToDo}>Add Todos</button>
          </div>
        </div>
      </div>
      <div className='grid'>
        {todos.map((newTodo, id) =>

          <ToDoCard value={newTodo} key={id} />)

        }

      </div>

    </div>

  );
}

export default App;
