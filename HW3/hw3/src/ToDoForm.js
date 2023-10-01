const ToDoForm = ({userInput, setUserInput, addTask}) => {
    const handleChange = (e) => {
        setUserInput(e.currentTarget.value)
    }
    
    const handleSubmit = (e) => {
        e.preventDefault()
        addTask(userInput)
        setUserInput("")
    }

    return (
        <div>
            <input value={userInput} type="text" onChange={handleChange} placeholder="Enter task..."/>
            <button style={{margin: '20px'}} onClick={handleSubmit}>Add Task</button>
        </div>
    )
}

export default ToDoForm