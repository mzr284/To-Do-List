import { useState, useContext } from "react"
import { context } from "../contect"

export default function ToDoItem({todo}){
    let [display, setDisplay] = useState(true)
    let [editMode, setEditMode] = useState(false)
    let [valueEdit, setValue] = useState("")

    let statusHandler = useContext(context).statusHandler
    let editHandler = useContext(context).editHandler

    function changeEditMode(id, value){
        if(editMode){
            setEditMode(false)
            editHandler(id, value)
        }else{
            setEditMode(true)
        }
    }

    return(
        <>
        { display && (
        <li className="li flex justify-between gap-3">
            <div>
                <input type="checkbox" checked={todo.status} className="mr-1.5" onChange={() => statusHandler(todo.id)}/>
                {
                    !editMode ? <span className={`${todo.status ? "line-through" : ""}`}>{todo.name}</span> :
                        <input defaultValue={todo.name} className="edit" onChange={(e) => setValue(e.target.value)}></input>
                }
            </div>
            <div className="flex gap-1">
                <button className="btn-remove" onClick={() => setDisplay(false)}>delete</button>
                {
                    !editMode ? <button className="btn-edit" onClick={() => changeEditMode(todo.id, "")}>edit</button> :
                        <button className="btn-edit" onClick={() => changeEditMode(todo.id, valueEdit)}>submit</button>
                }
                
            </div>
        </li>)}
        </>
    )
}