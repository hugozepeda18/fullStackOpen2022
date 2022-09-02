import { useState } from 'react'

const Statistics = (props) => {
  if (props.good === 0 && props.neutral === 0 && props.bad === 0) {
    return (
      <div>
        <h1>statistics</h1>
        <p>No feedback given</p>
      </div>
    )
  }
  return (
    <div>
      <h1>statistics</h1>
      <table>
        <tr>
          <td>good</td>
          <td>{props.good}</td>
        </tr>
        <tr>
          <td>neutral</td>
          <td>{props.neutral}</td>
        </tr>
        <tr>
          <td>bad</td>
          <td>{props.bad}</td>
        </tr>
        <tr>
          <td>all</td>
          <td>{props.good + props.neutral + props.bad}</td>
        </tr>
        <tr>
          <td>average</td>
          <td>{props.good + -1*props.bad / (props.good + props.neutral + props.bad)}</td>
        </tr>
        <tr>
          <td>positive</td>
          <td>{props.good / (props.good + props.neutral + props.bad)}</td>
        </tr>
      </table>
    </div>
  )
}

/*
const StatisticLine = (props) => {
  return(
    <div>
      <tr>
        <td>{props.text}</td>
        <td>{props.value}</td>
      </tr>
    </div>
  )
}
*/

const Button = ({ onClick, variable, text }) => <button onClick={() => onClick(variable + 1)}>{text}</button>

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0)
  const [neutral, setNeutral] = useState(0)
  const [bad, setBad] = useState(0)

  return (
    <div>
      <h1>give feedback</h1>
      <Button onClick={setGood} variable={good} text='good' />
      <Button onClick={setNeutral} variable={neutral} text='neutral' />
      <Button onClick={setBad} variable={bad} text='bad' />
      <Statistics good={good} neutral={neutral} bad={bad} />
    </div>
  )
}

export default App