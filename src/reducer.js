import { CLEAR_ALL_PEOPLE } from "./actionTypes"

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ALL_PEOPLE:
      return { ...state, people: [] }
    default: throw new Error('no match action types')
  }
}