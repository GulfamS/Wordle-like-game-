import React, {useState, useEffect} from "react"
import { generateRandomWord, getFeedback, isValidWord } from "./gameLogic";
import {GameBoard} from "./component/GameBoard";
import {GameStatus} from "./component/GameStatus";
import {NewGameButton} from "./component/NewGameButton";
import { Keyboard } from './component/Keyboard'
import "./App.css"

const App = () =>{
  const [targetWord, setTargetWord] = useState(generateRandomWord());
  const [guesses, setGuesses] = useState([]);
  const [feedbacks, setFeedbacks] = useState([]);
  const [currentGuess, setCurrentGuess] = useState("");
  const [gameStatus, setGameStatus] = useState("");
  const [attemptsLeft, setAttemptsLeft] = useState(6);

  useEffect(() => {
    if (gameStatus) {
      return;
    }

    if (guesses.length > 0) {
      const lastGuess = guesses[guesses.length - 1];

      const feedback = getFeedback(lastGuess, targetWord);
      setFeedbacks((prevFeedbacks) => [...prevFeedbacks, feedback]);

      if (lastGuess === targetWord) {
        setGameStatus('You win!');
      } 
      else if (attemptsLeft === 1) {
        setGameStatus(`You lose! The word was: ${targetWord}`);
      }
    }
  }, [guesses, attemptsLeft, targetWord, gameStatus]);
  
  const handleKeyPress = (key) => {
    if (currentGuess.length < 5) {
      setCurrentGuess(currentGuess + key);
    }
  };

  const handleSubmitGuess = () => {
    if (currentGuess.length === 5 && isValidWord(currentGuess)) {
      setGuesses([...guesses, currentGuess]); 
      setCurrentGuess('');  
      setAttemptsLeft(attemptsLeft - 1); 
    } else {
      alert('Please enter a valid 5-letter word.'); 
    }
  };

  const handleNewGame = () =>{
    setTargetWord(generateRandomWord());
    setGuesses([]);
    setFeedbacks([]);
    setCurrentGuess([]);
    setGameStatus("");
    setAttemptsLeft(6);
  };

  return(
    <div className="app">
      <GameStatus gameStatus={gameStatus}/>
      <GameBoard guesses={guesses} feedbacks={feedbacks}/>
      <div className="input-area">
        <input className="input" type="text" value={currentGuess} onChange={(e) => setCurrentGuess(e.target.value.toLowerCase())} maxLength="5" disabled={gameStatus !== ""}/>
        <button onClick={handleSubmitGuess} disabled={gameStatus !== "" || currentGuess.length !== 5} className="submit"> Submit Guess</button>
      </div>
      <Keyboard onKeyPress={handleKeyPress} /> 
      <NewGameButton onNewGame={handleNewGame}/>
    </div>
  )
}

export default App