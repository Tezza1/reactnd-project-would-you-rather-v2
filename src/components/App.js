import React from 'react'
import './App.css'
import Menu from './pageLayout/Menu'
import MainTitle from './pageLayout/MainTitle'

const App = props => {
  return (
    <div className="App">
      <Menu />
      <MainTitle />
      <h1>Hello</h1>
   </div>
  )
}

export default App
