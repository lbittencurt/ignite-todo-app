import { useState } from 'react'
import { Todo } from '../App'
import { EmptyList } from './EmptyList'
import { Task } from './Task'
import styles from './TodoList.module.css'

interface TodoListProps {
  todosData: Todo[]
  onUpdateData: (data: Todo[]) => void
}

function filterTodos(todosData: Todo[]) {
  return todosData.reduce((acc, cur) => {
    if (cur.isDone) {
      acc.done = [...acc.done, cur]
    } else {
      acc.todo = [...acc.todo, cur]
    }
    return acc
  }, { done: [] as Todo[], todo: [] as Todo[] })
}

export function TodoList({ todosData, onUpdateData }: TodoListProps) {
  function handleOnDone(todo: Todo) {
    const todosDataUpdated = todosData.map((_todo) => {
      if (_todo.id === todo.id) {
        return { ...todo, isDone: true }
      }
      return _todo
    })
    onUpdateData(todosDataUpdated)
  }

  function handleOnRemove(todo: Todo) {
    const todosDataUpdated = todosData.filter(_todo => _todo.id !== todo.id)
    onUpdateData(todosDataUpdated)
  }

  const filteredTodos = filterTodos(todosData)

  return (
    <main className={styles.todoList}>
      <header>
        <div className={styles.createdTasksContainer}>
          <p>Tarefas criadas</p>
          <span>0</span>
        </div>
        <div className={styles.doneTasksContainer}>
          <p>Concluídas</p>
          <span>2 de 5</span>
        </div>
      </header>
      <section>
        {
          todosData.length === 0
          ? <EmptyList />
          : <>
            {filteredTodos.todo.map(task => <Task onDone={handleOnDone} onRemove={handleOnRemove} task={task} key={task.id} />)}
            {filteredTodos.done.map(task => <Task onDone={handleOnDone} onRemove={handleOnRemove} task={task} key={task.id} />)}
          </>
        }
      </section>
    </main>
  )
}