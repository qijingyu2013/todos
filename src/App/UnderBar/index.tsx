import React from 'react'
import FilterLink from './FilterLink'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Layout } from './style'
import {
  AppState,
  filteredTodoListState,
  recoilState,
  Routes,
  Todo,
} from '../../dataStructure'

interface Props {
  path: Routes
}

const UnderBar: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  const todoList = useRecoilValue(filteredTodoListState)
  const doneCount: number = todoList.filter((t) => t.completed)
    .length /* eslint-disable-line prettier/prettier */
  const yetCount: number = todoList.filter((t) => !t.completed)
    .length /* eslint-disable-line prettier/prettier */

  function clearCompleted(): void {
    setAppState({
      todoList: appState.todoList.filter((t: Todo) => !t.completed),
    })
  }

  return (
    <Layout>
      <footer className="footer">
        <span className="todo-count">
          <strong data-cy="remaining-uncompleted-todo-count">{yetCount}</strong>{' '}
          项任务未完成
        </span>
        <FilterLink path={path} />

        {doneCount > 0 && (
          <button
            onClick={clearCompleted}
            className="clear-completed"
            data-cy="clear-completed-button"
          >
            清空已完成任务
          </button>
        )}
      </footer>
    </Layout>
  )
}

export default UnderBar
