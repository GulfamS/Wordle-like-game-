import React from "react";

export const GuessRow = ({guess, feedback}) =>{
    return(
        <div className="guess-row">
            {guess.split("").map((letter, index) =>(
                <div key={index} className={`letter ${feedback[index]}`}>
                        {letter}
                </div>
            ))}
        </div>
    )
}
