const ToDo = ({todo, handleToggle}) => {
    console.log('Received handleToggle in ToDo:', !!handleToggle)
    return (
        <div 
            className={todo.complete ? "strike" : ""} 
            onClick={() => handleToggle(todo.id)}
        >
            {todo.task}
        </div>
    )
}

export default ToDo