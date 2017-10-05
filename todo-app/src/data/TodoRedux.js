export const SUBMIT_TODO = 'SUBMIT_TODO'
export const ITEM_CHANGE = 'ITEM_CHANGE'
export const COMPLETE_TODO = 'COMPLETE_TODO'

const initialState = {
  todoList: [],
  completedList: []

}

export function submitTodo (itemArray) {
  console.log(itemArray);
  return dispatch => {
    dispatch({
      type: SUBMIT_TODO,
      todoList: itemArray
    })
  }
}

export function completeTodo (finishedItemArray) {
  return dispatch => {
    dispatch({
      type: COMPLETE_TODO,
      finishedItemArray
    })
  }
}

export function reducer(state = initialState, action) {
  console.log('reducer firing ', action);
  switch (action.type) {
    case SUBMIT_TODO:
      return {
        ...state,
          todoList: action.todoList
      }

    case COMPLETE_TODO:
      return {
        ...state,
          todoList: action.finishedItemArray.todoList,
          completedList: action.finishedItemArray.completedList
      }
    default:
      return state
  }
}
