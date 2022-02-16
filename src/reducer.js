import { CLEAR_ALL_PEOPLE, REMOVE_PERSON } from "./actionTypes"

export const reducer = (state, action) => {
  switch (action.type) {
    case CLEAR_ALL_PEOPLE:
      return { ...state, people: [] }
    case REMOVE_PERSON:
      return {
        ...state, people: state.people.filter(person => person.id !== action.payload)
      }
    default: throw new Error('no match action types')
  }
}