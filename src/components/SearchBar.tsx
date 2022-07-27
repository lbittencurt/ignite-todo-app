import { PlusCircle } from 'phosphor-react'
import { ChangeEvent, FormEvent, useState } from 'react'
import styles from './SearchBar.module.css'

interface SearchBarProps {
  onNewTodo: (task: string) => void
}

export function SearchBar({ onNewTodo }: SearchBarProps) {
  const [newTodo, setNewTodo] = useState('')

  function handleNewTodoChange(event: ChangeEvent<HTMLInputElement>) {
    setNewTodo(event.target.value)
  }

  function handleCreateTodo(event: FormEvent) {
    event.preventDefault()
    
    onNewTodo(newTodo)
    setNewTodo('')
  }

  return (
    <form className={styles.searchBar} onSubmit={handleCreateTodo}>
      <input
        placeholder="Adicione uma nova tarefa"
        value={newTodo}
        onChange={handleNewTodoChange}
      />
      <button
        type="submit"
        disabled={newTodo === ''}
      >
        Criar <PlusCircle size={20} />
      </button>
    </form>
  )
}