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
      <StatisticLine text='good' value={props.good} />
      <StatisticLine text='neutral' value={props.neutral} />
      <StatisticLine text='bad' value={props.bad} />
      <StatisticLine text='all' value={props.good + props.neutral + props.bad} />
      <StatisticLine text='average' value={props.good + -1*props.bad / (props.good + props.neutral + props.bad)}/>
      <StatisticLine text='positive' value={props.good / (props.good + props.neutral + props.bad)}/>
    </div>
  )
}

const StatisticLine = (props) => {
  return(
    <div>
      <p>{props.text} {props.value}</p>
    </div>
  )
}

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