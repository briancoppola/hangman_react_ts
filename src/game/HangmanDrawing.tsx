import React from 'react';

interface Props {
  incorrectGuesses: string[];
}

const HangmanDrawing: React.FC<Props> = (props) => {
  const incorrectGuesses = props.incorrectGuesses;
  const wholeBody = ['head', 'torso', 'left-arm', 'right-arm', 'left-leg', 'right-leg'];

  return (
    <div className="hangman-drawing">
      {wholeBody.map((part, index) => {
        let classes = `hangman-drawing__${part}`;

        return <div key={index} className={classes} hidden={index >= incorrectGuesses.length}></div>;
      })}
    </div>
  );
};

export default HangmanDrawing;
