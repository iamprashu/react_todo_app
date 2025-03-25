
function TaskList(props){
  let Tasks = props.taskList;
  let toDelete = props.toDelete;

  function getDate(dateIn){
    let dateObj = new Date(dateIn); 
    let formattedDate = dateObj.toLocaleDateString('en-GB');

    return formattedDate;
  }

  if(Tasks.length == 0){
    return(
      <div className="bg-[#393E4f6] w-[90%] h-[60%] rounded-xl flex flex-col  items-center p-5 gap-2 overflow-auto scrollbar-hide md:h-[80%]">
        <div className="bg-[#222831] w-[90%] p-2 rounded-xl flex flex-col items-start gap-2">
              <h1 className="text-white text-3xl text-center">Please Add Some Tasks</h1>
        </div>
      </div>
      )
  }
    return(
    <div className="bg-[#393E46] w-[90%] h-[60%] rounded-xl flex flex-col items-center p-5 gap-2 overflow-auto scrollbar-hide md:h-[800px]">
      {Tasks.reverse().map((taskobj,index)=>(
        <div key={index} className="bg-[#222831] w-[90%] h-fit p-2 rounded-xl flex flex-col  gap-2">
        <h1 className="text-white text-xl font-serif">{taskobj.task}</h1>
        <p className="text-white text-xs text-end">task added on: {getDate(taskobj.tDate)}</p>
        <button className="bg-[#222831] w-[100%] h-15 text-white p-2 rounded-xl hover:bg-[#000000]" onClick={()=>toDelete(taskobj.id)}>Mark Done</button>
      </div>
      ))}
    </div>
  )
}


export default TaskList;