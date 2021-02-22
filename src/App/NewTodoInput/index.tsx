import React, { createRef } from 'react'
import { UUID } from '../../functions'
import { useRecoilState, useRecoilValue } from 'recoil'
import { Layout } from './style'
import { AppState, dateState, recoilState, Todo } from '../../dataStructure'

const NewTodoTextInput: React.FC = () => {
  const [appState, setAppState] = useRecoilState<AppState>(recoilState)
  const dateStore = useRecoilValue(dateState)
  const textInput: React.RefObject<HTMLInputElement> = createRef<HTMLInputElement>()

  function addTodo(e: React.KeyboardEvent<HTMLInputElement>): void {
    if (textInput.current === null) return
    if (e.key === 'Enter' && textInput.current.value.trim().length > 0) {
      /* eslint-disable-line prettier/prettier */
      // make new TODO object
      const todo: Todo = {
        id: UUID(),
        bodyText: textInput.current.value,
        completed: false,
        date: dateStore.date,
      }

      // add new TODO to entire TodoList
      setAppState({
        todoList: [todo, ...appState.todoList],
      })

      // reset text input UI value
      textInput.current.value = ''
    }
  }

  return (
    <Layout>
      <header className="header">
        <input
          type="text"
          className="new-todo"
          placeholder="在这里记录下准备做的事情"
          ref={textInput}
          onKeyPress={(e: React.KeyboardEvent<HTMLInputElement>) => addTodo(e)}
          autoFocus
          data-testid="new-todo-input-text"
          data-cy="new-todo-input-text"
        />
      </header>
    </Layout>
  )
}

export default NewTodoTextInput
