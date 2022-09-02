import { useState } from 'react'

const App = () => {
  const anecdotes = [
    'If it hurts, do it more often.',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 10 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.',
    'Programming without an extremely heavy use of console.log is same as if a doctor would refuse to use x-rays or blood tests when diagnosing patients.'
  ]
   
  const [selected, setSelected] = useState(0)
  const [voted, setVote] = useState({ 0: 0, 1: 0, 2: 0, 3: 0, 4: 0, 5: 0, 6: 0})

  const handleClick = () => {
    let num = Math.floor(Math.random() * (6)) + 1
    console.log(num)
    setSelected(selected*0 + num)
  }

  const handleVotes = () => {
    switch(selected){
      case 0:
        const copy = { ...voted}
        copy[0] += 1
        setVote(copy)
        break
      case 1:
        const copy1 = { ...voted}
        copy1[1] += 1
        setVote(copy1)
        break
      case 2:
        const copy2 = { ...voted}
        copy2[2] += 1
        setVote(copy2)
        break
      case 3:
        const copy3 = { ...voted}
        copy3[3] += 1
        setVote(copy3)
        break
      case 4:
        const copy4 = { ...voted}
        copy4[4] += 1
        setVote(copy4)
        break
      case 5:
        const copy5 = { ...voted}
        copy5[5] += 1
        setVote(copy5)
        break
      case 6:
        const copy6 = { ...voted}
        copy6[6] += 1
        setVote(copy6)
        break
    }
  }

  return (
    <div>
      <p>{anecdotes[selected]}</p>
      <p>has {voted[selected]} votes</p>
      <button onClick={handleVotes}>vote for this anecdote!</button>
      <button onClick={handleClick}>next anecdote</button>
    </div>
  )
}

export default App