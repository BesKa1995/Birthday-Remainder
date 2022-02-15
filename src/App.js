import React, { useState } from 'react'
import data from './data'
import List from './List'
function App() {
  return <main>
    <section className='container'>
      <h3>0 birthday today</h3>
      <List />
      <button className='btn'>clear all</button>
    </section>
  </main>
}

export default App
