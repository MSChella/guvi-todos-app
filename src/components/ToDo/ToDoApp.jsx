import React, { useState } from 'react';

const TodoApp = () => {
    const [todos, setTodos] = useState([]);
    const [newTodo, setNewTodo] = useState({ name: '', description: '', status: 'Not Completed' });
    const [filterStatus, setFilterStatus] = useState('All');

    const addTodo = () => {
        setTodos([...todos, newTodo]);
        setNewTodo({ name: '', description: '', status: 'Not Completed' });
    };

    const updateStatus = (index) => {
        const updatedTodos = [...todos];
        updatedTodos[index].status = updatedTodos[index].status === 'Not Completed' ? 'Completed' : 'Not Completed';
        setTodos(updatedTodos);
    };

    const deleteTodo = (index) => {
        const updatedTodos = [...todos];
        updatedTodos.splice(index, 1);
        setTodos(updatedTodos);
    };

    const filterTodos = () => {
        if (filterStatus === 'All') {
            return todos;
        } else {
            return todos.filter(todo => todo.status === filterStatus);
        }
    };

    return (
        <div>
            <h1>Todo App</h1>
            <div>
                <input
                    type="text"
                    placeholder="Task Name"
                    value={newTodo.name}
                    onChange={(e) => setNewTodo({ ...newTodo, name: e.target.value })}
                />
                <input
                    type="text"
                    placeholder="Description"
                    value={newTodo.description}
                    onChange={(e) => setNewTodo({ ...newTodo, description: e.target.value })}
                />
                <button onClick={addTodo}>Add Todo</button>
            </div>

            <div>
                <label>Filter Status: </label>
                <select onChange={(e) => setFilterStatus(e.target.value)}>
                    <option value="All">All</option>
                    <option value="Completed">Completed</option>
                    <option value="Not Completed">Not Completed</option>
                </select>
            </div>

            <div>
                {filterTodos().map((todo, index) => (
                    <div key={index} style={{ border: '1px solid #ccc', margin: '10px', padding: '10px' }}>
                        <h3>{todo.name}</h3>
                        <p>{todo.description}</p>
                        <p>Status: {todo.status}</p>
                        <button onClick={() => updateStatus(index)}>Toggle Status</button>
                        <button onClick={() => deleteTodo(index)}>Delete</button>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default TodoApp;
