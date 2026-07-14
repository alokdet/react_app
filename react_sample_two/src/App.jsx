import React from 'react'
import './App.css'
import Card from './components/Card/Card'

const App = () => {
  const cards = [
    {
      title: 'One',
      description: 'This is the description for Card One.'
    },
    {
      title: 'Two',
      description: 'This is the description for Card Two.'
    },
    {
      title: 'Three',
      description: 'This is the description for Card Three.'
    },
    {
      title: 'Four',
      description: 'This is the description for Card Four.'
    },
    {
      title: 'Five',
      description: 'This is the description for Card Five.'
    },
    {
      title: 'Six',
      description: 'This is the description for Card Six.'
    },
    {
      title: 'Seven',
      description: 'This is the description for Card Seven.'
    },
    {
      title: 'Eight',
      description: 'This is the description for Card Eight.'
    }
  ]

  return (
    <div className="app">
      <h3 className="title">Welcome Alok</h3>
      <h1 className="subtitle">BICYCLE CHALLENGE</h1>

      <div className="card-container">

      {cards.map(
          (elem, index) => {
            return (
              <Card key={index}
              title={elem.title}
              description={elem.description} />
            )
          }
        )

      }
      </div>
    </div>
  )
}

export default App

