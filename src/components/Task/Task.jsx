import React from 'react'
import '../../styles/Todo.css'

// empty task cannot be accepted

const Task = (props) => {
    return (
        <div className='task' >
            <button style={{backgroundColor: props.completed ? "green" : "white"}} className="task-display">{props.taskName}</button>
            
            <button className="delete-btn" onClick={() => props.deleteTask(props.id)}><img
              alt=""
              src="./src/components/Task/trash.svg"
              
              width="20"
              height="20"
              
            /></button>
            <button id="complete-btn" onClick={() => props.completeTask(props.id)}>completed</button>
        </div>
        //function to return to this function
        // inside the function we are returning some sort of ui that thats 
        // gonna display based on the specific element
        );
};

export default Task
