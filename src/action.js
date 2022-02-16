import { CLEAR_ALL_PEOPLE, REMOVE_PERSON } from "./actionTypes"

export const clearAllPoeple = () => {
  return { type: CLEAR_ALL_PEOPLE }
}

export const removePerson = (id) => {
  return { type: REMOVE_PERSON, payload: id }
}