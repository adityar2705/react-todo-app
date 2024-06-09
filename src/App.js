import './App.css';
import { useState } from 'react';
import Task from "./components/Task.js";

//main app component
function App() {
  const [ todoList, setTodoList ] = useState([]);
  const [ newTask, setNewTask ] = useState("");

  //function to handle the change
  const handleChange = (event) => {
    setNewTask(event.target.value);
  }

  //adding a new task
  const addTask = () => {
    const task = {
      id:todoList.length === 0 ? 1 : todoList[todoList.length - 1].id + 1,
      taskName: newTask,
      completed:false
    }
    const newTodoList = [...todoList,task];
    setTodoList(newTodoList);
  }

  //deleting a task
  const deleteTask = (todoId) => {
    //this is the way to delete a particular element in an array in JS using the filter function
    const newTodoList = todoList.filter((task) => {
      return task.id !== todoId;
    });
    setTodoList(newTodoList);
  }

  //function to complete a task
  const completeTask = (todoId) => {
    setTodoList(todoList.map((task)=>{
      if(task.id === todoId){
        return {...task, completed:true};
      }
      else{
        return task;
      }
    }));
  }

  return (
    <div className='App'>
      <div className='addTask'>
        <input onChange={handleChange}/>
        <button onClick={addTask}>Add Task</button>
      </div>
      <div className='list'>
        {todoList.map((task) => {
          return <Task taskName = {task.taskName} id = {task.id} deleteTask={deleteTask} completeTask={completeTask} completed= {task.completed}/>
        })}
      </div>
    </div>
  );
}

export default App;
