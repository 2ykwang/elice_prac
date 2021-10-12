import React from 'react';

export const Header = props => {
  console.log('Header');

  const handleLinkClick = (ev) => {
    ev.preventDefault();
    props.onSelect();
  };

  return (
    <header>
      <h1>
        <a href="index.html" onClick={handleLinkClick}>
          {props.title}
        </a>
      </h1>
    </header>
  );
};
