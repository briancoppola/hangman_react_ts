import { useState, useEffect, useCallback } from 'react';
import Status from './Status';
import HangmanDrawing from './HangmanDrawing';
import Guess from './Guess';
import Keyboard from './Keyboard';
import { wordList } from '../app/data/wordList';

const Game = () => {
  const getNewWord = () => {
    const randomNumber = Math.floor(Math.random() * wordList.length);
    return wordList[randomNumber];
  };

  const [targetWord, setTargetWord] = useState(getNewWord);
  const [guessedLetters, setGuessedLetters] = useState<string[]>([]);

  const correctGuesses = guessedLetters.filter((letter) => {
    return targetWord.split('').includes(letter);
  });
  const incorrectGuesses = guessedLetters.filter((letter) => {
    return !targetWord.split('').includes(letter);
  });

  const wonGame = targetWord.split('').every((letter: string) => guessedLetters.includes(letter));
  const lostGame = incorrectGuesses.length >= 6;

  /* Game state */

  const resetGame = useCallback(() => {
    setTargetWord(getNewWord);
    setGuessedLetters([]);
  }, []);

  /* Event handlers */

  const addGuessedLetter = useCallback(
    (letter: string) => {
      if (correctGuesses.includes(letter) || incorrectGuesses.includes(letter)) {
        return;
      }

      setGuessedLetters((prevGuessedLetters) => {
        return [...prevGuessedLetters, letter];
      });
    },
    [correctGuesses, incorrectGuesses]
  );

  useEffect(() => {
    const handleKeyPress = (event: KeyboardEvent) => {
      event.preventDefault();
      const key = event.key;

      if (wonGame || lostGame) {
        if (key === 'Enter') {
          resetGame();
        }
      } else {
        if (!key.match(/^[a-zA-Z]$/)) {
          return;
        }

        addGuessedLetter(key);
      }
    };

    document.addEventListener('keydown', handleKeyPress);

    return () => {
      document.removeEventListener('keydown', handleKeyPress);
    };
  }, [addGuessedLetter, resetGame, wonGame, lostGame]);

  /* Play area classes */

  let classes = 'game';
  if (wonGame) classes += ' win';
  if (lostGame) classes += ' lose';

  return (
    <>
      <Status wonGame={wonGame} lostGame={lostGame} resetGame={resetGame} />
      <div className={classes}>
        <HangmanDrawing incorrectGuesses={incorrectGuesses} />
        <Guess word={targetWord} guessedLetters={guessedLetters} lostGame={lostGame} />
        <Keyboard
          wonGame={wonGame}
          lostGame={lostGame}
          correctGuesses={correctGuesses}
          incorrectGuesses={incorrectGuesses}
          addGuessedLetter={addGuessedLetter}
        />
      </div>
    </>
  );
};

export default Game;
