import './App.css'
import Card from '../components/Card'
import FLASHCARD_DATA from './flashcardData'

export default function App() {
  const theCards = FLASHCARD_DATA.map(i => {
    return <Card question={i.question} answer={i.answer} />
  })

  return (
    <div>
      <h1>Which team does he play for?</h1>
      <h2>Total number of cards: 10</h2>
      {theCards}
    </div>
  )
}

