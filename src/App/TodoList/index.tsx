import React, { ReactElement } from 'react'
import Item from './Item'
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

const TodoList: React.FC<Props> = ({ path }) => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  function toggleAllCheckbox(e: React.ChangeEvent<HTMLInputElement>): void {
    /* eslint-disable-line prettier/prettier */
    // reverse all todo.completed: boolean flag
    setAppState({
      todoList: appState.todoList.map(
        (t: Todo): Todo => ({ ...t, completed: e.target.checked })
      ),
    }) /* eslint-disable-line prettier/prettier */
  }
  const currentTodos = useRecoilValue(filteredTodoListState)
  return (
    <Layout>
      <section className="main">
        <input
          id="toggle-all"
          className="toggle-all"
          type="checkbox"
          onChange={toggleAllCheckbox}
          data-cy="toggle-all-btn"
          data-testid="toggle-all-btn"
        />
        <label htmlFor="toggle-all">Mark all as complete</label>
        <ul className="todo-list" data-testid="todo-list">
          {currentTodos
            .filter((t: Todo): boolean => {
              switch (path) {
                case '/':
                  return true
                case '/active':
                  return !t.completed
                case '/completed':
                  return t.completed
                default:
                  return true
              }
            })
            .map(
              (t: Todo): ReactElement => {
                return <Item key={t.id} todo={t} />
              }
            )}
        </ul>
      </section>
    </Layout>
  )
}

export default TodoList
