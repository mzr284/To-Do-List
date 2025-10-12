export default function ToDoItem({todo}){
    function remove(){
        console.log(123)
    }
    return(
        <li class="li" className="flex justify-between gap-3">
            <span>{todo.name}</span>
            <button class="btn" onClick={remove}>delete</button>
        </li>
    )
}