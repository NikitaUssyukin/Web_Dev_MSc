import { useEffect, useState } from 'react'

import Header from './Header'
import ToDoList from './ToDoList'
import ToDoForm from './ToDoForm'

import data from './data.json'

import './App.css'


function App() {
  const [allTasks, setAllTasks] = useState(data)
  const [toDoList, setToDoList] = useState(data)
  const [userInput, setUserInput] = useState('')

  const handleToggle = (id) => {
    console.log('Toggling task with id: ${id}')
    let mapped = toDoList.map(task => {
      return task.id == id ? { ...task, complete: !task.complete } : { ...task }
    })
    setToDoList(mapped)
  }

  const handleFilter = () => {
    console.log('Filtering tasks...')
    let filtered = allTasks.filter(task => {
      return !task.complete
    })
    setToDoList(filtered)
  }

  const handleResetFilter = () => {
    console.log('Resetting filter...')
    setToDoList(allTasks)
  }

  const addTask = (userInput) => {
    let copy = [...toDoList]
    copy = [...copy, {id: toDoList.length + 1, task: userInput, complete: false}]
    setToDoList(copy)
  }

  useEffect(() => {
    console.log(toDoList)
  }, [toDoList])

  return (
    <div className="App">
      <Header />
      <ToDoList toDoList={toDoList} handleToggle={handleToggle} handleFilter={handleFilter} handleResetFilter={handleResetFilter} />
      <ToDoForm userInput={userInput} setUserInput={setUserInput} addTask={addTask} />
    </div>
  )
}

export default App
