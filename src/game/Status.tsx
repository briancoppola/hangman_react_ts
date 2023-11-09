import React from 'react';
import Button from '../components/ui/Button';

interface Props {
  wonGame: boolean;
  lostGame: boolean;
  resetGame: () => void;
}

const Status: React.FC<Props> = (props) => {
  const wonGame = props.wonGame;
  const lostGame = props.lostGame;
  const endGame = wonGame || lostGame;

  let content = '';
  if (!endGame) content = 'Good luck!';
  if (wonGame) content = 'You won!';
  if (lostGame) content = 'Oh no! You lost!';

  return (
    <div className="status">
      <div>
        <p>{content}</p>
      </div>
      {endGame && <Button onClick={props.resetGame}>Play again</Button>}
    </div>
  );
};

export default Status;
