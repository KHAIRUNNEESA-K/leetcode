import { useState } from "react";

export default function Todo(){
    const [todo,setTodo]=useState("")
    const [todos,setTodos]=useState([])

    const HandleClick=(event)=>{
        setTodo(event.target.value)
    }
    const handleBehaviour=(event)=>{
        event.preventDefault( )
        setTodos([...todos,todo])
        setTodo("")
       
    }

    return(
        <>
        <form>
            <input type="text" value={todo} onChange={HandleClick}/>
            <button onClick={handleBehaviour}>Add</button>


        </form>
        {todos.map(item=><h3></h3>)}
        
        </>
    )
}