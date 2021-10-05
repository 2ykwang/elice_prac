import React from 'react';
import './App.css';

/*
  재사용성이 증가한다.
*/
function Nav() {
  return (
    <nav>
      <ol>
        <li>
          <a href="1.html">html</a>
        </li>
        <li>
          <a href="2.html">css</a>
        </li>
      </ol>
    </nav>
  );
}

function Article(props) {
  console.log('props', props.title, props.body);

  return (
    <article>
      <h2>{props.title}</h2>
      {props.body}
    </article>
  );
}

function Header(props) {
  return (
    <header>
      <h1>
        <a href="index.html">{props.title}</a>
      </h1>
    </header>
  );
}

function App() {
  return (
    <React.Fragment>
      <Header title="title"></Header>
      <Nav></Nav>
      <Article title="HTML" body="HTML is ..."></Article>
      <Article title="CSS" body="CSS is ..."></Article>
    </React.Fragment>
  );
}

export default App;
