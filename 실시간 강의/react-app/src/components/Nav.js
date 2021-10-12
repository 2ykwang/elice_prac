import React from 'react';

export const Nav = props => {

  const lis = [];

  function aHandler(ev) {
    ev.preventDefault();
    props.onSelect(Number(ev.target.dataset.id));
  }

  for (let i = 0; i < props.src.length; i++) {
    const item = props.src[i];
    lis.push(
      <li key={item.id}>
        <a href={item.id + '.html'} data-id={item.id} onClick={aHandler}>
          {item.title}
        </a>
      </li>
    );
  }
  return (
    <nav>
      <ol>{lis}</ol>
    </nav>
  );
};
