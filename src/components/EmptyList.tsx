import { ClipboardText } from 'phosphor-react'

import styles from './EmptyList.module.css'

export function EmptyList() {
  return (
    <div className={styles.emptyList}>
      <div className={styles.clipboardIcon}>
        <ClipboardText size={50} />
      </div>
      <p className={styles.title}>Você ainda não tem tarefas cadastradas</p>
      <p>Crie tarefas e organize seus itens a fazer</p>
    </div>
  )
}