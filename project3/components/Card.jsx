import React, { useState } from "react"
import FLASHCARD_DATA from "../src/flashcardData"

const Flashcard = () => {
	const [side, setSide] = useState(false)
	const [currentCard, setCurrentCard] = useState(0)
	const [streak, setStreak] = useState(0)
	const [inputValue, setInputValue] = useState("")

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
	const handleSubmit = e => {
		const initialValue = 0
		e.preventDefault()
		if (inputValue === answer) {
			setStreak(streak + 1)
			alert("You got it correct!")
		} else {
			alert("Try again! Streak reset.")
			resetStreak()
		}
	}

	// Get user's guess
	const handleInputChange = (e) => {
		setInputValue(e.target.value)
	}

	// Reset state back to 0
	const resetStreak = () => {
		setStreak(0)
	}

	return (
		<>
			<div className="streak-heading">
				<h3> Current streak: {streak} </h3>
			</div>
		
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
					<label className="label">
						Enter your guess:
						<input type="text" value={inputValue} onChange={handleInputChange}/>
					</label>
				</form>
			</div>
		</>
	)
}

export default Flashcard
