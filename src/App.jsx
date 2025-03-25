import { useState } from 'react'
import TaskList from './Components/TaskList'
import TodoAdd from './Components/TodoAdd'
import './tailwindCompiled.css'
function App() {
  const[AllTasks,updateAllTasks] = useState([]);


  function DeleteTask(id){
    let FilteredTask  = AllTasks.filter((task) => task.id !== id);
    updateAllTasks(FilteredTask)
    console.log(FilteredTask)
  }

  return (
    <div className='bg-[#222831] h-screen w-screen flex flex-col items-center p-5 gap-5 justify-around'>
      <h1 className='text-[#EEEEEE] text-3xl h-[5%]'>Todo App</h1>
      <TodoAdd addTask={updateAllTasks}></TodoAdd>
      <TaskList taskList={AllTasks} toDelete={DeleteTask} ></TaskList>
    </div>
  )
}

export default App
