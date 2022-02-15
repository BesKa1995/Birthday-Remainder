import React, { useReducer } from 'react'
import List from './List'
import data from './data'
import { clearAllPoeple } from './action'
import { reducer } from './reducer'

export const peopleContext = React.createContext()
const initialState = {
  people: data
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)

  const handleClearAllPeople = () => {
    dispatch(clearAllPoeple())
  }

  return (
    <peopleContext.Provider value={{ state, dispatch }}>
      <main>
        <section className='container'>
          <h3>{state.people.length} birthday today</h3>
          <List />
          <button
            className='btn'
            onClick={handleClearAllPeople}>
            clear all
          </button>

        </section>
      </main>
    </peopleContext.Provider>
  )
}

export default App
