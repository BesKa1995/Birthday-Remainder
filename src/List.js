import React, { useContext } from 'react'
import { peopleContext } from './App'

const List = () => {
  const { state } = useContext(peopleContext)
  return (
    <>
      {state.people.map(person => {
        const { id, name, image, age } = person
        return (
          <article key={id} className='person'>
            <img src={image} alt={name} />
            <div >
              <h4>{name}</h4>
              <p>{age}</p>
            </div>
          </article>
        )
      })}
    </>
  )
}

export default List
