import React, { useState } from "react"
import FLASHCARD_DATA from "../src/flashcardData"

const Flashcard = () => {
	const [side, setSide] = useState(false)
	const [currentCard, setCurrentCard] = useState(0)

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
		</>
	)
}

export default Flashcard
