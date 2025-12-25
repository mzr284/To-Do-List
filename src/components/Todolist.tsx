import { useContext } from "react";
import ToDoItem from "./Todoitem.js";
import { context, type Todo } from "../contect.js";

export default function ToDoList(){
    let objects = useContext(context)
    let todos : Todo[] = objects.todosFilter;
    return(
        <ul className='flex flex-col gap-3.5 mb-3 w-full'>
            <h3 className='flex justify-center text-xl text-blue-600 font-medium'>Your list</h3>
            {
                todos.map(
                    (todo, index) => <ToDoItem key={index} todo={todo}/>
                )
            }
        </ul>
    )
}