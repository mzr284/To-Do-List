import { useState } from "react"

export default function ToDoItem({todo}){
    let [display, setDisplay] = useState(true)
    return(
        <>
        { display && (
        <li className="li flex justify-between gap-3">
            <div>
                <input type="checkbox" checked={todo.status} className="mr-1.5" onChange={()=>{}}/>
                <span className={`${todo.status ? "line-through" : ""}`}>{todo.name}</span>
            </div>
            <button className="btn" onClick={() => setDisplay(false)}>delete</button>
        </li>)}
        </>
    )
}