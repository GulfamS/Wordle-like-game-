import React from "react"
import "./index.css"

export const Keyboard = ({onKeyPress}) =>{
    const keys = "abcdefghijklmnopqrstuvwxyz".split("");

    return(
        <div className="keyboard">
            {keys.map((key)=>(
                <button key={key} className="key" onClick={() =>onKeyPress(key)}>
                    {key}
                </button>
            ))}
        </div>
    )
}
