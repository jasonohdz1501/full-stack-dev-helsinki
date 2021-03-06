import React, { useState } from 'react'
import Anecdotes from './components/Anecdotes.js'
import AnecdotesMostVotes from './components/AnecdotesMostVotes.js'



const App = () => {
  const anecdotes = [
    'If it hurts, do it more often',
    'Adding manpower to a late software project makes it later!',
    'The first 90 percent of the code accounts for the first 90 percent of the development time...The remaining 10 percent of the code accounts for the other 90 percent of the development time.',
    'Any fool can write code that a computer can understand. Good programmers write code that humans can understand.',
    'Premature optimization is the root of all evil.',
    'Debugging is twice as hard as writing the code in the first place. Therefore, if you write the code as cleverly as possible, you are, by definition, not smart enough to debug it.'
  ]

  const initialVotes = [...anecdotes].fill(0)

  const [selected, setSelected] = useState(0)
  const [votes, setVotes] = useState(initialVotes)
  const [mostVotes, setMostVotes] = useState(0)
  
  const handleNextAnecdote = () => {
    setSelected(Math.floor(Math.random() * anecdotes.length))
  }
  const handleVote = () => {
    const newVotes = [...votes]
    newVotes[selected]++
    if(newVotes[selected] > newVotes[mostVotes]) {
      setMostVotes(selected)
    } 
    setVotes(newVotes)
  }
 
  return (
    <div>
        <Anecdotes 
        anecdote={anecdotes[selected]} 
        votes={votes[selected]}
        handleVote ={handleVote}
        handleNextAnecdote ={handleNextAnecdote}
      />
      <AnecdotesMostVotes 
        anecdote={anecdotes[mostVotes]} 
        votes ={votes[mostVotes]}
      />
    </div>
  )
}

export default App