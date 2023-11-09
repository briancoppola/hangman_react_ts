import React from 'react';

interface Props {
  children: React.ReactNode;
  className?: string;
}

const Container: React.FC<Props> = (props) => {
  let classes = 'container';
  if (props.className) classes += ` ${props.className}`;

  return <div className={classes}>{props.children}</div>;
};

export default Container;
