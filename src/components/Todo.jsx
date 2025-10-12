import { useState } from "react";
import ToDoList from "./Todolist";

export default function ToDo(){
    let [todos, setTodos] = useState([
        {name: "Eating Breakfast"},
        {name: "Go to the gym"},
        {name: "Read a book"}
    ])
    return(
        <div>
            <div className='bg-white py-12 px-5 w-110'>
               <div class="container" className='flex flex-col gap-3 items-center justify-center'>
                <h1 id="main-title" className='text-blue-900 font-bold text-3xl'>TO DO LIST</h1>
                <input id="input-head" placeholder="search..." className='bg-blue-100 px-2 py-1 rounded-4xl w-full mb-4'/>

                <ToDoList todos={todos}/>
                
                <form>
                    <input id="input-button" className='bg-blue-100 px-2 py-1 rounded-4xl mr-2'/>
                    <button className='bg-blue-800 px-2.5 py-1.5 text-white rounded-xl cursor-pointer'>add</button>
                </form>
              </div>
            </div>
        </div>
    )
}