export const SUBMIT_TODO = 'SUBMIT_TODO'
export const ITEM_CHANGE = 'ITEM_CHANGE'
export const COMPLETE_TODO = 'COMPLETE_TODO'

const initialState = {
  todoList: [],
  completedList: []

}
export function submitTodo (itemArray) {
  return {
    type: SUBMIT_TODO
    item: newItem
  }
}

export function completeTodo (finishedItemArray) {
  return {
    type: COMPLETE_TODO
    item: finishedItem
  }
}

export function reducer(state = initialState, action) {
  switch (action.type) {
    case SUBMIT_TODO:
      return {
        ...state,
        {
          todoList: action.todoList
        }
      }

    case COMPLETE_TODO:
      return {
        ...state,
        {
          todoList: action.todoList
          completedList: action.completedList
        }
      }
    default:
      return state
  }
}
