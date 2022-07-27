import { useState } from 'react'
import { v4 as uuidv4 } from 'uuid'

import { Header } from './components/Header'
import { SearchBar } from './components/SearchBar'
import { TodoList } from './components/TodoList'

import './global.css'
import styles from './App.module.css'

export interface Todo {
  id: string
  text: string
  isDone?: boolean
}

function App() {
  const [todos, setTodos] = useState<Todo[]>([])

  function handleNewTodo(todo: string) {
    setTodos([
      ...todos, {
        id: uuidv4(),
        text: todo
      }
    ])
  }

  return (
    <div>
      <Header />
      <div className={styles.container}>
        <SearchBar onNewTodo={handleNewTodo} />
        <TodoList todosData={todos} onUpdateData={(data) => setTodos(data)}/>
      </div>
    </div>
  )
}

export default App
