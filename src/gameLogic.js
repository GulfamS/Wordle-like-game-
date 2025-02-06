// src/gameLogic.js

export const generateRandomWord = () => {
    const words = ['apple', 'grape', 'mango', 'peach', 'berry'];
    return words[Math.floor(Math.random() * words.length)];
  };
  
  export const getFeedback = (guess, target) => {
    let feedback = [];
  
    for (let i = 0; i < guess.length; i++) {
      if (guess[i] === target[i]) {
        feedback.push('green');
      } else if (target.includes(guess[i])) {
        feedback.push('yellow');
      } else {
        feedback.push('gray');
      }
    }
  
    return feedback;
  };
  
  export const isValidWord = (word) => {
    const wordList = ['apple', 'grape', 'mango', 'peach', 'berry'];
    return wordList.includes(word);
  };
  