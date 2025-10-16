import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4 } from "uuid"

export let context = createContext();

export default function AppDateProvider({children}){

    let [todos, setTodos] = useState([
        {id: uuidv4(), name: "Eating Breakfast", status: false},
        {id: uuidv4(), name: "Go to the gym", status: true},
        {id: uuidv4(), name: "Read a book", status: false},
        {id: uuidv4(), name: "Work on your project", status: false},
    ])

    let [vitualTodos, setVirTodos] = useState([])
    let [search, setSearch] = useState("")
    let [task, setTask] = useState("")

    let todosFilter = todos.filter((td) => td.name.toLowerCase().includes(search.toLowerCase()))

    function addTask(e){
        e.preventDefault()
        if(task.trim() === ""){
            return 0;
        }
        setTodos([...todos, {id: uuidv4(), name: task, status: false}])
        setTask("")
    }

    function statusHandler(id){
        let updateTodos = todos.map(
            (td) =>{
                if(td.id == id){
                    td.status = !td.status
                    return td
                }
                return td
            }
        )
        setTodos(updateTodos)
    }

    function editHandler(id, value){
        let updateTodos = todos.map(
            (td) => {
                if(td.id == id){
                    td.name = value
                    return td
                }
                return td
            }
        )
        setTodos(updateTodos)
    }

    return(
        <context.Provider value={{todosFilter, addTask, task, setTask, setSearch, statusHandler, editHandler}}>
            {children}
        </context.Provider>
    )
}