import { atom, RecoilState } from 'recoil'

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
  currentDate: Date
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
    currentDate: new Date(),
  }
}

export const recoilState: RecoilState<AppState> = atom({
  key: 'initialAppState',
  default: LoadAppStateFromLocalStorage(),
})
