

function Todo(props){
 
    const todos = props.todoList;
    const deletehandle = props.deletehandle;
   return(
        <div className="show-content">
       
       { todos.map((todo) => {
          
           return ( <div className="show">
                  <h1>{todo}</h1> <button onClick={()=>deletehandle(todo)}>x</button>
             </div>)
        }) 
       }

        </div>
    )
}

export default Todo;