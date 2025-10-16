import { useContext} from "react";
import ToDoList from "./Todolist";
import { context } from "../contect";

export default function ToDo(){

    let objects = useContext(context)
    let addTask = objects.addTask
    let task = objects.task
    let setTask = objects.setTask
    let setSearch = objects.setSearch

    return(
        <div>
            <div className='bg-white py-12 px-5 w-110'>
               <div className='container flex flex-col gap-3 items-center justify-center'>
                <h1 id="main-title" className='text-blue-900 font-bold text-3xl'>TO DO LIST</h1>
                <input id="input-head" placeholder="search..." className='bg-blue-100 px-2 py-1 rounded-4xl w-full mb-4' onChange={(e)=> setSearch(e.target.value)}/>

                <ToDoList />
                
                <form>
                    <input id="input-button" value={task} className='bg-blue-100 px-2 py-1 rounded-4xl mr-2' onChange={(event) => setTask(event.target.value)}/>
                    <button className='bg-blue-800 px-2.5 py-1.5 text-white rounded-xl cursor-pointer' onClick={(e) => addTask(e)}>add</button>
                </form>
              </div>
            </div>
        </div>
    )
}