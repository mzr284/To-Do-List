import { useState } from "react";
import ToDoList from "./Todolist";
import { v4 as uuidv4 } from 'uuid';

export default function ToDo(){
    let [todos, setTodos] = useState([
        {id: uuidv4(), name: "Eating Breakfast", status: false},
        {id: uuidv4(), name: "Go to the gym", status: true},
        {id: uuidv4(), name: "Read a book", status: false}
    ])
    let [vitualTodos, setVirTodos] = useState([])
    let [search, setSearch] = useState("")

    let todosFilter = todos.filter((td) => td.name.toLowerCase().includes(search.toLowerCase()))

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

    let [task, setTask] = useState("")

    function addTask(e){
        e.preventDefault()
        if(task.trim() === ""){
            return 0;
        }
        setTodos([...todos, {id: uuidv4(), name: task, status: false}])
        setTask("")
    }

    return(
        <div>
            <div className='bg-white py-12 px-5 w-110'>
               <div className='container flex flex-col gap-3 items-center justify-center'>
                <h1 id="main-title" className='text-blue-900 font-bold text-3xl'>TO DO LIST</h1>
                <input id="input-head" placeholder="search..." className='bg-blue-100 px-2 py-1 rounded-4xl w-full mb-4' onChange={(e)=> setSearch(e.target.value)}/>

                <ToDoList todos={todosFilter} statusHandler={statusHandler} editHandler={editHandler}/>
                
                <form>
                    <input id="input-button" value={task} className='bg-blue-100 px-2 py-1 rounded-4xl mr-2' onChange={(e) => setTask(e.target.value)}/>
                    <button className='bg-blue-800 px-2.5 py-1.5 text-white rounded-xl cursor-pointer' onClick={addTask}>add</button>
                </form>
              </div>
            </div>
        </div>
    )
}