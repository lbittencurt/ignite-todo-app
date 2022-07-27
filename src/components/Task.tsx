import { Circle, Check, Trash } from 'phosphor-react'
import { Todo } from '../App'
import styles from './Task.module.css'

interface TaskProps {
  task: Todo
  onDone: (task: Todo) => void
  onRemove: (task: Todo) => void
}

export function Task({ task, onDone, onRemove }: TaskProps) {
  return (
    <div className={styles.task}>
      {
        task.isDone
        ? <>
          <div className={styles.checkCircle}>
            <span>
              <Circle weight="fill" size={20} />
              <Check className={styles.check} size={10} color="#fff" weight="bold" />
            </span>
          </div>
          <p className={styles.doneText}>{task.text}</p>
        </>
        : <>
          <span className={styles.circle}><Circle size={20} onClick={() => onDone(task)} /></span>
          <p>{task.text}</p>
        </>
      }
      
      <span className={styles.trash} onClick={() => onRemove(task)} ><Trash /></span>
    </div>
  )
}