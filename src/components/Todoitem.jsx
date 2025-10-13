import { useState } from "react"

export default function ToDoItem({todo, statusHandler}){
    let [display, setDisplay] = useState(true)
    return(
        <>
        { display && (
        <li className="li flex justify-between gap-3">
            <div>
                <input type="checkbox" checked={todo.status} className="mr-1.5" onChange={() => statusHandler(todo.id)}/>
                <span className={`${todo.status ? "line-through" : ""}`}>{todo.name}</span>
            </div>
            <div className="flex gap-1">
                <button className="btn-remove" onClick={() => setDisplay(false)}>delete</button>
                <button className="btn-done" onClick={() => {}}>edit</button>
            </div>
        </li>)}
        </>
    )
}