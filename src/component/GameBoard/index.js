import React from "react"
import {GuessRow} from "../GuessRow"

export const GameBoard = ({guesses, feedbacks}) =>{
    return(
        <div className="game-board">
            {guesses.map((guess, index) =>(
                <GuessRow key={index} guess={guess} feedback={feedbacks[index]}/>
            ))}
        </div>
    )
}
