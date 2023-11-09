import React from 'react';

interface Props {
  children: React.ReactNode;
  type?: 'submit' | 'reset' | 'button';
  onClick: () => void;
}

const Button: React.FC<Props> = (props) => {
  return (
    <button className="button" type={props.type || 'button'} onClick={props.onClick}>
      {props.children}
    </button>
  );
};

export default Button;
