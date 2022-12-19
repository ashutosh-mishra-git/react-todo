import { useState } from 'react';
import './App.css';
import Todo from './Todo';

function App() {

  const [todoList,setTodoList] = useState([])
  const [newTask,setNewTask] = useState("");

  const handleTodo = () => {
     setTodoList([...todoList,newTask])
  }
  
  const handleNewtask = (val) =>{
    val = val.toUpperCase()
    setNewTask(val)
  }

  const deletehandle = (todoitem)=>{
    setTodoList(todoList.filter((todo)=> todo!==todoitem))
}



  return (
    <div className="App">
      <header>
        TodoList
      </header>
          <div className='taskBanner'>
            <input placeholder='Add task' onChange={(event)=>handleNewtask(event.target.value)} />
            <button onClick={handleTodo}>+</button>
          <Todo todoList={todoList}  deletehandle={deletehandle} />
          </div>
        
    </div>
  );
}

export default App;
