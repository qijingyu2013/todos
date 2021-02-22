import { atom, RecoilState, selector } from 'recoil'

export type Routes = '/' | '/active' | '/completed'

export interface Todo {
  id: string
  bodyText: string
  completed: boolean
  date: Date
}

export type TodoListType = Todo[]

export interface AppState {
  todoList: TodoListType
}

export interface DateState {
  date: Date
}

export enum LocalStorageKey {
  APP_STATE = 'APP_STATE',
}

function LoadAppStateFromLocalStorage(): AppState {
  const stringifyJSON: string | null = window.localStorage.getItem(
    LocalStorageKey.APP_STATE
  )
  if (typeof stringifyJSON === 'string') {
    return JSON.parse(stringifyJSON)
  }

  return {
    todoList: [],
  }
}

export const recoilState: RecoilState<AppState> = atom({
  key: 'initialAppState',
  default: LoadAppStateFromLocalStorage(),
})

export const dateState: RecoilState<DateState> = atom({
  key: 'initialDateState',
  default: {
    date: new Date(),
  },
})

export const filteredTodoListState = selector({
  key: 'filteredTodoListState',
  get: ({ get }) => {
    const filterState = get(dateState)
    const appState = get(recoilState)

    return appState.todoList.filter((item) => {
      const current: Date = new Date(item.date)
      const filter: Date = new Date(filterState.date)
      // eslint-disable-next-line eqeqeq
      return (
        filter.getDate() === current.getDate() &&
        filter.getMonth() ===current.getMonth() &&
        filter.getFullYear() === current.getFullYear()
      )
    })
  },
})
