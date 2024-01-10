import React from 'react'

const ToDoCard = ({ value }) => {

    return (

        <div className='cols-md-3 row cols-xl-4 justify-content-center'>
            <div className='task_box'>
                <p>Name:{value.name}</p>
                <p>Description:{value.description}</p>
                <div className='row'>
                    <p>Status:</p>

                </div>



            </div>


        </div>



    )

}

export default ToDoCard
