import { createContext } from "react";
import { useState } from "react";
import { v4 as uuidv4, type UUIDTypes } from "uuid"

export interface contextType {
    todosFilter : Todo[]
    addTask : (e:React.MouseEvent<HTMLButtonElement>) => void,
    task : string,
    setTask : React.Dispatch<React.SetStateAction<string>>;
    setSearch : React.Dispatch<React.SetStateAction<string>>;
    statusHandler : (id:string) => void;
    editHandler : (id:string, value:string) => void
}
export interface Todo {
    id: string,
    name: string,
    status: boolean
}

export let context = createContext({} as contextType);

export default function AppDateProvider({children} : {children: React.ReactNode}){

    let [todos, setTodos] = useState<Todo[]>([
        {id: uuidv4(), name: "Eating Breakfast", status: false},
        {id: uuidv4(), name: "Go to the gym", status: true},
        {id: uuidv4(), name: "Read a book", status: false},
        {id: uuidv4(), name: "Work on your project", status: false},
    ])
    let [vitualTodos, setVirTodos] = useState([])
    let [search, setSearch] = useState("")
    let [task, setTask] = useState("")

    let todosFilter = (todos as Todo[]).filter((td:Todo) => td.name.toLowerCase().includes(search.toLowerCase()))

    function addTask(e : React.MouseEvent<HTMLButtonElement>){
        e.preventDefault()
        if(task.trim() === ""){
            return 0;
        }
        setTodos([...todos, {id: uuidv4(), name: task, status: false}])
        setTask("")
    }

    function statusHandler(id : string){
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

    function editHandler(id: UUIDTypes, value:string){
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