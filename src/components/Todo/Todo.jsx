import React, { useState } from 'react'
import '../../styles/Todo.css'
import Container from 'react-bootstrap/esm/Container'
import Task from '../Task/Task';

const Todo = () => {
    const[todoList, setTodoList] = useState([]);
    const[newTask, setNewTask] = useState("");


    const handleChange = (event) =>{
        setNewTask(event.target.value);
    };

    const addTask = () => {
        const task = {
            id: todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
            taskName: newTask,
            completed:false,
        };
        setTodoList([...todoList, task]); //adding new value to the list
    };
    const deleteTask = (id) => {
        setTodoList(todoList.filter((task)=> task.id !== id));
    };

    const completeTask = (id) => {
        setTodoList(
            todoList.map((task) => {
                if(task.id === id){
                    return{...task, completed: true};
                } else{
                    return task;
                }
            })
        )
    }

  return (
    <Container className='todo-bg'>
    <div className='App'>
    <div className='list'>
      {todoList.map((task) => {
        return(
        <Task 
        completeTask={completeTask}
        taskName={task.taskName} 
        id={task.id} 
        completed={task.completed}
        deleteTask={deleteTask}
        
        />
        );
        })}
      </div>
      <div className="addTask">
        <input className="task-input" placeholder="Add your task.." onChange={handleChange}/>
        <button className='task-btn' onClick={addTask}>Add Task</button>
      </div>
      
      
      {/* interate through every element */}
    </div>
    </Container>
  )
}

export default Todo
