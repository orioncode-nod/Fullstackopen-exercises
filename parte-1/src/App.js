//import logo from './logo.svg';
//import './App.css';

import { useState } from 'react' 

const Statistics = (props) => {
//nuevo (1.9)
  if (props.total === 0){
    return  (
      <div>
        <h2>statistics</h2>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h2>statistics</h2>
      <p>good {props.good}</p>
      <p>neutral {props.neutral}</p>
      <p>bad {props.bad}</p>
      <p>all {props.total}</p>
      <p>average {props.average.toFixed(2)}</p>
      <p>positive {props.positive.toFixed(2)} %</p>
    </div>
  )
}

const App = () => {
  // 1. Define las variables de estado para los tres contadores
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  // 2. Define las funciones que actualizan el estado
  // CLAVE: Las funciones usan la función set* para cambiar el valor
  const handleGoodClick = () => {
    setGood(good + 1)
  }

  const handleNeutralClick = () => {
    setNeutral(neutral + 1)
  }

  const handleBadClick = () => {
    setBad(bad + 1)
  }
  //nuevo (1.7)
  const total = good + neutral + bad
  const average = (good -bad)/ total
  const positive = (good / total) * 100

  return (
    <div>
      <h1>give feedback</h1>
      
      {/* 3. Botones: Asigna las funciones a los eventos onClick */}
      <button onClick={handleGoodClick}>good</button>
      <button onClick={handleNeutralClick}>neutral</button>
      <button onClick={handleBadClick}>bad</button>

      <Statistics 
        good={good}
        neutral={neutral}
        bad={bad}
        total={total}
        average={average}
        positive={positive}
      />
    </div>
  )
}

export default App