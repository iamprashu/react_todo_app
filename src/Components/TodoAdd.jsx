import { useState } from 'react';
import '../tailwindCompiled.css';
import './TodoAdd.css';

function TodoAdd(props){

  const[task,updateTask] = useState('');
  const[id,updateId] = useState(1);
  const[tDate,updateTdate] = useState('');

  function TodoChangeHandler(event){
    let TodoInput = event.target.value;
    updateTask(TodoInput);
    // console.log(tDate)
  }
  
  function DateChangeHandler(event){
    let DateInput = event.target.value;
    updateTdate(DateInput);
  }
//     let formattedDate = new Date(DateInput).toLocaleDateString('en-GB'); 

  function submitTasks(){
    if(task && tDate){
      let TaskUpdater = props.addTask;
      updateId(id+1);
      let newTask = {id,task,tDate};
      TaskUpdater((oldTask)=>[...oldTask,newTask]);
    }else{
      alert('Please fill both details.')
    }    

    updateTask('');
    updateTdate('')
  }



  return(
    <div className='bg-[#393E46] w-[90%] h-[20%] rounded-xl flex flex-col items-center justify-evenly md:grid md:grid-cols-3 md:h-[10%] md:p-5 md:justify-evenly'>
              {/* <div className='flex flex-col  w-[80%] h-full items-center p-2 md:flex-row md:justify-evenly'> */}
          <input type="text" className='bg-[#222831] h-15 w-[90%] rounded-xl p-2 text-white focus:outline-none placeholder:text-white ' value={task} placeholder='Enter Task Here' onChange={TodoChangeHandler}/>
          
          <input type="date" className='bg-[#222831] h-15 w-[90%] rounded-xl p-2 text-white focus:outline-none placeholder:text-white' value = {tDate} placeholder='Select Date' onChange={DateChangeHandler}/>
          <button className='bg-[#222831] w-[90%] h-15 text-white p-2 rounded-xl hover:bg-[#000000] ' onClick={submitTasks}>Add Task</button>
        {/* </div> */}
    </div>
  )
}

export default TodoAdd;