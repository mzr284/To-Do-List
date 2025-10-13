import ToDoItem from "./Todoitem";

export default function ToDoList({todos, statusHandler}) {
    return(
            <ul className='flex flex-col gap-3.5 mb-3 w-full'>
                <h3 className='flex justify-center text-xl text-blue-600 font-medium'>Your list</h3>
                {
                    todos.map(
                        (todo, index) => <ToDoItem key={index} todo={todo} statusHandler={statusHandler}/>
                    )
                }
            </ul>
    )
}