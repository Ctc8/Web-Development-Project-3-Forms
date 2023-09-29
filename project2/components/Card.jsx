import React, { useState } from "react"

const Flashcard = ({ question, answer }) => {
  const [side, setSide] = useState(false)
  const [currentImg, setCurrentImg] = useState(0)

  const toggleAnswer = () => {
    setSide(!side)
  }

  const nextImage = () => {

  }

  return (
    <div className="container">
      <div className="flashcard" onClick={toggleAnswer}>
        <div className="flashcard-content">{side ? answer : question}</div>
      </div>
    </div>
  )
}

export default Flashcard
