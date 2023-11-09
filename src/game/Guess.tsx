import React from 'react';

interface Props {
  word: string;
  guessedLetters: string[];
  lostGame: boolean;
}

const Guess: React.FC<Props> = (props) => {
  const targetWord = props.word;
  const targetWordArray = targetWord.split('');
  const guessedLetters = props.guessedLetters;
  const lostGame = props.lostGame;

  // console.log(lostGame);

  return (
    <div className="guess">
      {targetWordArray.map((letter, index) => {
        const notGuessedLetter = !guessedLetters.includes(letter);
        const hideLetter = notGuessedLetter && !lostGame;
        const revealLetter = notGuessedLetter && lostGame;

        let classes = 'guess__letter';
        if (revealLetter) classes += ' reveal';

        return (
          <span key={index} className={classes}>
            <span>{!hideLetter && letter}</span>
          </span>
        );
      })}
    </div>
  );
};

export default Guess;
