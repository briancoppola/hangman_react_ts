import React from 'react';
import { keys } from '../app/data/keys';

interface Props {
  correctGuesses: string[];
  incorrectGuesses: string[];
  addGuessedLetter: (letter: string) => void;
}

const Keyboard: React.FC<Props> = (props) => {
  const correctGuesses = props.correctGuesses;
  const incorrectGuesses = props.incorrectGuesses;
  const addGuessedLetter = props.addGuessedLetter;

  return (
    <div className="keyboard">
      {keys.map((key) => {
        const correctGuess = correctGuesses.includes(key);
        const incorrectGuess = incorrectGuesses.includes(key);
        const disabled = correctGuess || incorrectGuess;

        let classes = 'keyboard__key';
        if (correctGuess) classes += ' correct';
        if (incorrectGuess) classes += ' incorrect';

        return (
          <button
            onClick={() => addGuessedLetter(key)}
            key={key}
            data-key={key}
            className={classes}
            disabled={disabled}
          >
            {key}
          </button>
        );
      })}
    </div>
  );
};

export default Keyboard;
