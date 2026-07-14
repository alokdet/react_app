import React from 'react'
import './App.css'
import Card from './components/Card/Card'
import './components/Card/Card.css'

const App = () => {
  return (
    <div className="app">
      <h3 className="title">Welcome Alok</h3>
      <h1 className="subtitle">BICYCLE CHALLENGE</h1>

      <div className="card-container">
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </div>
  )
}

export default App

