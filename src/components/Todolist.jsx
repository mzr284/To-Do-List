import { useContext } from "react";
import ToDoItem from "./Todoitem";
import { context } from "../contect";

export default function ToDoList(){
    let todos = useContext(context).todosFilter
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