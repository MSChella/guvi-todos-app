import React, { useState } from 'react'
import ToDoCard from '../ToDoCard/ToDoCard'

const ToDoTask = () => {

    const [tododata, setTodoData] = useState([]);



    return <>
        <header>
            <div className='todotask_page' id='todotask-page'>
                <h1>My todo</h1>
                <input type='text' id='task_name'></input>
                <input type='text' id='description'></input>
                <button onClick={ToDoCard}>Add ToDo</button>
            </div>
        </header>

        <div>

        </div>



    </>
}

export default ToDoTask
