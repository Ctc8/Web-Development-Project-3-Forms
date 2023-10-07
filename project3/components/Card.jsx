import React, { useState } from "react"
import FLASHCARD_DATA from "../src/flashcardData"

const Flashcard = () => {
	const [side, setSide] = useState(false)
	const [currentCard, setCurrentCard] = useState(0)
	const [streak, setStreak] = useState(0)
	// const [guess, setGuess] = useState("")

	// Check which side the flashcard is on
	const toggleAnswer = () => {
		setSide(!side)
	}

	// Next card
	const nextCard = () => {
    if (currentCard < FLASHCARD_DATA.length - 1) {
      setSide(false)
      setCurrentCard(nextCard => nextCard + 1)
    }
	}

	// Previous card
	const prevCard = () => {
    if (currentCard > 0) {
      setSide(false)
      setCurrentCard(prevCard => prevCard - 1)
    }
	}

	const { question, answer } = FLASHCARD_DATA[currentCard]

	// Track number of correct guesses
	const handleSubmit = (e) => {
		const initialCount = 0
		alert("asd")
		if (true) {
			setStreak(streak + 1)
		}
		// if (e != side){
		// 	setStreak(initialCount)
		// }
	}

	return (
		<>
			<div className="container">
				<div className={`flashcard ${side ? "flipped" : ""}`}>
					<div className={` ${side ? "flipped" : ""}`} onClick={toggleAnswer}>
						{side ? answer : question}
					</div>
				</div>
			</div>

			<div className="buttons">
				<button className="prev-button" onClick={prevCard}>
					Back
				</button>
				<button className="next-button" onClick={nextCard}>
          			Next
				</button>
			</div>

			<div className="form-container">
				<form onSubmit={handleSubmit}>
					<label>
						Enter your guess:
						<input type="text"></input>
					</label>
				</form>
			</div>

			<div>
				<p> Current streak: {streak} </p>
			</div>
		</>
	)
}

export default Flashcard
