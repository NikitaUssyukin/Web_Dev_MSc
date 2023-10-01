import ToDo from "./ToDo"

const ToDoList = ({toDoList, handleToggle, handleFilter, handleResetFilter}) => {
    return (
        <div>
            {toDoList.map(todo => {
                return (
                    <
                        ToDo todo={todo} 
                        handleToggle={handleToggle} 
                        handleFilter={handleFilter} 
                        key={todo.id}
                    />
                )
            })}
            <button style={{margin: '20px'}} onClick={handleFilter}>Clear Completed</button>
            <button style={{margin: '20px'}} onClick={handleResetFilter}>Show Completed</button>
        </div>
    )
}

export default ToDoList