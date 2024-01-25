import React from 'react'
import './App.css'
import NavBar from './components/NavBar/NavBar'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

const App = () => {
  return (
      <>
      <div className='body-container'>
      <NavBar/>
      <ItemListContainer greeting={"Greetings, dear readers!"}/>
      <ItemDetailContainer/>
      </div>
      </>
  )
}

export default App