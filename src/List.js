import React, { useContext } from 'react'
import { removePerson } from './action'
import { peopleContext } from './App'

const List = () => {
  const { state, dispatch } = useContext(peopleContext)

  const handleRemove = (id) => {
    dispatch(removePerson(id))
  }
  return (
    <>
      {state.people.map(person => {
        const { id, name, image, age } = person
        return (
          <article key={id} className='person grid-container'>
            <img src={image} alt={name} />
            <div >
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
            <div>
              <button onClick={() => handleRemove(id)}>remove</button>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
