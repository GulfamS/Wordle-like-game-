import React from "react"
import "./index.css"

export const NewGameButton = ({onNewGame}) =>{
    return <button className="new-game-button" onClick={onNewGame}>New Game</button>
}

