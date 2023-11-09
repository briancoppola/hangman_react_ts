import React from 'react';

interface Props {
  children: React.ReactNode;
}

const Main: React.FC<Props> = (props) => {
  return <main className="main">{props.children}</main>;
};

export default Main;
